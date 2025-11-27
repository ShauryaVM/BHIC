import { GoogleGenerativeAI } from '@google/generative-ai';

import { env } from '@/lib/env';
import type { DetectedColumn, DetectedSchema } from './csv-detection';

export interface FieldMappingSuggestion {
  csvColumn: string;
  suggestedStandardField: string | null;
  confidence: number;
  reasoning: string;
}

export interface TransformationSuggestion {
  column: string;
  transformation: string;
  reasoning: string;
}

export interface KPISuggestion {
  field: string;
  metric: string;
  description: string;
}

export interface AISuggestions {
  fieldMappings: FieldMappingSuggestion[];
  transformations: TransformationSuggestion[];
  kpis: KPISuggestion[];
  summary: string;
}

const STANDARD_FIELDS = [
  'date',
  'email',
  'name',
  'phone',
  'amount',
  'quantity',
  'product',
  'category',
  'status',
  'id',
  'payment_method',
  'location',
  'notes'
];

function buildPrompt(schema: DetectedSchema): string {
  const columnsDesc = schema.columns
    .map((col) => `- ${col.name} (${col.type}): ${col.samples.join(', ')}`)
    .join('\n');

  const sampleData = schema.sampleRows
    .slice(0, 5)
    .map((row, idx) => `Row ${idx + 1}: ${JSON.stringify(row)}`)
    .join('\n');

  return `You are analyzing a CSV dataset to provide intelligent suggestions for data integration.

CSV Schema (${schema.rowCount} rows):
${columnsDesc}

Sample Data:
${sampleData}

Common Field Names (suggestions only - you can use any field names):
${STANDARD_FIELDS.map((f) => `- ${f}`).join('\n')}

Note: These are just organizational labels. Custom data sources are stored separately and don't mix with eTapestry/Eventbrite data.

Please provide:
1. Field Mappings: Map each CSV column to the most appropriate standard field (or null if no match). Consider semantic meaning, not just exact name matches.
2. Transformations: Suggest any data transformations needed (date format conversion, currency parsing, text normalization, etc.)
3. KPIs: Suggest which fields/metrics would be valuable to track on a dashboard
4. Summary: A brief description of what this dataset represents

Respond in JSON format:
{
  "fieldMappings": [
    {
      "csvColumn": "column_name",
      "suggestedStandardField": "standard_field_name" or null,
      "confidence": 0.0-1.0,
      "reasoning": "why this mapping"
    }
  ],
  "transformations": [
    {
      "column": "column_name",
      "transformation": "description of transformation",
      "reasoning": "why needed"
    }
  ],
  "kpis": [
    {
      "field": "field_name",
      "metric": "metric_name",
      "description": "what to track"
    }
  ],
  "summary": "brief description of dataset"
}`;
}

export async function getAISuggestions(schema: DetectedSchema): Promise<AISuggestions> {
  try {
    const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: env.GEMINI_MODEL });

    const prompt = buildPrompt(schema);
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    // Extract JSON from response (handle markdown code blocks)
    let jsonText = text.trim();
    if (jsonText.startsWith('```json')) {
      jsonText = jsonText.replace(/^```json\n?/, '').replace(/\n?```$/, '');
    } else if (jsonText.startsWith('```')) {
      jsonText = jsonText.replace(/^```\n?/, '').replace(/\n?```$/, '');
    }

    const parsed = JSON.parse(jsonText) as AISuggestions;

    // Validate and normalize
    return {
      fieldMappings: (parsed.fieldMappings || []).map((m) => ({
        csvColumn: m.csvColumn,
        suggestedStandardField: m.suggestedStandardField || null,
        confidence: Math.max(0, Math.min(1, m.confidence || 0.5)),
        reasoning: m.reasoning || ''
      })),
      transformations: parsed.transformations || [],
      kpis: parsed.kpis || [],
      summary: parsed.summary || 'Custom data source'
    };
  } catch (error) {
    console.error('Failed to get AI suggestions:', error);
    // Return fallback suggestions based on column names
    return getFallbackSuggestions(schema);
  }
}

function getFallbackSuggestions(schema: DetectedSchema): AISuggestions {
  const fieldMappings: FieldMappingSuggestion[] = schema.columns.map((col) => {
    const normalized = col.name.toLowerCase();
    let suggested: string | null = null;
    let confidence = 0.3;

    // Simple name-based matching
    if (normalized.includes('date') || normalized.includes('time')) {
      suggested = 'transaction_date';
      confidence = 0.8;
    } else if (normalized.includes('email')) {
      suggested = 'customer_email';
      confidence = 0.9;
    } else if (normalized.includes('name') && !normalized.includes('product')) {
      suggested = 'customer_name';
      confidence = 0.7;
    } else if (normalized.includes('phone')) {
      suggested = 'customer_phone';
      confidence = 0.8;
    } else if (normalized.includes('amount') || normalized.includes('total') || normalized.includes('price')) {
      suggested = 'amount';
      confidence = 0.8;
    } else if (normalized.includes('quantity') || normalized.includes('qty')) {
      suggested = 'quantity';
      confidence = 0.8;
    } else if (normalized.includes('product') || normalized.includes('item')) {
      suggested = 'product_name';
      confidence = 0.7;
    }

    return {
      csvColumn: col.name,
      suggestedStandardField: suggested,
      confidence,
      reasoning: suggested ? `Column name suggests ${suggested}` : 'No clear match found'
    };
  });

  return {
    fieldMappings,
    transformations: [],
    kpis: [],
    summary: 'Custom data source'
  };
}

