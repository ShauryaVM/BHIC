import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { CustomDataSourceUpload } from '@/app/(dashboard)/settings/data-sources/_components/custom-data-source-upload';
import { PageHeader } from '@/components/layout/page-header';

export default async function UploadDataSourcePage({ params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') {
    redirect('/');
  }

  const { id } = await params;
  const dataSource = await prisma.customDataSource.findUnique({
    where: { id }
  });

  if (!dataSource) {
    redirect('/settings/data-sources');
  }

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Settings"
        title={`Upload to ${dataSource.name}`}
        description="Upload a new CSV file using the same structure as the original."
      />
      <CustomDataSourceUpload dataSourceId={id} dataSourceName={dataSource.name} />
    </div>
  );
}

