"use server";

import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { Prisma } from '@prisma/client';

import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { detectCSVSchema } from '@/lib/csv-detection';
import { getAISuggestions } from '@/lib/csv-ai-suggestions';
import { recordIntegrationSync, invalidateMetricsForSources } from '@/lib/integration-sync';
import { MetricSource } from '@prisma/client';

const createDataSourceSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  detectedSchema: z.any(), // JSON
  fieldMapping: z.record(z.string(), z.string().nullable()),
  transformations: z.record(z.string(), z.any()).nullable().optional()
});

export async function createCustomDataSourceAction(
  _prevState: { success: boolean; message?: string; dataSourceId?: string },
  formData: FormData
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return { success: false, message: 'Authentication required' };
  }
  if (session.user.role !== 'ADMIN') {
    return { success: false, message: 'Admin access required' };
  }

  try {
    const name = formData.get('name') as string;
    const description = formData.get('description') as string | null;
    const detectedSchemaJson = formData.get('detectedSchema') as string;
    const fieldMappingJson = formData.get('fieldMapping') as string;
    const transformationsJson = formData.get('transformations') as string | null;

    const detectedSchema = JSON.parse(detectedSchemaJson);
    const fieldMapping = JSON.parse(fieldMappingJson);
    // Transformations are optional and not implemented in UI yet
    const transformations = transformationsJson ? JSON.parse(transformationsJson) : undefined;

    const data = createDataSourceSchema.parse({
      name,
      description: description || undefined,
      detectedSchema,
      fieldMapping,
      transformations: transformations || undefined
    });

    const dataSource = await prisma.customDataSource.create({
      data: {
        name: data.name,
        description: data.description ?? null,
        detectedSchema: data.detectedSchema,
        fieldMapping: data.fieldMapping,
        transformations: data.transformations ?? undefined,
        createdById: session.user.id
      }
    });

    revalidatePath('/settings/data-sources');
    return { success: true, message: 'Data source created successfully', dataSourceId: dataSource.id };
  } catch (error) {
    console.error('Failed to create custom data source:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to create data source'
    };
  }
}

export async function detectCSVSchemaAction(csvText: string) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') {
    return { success: false, message: 'Authentication required' };
  }

  try {
    const schema = detectCSVSchema(csvText);
    return { success: true, schema };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to detect schema'
    };
  }
}

export async function getAISuggestionsAction(csvText: string) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') {
    return { success: false, message: 'Authentication required' };
  }

  try {
    const schema = detectCSVSchema(csvText);
    const suggestions = await getAISuggestions(schema);
    return { success: true, suggestions, schema };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to get AI suggestions'
    };
  }
}

export async function importCustomDataSourceCSVAction(
  sourceId: string,
  csvText: string
): Promise<{ success: boolean; message: string; imported: number }> {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') {
    return { success: false, message: 'Authentication required', imported: 0 };
  }

  try {
    const dataSource = await prisma.customDataSource.findUnique({
      where: { id: sourceId }
    });

    if (!dataSource) {
      return { success: false, message: 'Data source not found', imported: 0 };
    }

    const { parse } = await import('csv-parse/sync');
    const fieldMapping = dataSource.fieldMapping as Record<string, string | null>;
    const detectedSchema = dataSource.detectedSchema as { columns: Array<{ name: string; type: string }> };

    // Parse CSV
    const rows = parse(csvText, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
      relax_column_count: true
    }) as Record<string, string>[];

    if (!rows.length) {
      return { success: false, message: 'CSV file is empty', imported: 0 };
    }

    // Transform and import rows
    const records = rows.map((row) => {
      const transformedData: Record<string, unknown> = {};

      // Map CSV columns to mapped fields (or keep original if not mapped)
      for (const [csvColumn, mappedField] of Object.entries(fieldMapping)) {
        if (row[csvColumn] !== undefined) {
          let value: unknown = row[csvColumn];
          let fieldName = csvColumn; // Default to original column name

          // Use mapped field name if provided
          if (mappedField) {
            // Handle custom fields (prefixed with "custom:")
            fieldName = mappedField.startsWith('custom:') ? mappedField.replace('custom:', '') : mappedField;
          }

          // Apply basic transformations based on detected type
          const columnDef = detectedSchema.columns.find((c) => c.name === csvColumn);
          if (columnDef) {
            if (columnDef.type === 'number' || columnDef.type === 'currency' || columnDef.type === 'integer') {
              value = parseFloat(String(value).replace(/[^0-9.-]/g, '')) || 0;
            } else if (columnDef.type === 'boolean') {
              value = /^(true|yes|y|1|on)$/i.test(String(value));
            } else if (columnDef.type === 'date') {
              // Keep as string, let frontend handle formatting
              value = String(value);
            }
          }

          transformedData[fieldName] = value;
        }
      }

      // Store original CSV data for reference
      transformedData._original = row;

      return {
        sourceId,
        externalId: row.id || row[Object.keys(row)[0]] || undefined,
        data: transformedData
      };
    });

    // Bulk upsert
    let imported = 0;
    for (const record of records) {
      await prisma.customDataRecord.upsert({
        where: {
          sourceId_externalId: {
            sourceId: record.sourceId,
            externalId: record.externalId || `row-${imported}`
          }
        },
        update: {
          data: record.data as Prisma.InputJsonValue,
          syncedAt: new Date()
        },
        create: {
          sourceId: record.sourceId,
          externalId: record.externalId || `row-${imported}`,
          data: record.data as Prisma.InputJsonValue
        }
      });
      imported++;
    }

    await invalidateMetricsForSources([MetricSource.CUSTOM]);
    await recordIntegrationSync(MetricSource.CUSTOM, { synced: imported });

    revalidatePath('/settings/data-sources');
    return { success: true, message: `Imported ${imported} records`, imported };
  } catch (error) {
    console.error('Failed to import custom data source CSV:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to import CSV',
      imported: 0
    };
  }
}

