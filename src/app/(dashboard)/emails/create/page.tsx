import { Card } from '@/components/ui/card';
import { createCampaignAction } from '@/app/(dashboard)/emails/actions';
import { getEmailFormData } from '@/lib/email-data';
import { PageHeader } from '@/components/layout/page-header';

import { CampaignWizard } from '@/app/(dashboard)/emails/create/wizard';

export default async function CreateEmailPage() {
  const data = await getEmailFormData();

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Outreach"
        title="Create email campaign"
        description="Define your audience, choose a template, and schedule delivery."
      />
      <Card>
        <CampaignWizard data={data} action={createCampaignAction} />
      </Card>
    </div>
  );
}

