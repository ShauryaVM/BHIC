/**
 * Script to clear cached AI insights for custom data sources
 * Run with: npx tsx scripts/clear-cached-insights.ts
 */

import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

async function clearCachedInsights() {
  try {
    const result = await prisma.customDataSource.updateMany({
      where: {},
      data: {
        aiInsights: Prisma.JsonNull,
        aiInsightsGeneratedAt: null
      }
    });
    
    console.log(`✅ Cleared cached AI insights for ${result.count} data source(s)`);
    console.log('💡 Next time you visit the insights page, new AI insights will be generated with correct values.');
  } catch (error) {
    console.error('❌ Error clearing cached insights:', error);
  } finally {
    await prisma.$disconnect();
  }
}

clearCachedInsights();

