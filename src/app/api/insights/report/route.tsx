import React from 'react';
import { NextResponse } from 'next/server';
import { pdf } from '@react-pdf/renderer';

import { getInsightsData } from '@/lib/insights-data';
import { InsightsReport } from '@/lib/pdf/insights-report';

export async function GET() {
  try {
    const data = await getInsightsData();
    const instance = pdf(<InsightsReport data={data} />);
    const buffer = await instance.toBuffer();

    return new NextResponse(buffer as unknown as BodyInit, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="bhic-insights-${new Date().toISOString().slice(0, 10)}.pdf"`
      }
    });
  } catch (error) {
    console.error('Failed to generate insights PDF', error);
    return new NextResponse(JSON.stringify({ error: 'Unable to generate report right now.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}


