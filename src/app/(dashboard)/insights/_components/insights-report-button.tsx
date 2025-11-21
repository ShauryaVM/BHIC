"use client";

import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";

export function InsightsReportButton() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleDownload() {
    setError(null);
    startTransition(async () => {
      try {
        const response = await fetch("/api/insights/report");
        if (!response.ok) {
          throw new Error("Unable to generate PDF right now.");
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `bhic-insights-${new Date().toISOString().slice(0, 10)}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err.message : "Failed to download PDF.");
      }
    });
  }

  return (
    <div className="flex flex-col items-end gap-2">
      <Button type="button" onClick={handleDownload} disabled={isPending}>
        {isPending ? "Preparing PDF..." : "Download briefing PDF"}
      </Button>
      {error ? <p className="text-xs text-red-500">{error}</p> : null}
    </div>
  );
}


