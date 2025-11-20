"use client";

import { useTransition } from 'react';

import { Button } from '@/components/ui/button';

interface SendNowButtonProps {
  campaignId: string;
  action: (campaignId: string) => Promise<{ success: boolean }>;
  disabled?: boolean;
}

export function SendNowButton({ campaignId, action, disabled }: SendNowButtonProps) {
  const [pending, startTransition] = useTransition();

  function handleClick() {
    startTransition(async () => {
      await action(campaignId);
    });
  }

  return (
    <Button type="button" variant="secondary" size="sm" disabled={disabled || pending} onClick={handleClick}>
      {pending ? 'Sending...' : 'Send now'}
    </Button>
  );
}

