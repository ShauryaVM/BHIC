You are building a **production‑ready, full‑fledged Next.js 14 (App Router) dashboard application** for the Bald Head Island Conservancy (BHIC). The app will be deployed on Vercel and MUST be implementable end‑to‑end with no “TODOs” or incomplete work. Implement everything with TypeScript, Prisma, and React. Use best practices for security, DX, and performance.

 **Constraints and requirements** :

* Use  **Next.js 14 App Router** , TypeScript, and React Server Components for server‑side data loading where appropriate.
* Use **NextAuth.js** for authentication with **Google provider** (Gmail login). Configure it to run correctly on Vercel.
* Restrict access so that only authenticated users from a BHIC email domain (for example `@bhic.org`) can access dashboard routes. Redirect anyone else to a “Not authorized” page.
* Use **Prisma** with PostgreSQL as the primary database. Include Prisma schema and minimal seed data.
* Use a modern component library or Tailwind CSS for layout and styling. Provide a clean, card‑based dashboard UI.
* Implement routes and components so the application is usable immediately after configuration of env vars and DB. No placeholders or unfinished stubs.

 **Environment variables (define and reference clearly)** :

* `DATABASE_URL` – PostgreSQL URL.
* `NEXTAUTH_URL` – base URL for NextAuth.
* `NEXTAUTH_SECRET` – NextAuth secret.
* `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` – from Google Cloud for OAuth.
* `ETAPESTRY_BASE_URL`, `ETAPESTRY_API_TOKEN` (or whichever auth scheme eTapestry uses; make it easy to swap).
* `EVENTBRITE_API_TOKEN` – personal/organization token for Eventbrite API.
* `GA4_PROPERTY_ID`, `GOOGLE_APPLICATION_CREDENTIALS` (or service account JSON as `GA4_SERVICE_ACCOUNT_JSON`) to authenticate GA4 Data API.
* `EMAIL_PROVIDER_API_KEY` – for Resend/SendGrid/Postmark (pick one, e.g., Resend).

 **Database (Prisma) schema design** :
Create `schema.prisma` with at least the following models:

* `User`: id, name, email, image, role (`ADMIN` / `STAFF`), createdAt, updatedAt, lastLoginAt.
* `Donor`: id, externalId (eTapestry id), name, email, phone, createdAt, updatedAt, totalPledged, totalGiven, lastGiftDate.
* `Pledge`: id, donorId, amount, date, campaign, status, createdAt, updatedAt.
* `Event`: id, externalId (Eventbrite id), name, startDate, endDate, venue, status, ticketsTotal, ticketsSold, grossRevenue, netRevenue, createdAt, updatedAt.
* `EventAttendance`: id, eventId, donorId (nullable for non‑donors), attendeeEmail, ticketType, ticketsCount, orderTotal, createdAt.
* `CachedMetric`: id, key, value (JSON), fromDate, toDate, source (e.g., `ETAPESTRY`, `EVENTBRITE`, `GA4`), createdAt.
* `EmailTemplate`: id, name, subject, html, text, createdAt, updatedAt, isDefaultThankYou.
* `AudienceSegment`: id, name, filters (JSON), createdAt, updatedAt.
* `EmailCampaign`: id, name, templateId, audienceSegmentId, status (`DRAFT`, `SCHEDULED`, `SENT`, `FAILED`), scheduledFor, sentAt, createdAt, updatedAt.
* `EmailLog`: id, campaignId, recipientEmail, status (`QUEUED`, `SENT`, `FAILED`), providerMessageId, errorMessage, sentAt, createdAt.

Implement migrations and a basic `prisma/seed.ts` to create:

* An admin user with BHIC email (dummy).
* A default thank‑you email template.
* A couple of sample donors, pledges, events, and event attendance records for local testing.

 **Authentication and authorization** :

* Implement NextAuth using `app/api/auth/[...nextauth]/route.ts` with Google provider.
* Request scopes: `openid email profile https://www.googleapis.com/auth/gmail.send`.
* On sign‑in, create or update the `User` in the DB, setting role to `ADMIN` if email matches a preconfigured list (e.g., an `ADMIN_EMAILS` env var), else `STAFF`.
* Add a middleware in `middleware.ts` to protect all dashboard routes under `/`, except `/auth/signin` and static assets. If user is not authenticated, redirect to `/auth/signin`. If authenticated but email domain is not allowed, redirect to `/auth/not-authorized`.

 **App structure (App Router)** :

* `app/layout.tsx`:
  * Global layout with top nav (BHIC logo, user menu with logout) and sidebar (links: Dashboard, Donors, Events, Analytics, Emails).
  * Use a `SessionProvider` or `getServerSession` pattern compatible with App Router.
* `app/page.tsx` (Dashboard overview):
  * Server component.
  * Show top KPI cards:
    * Total funds raised YTD (from pledges/gifts).
    * Number of active donors.
    * Number of events this year and total tickets sold.
    * Website sessions last 30 days (from GA4).
  * Display a time‑series chart for:
    * Monthly funds raised (last 12 months).
    * Monthly tickets sold (last 12 months).
    * Monthly sessions (last 12 months).
  * Data should be fetched via server‑side helper functions, with simple caching using `CachedMetric` where appropriate.
* `app/auth/signin/page.tsx`:
  * Simple sign‑in page with “Sign in with Google” button tied to NextAuth.
* `app/auth/not-authorized/page.tsx`:
  * Inform the user that their account is not authorized for BHIC dashboard.
* `app/donors/page.tsx`:
  * Server component.
  * Table listing donors with pagination, search by name/email, and filters (e.g., minimum lifetime value, last gift date range).
  * Chart(s):
    * Donors acquired per month.
    * Distribution of gift sizes (histogram or bar chart).
  * Summary cards for donors: total donors, active donors (gift in last 12 months), average lifetime value.
