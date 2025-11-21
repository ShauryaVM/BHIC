import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(32),
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
  ADMIN_EMAILS: z.string().default(''),
  ALLOWED_EMAIL_DOMAIN: z.string().default('bhic.org'),
  ETAPESTRY_WSDL_URL: z.string().url(),
  ETAPESTRY_DATABASE_ID: z.string().min(1),
  ETAPESTRY_API_KEY: z.string().min(1),
  ETAPESTRY_LOGIN_ID: z.string().min(1),
  ETAPESTRY_LOGIN_PASSWORD: z.string().min(1),
  ETAPESTRY_APPLICATION_CONTEXT: z.string().default('BHIC Dashboard'),
  ETAPESTRY_QUERY_CATEGORY: z.string().min(1),
  ETAPESTRY_QUERY_NAME: z.string().min(1),
  EVENTBRITE_API_TOKEN: z.string().min(1),
  EVENTBRITE_ORGANIZATION_ID: z.string().min(1),
  GA4_PROPERTY_ID: z.string().min(1),
  GA4_AUTH_MODE: z.enum(['service_account', 'oauth']).default('service_account'),
  GA4_SERVICE_ACCOUNT_JSON: z.string().optional(),
  GA4_OAUTH_CLIENT_ID: z.string().optional(),
  GA4_OAUTH_CLIENT_SECRET: z.string().optional(),
  GA4_OAUTH_REFRESH_TOKEN: z.string().optional(),
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
  ETAPESTRY_WSDL_URL: process.env.ETAPESTRY_WSDL_URL,
  ETAPESTRY_DATABASE_ID: process.env.ETAPESTRY_DATABASE_ID,
  ETAPESTRY_API_KEY: process.env.ETAPESTRY_API_KEY,
  ETAPESTRY_LOGIN_ID: process.env.ETAPESTRY_LOGIN_ID,
  ETAPESTRY_LOGIN_PASSWORD: process.env.ETAPESTRY_LOGIN_PASSWORD,
  ETAPESTRY_APPLICATION_CONTEXT: process.env.ETAPESTRY_APPLICATION_CONTEXT,
  ETAPESTRY_QUERY_CATEGORY: process.env.ETAPESTRY_QUERY_CATEGORY,
  ETAPESTRY_QUERY_NAME: process.env.ETAPESTRY_QUERY_NAME,
  EVENTBRITE_API_TOKEN: process.env.EVENTBRITE_API_TOKEN,
  EVENTBRITE_ORGANIZATION_ID: process.env.EVENTBRITE_ORGANIZATION_ID,
  GA4_PROPERTY_ID: process.env.GA4_PROPERTY_ID,
  GA4_AUTH_MODE: process.env.GA4_AUTH_MODE ?? 'service_account',
  GA4_SERVICE_ACCOUNT_JSON: process.env.GA4_SERVICE_ACCOUNT_JSON,
  GA4_OAUTH_CLIENT_ID: process.env.GA4_OAUTH_CLIENT_ID,
  GA4_OAUTH_CLIENT_SECRET: process.env.GA4_OAUTH_CLIENT_SECRET,
  GA4_OAUTH_REFRESH_TOKEN: process.env.GA4_OAUTH_REFRESH_TOKEN,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  GEMINI_MODEL: process.env.GEMINI_MODEL ?? 'models/gemini-1.5-flash'
});

if (!parsed.success) {
  console.error('❌ Invalid environment variables', parsed.error.flatten().fieldErrors);
  throw new Error('Invalid environment variables. Check .env configuration.');
}

const data = parsed.data;

if (data.GA4_AUTH_MODE === 'service_account' && !data.GA4_SERVICE_ACCOUNT_JSON) {
  throw new Error('GA4_SERVICE_ACCOUNT_JSON is required when GA4_AUTH_MODE=service_account');
}

if (
  data.GA4_AUTH_MODE === 'oauth' &&
  (!data.GA4_OAUTH_CLIENT_ID || !data.GA4_OAUTH_CLIENT_SECRET || !data.GA4_OAUTH_REFRESH_TOKEN)
) {
  throw new Error('GA4 OAuth credentials (client id/secret + refresh token) are required when GA4_AUTH_MODE=oauth');
}

const adminEmails = data.ADMIN_EMAILS.split(',').map((email) => email.trim().toLowerCase()).filter(Boolean);

type ServiceAccountConfig = { client_email: string; private_key: string };

export const env = {
  ...data,
  ADMIN_EMAILS: adminEmails,
  GA4_SERVICE_ACCOUNT: data.GA4_SERVICE_ACCOUNT_JSON
    ? (JSON.parse(data.GA4_SERVICE_ACCOUNT_JSON) as ServiceAccountConfig)
    : null
} as const;

