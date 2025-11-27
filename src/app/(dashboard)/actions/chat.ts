"use server";

import { GoogleGenerativeAI } from '@google/generative-ai';
import { env } from '@/lib/env';
import { getDashboardData } from '@/lib/dashboard-data';
import { getDonorList } from '@/lib/donor-data';
import { getEventsData, defaultEventFilters } from '@/lib/events-data';
import { getAnalyticsData, defaultAnalyticsFilters } from '@/lib/analytics-data';
import { getCustomDataSourcesInsights } from '@/lib/custom-data-insights';
import { subMonths } from 'date-fns';

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);

// Helper to get model with fallback
function getModel() {
  try {
    return genAI.getGenerativeModel({ model: env.GEMINI_MODEL });
  } catch (error) {
    console.warn(`[Chat] Model ${env.GEMINI_MODEL} not available, falling back to gemini-2.0-flash-lite`);
    try {
      return genAI.getGenerativeModel({ model: 'gemini-2.0-flash-lite' });
    } catch {
      try {
        return genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
      } catch (fallbackError) {
        console.error('[Chat] All model fallbacks failed');
        throw new Error('Unable to initialize Gemini model. Please check your API key and model availability.');
      }
    }
  }
}

interface ChatContext {
  organization: {
    name: string;
    description: string;
  };
  dashboard: {
    fundsYtd: number;
    activeDonors: number;
    ticketsSold: number;
    sessionsLast30Days: number;
  };
  donors: {
    totalDonors: number;
    activeDonors: number;
    averageLifetimeValue: number;
  };
  events: {
    totalEvents: number;
    upcomingEvents: number;
    pastEvents: number;
    grossRevenue: number;
    netRevenue: number;
  };
  analytics: {
    sessions: number;
    pageviews: number;
    topPages: Array<{ title: string; pageviews: number }>;
  };
  customDataSources: Array<{
    name: string;
    recordCount: number;
    dataType: string;
  }>;
}

async function getChatContext(): Promise<ChatContext> {
  const now = new Date();
  const range = { from: subMonths(now, 11), to: now };
  
  const [dashboard, donors, eventsData, analyticsData, customDataSources] = await Promise.all([
    getDashboardData('12m'),
    getDonorList({ page: 1, pageSize: 1 }),
    getEventsData(defaultEventFilters()),
    getAnalyticsData(defaultAnalyticsFilters()),
    getCustomDataSourcesInsights(range)
  ]);

  return {
    organization: {
      name: 'Bald Head Island Conservancy',
      description: 'Bald Head Island Conservancy (BHIC) is a non-profit organization dedicated to preserving and protecting the natural environment of Bald Head Island, North Carolina. The organization focuses on conservation, education, and stewardship of the island\'s unique ecosystems, including maritime forests, salt marshes, and beaches.'
    },
    dashboard: {
      fundsYtd: dashboard.kpis.fundsYtd,
      activeDonors: dashboard.kpis.activeDonors,
      ticketsSold: dashboard.kpis.ticketsSold,
      sessionsLast30Days: dashboard.kpis.sessionsLast30Days || 0
    },
    donors: {
      totalDonors: donors.summary.totalDonors,
      activeDonors: donors.summary.activeDonors,
      averageLifetimeValue: donors.summary.averageLifetimeValue
    },
    events: {
      totalEvents: eventsData.events.length,
      upcomingEvents: eventsData.summary.upcomingEvents,
      pastEvents: eventsData.summary.pastEvents,
      grossRevenue: eventsData.summary.grossRevenue,
      netRevenue: eventsData.summary.netRevenue
    },
    analytics: {
      sessions: analyticsData.summary.sessions || 0,
      pageviews: analyticsData.summary.pageviews || 0,
      topPages: analyticsData.topPages.rows.slice(0, 5).map(page => ({
        title: page.title,
        pageviews: page.pageviews
      }))
    },
    customDataSources: customDataSources.map(ds => ({
      name: ds.name,
      recordCount: ds.recordCount,
      dataType: ds.dataType
    }))
  };
}

export async function sendChatMessage(message: string, conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }> = []): Promise<string> {
  try {
    const context = await getChatContext();
    const model = getModel();

    const systemPrompt = `You are an AI assistant for ${context.organization.name} (BHIC), a non-profit conservation organization.

ORGANIZATION CONTEXT:
${context.organization.description}

The organization's mission focuses on:
- Environmental conservation and protection of Bald Head Island
- Education and outreach programs
- Stewardship of maritime forests, salt marshes, and beaches
- Wildlife protection and habitat preservation

CURRENT DATA SUMMARY:
- Dashboard: $${context.dashboard.fundsYtd.toLocaleString()} raised YTD, ${context.dashboard.activeDonors} active donors, ${context.dashboard.ticketsSold} tickets sold, ${context.dashboard.sessionsLast30Days.toLocaleString()} website sessions (last 30 days)
- Donors: ${context.donors.totalDonors} total donors, ${context.donors.activeDonors} active donors (gifted in last 12 months), average lifetime value $${context.donors.averageLifetimeValue.toLocaleString()}
- Events: ${context.events.totalEvents} total events (${context.events.upcomingEvents} upcoming, ${context.events.pastEvents} past), $${context.events.grossRevenue.toLocaleString()} gross revenue, $${context.events.netRevenue.toLocaleString()} net revenue
- Analytics: ${context.analytics.sessions.toLocaleString()} sessions, ${context.analytics.pageviews.toLocaleString()} pageviews
${context.analytics.topPages.length > 0 ? `- Top Pages: ${context.analytics.topPages.map(p => `${p.title} (${p.pageviews.toLocaleString()} views)`).join(', ')}` : ''}
${context.customDataSources.length > 0 ? `- Custom Data Sources: ${context.customDataSources.map(ds => `${ds.name} (${ds.recordCount} records, ${ds.dataType} data)`).join(', ')}` : ''}

INSTRUCTIONS:
- Answer questions about the organization, its mission, and current data/metrics
- Provide insights based on the data provided
- Be helpful, professional, and concise
- If asked about specific data that isn't in the context, acknowledge that and suggest where they might find it in the dashboard
- Use natural, conversational language
- Format numbers with commas and currency symbols where appropriate
- If asked about trends or comparisons, use the data provided to make informed observations

CONVERSATION HISTORY:
${conversationHistory.map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`).join('\n')}

USER QUESTION: ${message}

Provide a helpful, accurate response based on the context above.`;

    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const text = response.text().trim();

    return text;
  } catch (error) {
    console.error('[Chat] Error generating response:', error);
    if (error instanceof Error) {
      return `I apologize, but I encountered an error: ${error.message}. Please try again.`;
    }
    return 'I apologize, but I encountered an error. Please try again.';
  }
}