* `app/events/page.tsx`:
  * Server component.
  * Table of upcoming and past events with metrics: tickets sold, capacity, gross revenue, net revenue.
  * Filter by date range.
  * Charts:
    * Tickets sold per event.
    * Revenue per event (bar chart).
* `app/analytics/page.tsx`:
  * Server component.
  * Use GA4 Data API via a server‑side helper to query website metrics.
  * Date range selector (client component) that triggers server actions or URL search params for reloading data.
  * Show metrics: users, sessions, pageviews, average engagement time.
  * Charts:
    * Sessions over time.
    * Top pages (bar chart).
* `app/emails/page.tsx`:
  * Server component with client subcomponents.
  * List of existing email campaigns with status, createdAt, sentAt.
  * Button to create new campaign.
* `app/emails/create/page.tsx`:
  * Client‑heavy page.
  * Steps:
    1. Define basic campaign info (name).
    2. Select or define audience:
       * Provide filter UI powered by donors and event attendance data.
       * Possible filters: donated in last N days, total given > X, attended event Y, in a list of campaigns, etc.
       * Persist as an `AudienceSegment` with JSON filters.
    3. Select an existing `EmailTemplate` or create a new one (subject, HTML body, text body).
    4. Preview email for a sample donor.
    5. Confirm and send now or schedule later.
  * When sending:
    * Resolve audience by applying filters on donors + event attendance.
    * For each recipient, create `EmailLog` rows with `QUEUED` status, then send using a server action or API route.
    * Update `EmailLog` with provider response and mark as `SENT` or `FAILED`.

 **Third‑party integrations (server‑side helpers)** :

1. **eTapestry** :

* Implement `lib/etapestry.ts` with functions like:
  * `fetchPledges({ from, to }): Promise<Pledge[]>` – fetch pledges from eTapestry API.
  * `syncPledgesToDb()` – sync remote pledges into local `Pledge` and `Donor` tables, creating/updating donor rows.
  * `getFundsRaisedSummary({ from, to })` – aggregate local DB pledges to compute totals and monthly series.
* Note: Because access style to eTapestry can vary, mock the API calls as `fetch` calls to `ETAPESTRY_BASE_URL` with `ETAPESTRY_API_TOKEN` header, and structure the code so real endpoints and shapes can be swapped easily.

2. **Eventbrite** :

* Implement `lib/eventbrite.ts` with functions like:
  * `fetchEvents({ from, to })` – use Eventbrite API with `EVENTBRITE_API_TOKEN` to get BHIC events.
  * `syncEventsToDb()` – write/update rows in `Event` and `EventAttendance`.
  * `getEventKpis({ from, to })` – aggregate DB data for tickets sold and revenue.

3. **Google Analytics 4** :

* Install and configure `@google-analytics/data` Node client.
* Implement `lib/ga4.ts` with helpers:
  * `getSessionsOverTime({ from, to })`.
  * `getTopPages({ from, to })`.
  * `getSummaryMetrics({ from, to })` – users, sessions, pageviews, avg engagement time.
* Use a service account JSON from env and GA4 property id from env.

 **Email sending implementation** :

* Choose **Resend** as the email provider (or SendGrid if you prefer; pick one and fully implement it).
* Implement `lib/email.ts` with a function:
  * `sendEmail({ to, subject, html, text }): Promise<{ id: string }>` that uses the provider’s API based on `EMAIL_PROVIDER_API_KEY`.
* Implement higher‑level functions:
  * `sendCampaign(campaignId: string)` – loads campaign, segment, resolves recipients, calls `sendEmail` in batches, updates `EmailLog` and campaign status.
  * `sendThankYouEmailToDonor(donorId: string, options?)` – uses the default thank‑you template and sends to donor email.
* Ensure these functions are only callable server‑side and never expose raw provider keys to clients.

 **Charts and visualization** :

* Use a charting library like Recharts or Chart.js, implemented as client components under `components/charts/`.
* Create generic components:
  * `TimeSeriesChart` (line chart).
  * `BarChartComponent`.
  * `PieChartComponent`.
* Reuse chart components on dashboard, donors, events, and analytics pages.

 **UI/UX requirements** :

* Clean, responsive layout with sidebar and top bar.
* Each page has a consistent header with title and short description.
* Use loading states and error states for all async data (e.g., when GA4 or Eventbrite calls fail, show a friendly error message and do not crash).
* Add date range selectors where appropriate (dashboard overview, events, analytics).

 **Quality & completeness** :

* Do NOT leave `TODO` markers; implement real, working logic. Where actual external integration details are unknown (e.g., exact eTapestry endpoints), implement them as clearly documented fetch helpers with types that can be wired to real endpoints by the developer, but keep the rest of the system fully wired to those helpers.
* Include all necessary TypeScript types and interfaces.
* Provide all essential glue code: `PrismaClient` singleton, hooks, providers, and helper functions.
* Ensure the app `npm run dev` works out of the box after:
  1. `npm install`.
  2. Set env vars.
  3. `npx prisma migrate dev` and `npm run seed` (or equivalent).
  4. Configure Google OAuth and GA4 credentials.

 **Deliverables in the codebase** :

* Full Next.js app directory with implemented pages and components as specified.
* `prisma/schema.prisma` with all models and migration ready.
* `prisma/seed.ts` script.
* `lib/` modules for auth, Prisma, eTapestry, Eventbrite, GA4, and email.
* NextAuth setup and middleware.
* Example `.env.example` listing all required env variables.
* No partial stubs; all routes and core functionality described above must be implemented.
