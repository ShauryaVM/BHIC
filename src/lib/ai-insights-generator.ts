import { GoogleGenerativeAI } from '@google/generative-ai';
import { env } from '@/lib/env';

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);

// Helper to get model with fallback
function getModel() {
  try {
    // Try the configured model first
    return genAI.getGenerativeModel({ model: env.GEMINI_MODEL });
  } catch (error) {
    // Fallback to gemini-pro if configured model fails
    console.warn(`[AI Insights] Model ${env.GEMINI_MODEL} not available, falling back to gemini-pro`);
    return genAI.getGenerativeModel({ model: 'gemini-pro' });
  }
}

const model = getModel();

export interface DynamicMetric {
  label: string;
  value: number;
  formatted: string;
  type: 'primary' | 'secondary';
  description?: string;
}

export interface DynamicVisualization {
  type: 'timeSeries' | 'bar' | 'pie' | 'horizontalBar';
  title: string;
  description: string;
  dataKey: string;
  categoryKey?: string;
  color?: string;
  aggregation?: 'sum' | 'count' | 'average';
}

export interface DynamicInsight {
  dataType: string;
  primaryMetrics: DynamicMetric[];
  secondaryMetrics: DynamicMetric[];
  visualizations: DynamicVisualization[];
  insights: string[];
  fieldMappings: Record<string, { semantic: string; unit?: string }>;
}

// Helper to list available models (for debugging)
async function listAvailableModels(): Promise<string[]> {
  try {
    // This is a workaround - we'll just try common model names
    return [];
  } catch {
    return [];
  }
}

export async function generateDynamicInsights(params: {
  name: string;
  description: string | null;
  fieldMapping: Record<string, string | null>;
  detectedSchema: { columns: Array<{ name: string; type: string; samples: string[] }> } | null;
  sampleData: Array<Record<string, unknown>>;
}): Promise<DynamicInsight | null> {
  const { name, description, fieldMapping, detectedSchema, sampleData } = params;

  // Limit sample data for AI analysis
  const limitedSample = sampleData.slice(0, 20);

  // The SDK uses v1beta API, but newer models (2.5, 2.0) work there
  // Try models in order of preference (newer models first, they're available)
  const modelsToTry = [
    env.GEMINI_MODEL,
    // New models that work with v1beta
    'gemini-2.5-flash',  // Fast, recommended
    'gemini-2.5-pro',    // More capable
    'gemini-2.0-flash',  // Alternative
    // Legacy models (may be deprecated)
    'gemini-1.5-flash',
    'gemini-1.5-pro',
    'gemini-pro',
  ].filter((m, i, arr) => arr.indexOf(m) === i); // Remove duplicates
  
  let lastError: Error | null = null;

  for (const modelName of modelsToTry) {
    try {
      const currentModel = genAI.getGenerativeModel({ model: modelName });
      console.log(`[AI Insights] Trying model: ${modelName}`);
      
      const prompt = `
You are an AI data analyst. Analyze this custom data source and generate dynamic insights configuration.

Data Source Name: ${name}
Description: ${description || 'None'}

Detected Schema:
${JSON.stringify(detectedSchema?.columns || [], null, 2)}

Field Mappings (CSV column -> Internal field):
${JSON.stringify(fieldMapping, null, 2)}

Sample Data (first 20 records):
${JSON.stringify(limitedSample, null, 2)}

Based on this data, provide a JSON response with:
1. **dataType**: A brief category (e.g., "sales", "volunteer", "membership", "inventory", "events", "general")
2. **fieldMappings**: For each field, provide semantic meaning and unit (e.g., { "amount": { "semantic": "Revenue", "unit": "$" }, "hours_worked": { "semantic": "Volunteer Hours", "unit": "hours" } })
3. **primaryMetrics**: Array of 1-2 most important metrics with:
   - label: Human-readable label
   - value: Will be calculated from data
   - formatted: Format string template using placeholder VALUE_PLACEHOLDER (e.g., "VALUE_PLACEHOLDER hours", "$VALUE_PLACEHOLDER")
   - type: "primary"
   - description: Brief explanation
4. **secondaryMetrics**: Array of 3-5 additional useful metrics (same structure, type: "secondary")
5. **visualizations**: Array of recommended charts:
   - type: "timeSeries" | "bar" | "pie" | "horizontalBar"
   - title: Chart title
   - description: What it shows
   - dataKey: Field name to use for data
   - categoryKey: Field name for grouping (if applicable)
   - color: Hex color code
   - aggregation: "sum" | "count" | "average"
6. **insights**: Array of 2-3 key insights or observations about this dataset

Be intelligent and context-aware. For example:
- If you see "hours_worked" or "volunteer", focus on volunteer metrics
- If you see "sale", "revenue", "product", focus on sales metrics
- If you see "member", "join_date", focus on membership metrics
- Adapt labels and descriptions to match the actual data semantics

Respond ONLY with valid JSON, no markdown, no explanations.
`;

      console.log('[AI Insights] Generating insights for:', name);
      const result = await currentModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text().trim();
      
      console.log('[AI Insights] Raw response received, length:', text.length);
      
      // Clean up response (remove markdown code blocks if present)
      const jsonText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const parsed = JSON.parse(jsonText) as DynamicInsight;
      
      // Normalize insights to always be strings
      if (parsed.insights && Array.isArray(parsed.insights)) {
        parsed.insights = parsed.insights.map((insight: any) => {
          if (typeof insight === 'string') {
            return insight;
          }
          // Handle object format (title, text, etc.)
          if (typeof insight === 'object' && insight !== null) {
            return insight.text || insight.title || insight.description || JSON.stringify(insight);
          }
          return String(insight);
        });
      }
      
      console.log('[AI Insights] Successfully parsed insights using model:', modelName, {
        dataType: parsed.dataType,
        primaryMetrics: parsed.primaryMetrics.length,
        secondaryMetrics: parsed.secondaryMetrics.length,
        visualizations: parsed.visualizations.length,
        insights: parsed.insights?.length || 0
      });
      
      // Replace VALUE_PLACEHOLDER with {value} for template replacement
      parsed.primaryMetrics = parsed.primaryMetrics.map(m => ({
        ...m,
        formatted: m.formatted.replace(/VALUE_PLACEHOLDER/g, '{value}')
      }));
      parsed.secondaryMetrics = parsed.secondaryMetrics.map(m => ({
        ...m,
        formatted: m.formatted.replace(/VALUE_PLACEHOLDER/g, '{value}')
      }));
      
      return parsed;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.warn(`[AI Insights] Model ${modelName} failed:`, lastError.message);
      // Continue to next model
      continue;
    }
  }

  // All models failed
  console.error('[AI Insights] All models failed. Last error:', lastError?.message);
  console.warn('[AI Insights] AI insights unavailable. This could be due to:');
  console.warn('  1. API key not having access to v1beta models');
  console.warn('  2. Model names not available in your region/API version');
  console.warn('  3. API quota exceeded');
  console.warn('  Falling back to heuristic-based insights (still functional)');
  return null;
}

