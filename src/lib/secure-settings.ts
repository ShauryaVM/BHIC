import crypto from 'crypto';

import { prisma } from '@/lib/prisma';
import { env } from '@/lib/env';

export type SettingInputType = 'text' | 'textarea';

export interface SettingDefinition {
  key: string;
  label: string;
  description: string;
  type: SettingInputType;
  placeholder?: string;
}

export interface SettingWithMeta extends SettingDefinition {
  updatedAt: Date | null;
  updatedBy: string | null;
  hasValue: boolean;
  preview?: string | null;
}

const ENCRYPTION_KEY = env.SETTINGS_ENCRYPTION_KEY_BUFFER;
const ALGO = 'aes-256-gcm';

function encryptValue(value: string) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv(ALGO, ENCRYPTION_KEY, iv);
  const encrypted = Buffer.concat([cipher.update(value, 'utf8'), cipher.final()]);
  const authTag = cipher.getAuthTag();
  return Buffer.concat([iv, authTag, encrypted]).toString('base64');
}

function decryptValue(payload: string) {
  const buffer = Buffer.from(payload, 'base64');
  const iv = buffer.subarray(0, 12);
  const authTag = buffer.subarray(12, 28);
  const encrypted = buffer.subarray(28);
  const decipher = crypto.createDecipheriv(ALGO, ENCRYPTION_KEY, iv);
  decipher.setAuthTag(authTag);
  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
  return decrypted.toString('utf8');
}

export const INTEGRATION_SETTING_DEFINITIONS: SettingDefinition[] = [
  {
    key: 'EVENTBRITE_API_TOKEN',
    label: 'Eventbrite API Token',
    description: 'Personal OAuth token used for syncing events.',
    type: 'text'
  },
  {
    key: 'EVENTBRITE_ORGANIZATION_ID',
    label: 'Eventbrite Organization ID',
    description: 'Organization identifier for event syncs.',
    type: 'text'
  },
  {
    key: 'ETAPESTRY_API_KEY',
    label: 'eTapestry API Key',
    description: 'API key for SOAP integration.',
    type: 'text'
  },
  {
    key: 'ETAPESTRY_LOGIN_ID',
    label: 'eTapestry Login ID',
    description: 'Username used with the API key.',
    type: 'text'
  },
  {
    key: 'ETAPESTRY_LOGIN_PASSWORD',
    label: 'eTapestry Login Password',
    description: 'Password paired with the login ID.',
    type: 'text'
  },
  {
    key: 'GA4_SERVICE_ACCOUNT_JSON',
    label: 'GA4 Service Account JSON',
    description: 'Full JSON credentials for the GA4 Data API.',
    type: 'textarea',
    placeholder: '{ "type": "service_account", ... }'
  },
  {
    key: 'GEMINI_API_KEY',
    label: 'Gemini API Key',
    description: 'Used for AI drafting.',
    type: 'text'
  }
];

export async function listSecureSettings(): Promise<SettingWithMeta[]> {
  const keys = INTEGRATION_SETTING_DEFINITIONS.map((definition) => definition.key);
  const entries = await prisma.secureSetting.findMany({
    where: { key: { in: keys } },
    include: { updatedBy: true }
  });
  const map = new Map(entries.map((entry) => [entry.key, entry]));

  return INTEGRATION_SETTING_DEFINITIONS.map((definition) => {
    const row = map.get(definition.key);
    let preview: string | null = null;
    if (row) {
      try {
        const value = decryptValue(row.encryptedValue);
        preview =
          value.length > 8 ? `•••• ${value.slice(-4)}` : '••••';
      } catch {
        preview = 'Unable to decrypt';
      }
    }
    return {
      ...definition,
      updatedAt: row?.updatedAt ?? null,
      updatedBy: row?.updatedBy?.email ?? row?.updatedBy?.name ?? null,
      hasValue: Boolean(row),
      preview
    };
  });
}

export async function upsertSecureSetting(params: { key: string; value: string; userId?: string }) {
  const definition = INTEGRATION_SETTING_DEFINITIONS.find((item) => item.key === params.key);
  if (!definition) {
    throw new Error(`Unknown setting ${params.key}`);
  }
  const encryptedValue = encryptValue(params.value);
  const existing = await prisma.secureSetting.upsert({
    where: { key: params.key },
    update: {
      encryptedValue,
      updatedById: params.userId ?? null
    },
    create: {
      key: params.key,
      encryptedValue,
      updatedById: params.userId ?? null
    }
  });

  await prisma.secureSettingHistory.create({
    data: {
      key: params.key,
      encryptedValue,
      settingId: existing.id,
      updatedById: params.userId ?? null
    }
  });
}

export async function getSecureSettingValue(key: string) {
  const row = await prisma.secureSetting.findUnique({ where: { key } });
  if (!row) return null;
  try {
    return decryptValue(row.encryptedValue);
  } catch {
    return null;
  }
}


