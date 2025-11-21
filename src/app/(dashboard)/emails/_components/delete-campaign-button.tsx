"use client";

import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { deleteCampaignAction } from "@/app/(dashboard)/emails/actions";

interface DeleteCampaignButtonProps {
  campaignId: string;
  campaignName: string;
}

export function DeleteCampaignButton({ campaignId, campaignName }: DeleteCampaignButtonProps) {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleDelete() {
    const confirmed = window.confirm(`Delete "${campaignName}"? This cannot be undone.`);
    if (!confirmed) {
      return;
    }
    setError(null);
    startTransition(async () => {
      try {
        const result = await deleteCampaignAction({ campaignId });
        if (!result.success) {
          throw new Error("Unable to delete campaign.");
        }
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err.message : "Failed to delete campaign.");
      }
    });
  }

  return (
    <div className="space-y-2">
      <Button type="button" variant="danger" size="sm" disabled={pending} onClick={handleDelete}>
        {pending ? "Deleting..." : "Delete campaign"}
      </Button>
      {error ? <p className="text-xs text-red-500">{error}</p> : null}
    </div>
  );
}


