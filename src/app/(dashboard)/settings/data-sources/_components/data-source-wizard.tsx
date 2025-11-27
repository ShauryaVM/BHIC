"use client";

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { detectCSVSchemaAction, getAISuggestionsAction, createCustomDataSourceAction } from '@/app/(dashboard)/actions/custom-data-source';
import type { DetectedSchema } from '@/lib/csv-detection';
import type { AISuggestions } from '@/lib/csv-ai-suggestions';
import { Loader2, Upload, Sparkles, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

type Step = 'upload' | 'detect' | 'map' | 'review' | 'complete';

export function DataSourceWizard() {
  const router = useRouter();
  const [step, setStep] = useState<Step>('upload');
  const [csvText, setCsvText] = useState<string>('');
  const [detectedSchema, setDetectedSchema] = useState<DetectedSchema | null>(null);
  const [aiSuggestions, setAiSuggestions] = useState<AISuggestions | null>(null);
  const [fieldMapping, setFieldMapping] = useState<Record<string, string | null>>({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loadingAI, setLoadingAI] = useState(false);
  const [pending, startTransition] = useTransition();

  async function handleFileUpload(file: File) {
    const text = await file.text();
    setCsvText(text);
    setStep('detect');

    startTransition(async () => {
      const result = await detectCSVSchemaAction(text);
      if (result.success && result.schema) {
        setDetectedSchema(result.schema);
        // Initialize field mapping with column names
        const initialMapping: Record<string, string | null> = {};
        result.schema.columns.forEach((col) => {
          initialMapping[col.name] = null;
        });
        setFieldMapping(initialMapping);
        setStep('map');
      }
    });
  }

  async function handleGetAISuggestions() {
    if (!csvText) return;

    setLoadingAI(true);
    try {
      const result = await getAISuggestionsAction(csvText);
      if (result.success && result.suggestions && result.schema) {
        setAiSuggestions(result.suggestions);
        setDetectedSchema(result.schema);

        // Apply AI suggestions to field mapping
        const newMapping: Record<string, string | null> = {};
        result.suggestions.fieldMappings.forEach((mapping) => {
          newMapping[mapping.csvColumn] = mapping.suggestedStandardField;
        });
        setFieldMapping(newMapping);
      }
    } finally {
      setLoadingAI(false);
    }
  }

  function handleSubmit() {
    if (!detectedSchema || !name) return;

    startTransition(async () => {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description || '');
      formData.append('detectedSchema', JSON.stringify(detectedSchema));
      formData.append('fieldMapping', JSON.stringify(fieldMapping));
      // Transformations not implemented in UI yet, so we don't send it
      // formData.append('transformations', JSON.stringify(transformations));

      const result = await createCustomDataSourceAction({ success: false }, formData);
      if (result.success && result.dataSourceId) {
        setStep('complete');
        setTimeout(() => {
          router.push('/settings/data-sources');
        }, 2000);
      }
    });
  }

  return (
    <Card className="p-6">
      {/* Step 1: Upload */}
      {step === 'upload' && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Upload CSV File</h2>
          <p className="text-sm text-slate-600">
            Upload a CSV file to automatically detect its structure. The system will analyze column
            names, data types, and sample values.
          </p>
          <div className="mt-6">
            <label className="block">
              <input
                type="file"
                accept=".csv"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileUpload(file);
                }}
              />
              <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-8 transition-colors hover:border-slate-400 hover:bg-slate-100">
                <Upload className="mb-4 h-12 w-12 text-slate-400" />
                <p className="text-sm font-medium text-slate-700">Click to upload CSV</p>
                <p className="mt-1 text-xs text-slate-500">or drag and drop</p>
              </div>
            </label>
          </div>
        </div>
      )}

      {/* Step 2: Detecting */}
      {step === 'detect' && (
        <div className="space-y-4 text-center">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-brand" />
          <h2 className="text-xl font-semibold">Analyzing CSV Structure</h2>
          <p className="text-sm text-slate-600">Detecting columns, types, and patterns...</p>
        </div>
      )}

      {/* Step 3: Field Mapping */}
      {step === 'map' && detectedSchema && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Map Fields</h2>
              <p className="mt-1 text-sm text-slate-600">
                Map CSV columns to standard fields. Use AI suggestions for automatic mapping.
              </p>
            </div>
            <Button
              variant="secondary"
              onClick={handleGetAISuggestions}
              disabled={loadingAI}
              className="flex items-center gap-2"
            >
              {loadingAI ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Get AI Suggestions
                </>
              )}
            </Button>
          </div>

          {aiSuggestions && (
            <div className="rounded-lg bg-blue-50 p-4">
              <p className="text-sm font-medium text-blue-900">AI Summary</p>
              <p className="mt-1 text-sm text-blue-700">{aiSuggestions.summary}</p>
            </div>
          )}

          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Data Source Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
                  placeholder="e.g., Store Sales, Membership Data"
                  required
                />
                {!name && (
                  <p className="mt-1 text-xs text-red-600">Name is required to continue</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Description (optional)</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
                  placeholder="Brief description of this data"
                />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <h3 className="text-sm font-semibold text-slate-900">Column Mappings</h3>
              {detectedSchema.columns.map((column) => (
                <div key={column.name} className="flex items-center gap-4 rounded-lg border border-slate-200 p-3">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">{column.name}</p>
                    <p className="text-xs text-slate-500">
                      {column.type} • {column.samples.slice(0, 2).join(', ')}
                    </p>
                    {aiSuggestions && (
                      <p className="mt-1 text-xs text-blue-600">
                        {aiSuggestions.fieldMappings.find((m) => m.csvColumn === column.name)?.reasoning}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={
                        fieldMapping[column.name]?.startsWith('custom:')
                          ? ''
                          : fieldMapping[column.name] || ''
                      }
                      onChange={(e) => {
                        // Clear custom field if selecting from dropdown
                        setFieldMapping({
                          ...fieldMapping,
                          [column.name]: e.target.value || null
                        });
                      }}
                      className="flex-1 rounded-md border border-slate-300 px-3 py-1.5 text-sm"
                    >
                      <option value="">-- Keep original name --</option>
                      <optgroup label="Common Fields">
                        <option value="date">Date</option>
                        <option value="email">Email</option>
                        <option value="name">Name</option>
                        <option value="phone">Phone</option>
                        <option value="amount">Amount</option>
                        <option value="quantity">Quantity</option>
                        <option value="product">Product</option>
                        <option value="category">Category</option>
                        <option value="status">Status</option>
                        <option value="id">ID</option>
                        <option value="payment_method">Payment Method</option>
                        <option value="location">Location</option>
                        <option value="notes">Notes</option>
                      </optgroup>
                    </select>
                    <input
                      type="text"
                      placeholder="Or custom field name"
                      value={
                        fieldMapping[column.name]?.startsWith('custom:')
                          ? fieldMapping[column.name]?.replace('custom:', '') || ''
                          : ''
                      }
                      onChange={(e) => {
                        const customValue = e.target.value.trim() ? `custom:${e.target.value.trim()}` : null;
                        setFieldMapping({
                          ...fieldMapping,
                          [column.name]: customValue
                        });
                      }}
                      className="w-40 rounded-md border border-slate-300 px-3 py-1.5 text-sm"
                    />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    Field mappings are just for organizing your data. They don't connect to eTapestry/Eventbrite.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="secondary" onClick={() => setStep('upload')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button
              variant="primary"
              onClick={() => setStep('review')}
              disabled={!name || !name.trim()}
              title={!name || !name.trim() ? 'Please enter a data source name' : ''}
            >
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 4: Review */}
      {step === 'review' && detectedSchema && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Review Configuration</h2>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-slate-700">Name</p>
              <p className="text-slate-900">{name}</p>
            </div>
            {description && (
              <div>
                <p className="text-sm font-medium text-slate-700">Description</p>
                <p className="text-slate-900">{description}</p>
              </div>
            )}
            <div>
              <p className="text-sm font-medium text-slate-700">Detected Columns</p>
              <p className="text-slate-900">{detectedSchema.columns.length} columns, {detectedSchema.rowCount} rows</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">Field Mappings</p>
              <div className="mt-2 space-y-1">
                {Object.entries(fieldMapping)
                  .filter(([, standard]) => standard)
                  .map(([csv, standard]) => (
                    <p key={csv} className="text-sm text-slate-600">
                      {csv} → {standard}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="secondary" onClick={() => setStep('map')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button variant="primary" onClick={handleSubmit} disabled={pending}>
              {pending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create Data Source'
              )}
            </Button>
          </div>
        </div>
      )}

      {/* Step 5: Complete */}
      {step === 'complete' && (
        <div className="space-y-4 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
          <h2 className="text-xl font-semibold">Data Source Created!</h2>
          <p className="text-sm text-slate-600">Redirecting to data sources page...</p>
        </div>
      )}
    </Card>
  );
}

