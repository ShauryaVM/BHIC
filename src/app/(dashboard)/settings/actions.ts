"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { z } from "zod";

import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { upsertSecureSetting } from "@/lib/secure-settings";

const updateSettingSchema = z.object({
  key: z.string().min(1),
  value: z.string().min(1)
});

const updateUserRoleSchema = z.object({
  userId: z.string().cuid(),
  role: z.enum(["ADMIN", "STAFF"])
});

async function requireAdminSession() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/signin");
  }
  if (session.user.role !== "ADMIN") {
    redirect("/");
  }
  return session;
}

export async function updateSecureSettingAction(formData: FormData) {
  const session = await requireAdminSession();
  const parsed = updateSettingSchema.safeParse({
    key: formData.get("key"),
    value: formData.get("value")
  });
  if (!parsed.success) {
    throw new Error("Invalid setting payload.");
  }

  await upsertSecureSetting({
    key: parsed.data.key,
    value: parsed.data.value,
    userId: session.user.id
  });

  revalidatePath("/settings");
}

export async function updateUserRoleAction(formData: FormData) {
  const session = await requireAdminSession();
  const parsed = updateUserRoleSchema.safeParse({
    userId: formData.get("userId"),
    role: formData.get("role")
  });
  if (!parsed.success) {
    throw new Error("Invalid user payload.");
  }
  if (parsed.data.userId === session.user.id && parsed.data.role !== "ADMIN") {
    throw new Error("You cannot downgrade your own role.");
  }

  await prisma.user.update({
    where: { id: parsed.data.userId },
    data: { role: parsed.data.role }
  });

  revalidatePath("/settings");
}


