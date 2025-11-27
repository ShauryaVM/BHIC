import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { DataSourceWizard } from '@/app/(dashboard)/settings/data-sources/_components/data-source-wizard';
import { PageHeader } from '@/components/layout/page-header';

export default async function NewDataSourcePage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') {
    redirect('/');
  }

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Settings"
        title="Create Custom Data Source"
        description="Upload a CSV file to automatically detect its structure and create a new data source."
      />
      <DataSourceWizard />
    </div>
  );
}

