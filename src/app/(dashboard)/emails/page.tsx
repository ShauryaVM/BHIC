import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SendNowButton } from '@/app/(dashboard)/emails/_components/send-now-button';
import { sendCampaignNowAction } from '@/app/(dashboard)/emails/actions';
import { campaignStatusLabel, getEmailCampaigns } from '@/lib/email-data';
import { formatDate } from '@/lib/format';
import { PageHeader, PageHeaderMeta } from '@/components/layout/page-header';

export default async function EmailsPage() {
  const campaigns = await getEmailCampaigns();
  const scheduledCount = campaigns.filter((campaign) => campaign.status === 'SCHEDULED').length;
  const sentCount = campaigns.filter((campaign) => campaign.status === 'SENT').length;
  const draftCount = campaigns.filter((campaign) => campaign.status === 'DRAFT').length;

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Outreach"
        title="Email campaigns"
        description="Engage members with targeted outreach powered by donor data."
        actions={
          <Button asChild>
            <Link href="/emails/create">Create campaign</Link>
          </Button>
        }
      >
        <PageHeaderMeta
          items={[
            { label: 'Scheduled', value: String(scheduledCount) },
            { label: 'Drafts', value: String(draftCount) },
            { label: 'Delivered', value: String(sentCount) }
          ]}
          columns={3}
        />
      </PageHeader>

      <div className="grid gap-4">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-slate-900">{campaign.name}</h3>
                <Badge variant={campaign.status === 'FAILED' ? 'danger' : campaign.status === 'SENT' ? 'success' : 'default'}>
                  {campaignStatusLabel(campaign.status)}
                </Badge>
              </div>
              <p className="text-sm text-slate-500">
                Template: {campaign.template.name} &middot; Audience: {campaign.audienceSegment.name}
              </p>
              <p className="text-xs text-slate-500">
                Created {formatDate(campaign.createdAt)} · {campaign.sentAt ? `Sent ${formatDate(campaign.sentAt)}` : 'Not sent yet'}
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 md:items-end">
              <p className="text-xs text-slate-500">
                Delivery logs: {campaign._count.logs} · Scheduled for{' '}
                {campaign.scheduledFor ? formatDate(campaign.scheduledFor) : 'not scheduled'}
              </p>
              {campaign.status !== 'SENT' ? (
                <SendNowButton campaignId={campaign.id} action={sendCampaignNowAction} />
              ) : (
                <span className="text-xs text-slate-400">Already delivered</span>
              )}
            </div>
          </Card>
        ))}
        {campaigns.length === 0 ? (
          <Card>
            <p className="text-sm text-slate-500">No campaigns yet. Create one to thank donors or promote events.</p>
          </Card>
        ) : null}
      </div>
    </div>
  );
}

