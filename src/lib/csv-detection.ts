import { parse } from 'csv-parse/sync';

export type FieldType = 'text' | 'number' | 'currency' | 'date' | 'email' | 'boolean' | 'integer';

export interface DetectedColumn {
  name: string;
  type: FieldType;
  samples: string[];
  required: boolean;
  nullable: boolean;
}

export interface DetectedSchema {
  columns: DetectedColumn[];
  rowCount: number;
  sampleRows: Record<string, string>[];
}

const DATE_PATTERNS = [
  /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD
  /^\d{2}\/\d{2}\/\d{4}$/, // MM/DD/YYYY
  /^\d{2}-\d{2}-\d{4}$/, // MM-DD-YYYY
  /^\d{4}\/\d{2}\/\d{2}$/, // YYYY/MM/DD
  /^\d{1,2}\/\d{1,2}\/\d{4}$/, // M/D/YYYY
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/, // ISO datetime
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CURRENCY_PATTERN = /^[\$£€¥]?\s*-?\d{1,3}(?:,\d{3})*(?:\.\d{2})?$/;
const BOOLEAN_PATTERNS = {
  true: /^(true|yes|y|1|on)$/i,
  false: /^(false|no|n|0|off)$/i,
};

function detectType(value: string): FieldType {
  if (!value || value.trim() === '') return 'text';

  const trimmed = value.trim();

  // Check email
  if (EMAIL_PATTERN.test(trimmed)) {
    return 'email';
  }

  // Check boolean
  if (BOOLEAN_PATTERNS.true.test(trimmed) || BOOLEAN_PATTERNS.false.test(trimmed)) {
    return 'boolean';
  }

  // Check date
  if (DATE_PATTERNS.some((pattern) => pattern.test(trimmed))) {
    return 'date';
  }

  // Check currency
  if (CURRENCY_PATTERN.test(trimmed)) {
    return 'currency';
  }

  // Check number
  const numValue = trimmed.replace(/[,$]/g, '');
  const parsed = Number(numValue);
  if (!Number.isNaN(parsed) && Number.isFinite(parsed)) {
    return Number.isInteger(parsed) ? 'integer' : 'number';
  }

  return 'text';
}

function normalizeHeaderKey(key: string): string {
  return key
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

export function detectCSVSchema(csvText: string, maxRowsToAnalyze = 100): DetectedSchema {
  const rows = parse(csvText, {
    columns: (header: string[]) => header.map(normalizeHeaderKey),
    skip_empty_lines: true,
    trim: true,
    relax_column_count: true
  }) as Record<string, string>[];

  if (!rows.length) {
    throw new Error('CSV file is empty or has no valid rows');
  }

  const rowCount = rows.length;
  const sampleRows = rows.slice(0, Math.min(10, rowCount));
  const analysisRows = rows.slice(0, Math.min(maxRowsToAnalyze, rowCount));

  // Get all column names from first row
  const columnNames = Object.keys(rows[0]);
  const columnAnalysis: Record<string, { types: FieldType[]; values: string[]; nullCount: number }> = {};

  // Initialize analysis
  for (const col of columnNames) {
    columnAnalysis[col] = {
      types: [],
      values: [],
      nullCount: 0
    };
  }

  // Analyze each row
  for (const row of analysisRows) {
    for (const col of columnNames) {
      const value = row[col] ?? '';
      if (!value || value.trim() === '') {
        columnAnalysis[col].nullCount++;
      } else {
        columnAnalysis[col].types.push(detectType(value));
        if (columnAnalysis[col].values.length < 5) {
          columnAnalysis[col].values.push(value);
        }
      }
    }
  }

  // Determine final type for each column (most common type)
  const columns: DetectedColumn[] = columnNames.map((name) => {
    const analysis = columnAnalysis[name];
    const typeCounts = new Map<FieldType, number>();
    
    for (const type of analysis.types) {
      typeCounts.set(type, (typeCounts.get(type) ?? 0) + 1);
    }

    // Find most common type, with priority order for ties
    const typePriority: FieldType[] = ['date', 'email', 'currency', 'number', 'integer', 'boolean', 'text'];
    let detectedType: FieldType = 'text';
    let maxCount = 0;

    for (const type of typePriority) {
      const count = typeCounts.get(type) ?? 0;
      if (count > maxCount) {
        maxCount = count;
        detectedType = type;
      }
    }

    const nullable = analysis.nullCount > 0;
    const required = analysis.nullCount < analysisRows.length * 0.1; // < 10% null = required

    return {
      name,
      type: detectedType,
      samples: analysis.values.slice(0, 3),
      required,
      nullable
    };
  });

  return {
    columns,
    rowCount,
    sampleRows
  };
}

