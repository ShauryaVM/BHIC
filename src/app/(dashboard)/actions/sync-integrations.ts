"use server";

import { MetricSource } from "@prisma/client";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

import { authOptions } from "@/lib/auth";
import { syncPledgesToDb } from "@/lib/etapestry";
import { syncEventsToDb } from "@/lib/eventbrite";
import { recordIntegrationSync } from "@/lib/integration-sync";

export async function syncIntegrationsAction() {
  const session = await getServerSession(authOptions);
  const emptyResult = {
    etapestry: null,
    eventbrite: null
  };

  if (!session) {
    return { success: false, errors: ["Authentication required"], result: emptyResult };
  }
  if (session.user.role !== "ADMIN") {
    return { success: false, errors: ["Admin access required"], result: emptyResult };
  }

  const result: {
    etapestry: { synced: number } | null;
    eventbrite: { synced: number } | null;
  } = {
    etapestry: null,
    eventbrite: null
  };
  const errors: string[] = [];

  try {
    result.etapestry = await syncPledgesToDb();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown eTapestry error";
    errors.push(`eTapestry: ${message}`);
    await recordIntegrationSync(MetricSource.ETAPESTRY, { error: message });
  }

  try {
    result.eventbrite = await syncEventsToDb();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Eventbrite error";
    errors.push(`Eventbrite: ${message}`);
    await recordIntegrationSync(MetricSource.EVENTBRITE, { error: message });
  }

  revalidatePath("/");
  revalidatePath("/events");
  revalidatePath("/donors");

  if (errors.length) {
    return { success: false, errors, result };
  }

  return { success: true, result };
}


