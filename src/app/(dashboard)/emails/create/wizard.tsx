"use client";

import type { EmailTemplate } from '@prisma/client';
import { useMemo, useState, useTransition } from 'react';

import type { CreateCampaignInput } from '@/app/(dashboard)/emails/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { TextArea } from '@/components/ui/textarea';
import { formatDate } from '@/lib/format';

interface WizardData {
  templates: EmailTemplate[];
  events: Array<{ id: string; name: string; startDate: string }>;
  pledgeCampaigns: string[];
  sampleDonor: { name?: string | null; email?: string | null } | null;
}

interface CampaignWizardProps {
  data: WizardData;
  action: (input: CreateCampaignInput) => Promise<{ success: boolean; campaignId: string }>;
}

type Step = 0 | 1 | 2 | 3;

export function CampaignWizard({ data, action }: CampaignWizardProps) {
  const [step, setStep] = useState<Step>(0);
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ success?: string; error?: string }>({});

  const [form, setForm] = useState({
    name: '',
    audience: {
      donatedWithinDays: 90,
      totalGivenGreaterThan: 1000,
      attendedEventIds: [] as string[],
      pledgeCampaigns: [] as string[]
    },
    templateMode: data.templates.length ? 'existing' : 'new',
    templateId: data.templates[0]?.id ?? '',
    newTemplate: {
      name: '',
      subject: '',
      html: '<p>Dear {{ name }},<br/>Thank you for supporting BHIC.</p>',
      text: 'Dear {{ name }},\n\nThank you for supporting BHIC.'
    }
  });

  const previewTemplate = useMemo(() => {
    if (form.templateMode === 'existing') {
      return data.templates.find((template) => template.id === form.templateId);
    }
    return form.newTemplate;
  }, [data.templates, form.templateId, form.templateMode, form.newTemplate]);

  function nextStep() {
    setStep((current) => Math.min(3, (current + 1) as Step));
  }

  function prevStep() {
    setStep((current) => Math.max(0, (current - 1) as Step));
  }

  function renderPreview(content?: string | null) {
    const sampleName = data.sampleDonor?.name ?? 'BHIC Supporter';
    return content?.replace(/{{\s*name\s*}}/gi, sampleName) ?? '';
  }

  function updateAudience(field: keyof typeof form.audience, value: number | string[]) {
    setForm((current) => ({
      ...current,
      audience: {
        ...current.audience,
        [field]: value
      }
    }));
  }

  function updateNewTemplate(field: keyof typeof form.newTemplate, value: string) {
    setForm((current) => ({
      ...current,
      newTemplate: {
        ...current.newTemplate,
        [field]: value
      }
    }));
  }

  function submit() {
    setStatus({});
    startTransition(async () => {
      try {
        const payload: CreateCampaignInput = {
          name: form.name,
          audience: {
            donatedWithinDays: form.audience.donatedWithinDays,
            totalGivenGreaterThan: form.audience.totalGivenGreaterThan,
            attendedEventIds: form.audience.attendedEventIds,
            pledgeCampaigns: form.audience.pledgeCampaigns
          },
          template:
            form.templateMode === 'existing'
              ? {
                  mode: 'existing',
                  templateId: form.templateId
                }
              : {
                  mode: 'new',
                  name: form.newTemplate.name,
                  subject: form.newTemplate.subject,
                  html: form.newTemplate.html,
                  text: form.newTemplate.text
                }
        };

        const result = await action(payload);
        if (result.success) {
          setStatus({ success: 'Campaign saved successfully.' });
        }
      } catch (error) {
        setStatus({ error: error instanceof Error ? error.message : 'Unable to create campaign.' });
      }
    });
  }

  return (
    <div className="space-y-6">
      <ol className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
        {['Campaign', 'Audience', 'Template', 'Review'].map((label, index) => (
          <li key={label} className={index === step ? 'text-brand' : undefined}>
            {index + 1}. {label}
          </li>
        ))}
      </ol>

      {step === 0 ? (
        <section className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-slate-700">Campaign name</label>
            <Input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} />
          </div>
          <p className="text-xs text-slate-500">Use a descriptive name that is easy for staff to identify later.</p>
        </section>
      ) : null}

      {step === 1 ? (
        <section className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-slate-700">Donated within (days)</label>
            <Input
              type="number"
              min={0}
              value={form.audience.donatedWithinDays}
              onChange={(event) => updateAudience('donatedWithinDays', Number(event.target.value))}
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700">Minimum lifetime value ($)</label>
            <Input
              type="number"
              min={0}
              value={form.audience.totalGivenGreaterThan}
              onChange={(event) => updateAudience('totalGivenGreaterThan', Number(event.target.value))}
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700">Attended events</label>
            <select
              multiple
              className="h-32 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              value={form.audience.attendedEventIds}
              onChange={(event) =>
                updateAudience(
                  'attendedEventIds',
                  Array.from(event.target.selectedOptions, (option) => option.value)
                )
              }
            >
              {data.events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.name} · {formatDate(event.startDate)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700">Pledge campaigns</label>
            <select
              multiple
              className="h-32 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              value={form.audience.pledgeCampaigns}
              onChange={(event) =>
                updateAudience(
                  'pledgeCampaigns',
                  Array.from(event.target.selectedOptions, (option) => option.value)
                )
              }
            >
              {data.pledgeCampaigns.map((campaign) => (
                <option key={campaign} value={campaign}>
                  {campaign}
                </option>
              ))}
            </select>
          </div>
        </section>
      ) : null}

      {step === 2 ? (
        <section className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-slate-700">Template source</p>
            <div className="mt-2 flex flex-wrap gap-4">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="templateMode"
                  value="existing"
                  checked={form.templateMode === 'existing'}
                  onChange={() => setForm((current) => ({ ...current, templateMode: 'existing' }))}
                  disabled={!data.templates.length}
                />
                Use existing template
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="templateMode"
                  value="new"
                  checked={form.templateMode === 'new'}
                  onChange={() => setForm((current) => ({ ...current, templateMode: 'new' }))}
                />
                Create new template
              </label>
            </div>
          </div>
          {form.templateMode === 'existing' ? (
            <div>
              <label className="text-sm font-semibold text-slate-700">Select template</label>
              <Select value={form.templateId} onChange={(event) => setForm((current) => ({ ...current, templateId: event.target.value }))}>
                {data.templates.map((template) => (
                  <option key={template.id} value={template.id}>
                    {template.name}
                  </option>
                ))}
              </Select>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Template name</label>
                <Input value={form.newTemplate.name} onChange={(event) => updateNewTemplate('name', event.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Subject</label>
                <Input value={form.newTemplate.subject} onChange={(event) => updateNewTemplate('subject', event.target.value)} />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-slate-700">HTML body</label>
                <TextArea rows={4} value={form.newTemplate.html} onChange={(event) => updateNewTemplate('html', event.target.value)} />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-slate-700">Text body</label>
                <TextArea rows={4} value={form.newTemplate.text} onChange={(event) => updateNewTemplate('text', event.target.value)} />
              </div>
            </div>
          )}
        </section>
      ) : null}

      {step === 3 ? (
        <section className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-700">Preview</p>
            <p className="text-xs text-slate-500">
              Gemini will use this template plus donor context to suggest a final draft after you save. Below is the base content rendered for{' '}
              {data.sampleDonor?.name ?? 'a sample donor'}.
            </p>
            <div className="mt-3 rounded-2xl bg-white p-4 shadow-inner">
              <div className="font-semibold text-slate-900">{previewTemplate?.subject ?? 'Subject TBD'}</div>
              <div className="mt-2 text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: renderPreview(previewTemplate?.html) }} />
            </div>
          </div>
        </section>
      ) : null}

      {status.error ? <p className="text-sm text-red-500">{status.error}</p> : null}
      {status.success ? <p className="text-sm text-green-600">{status.success}</p> : null}

      <div className="flex items-center justify-between">
        <Button type="button" variant="ghost" onClick={prevStep} disabled={step === 0}>
          Back
        </Button>
        {step < 3 ? (
          <Button type="button" onClick={nextStep}>
            Next
          </Button>
        ) : (
          <Button type="button" onClick={submit} disabled={pending}>
            {pending ? 'Saving...' : 'Save campaign'}
          </Button>
        )}
      </div>
    </div>
  );
}

