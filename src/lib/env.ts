import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(32),
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
  ADMIN_EMAILS: z.string().default(''),
  ALLOWED_EMAIL_DOMAIN: z.string().default('bhic.org'),
  ETAPESTRY_BASE_URL: z.string().url(),
  ETAPESTRY_API_TOKEN: z.string().min(1),
  EVENTBRITE_API_TOKEN: z.string().min(1),
  GA4_PROPERTY_ID: z.string().min(1),
  GA4_SERVICE_ACCOUNT_JSON: z.string().min(2),
  GEMINI_API_KEY: z.string().min(1),
  GEMINI_MODEL: z.string().default('models/gemini-1.5-flash')
});

const parsed = envSchema.safeParse({
  DATABASE_URL: process.env.DATABASE_URL,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  ADMIN_EMAILS: process.env.ADMIN_EMAILS ?? '',
  ALLOWED_EMAIL_DOMAIN: process.env.ALLOWED_EMAIL_DOMAIN ?? 'bhic.org',
  ETAPESTRY_BASE_URL: process.env.ETAPESTRY_BASE_URL,
  ETAPESTRY_API_TOKEN: process.env.ETAPESTRY_API_TOKEN,
  EVENTBRITE_API_TOKEN: process.env.EVENTBRITE_API_TOKEN,
  GA4_PROPERTY_ID: process.env.GA4_PROPERTY_ID,
  GA4_SERVICE_ACCOUNT_JSON: process.env.GA4_SERVICE_ACCOUNT_JSON,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  GEMINI_MODEL: process.env.GEMINI_MODEL ?? 'models/gemini-1.5-flash'
});

if (!parsed.success) {
  console.error('❌ Invalid environment variables', parsed.error.flatten().fieldErrors);
  throw new Error('Invalid environment variables. Check .env configuration.');
}

const adminEmails = parsed.data.ADMIN_EMAILS.split(',').map((email) => email.trim().toLowerCase()).filter(Boolean);

export const env = {
  ...parsed.data,
  ADMIN_EMAILS: adminEmails,
  GA4_SERVICE_ACCOUNT: JSON.parse(parsed.data.GA4_SERVICE_ACCOUNT_JSON)
} as const;

