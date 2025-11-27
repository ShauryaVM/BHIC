import { prisma } from '@/lib/prisma';
import { getMonthlyBuckets } from '@/lib/time-series';
import { format, startOfMonth, parseISO, isValid, parse } from 'date-fns';
import { generateDynamicInsights, type DynamicInsight } from '@/lib/ai-insights-generator';

export type DataSourceType = 
  | 'sales' 
  | 'volunteer' 
  | 'membership' 
  | 'events' 
  | 'donations' 
  | 'inventory' 
  | 'general';

export interface CustomDataSourceInsight {
  id: string;
  name: string;
  description: string | null;
  dataType: DataSourceType | string; // Can be AI-generated type
  recordCount: number;
  lastSynced: Date | null;
  monthlyData: Array<{ label: string; value: number; count: number }>;
  topItems: Array<{ name: string; value: number; count: number }>;
  topCustomers?: Array<{ name: string; value: number; count: number }>;
  categoryBreakdown: Array<{ name: string; value: number; count: number }>;
  paymentMethodBreakdown?: Array<{ name: string; value: number; count: number }>;
  trends: {
    growth: number;
    periodOverPeriod: number;
    peakMonth: { label: string; value: number } | null;
  };
  summary: {
    totalAmount: number;
    totalRecords: number;
    averageAmount: number;
    minAmount: number;
    maxAmount: number;
    totalHours?: number;
    averageHours?: number;
    totalMembers?: number;
    activeMembers?: number;
    [key: string]: number | undefined; // Allow dynamic fields
  };
  hasAmountData: boolean;
  hasCategoryData: boolean;
  hasProductData: boolean;
  hasHoursData: boolean;
  metrics: {
    primaryMetric: { label: string; value: number; formatted: string };
    secondaryMetrics: Array<{ label: string; value: number; formatted: string }>;
  };
  dynamicInsights?: DynamicInsight; // AI-generated insights
  computedMetrics?: Record<string, number>; // Dynamically computed metrics
}

function detectDataSourceType(
  name: string,
  description: string | null,
  fieldMapping: Record<string, string | null>,
  detectedSchema: { columns: Array<{ name: string; type: string }> } | null
): DataSourceType {
  const lowerName = name.toLowerCase();
  const lowerDesc = (description || '').toLowerCase();
  const allFields = [
    ...Object.keys(fieldMapping),
    ...(detectedSchema?.columns.map((c) => c.name) || [])
  ].map((f) => f.toLowerCase());

  // Check for volunteer/activity keywords
  if (
    lowerName.includes('volunteer') ||
    lowerName.includes('hours') ||
    lowerName.includes('activity') ||
    lowerDesc.includes('volunteer') ||
    lowerDesc.includes('hours') ||
    allFields.some((f) => f.includes('hour') || f.includes('volunteer') || f.includes('activity'))
  ) {
    return 'volunteer';
  }

  // Check for membership keywords
  if (
    lowerName.includes('member') ||
    lowerDesc.includes('member') ||
    allFields.some((f) => f.includes('member') || f.includes('join') || f.includes('renewal'))
  ) {
    return 'membership';
  }

  // Check for sales/retail keywords
  if (
    lowerName.includes('sale') ||
    lowerName.includes('store') ||
    lowerName.includes('retail') ||
    lowerDesc.includes('sale') ||
    lowerDesc.includes('store') ||
    allFields.some((f) => f.includes('sale') || f.includes('product') || f.includes('customer'))
  ) {
    return 'sales';
  }

  // Check for event keywords
  if (
    lowerName.includes('event') ||
    lowerDesc.includes('event') ||
    allFields.some((f) => f.includes('event') || f.includes('venue') || f.includes('ticket'))
  ) {
    return 'events';
  }

  // Check for donation keywords
  if (
    lowerName.includes('donation') ||
    lowerName.includes('gift') ||
    lowerDesc.includes('donation') ||
    allFields.some((f) => f.includes('donation') || f.includes('gift') || f.includes('pledge'))
  ) {
    return 'donations';
  }

  // Check for inventory keywords
  if (
    lowerName.includes('inventory') ||
    lowerName.includes('stock') ||
    allFields.some((f) => f.includes('inventory') || f.includes('stock') || f.includes('quantity'))
  ) {
    return 'inventory';
  }

  return 'general';
}

