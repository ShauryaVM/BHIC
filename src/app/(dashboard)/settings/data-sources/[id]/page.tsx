import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { PageHeader } from '@/components/layout/page-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { formatNumber } from '@/lib/format';
import { ArrowLeft, Upload, Trash2 } from 'lucide-react';
import { DeleteDataSourceButton } from '@/app/(dashboard)/settings/data-sources/_components/delete-data-source-button';

export default async function DataSourceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') {
    redirect('/settings/data-sources');
  }

  const { id } = await params;
  const dataSource = await prisma.customDataSource.findUnique({
    where: { id },
    include: {
      _count: {
        select: { records: true }
      },
      records: {
        take: 10,
        orderBy: { syncedAt: 'desc' },
        select: {
          id: true,
          externalId: true,
          data: true,
          syncedAt: true
        }
      }
    }
  });

  if (!dataSource) {
    redirect('/settings/data-sources');
  }

  const detectedSchema = dataSource.detectedSchema as { columns: Array<{ name: string; type: string }> } | null;
  const fieldMapping = dataSource.fieldMapping as Record<string, string | null> | null;

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Settings"
        title={dataSource.name}
        description={dataSource.description || 'Custom data source'}
        actions={
          <div className="flex gap-2">
            <Link href="/settings/data-sources">
              <Button variant="secondary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
            <Link href={`/settings/data-sources/${id}/upload`}>
              <Button variant="primary">
                <Upload className="mr-2 h-4 w-4" />
                Upload CSV
              </Button>
            </Link>
          </div>
        }
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-slate-900">Overview</h3>
          <div className="mt-4 space-y-3">
            <div>
              <p className="text-sm text-slate-600">Total Records</p>
              <p className="text-2xl font-semibold text-slate-900">{formatNumber(dataSource._count.records)}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Created</p>
              <p className="text-slate-900">
                {new Date(dataSource.createdAt).toLocaleDateString()} at{' '}
                {new Date(dataSource.createdAt).toLocaleTimeString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Last Updated</p>
              <p className="text-slate-900">
                {new Date(dataSource.updatedAt).toLocaleDateString()} at{' '}
                {new Date(dataSource.updatedAt).toLocaleTimeString()}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-slate-900">Schema</h3>
          {detectedSchema && (
            <div className="mt-4 space-y-2">
              <p className="text-sm text-slate-600">
                {detectedSchema.columns.length} columns detected
              </p>
              <div className="max-h-64 space-y-1 overflow-y-auto">
                {detectedSchema.columns.map((col) => (
                  <div key={col.name} className="rounded border border-slate-200 p-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-900">{col.name}</span>
                      <span className="text-xs text-slate-500">{col.type}</span>
                    </div>
                    {fieldMapping && fieldMapping[col.name] && (
                      <p className="mt-1 text-xs text-slate-600">
                        Mapped to: <span className="font-medium">{fieldMapping[col.name]}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Recent Records</h3>
          <Link href={`/settings/data-sources/${id}/upload`}>
            <Button variant="secondary" size="sm">
              <Upload className="mr-2 h-4 w-4" />
              Upload More
            </Button>
          </Link>
        </div>
        {dataSource.records.length === 0 ? (
          <p className="mt-4 text-sm text-slate-600">No records imported yet. Upload a CSV to get started.</p>
        ) : (
          <div className="mt-4 space-y-2">
            {dataSource.records.map((record) => {
              const data = record.data as Record<string, unknown>;
              return (
                <div key={record.id} className="rounded-lg border border-slate-200 p-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-900">
                      {record.externalId || `Record ${record.id.slice(0, 8)}`}
                    </span>
                    <span className="text-xs text-slate-500">
                      {new Date(record.syncedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="mt-2 space-y-1">
                    {Object.entries(data)
                      .filter(([key]) => key !== '_original')
                      .slice(0, 5)
                      .map(([key, value]) => (
                        <div key={key} className="flex justify-between text-xs">
                          <span className="text-slate-600">{key}:</span>
                          <span className="text-slate-900">
                            {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-red-600">Danger Zone</h3>
        <p className="mt-2 text-sm text-slate-600">
          Deleting this data source will permanently remove all imported records. This action cannot be undone.
        </p>
        <div className="mt-4">
          <DeleteDataSourceButton dataSourceId={id} dataSourceName={dataSource.name} />
        </div>
      </Card>
    </div>
  );
}

