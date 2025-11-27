import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PageHeader } from '@/components/layout/page-header';
import { prisma } from '@/lib/prisma';
import { Plus } from 'lucide-react';
import { DeleteDataSourceButton } from '@/app/(dashboard)/settings/data-sources/_components/delete-data-source-button';

export default async function DataSourcesPage() {
  const dataSources = await prisma.customDataSource.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      _count: {
        select: { records: true }
      }
    }
  });

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Settings"
        title="Custom Data Sources"
        description="Upload and manage custom CSV data sources for your dashboard."
        actions={
          <Link href="/settings/data-sources/new">
            <Button variant="primary">
              <Plus className="mr-2 h-4 w-4" />
              Add Data Source
            </Button>
          </Link>
        }
      />

      {dataSources.length === 0 ? (
        <Card className="py-12 text-center">
          <p className="text-slate-600">No custom data sources yet.</p>
          <p className="mt-2 text-sm text-slate-500">
            Create your first data source to start uploading custom CSV data.
          </p>
          <Link href="/settings/data-sources/new" className="mt-4 inline-block">
            <Button variant="primary">Create Data Source</Button>
          </Link>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dataSources.map((source) => (
            <Card key={source.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">{source.name}</h3>
                  {source.description && (
                    <p className="mt-1 text-sm text-slate-600">{source.description}</p>
                  )}
                  <p className="mt-3 text-xs text-slate-500">
                    {source._count.records} records imported
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Link href={`/settings/data-sources/${source.id}`} className="flex-1">
                  <Button variant="secondary" className="w-full">
                    View
                  </Button>
                </Link>
                <Link href={`/settings/data-sources/${source.id}/upload`} className="flex-1">
                  <Button variant="primary" className="w-full">
                    Upload CSV
                  </Button>
                </Link>
              </div>
              <div className="mt-2">
                <DeleteDataSourceButton dataSourceId={source.id} dataSourceName={source.name} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