export async function getCustomDataSourcesInsights(
  range: { from: Date; to: Date }
): Promise<CustomDataSourceInsight[]> {
  // Query data sources - handle case where migration hasn't been run yet
  let dataSources;
  try {
    // Try with new fields first (if migration has been run)
    dataSources = await prisma.customDataSource.findMany({
      include: {
        _count: {
          select: { records: true }
        },
        records: {
          where: {
            syncedAt: {
              gte: range.from,
              lte: range.to
            }
          },
          select: {
            id: true,
            data: true,
            syncedAt: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
  } catch (error: any) {
    // If columns don't exist yet, query without them
    if (error?.message?.includes('aiInsights') || error?.message?.includes('does not exist')) {
      console.log('[Custom Insights] Migration not run yet, querying without aiInsights fields');
      dataSources = await prisma.customDataSource.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          detectedSchema: true,
          fieldMapping: true,
          transformations: true,
          createdAt: true,
          updatedAt: true,
          createdById: true,
          _count: {
            select: { records: true }
          },
          records: {
            where: {
              syncedAt: {
                gte: range.from,
                lte: range.to
              }
            },
            select: {
              id: true,
              data: true,
              syncedAt: true
            }
          }
        },
        orderBy: { createdAt: 'desc' }
      });
      // Add null aiInsights to match expected structure
      dataSources = dataSources.map((ds: any) => ({
        ...ds,
        aiInsights: null,
        aiInsightsGeneratedAt: null
      }));
    } else {
      throw error;
    }
  }

  // Get monthly buckets for the range, but we'll also include any months with data outside this range
  const monthlyBuckets = getMonthlyBuckets(12, range.to);

  return Promise.all(dataSources.map(async (source) => {
    const records = source.records;
    const recordCount = source._count.records;
    const fieldMapping = (source.fieldMapping as Record<string, string | null>) || {};
    const detectedSchema = (source.detectedSchema as { columns: Array<{ name: string; type: string }> } | null);

    // Detect data type
    const dataType = detectDataSourceType(source.name, source.description, fieldMapping, detectedSchema);

    // Field detection - use field mappings to understand semantic meaning
    // Also check mapped field names from fieldMapping
    const mappedFields = Object.values(fieldMapping).filter((f): f is string => f !== null && f !== undefined);
    const allAmountFields = [
      'amount', 'total_amount', 'revenue', 'total', 'price', 'value', 'totalAmount', 'pledgeAmount', 'recordAmount',
      ...mappedFields.filter(f => /amount|revenue|total|price|value/i.test(f))
    ];
    const allHoursFields = [
      'hours', 'hours_worked', 'volunteer_hours', 'time', 'duration',
      ...mappedFields.filter(f => /hour|time|duration/i.test(f))
    ];
    const allDateFields = [
      'date', 'sale_date', 'transaction_date', 'created_at', 'timestamp', 'order_date', 'pledgeDate', 'recordDate', 'join_date',
      ...mappedFields.filter(f => /date|time|created|timestamp/i.test(f))
    ];
    const allCategoryFields = [
      'category', 'type', 'status', 'payment_method', 'activity_type', 'recordCategory',
      ...mappedFields.filter(f => /category|type|status|method|activity/i.test(f))
    ];
    const allProductFields = [
      'product', 'product_name', 'item', 'item_name', 'name', 'event_name',
      ...mappedFields.filter(f => /product|item|name|event/i.test(f))
    ];
    const locationFields = ['location', 'venue', 'address', 'city', 'state'];
    const memberFields = ['member', 'member_name', 'member_id', 'membership_type'];
    
    // Use the expanded field lists
    const amountFields = allAmountFields;
    const hoursFields = allHoursFields;
    const dateFields = allDateFields;
    const categoryFields = allCategoryFields;
    const productFields = allProductFields;

    // Aggregations
    const monthlyDataMap = new Map<string, { value: number; count: number }>();
    const categoryMap = new Map<string, { value: number; count: number }>();
    const productMap = new Map<string, { value: number; count: number }>();
    const paymentMethodMap = new Map<string, { value: number; count: number }>();
    const customerMap = new Map<string, { value: number; count: number; name: string }>();
    const locationMap = new Map<string, { value: number; count: number }>();
    
    let totalAmount = 0;
    let recordsWithAmount = 0;
    const amounts: number[] = [];
    
    let totalHours = 0;
    let recordsWithHours = 0;
    const hours: number[] = [];
    
    let totalMembers = 0;
    let activeMembers = 0;
    
    // Track unique customers
    const uniqueCustomers = new Set<string>();

    for (const record of records) {
      const data = record.data as Record<string, unknown>;
      
      // Extract amount - check both direct field names and mapped field names
      let amount = 0;
      // First try direct field names from CSV
      for (const field of amountFields) {
        const value = data[field];
        if (typeof value === 'number') {
          amount = value;
          break;
        } else if (typeof value === 'string') {
          const parsed = parseFloat(value.replace(/[^0-9.-]/g, ''));
          if (!Number.isNaN(parsed) && parsed !== 0) {
            amount = parsed;
            break;
          }
        }
      }
      // If not found, try all data keys (case-insensitive)
      if (amount === 0) {
        for (const [key, value] of Object.entries(data)) {
          const keyLower = key.toLowerCase();
          if (amountFields.some(f => keyLower.includes(f.toLowerCase())) || 
              keyLower.includes('amount') || keyLower.includes('revenue') || keyLower.includes('total') || keyLower.includes('price')) {
            if (typeof value === 'number' && value > 0) {
              amount = value;
              break;
            } else if (typeof value === 'string') {
              const parsed = parseFloat(value.replace(/[^0-9.-]/g, ''));
              if (!Number.isNaN(parsed) && parsed !== 0) {
                amount = parsed;
                break;
              }
            }
          }
        }
      }

      // Track unique customers and aggregate by customer (for sales data) - AFTER amount is extracted
      if (dataType === 'sales') {
        const customerEmail = data['customer_email'] || data['email'] || data['customerEmail'];
        const customerName = data['customer_name'] || data['name'] || data['customerName'];
        const customerId = customerEmail || customerName;
        if (customerId && typeof customerId === 'string') {
          const normalizedId = customerId.toLowerCase().trim();
          uniqueCustomers.add(normalizedId);
          // Aggregate by customer for top customers chart
          const existing = customerMap.get(normalizedId);
          const customerDisplayName = typeof customerName === 'string' ? customerName : (typeof customerEmail === 'string' ? customerEmail : 'Unknown');
          if (existing) {
            customerMap.set(normalizedId, {
              value: existing.value + amount,
              count: existing.count + 1,
              name: existing.name
            });
          } else {
            customerMap.set(normalizedId, {
              value: amount,
              count: 1,
              name: customerDisplayName
            });
          }
        }
      }

      // Extract quantity (for sales/inventory data)
      let quantity = 1; // Default to 1 if not found
      const quantityFields = ['quantity', 'qty', 'units', 'unit_count', 'item_count'];
      for (const field of quantityFields) {
        const value = data[field];
        if (typeof value === 'number' && value > 0) {
          quantity = value;
          break;
        } else if (typeof value === 'string') {
          const parsed = parseFloat(value.replace(/[^0-9.-]/g, ''));
          if (!Number.isNaN(parsed) && parsed > 0) {
            quantity = parsed;
            break;
          }
        }
      }
      // Also check all keys case-insensitively
      if (quantity === 1) {
        for (const [key, value] of Object.entries(data)) {
          const keyLower = key.toLowerCase();
          if ((keyLower.includes('quantity') || keyLower.includes('qty') || keyLower.includes('units')) &&
              value && (typeof value === 'number' || typeof value === 'string')) {
            if (typeof value === 'number' && value > 0) {
              quantity = value;
              break;
            } else if (typeof value === 'string') {
              const parsed = parseFloat(value.replace(/[^0-9.-]/g, ''));
              if (!Number.isNaN(parsed) && parsed > 0) {
                quantity = parsed;
                break;
              }
            }
          }
        }
      }

      // Extract hours (for volunteer data)
      let hoursValue = 0;
      for (const field of hoursFields) {
        const value = data[field];
        if (typeof value === 'number') {
          hoursValue = value;
          break;
        } else if (typeof value === 'string') {
          const parsed = parseFloat(value.replace(/[^0-9.-]/g, ''));
          if (!Number.isNaN(parsed) && parsed !== 0) {
            hoursValue = parsed;
            break;
          }
        }
      }

      // Track members
      if (dataType === 'membership') {
        totalMembers++;
        // Check if active (has recent activity or status)
        const status = data['status'] || data['membership_status'];
        if (status && typeof status === 'string' && status.toLowerCase().includes('active')) {
          activeMembers++;
        }
      }

      // Extract date (prefer data field over syncedAt)
      let recordDate = record.syncedAt;
      // First try exact field matches
      for (const field of dateFields) {
        let value = data[field];
        if (!value) {
          // Try case-insensitive match
          const dataKey = Object.keys(data).find(k => k.toLowerCase() === field.toLowerCase());
          if (dataKey) value = data[dataKey];
        }
        if (value) {
          let parsedDate: Date | null = null;
          if (value instanceof Date) {
            parsedDate = value;
          } else if (typeof value === 'string' && value.trim()) {
            // Try ISO format first
            parsedDate = parseISO(value.trim());
            if (!isValid(parsedDate)) {
              // Try standard Date parsing
              parsedDate = new Date(value.trim());
            }
            // Validate the parsed date
            if (!isValid(parsedDate) || parsedDate.getFullYear() < 2000 || parsedDate.getFullYear() > 2100) {
              parsedDate = null;
            }
          }
          if (parsedDate && isValid(parsedDate)) {
            recordDate = parsedDate;
            break;
          }
        }
      }
      // If still not found, check all keys for date-like names (more aggressive search)
      if (recordDate === record.syncedAt) {
        for (const [key, value] of Object.entries(data)) {
          const keyLower = key.toLowerCase();
          // Check for any date-like field names
          if ((keyLower.includes('date') || keyLower.includes('time') || keyLower.includes('created') || keyLower.includes('sale')) &&
              value && (typeof value === 'string' || value instanceof Date)) {
            let parsedDate: Date | null = null;
            if (value instanceof Date) {
              parsedDate = value;
            } else if (typeof value === 'string' && value.trim()) {
              // Try ISO format first (handles YYYY-MM-DD)
              parsedDate = parseISO(value.trim());
              if (!isValid(parsedDate)) {
                // Try standard Date parsing
                parsedDate = new Date(value.trim());
              }
            }
            // Validate the parsed date
            if (parsedDate && isValid(parsedDate) && parsedDate.getFullYear() >= 2000 && parsedDate.getFullYear() <= 2100) {
              recordDate = parsedDate;
              break;
            }
          }
        }
      }

      // Extract category - check all data keys case-insensitively
      let category: string | null = null;
      for (const field of categoryFields) {
        // Try exact match first
        let value = data[field];
        if (!value) {
          // Try case-insensitive match
          const dataKey = Object.keys(data).find(k => k.toLowerCase() === field.toLowerCase());
          if (dataKey) value = data[dataKey];
        }
        if (value && typeof value === 'string' && value.trim()) {
          category = value.trim();
          break;
        }
      }
      // If still not found, check all keys for category-like names
      if (!category) {
        for (const [key, value] of Object.entries(data)) {
          const keyLower = key.toLowerCase();
          if ((keyLower.includes('category') || keyLower.includes('type') || keyLower.includes('status') || keyLower.includes('method')) &&
              value && typeof value === 'string' && value.trim()) {
            category = value.trim();
            break;
          }
        }
      }

      // Extract product - check all data keys case-insensitively
      let product: string | null = null;
      for (const field of productFields) {
        // Try exact match first
        let value = data[field];
        if (!value) {
          // Try case-insensitive match
          const dataKey = Object.keys(data).find(k => k.toLowerCase() === field.toLowerCase());
          if (dataKey) value = data[dataKey];
        }
        if (value && typeof value === 'string' && value.trim()) {
          product = value.trim();
          break;
        }
      }
      // If still not found, check all keys for product-like names
      if (!product) {
        for (const [key, value] of Object.entries(data)) {
          const keyLower = key.toLowerCase();
          if ((keyLower.includes('product') || keyLower.includes('item') || keyLower.includes('name')) &&
              value && typeof value === 'string' && value.trim() && !keyLower.includes('customer')) {
            product = value.trim();
            break;
          }
        }
      }

      // Aggregate amounts
      if (amount > 0) {
        totalAmount += amount;
        recordsWithAmount++;
        amounts.push(amount);
      }

      // Aggregate hours
      if (hoursValue > 0) {
        totalHours += hoursValue;
        recordsWithHours++;
        hours.push(hoursValue);
      }

      // Group by month - use hours for volunteer data, amount for others
      // Only add to monthly data if we have a valid date and value
      if (recordDate && isValid(recordDate) && (amount > 0 || hoursValue > 0)) {
        const monthKey = format(startOfMonth(recordDate), 'yyyy-MM');
        const existing = monthlyDataMap.get(monthKey) || { value: 0, count: 0 };
        const valueToAdd = dataType === 'volunteer' && hoursValue > 0 ? hoursValue : amount;
        monthlyDataMap.set(monthKey, {
          value: existing.value + valueToAdd,
          count: existing.count + 1
        });
      } else if (amount > 0 || hoursValue > 0) {
        // If we have value but no valid date, log for debugging
        if (records.length <= 20) { // Only log for small datasets to avoid spam
          console.log(`[Custom Insights] Record ${record.id} has value but invalid date. recordDate:`, recordDate, 'isValid:', recordDate ? isValid(recordDate) : false);
        }
      }

      // Group by category (but exclude payment_method - that goes to paymentMethodMap)
      if (category) {
        const categoryLower = category.toLowerCase();
        // Check if this is actually a payment method
        const isPaymentMethod = categoryLower.includes('payment') || 
                                categoryLower === 'card' || 
                                categoryLower === 'cash' || 
                                categoryLower === 'online' ||
                                categoryLower === 'credit' ||
                                categoryLower === 'debit';
        
        if (isPaymentMethod) {
          const existing = paymentMethodMap.get(category) || { value: 0, count: 0 };
          paymentMethodMap.set(category, {
            value: existing.value + amount,
            count: existing.count + 1
          });
        } else {
          const existing = categoryMap.get(category) || { value: 0, count: 0 };
          categoryMap.set(category, {
            value: existing.value + amount,
            count: existing.count + 1
          });
        }
      }
      
      // Also explicitly extract payment_method if it exists
      const paymentMethod = data['payment_method'] || data['paymentMethod'] || data['payment'];
      if (paymentMethod && typeof paymentMethod === 'string' && paymentMethod.trim()) {
        const pm = paymentMethod.trim();
        const existing = paymentMethodMap.get(pm) || { value: 0, count: 0 };
        paymentMethodMap.set(pm, {
          value: existing.value + amount,
          count: existing.count + 1
        });
      }

      // Group by product
      if (product) {
        const existing = productMap.get(product) || { value: 0, count: 0 };
        const valueToAdd = dataType === 'volunteer' && hoursValue > 0 ? hoursValue : amount;
        // Use actual quantity if available, otherwise count as 1
        const quantityToAdd = quantity;
        productMap.set(product, {
          value: existing.value + valueToAdd,
          count: existing.count + quantityToAdd
        });
      }

      // Group by location
      let location: string | null = null;
      for (const field of locationFields) {
        const value = data[field];
        if (value && typeof value === 'string' && value.trim()) {
          location = value.trim();
          break;
        }
      }
      if (location) {
        const existing = locationMap.get(location) || { value: 0, count: 0 };
        const valueToAdd = dataType === 'volunteer' && hoursValue > 0 ? hoursValue : amount;
        locationMap.set(location, {
          value: existing.value + valueToAdd,
          count: existing.count + 1
        });
      }
    }

    // Debug: Log unique customers count and monthly data for sales data
    if (dataType === 'sales') {
      console.log(`[Custom Insights] ${source.name}: Unique customers = ${uniqueCustomers.size}, Total records = ${records.length}`);
      console.log(`[Custom Insights] Monthly data map size: ${monthlyDataMap.size}, Keys:`, Array.from(monthlyDataMap.keys()));
    }

    // Build monthly data - include all months with data
    const monthlyData = monthlyBuckets.map((bucket) => {
      const data = monthlyDataMap.get(bucket.key) || { value: 0, count: 0 };
      return {
        label: bucket.label,
        value: data.value,
        count: data.count
      };
    });
    
    // Also include any months from the data that aren't in the standard buckets
    const allDataMonths = Array.from(monthlyDataMap.keys());
    for (const monthKey of allDataMonths) {
      if (!monthlyBuckets.some(b => b.key === monthKey)) {
        const data = monthlyDataMap.get(monthKey);
        if (data && (data.value > 0 || data.count > 0)) {
          const [year, month] = monthKey.split('-');
          const date = new Date(parseInt(year), parseInt(month) - 1, 1);
          monthlyData.push({
            label: format(date, 'MMM yy'),
            value: data.value,
            count: data.count
          });
        }
      }
    }
    
    // Sort by date (parse labels to sort correctly)
    monthlyData.sort((a, b) => {
      try {
        const dateA = parse(a.label, 'MMM yy', new Date());
        const dateB = parse(b.label, 'MMM yy', new Date());
        return dateA.getTime() - dateB.getTime();
      } catch {
        // If parsing fails, keep original order
        return 0;
      }
    });

    // Top items (products)
    const topItems = Array.from(productMap.entries())
      .map(([name, stats]) => ({ name, value: stats.value, count: stats.count }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);

    // Top customers (for sales data)
    const topCustomers = Array.from(customerMap.entries())
      .map(([id, stats]) => ({ name: stats.name, value: stats.value, count: stats.count }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);

    // Category breakdown
    const categoryBreakdown = Array.from(categoryMap.entries())
      .map(([name, stats]) => ({ name, value: stats.value, count: stats.count }))
      .sort((a, b) => b.value - a.value);
    
    // Payment method breakdown
    const paymentMethodBreakdown = Array.from(paymentMethodMap.entries())
      .map(([name, stats]) => ({ name, value: stats.value, count: stats.count }))
      .sort((a, b) => b.value - a.value);

    // Calculate trends
    const nonZeroMonths = monthlyData.filter((m) => m.value > 0);
    let growth = 0;
    let periodOverPeriod = 0;
    let peakMonth: { label: string; value: number } | null = null;

    if (nonZeroMonths.length >= 2) {
      const recent = nonZeroMonths.slice(-3);
      const prior = nonZeroMonths.slice(-6, -3);
      const recentAvg = recent.reduce((sum, m) => sum + m.value, 0) / recent.length;
      const priorAvg = prior.length > 0 ? prior.reduce((sum, m) => sum + m.value, 0) / prior.length : recentAvg;
      growth = priorAvg > 0 ? ((recentAvg - priorAvg) / priorAvg) * 100 : 0;

      const lastMonth = nonZeroMonths[nonZeroMonths.length - 1];
      const prevMonth = nonZeroMonths[nonZeroMonths.length - 2];
      periodOverPeriod = prevMonth.value > 0 ? ((lastMonth.value - prevMonth.value) / prevMonth.value) * 100 : 0;

      peakMonth = nonZeroMonths.reduce((max, m) => (m.value > max.value ? m : max), nonZeroMonths[0]);
    }

    const lastSynced = records.length > 0 ? records[0].syncedAt : null;

    // Check for cached AI insights first
    let dynamicInsights: DynamicInsight | null = null;
    let computedMetrics: Record<string, number> = {};
    
    // Try to load cached AI insights from database
    // Safely check if aiInsights field exists (may not exist if migration hasn't run)
    try {
      if ((source as any).aiInsights && typeof (source as any).aiInsights === 'object') {
        dynamicInsights = (source as any).aiInsights as DynamicInsight;
        console.log(`[Custom Insights] ✅ Using cached AI insights for: ${source.name}`);
        console.log(`[Custom Insights] Cached primary metrics:`, dynamicInsights.primaryMetrics.map(m => m.label));
        console.log(`[Custom Insights] Cached secondary metrics:`, dynamicInsights.secondaryMetrics.map(m => m.label));
        console.log(`[Custom Insights] Cached visualizations:`, dynamicInsights.visualizations?.length || 0, 'visualizations');
        if (dynamicInsights.visualizations && dynamicInsights.visualizations.length > 0) {
          console.log(`[Custom Insights] Visualization types:`, dynamicInsights.visualizations.map(v => `${v.type}: ${v.title}`));
        }
      }
    } catch (error) {
      // Field doesn't exist or can't be parsed - that's okay, we'll generate new insights
      console.log(`[Custom Insights] No cached insights found for: ${source.name}`);
    }
    
    // Only call AI if we don't have cached insights, have data, and it's not too large
    if (!dynamicInsights && records.length > 0 && records.length < 1000) {
      try {
        console.log(`[Custom Insights] No cached insights found, generating AI analysis for: ${source.name} (${records.length} records)`);
        // Use a sample of records for AI analysis
        const sampleData = records.slice(0, 50).map((r: { data: unknown }) => r.data as Record<string, unknown>);
        if (sampleData.length > 0) {
          // Ensure detectedSchema has samples property
          const schemaWithSamples = detectedSchema ? {
            columns: detectedSchema.columns.map((col: { name: string; type: string; samples?: string[] }) => ({
              ...col,
              samples: (col as { samples?: string[] }).samples || []
            }))
          } : null;
          
          dynamicInsights = await generateDynamicInsights({
            name: source.name,
            description: source.description,
            fieldMapping,
            detectedSchema: schemaWithSamples,
            sampleData
          });
          
          if (dynamicInsights) {
            console.log(`[Custom Insights] ✅ AI insights generated for: ${source.name}, saving to cache...`);
            
            // Save AI insights to database for future use
            // Note: This will fail silently if migration hasn't been run yet
            try {
              await prisma.customDataSource.update({
                where: { id: source.id },
                data: {
                  aiInsights: dynamicInsights as any,
                  aiInsightsGeneratedAt: new Date()
                }
              });
              console.log(`[Custom Insights] ✅ Cached AI insights saved for: ${source.name}`);
            } catch (saveError: any) {
              // Gracefully handle if columns don't exist yet (migration not run)
              if (saveError?.code === 'P2025' || saveError?.message?.includes('column') || saveError?.message?.includes('does not exist')) {
                console.log(`[Custom Insights] ⚠️ Database columns not ready yet. Run migration to enable caching. Insights still work, just not cached.`);
              } else {
                console.warn(`[Custom Insights] Failed to save AI insights to cache:`, saveError?.message || saveError);
              }
              // Continue without crashing - insights still work, just not cached
            }
          } else {
            console.log(`[Custom Insights] ⚠️ AI returned null for: ${source.name}, using fallback`);
          }

          // Compute metrics based on AI suggestions (for both cached and newly generated)
          if (dynamicInsights) {
            for (const metric of [...dynamicInsights.primaryMetrics, ...dynamicInsights.secondaryMetrics]) {
              // Find matching field in data
              const fieldName = Object.keys(fieldMapping).find(
                (k) => {
                  const mapped = fieldMapping[k];
                  return mapped && metric.label.toLowerCase().includes(mapped.toLowerCase());
                }
              ) || Object.keys(sampleData[0] || {}).find(
                (k) => metric.label.toLowerCase().includes(k.toLowerCase())
              );

              if (fieldName) {
                let total = 0;
                let count = 0;
                for (const record of records) {
                  const data = record.data as Record<string, unknown>;
                  const value = data[fieldName];
                  if (typeof value === 'number') {
                    total += value;
                    count++;
                  } else if (typeof value === 'string') {
                    const parsed = parseFloat(value.replace(/[^0-9.-]/g, ''));
                    if (!Number.isNaN(parsed)) {
                      total += parsed;
                      count++;
                    }
                  }
                }
                const aggregation = (metric as { aggregation?: string }).aggregation || 'sum';
                computedMetrics[fieldName] = aggregation === 'average' ? (count > 0 ? total / count : 0) : total;
              }
            }
          }
        }
      } catch (error) {
        // Log error for debugging, but fall back gracefully
        console.error(`[Custom Insights] ❌ AI failed for ${source.name}:`, error instanceof Error ? error.message : error);
        dynamicInsights = null;
        computedMetrics = {};
      }
    } else {
      console.log(`[Custom Insights] Skipping AI for ${source.name} (${records.length} records, limit: 1000)`);
    }

    // Build context-aware metrics (use AI labels if available, but use actual calculated values)
    const primaryMetric = (() => {
      // Use AI label if available, but always use the actual calculated values
      let label = 'Total Records';
      let value = records.length;
      let formatted = `${records.length.toLocaleString()} records`;
      
      if (dynamicInsights && dynamicInsights.primaryMetrics.length > 0) {
        const aiMetric = dynamicInsights.primaryMetrics[0];
        label = aiMetric.label;
        
        // Check if this is a customer metric - use unique customers
        const labelLower = label.toLowerCase();
        if ((labelLower.includes('customer') || labelLower.includes('client') || labelLower.includes('buyer') || labelLower.includes('unique')) && dataType === 'sales') {
          value = uniqueCustomers.size;
          console.log(`[Custom Insights] Primary metric "${label}" matched customer metric, using uniqueCustomers.size = ${uniqueCustomers.size}`);
        } else if (dataType === 'volunteer' && recordsWithHours > 0) {
          value = totalHours;
        } else if (dataType === 'membership') {
          value = totalMembers;
        } else if (recordsWithAmount > 0) {
          value = totalAmount;
        } else {
          value = records.length;
        }
        
        // Format using AI template with actual value
        formatted = aiMetric.formatted
          .replace(/\{\{value\}\}/g, value.toLocaleString())
          .replace(/\{value\}/g, value.toLocaleString())
          .replace(/VALUE_PLACEHOLDER/g, value.toLocaleString());
      } else {
        // Fallback to heuristic-based
        if (dataType === 'volunteer' && recordsWithHours > 0) {
          label = 'Total Volunteer Hours';
          value = totalHours;
          formatted = `${totalHours.toLocaleString()} hours`;
        } else if (dataType === 'membership') {
          label = 'Total Members';
          value = totalMembers;
          formatted = `${totalMembers.toLocaleString()} members`;
        } else if (recordsWithAmount > 0) {
          label = dataType === 'sales' ? 'Total Revenue' : dataType === 'donations' ? 'Total Donations' : 'Total Amount';
          value = totalAmount;
          formatted = `$${totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        }
      }
      
      return { label, value, formatted };
    })();

    const secondaryMetrics: Array<{ label: string; value: number; formatted: string }> = [];
    
    // Use AI-generated metrics if available, but use actual calculated values
    if (dynamicInsights && dynamicInsights.secondaryMetrics.length > 0) {
      for (const aiMetric of dynamicInsights.secondaryMetrics.slice(0, 4)) {
        let value = 0;
        
        // Determine value based on metric label and available data
        const labelLower = aiMetric.label.toLowerCase();
        
        // Check for customer metrics FIRST (before other checks)
        if (labelLower.includes('customer') || labelLower.includes('client') || labelLower.includes('buyer') || labelLower.includes('unique')) {
          // Always use unique customers for sales data when metric mentions customers
          value = dataType === 'sales' ? uniqueCustomers.size : records.length;
          console.log(`[Custom Insights] Secondary metric "${aiMetric.label}" matched customer/unique metric, using uniqueCustomers.size = ${uniqueCustomers.size}`);
        } else if (labelLower.includes('average') || labelLower.includes('avg')) {
          if (dataType === 'volunteer' && recordsWithHours > 0) {
            value = totalHours / recordsWithHours;
          } else if (recordsWithAmount > 0) {
            value = totalAmount / recordsWithAmount;
          }
        } else if (labelLower.includes('min') || labelLower.includes('minimum')) {
          value = amounts.length > 0 ? Math.min(...amounts) : 0;
        } else if (labelLower.includes('max') || labelLower.includes('maximum')) {
          value = amounts.length > 0 ? Math.max(...amounts) : 0;
        } else if (labelLower.includes('total') || labelLower.includes('count')) {
          if (labelLower.includes('item') && (labelLower.includes('sold') || labelLower.includes('total'))) {
            // Total Items Sold - this means total number of sales transactions (records), not sum of quantities
            value = records.length;
            console.log(`[Custom Insights] Secondary metric "${aiMetric.label}" matched items sold, using record count = ${value} (not sum of quantities)`);
          } else if (labelLower.includes('record') || labelLower.includes('sale')) {
            value = records.length;
          } else if (labelLower.includes('member')) {
            value = dataType === 'membership' ? totalMembers : records.length;
          } else if (dataType === 'volunteer' && recordsWithHours > 0) {
            value = totalHours;
          } else if (recordsWithAmount > 0) {
            value = totalAmount;
          } else {
            value = records.length;
          }
        } else if (labelLower.includes('revenue') || labelLower.includes('amount') || labelLower.includes('sales')) {
          value = recordsWithAmount > 0 ? totalAmount : 0;
        } else if (labelLower.includes('hour')) {
          value = recordsWithHours > 0 ? totalHours : 0;
        } else {
          // Default: use total amount if available, otherwise record count
          value = recordsWithAmount > 0 ? totalAmount : records.length;
        }
        
        // Format using AI template
        const formatted = aiMetric.formatted
          .replace(/\{\{value\}\}/g, value.toLocaleString())
          .replace(/\{value\}/g, value.toLocaleString())
          .replace(/VALUE_PLACEHOLDER/g, value.toLocaleString());
        
        secondaryMetrics.push({ label: aiMetric.label, value, formatted });
      }
    } else {
      // Fallback to heuristic-based metrics
      if (dataType === 'volunteer' && recordsWithHours > 0) {
        secondaryMetrics.push({
          label: 'Average Hours',
          value: totalHours / recordsWithHours,
          formatted: `${(totalHours / recordsWithHours).toFixed(1)} hours`
        });
      }
      
      if (recordsWithAmount > 0) {
        secondaryMetrics.push({
          label: 'Average Amount',
          value: totalAmount / recordsWithAmount,
          formatted: `$${(totalAmount / recordsWithAmount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        });
      }
      
      if (dataType === 'membership') {
        secondaryMetrics.push({
          label: 'Active Members',
          value: activeMembers,
          formatted: `${activeMembers.toLocaleString()} active`
        });
      }

      secondaryMetrics.push({
        label: 'Total Records',
        value: records.length,
        formatted: `${records.length.toLocaleString()} records`
      });
    }

    return {
      id: source.id,
      name: source.name,
      description: source.description,
      dataType,
      recordCount,
      lastSynced,
      monthlyData,
      topItems,
      topCustomers: dataType === 'sales' && topCustomers.length > 0 ? topCustomers : undefined,
      categoryBreakdown,
      paymentMethodBreakdown: paymentMethodBreakdown.length > 0 ? paymentMethodBreakdown : undefined,
      trends: {
        growth,
        periodOverPeriod,
        peakMonth
      },
      summary: {
        totalAmount,
        totalRecords: records.length,
        averageAmount: recordsWithAmount > 0 ? totalAmount / recordsWithAmount : 0,
        minAmount: amounts.length > 0 ? Math.min(...amounts) : 0,
        maxAmount: amounts.length > 0 ? Math.max(...amounts) : 0,
        totalHours: recordsWithHours > 0 ? totalHours : undefined,
        averageHours: recordsWithHours > 0 ? totalHours / recordsWithHours : undefined,
        totalMembers: dataType === 'membership' ? totalMembers : undefined,
        activeMembers: dataType === 'membership' ? activeMembers : undefined
      },
      hasAmountData: recordsWithAmount > 0,
      hasCategoryData: categoryMap.size > 0,
      hasProductData: productMap.size > 0,
      hasHoursData: recordsWithHours > 0,
      metrics: {
        primaryMetric,
        secondaryMetrics
      },
      dynamicInsights: dynamicInsights || undefined,
      computedMetrics: Object.keys(computedMetrics).length > 0 ? computedMetrics : undefined
    };
  }));
}

