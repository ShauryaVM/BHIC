"use client";

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { importCustomDataSourceCSVAction } from '@/app/(dashboard)/actions/custom-data-source';
import { Upload, Loader2, CheckCircle2 } from 'lucide-react';

interface CustomDataSourceUploadProps {
  dataSourceId: string;
  dataSourceName: string;
}

export function CustomDataSourceUpload({ dataSourceId, dataSourceName }: CustomDataSourceUploadProps) {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message: string; imported: number } | null>(null);

  async function handleUpload() {
    if (!file) return;

    const text = await file.text();

    startTransition(async () => {
      const result = await importCustomDataSourceCSVAction(dataSourceId, text);
      setResult(result);
      if (result.success) {
        setTimeout(() => {
          router.push('/settings/data-sources');
        }, 2000);
      }
    });
  }

  if (result?.success) {
    return (
      <Card className="p-6 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
        <h3 className="mt-4 text-lg font-semibold">Upload Successful!</h3>
        <p className="mt-2 text-sm text-slate-600">
          Imported {result.imported} records into {dataSourceName}
        </p>
        <p className="mt-1 text-xs text-slate-500">Redirecting...</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <label className="block">
            <input
              type="file"
              accept=".csv"
              className="hidden"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) setFile(selectedFile);
              }}
            />
            <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-8 transition-colors hover:border-slate-400 hover:bg-slate-100">
              <Upload className="mb-4 h-12 w-12 text-slate-400" />
              <p className="text-sm font-medium text-slate-700">
                {file ? file.name : 'Click to upload CSV'}
              </p>
              {file && (
                <p className="mt-1 text-xs text-slate-500">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              )}
            </div>
          </label>
        </div>

        {result && !result.success && (
          <div className="rounded-lg bg-red-50 p-4">
            <p className="text-sm text-red-700">{result.message}</p>
          </div>
        )}

        <div className="flex justify-end">
          <Button
            variant="primary"
            onClick={handleUpload}
            disabled={!file || pending}
          >
            {pending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              'Upload CSV'
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
}

