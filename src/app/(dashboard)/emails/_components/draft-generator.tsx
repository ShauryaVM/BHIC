"use client";

import type { ReactNode } from 'react';
import { useMemo, useState, useTransition } from 'react';

import type { EmailDraftSuggestion } from '@/lib/email';
import { Button } from '@/components/ui/button';

interface DraftGeneratorProps {
  campaignId: string;
  action: (campaignId: string) => Promise<{ success: boolean; suggestion: EmailDraftSuggestion }>;
}

export function DraftGenerator({ campaignId, action }: DraftGeneratorProps) {
  const [pending, startTransition] = useTransition();
  const [draft, setDraft] = useState<EmailDraftSuggestion | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleGenerate() {
    setError(null);
    startTransition(async () => {
      try {
        const result = await action(campaignId);
        if (result.success) {
          setDraft(result.suggestion);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to generate suggestion.');
      }
    });
  }

  const previewHtml = useMemo(() => ({ __html: draft?.html ?? '' }), [draft]);

  return (
    <div className="w-full space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">AI suggestion</p>
          <p className="text-[11px] text-slate-500">Review before sending. Nothing is emailed automatically.</p>
        </div>
        <Button type="button" variant="secondary" size="sm" disabled={pending} onClick={handleGenerate}>
          {pending ? 'Generating...' : draft ? 'Refresh draft' : 'Generate draft'}
        </Button>
      </div>
      {error ? <p className="text-sm text-red-500">{error}</p> : null}
      {draft ? (
        <div className="space-y-4 rounded-2xl border border-white/60 bg-white p-4 shadow-inner">
          <section>
            <HeaderRow label="Suggested subject">
              <CopyButton value={draft.subject} />
            </HeaderRow>
            <p className="text-sm font-semibold text-slate-900">{draft.subject}</p>
          </section>
          <section>
            <HeaderRow label="HTML preview">
              <CopyButton value={draft.html} />
            </HeaderRow>
            <div className="prose prose-sm max-w-none text-slate-700" dangerouslySetInnerHTML={previewHtml} />
          </section>
          <section>
            <HeaderRow label="Plain text">
              <CopyButton value={draft.text} />
            </HeaderRow>
            <pre className="max-h-48 overflow-auto whitespace-pre-wrap rounded-xl bg-slate-50 p-3 text-xs text-slate-700">
              {draft.text}
            </pre>
          </section>
          {draft.talkingPoints?.length ? (
            <section>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Talking points</p>
              <ul className="list-disc space-y-1 pl-4 text-sm text-slate-700">
                {draft.talkingPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      ) : (
        <p className="text-sm text-slate-500">Generate a tailored subject and body using Gemini, then copy into your email platform.</p>
      )}
    </div>
  );
}

function HeaderRow({ label, children }: { label: string; children?: ReactNode }) {
  return (
    <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
      <span className="font-semibold uppercase tracking-wider">{label}</span>
      {children}
    </div>
  );
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600 transition hover:border-slate-300"
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

