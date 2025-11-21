import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

import type { InsightsData } from '@/lib/insights-data';
import { formatCurrency, formatDate, formatNumber, formatPercent } from '@/lib/format';

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 12,
    fontFamily: 'Helvetica',
    color: '#0f172a',
    lineHeight: 1.4
  },
  header: {
    marginBottom: 18
  },
  title: {
    fontSize: 20,
    fontWeight: 700
  },
  subtitle: {
    marginTop: 4,
    fontSize: 11,
    color: '#475569'
  },
  section: {
    marginBottom: 18
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 6
  },
  highlightCard: {
    borderWidth: 1,
    borderColor: '#cbd5f5',
    borderRadius: 6,
    padding: 8,
    marginBottom: 6
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 6
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0'
  },
  tableHeader: {
    backgroundColor: '#f8fafc',
    fontWeight: 700
  },
  cell: {
    flexGrow: 1,
    padding: 6,
    fontSize: 11
  },
  kpiRow: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  kpiCard: {
    width: '50%',
    padding: 6
  },
  kpiLabel: {
    fontSize: 11,
    color: '#64748b'
  },
  kpiValue: {
    fontSize: 16,
    fontWeight: 700
  },
  metricRow: {
    marginBottom: 6
  },
  metricLabel: {
    fontSize: 11,
    fontWeight: 700
  },
  metricHelp: {
    fontSize: 10,
    color: '#475569'
  },
  barTrack: {
    height: 6,
    backgroundColor: '#e2e8f0',
    borderRadius: 3,
    marginTop: 4
  },
  barFill: {
    height: 6,
    borderRadius: 3
  },
  splitRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  splitCol: {
    flex: 1
  },
  smallTableTitle: {
    fontSize: 11,
    fontWeight: 700,
    marginBottom: 4
  }
});

const BAR_WIDTH = 150;

function MetricBar({ value, max, color }: { value: number; max: number; color: string }) {
  const width = max <= 0 ? 0 : Math.max(4, (value / max) * BAR_WIDTH);
  return (
    <View style={styles.barTrack}>
      <View style={[styles.barFill, { width, backgroundColor: color }]} />
    </View>
  );
}

function formatDateTime(value: string | Date) {
  const date = typeof value === 'string' ? new Date(value) : value;
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(date);
}

export function InsightsReport({ data }: { data: InsightsData }) {
  const monthlyPoints = data.dashboard.charts.monthly.slice(-6);
  const maxFunds = Math.max(...monthlyPoints.map((point) => point.funds), 1);
  const maxTickets = Math.max(...monthlyPoints.map((point) => point.tickets), 1);
  const maxSessions = Math.max(...monthlyPoints.map((point) => point.sessions), 1);

  const acquisitions = data.donors.charts.acquisitions.slice(-6);
  const maxAcq = Math.max(...acquisitions.map((item) => item.value), 1);
  const ticketsPerEvent = data.events.data.charts.ticketsPerEvent.slice(0, 6);
  const revenuePerEvent = data.events.data.charts.revenuePerEvent.slice(0, 6);
  const donorRatio =
    data.donors.summary.totalDonors > 0 ? data.donors.summary.activeDonors / data.donors.summary.totalDonors : 0;
  const grossRevenue = data.events.data.summary.grossRevenue;
  const netRevenue = data.events.data.summary.netRevenue;
  const netShare = grossRevenue > 0 ? netRevenue / grossRevenue : 0;

  return (
    <Document>
      <Page style={styles.page} size="A4">
        <View style={styles.header}>
          <Text style={styles.title}>BHIC Integrated Insights</Text>
          <Text style={styles.subtitle}>
            Generated {formatDateTime(data.generatedAt)} · Data window {formatDate(data.range.from)} – {formatDate(data.range.to)}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key metrics</Text>
          <View style={styles.kpiRow}>
            <View style={styles.kpiCard}>
              <Text style={styles.kpiLabel}>Funds raised (YTD)</Text>
              <Text style={styles.kpiValue}>{formatCurrency(data.dashboard.kpis.fundsYtd)}</Text>
            </View>
            <View style={styles.kpiCard}>
              <Text style={styles.kpiLabel}>Active donors</Text>
              <Text style={styles.kpiValue}>{formatNumber(data.dashboard.kpis.activeDonors)}</Text>
            </View>
            <View style={styles.kpiCard}>
              <Text style={styles.kpiLabel}>Tickets sold</Text>
              <Text style={styles.kpiValue}>{formatNumber(data.dashboard.kpis.ticketsSold)}</Text>
            </View>
            <View style={styles.kpiCard}>
              <Text style={styles.kpiLabel}>Sessions (30d)</Text>
              <Text style={styles.kpiValue}>{formatNumber(data.dashboard.kpis.sessionsLast30Days)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Highlights</Text>
          {data.highlights.map((highlight) => (
            <View key={highlight.title} style={styles.highlightCard}>
              <Text style={{ fontSize: 12, fontWeight: 700 }}>{highlight.title}</Text>
              <Text style={{ marginTop: 4 }}>{highlight.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data freshness</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Source</Text>
              <Text style={styles.cell}>Window</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Insights generated</Text>
              <Text style={styles.cell}>{formatDateTime(data.generatedAt)}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Financial (pledges)</Text>
              <Text style={styles.cell}>
                {formatDate(data.range.from)} – {formatDate(data.range.to)}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Eventbrite</Text>
              <Text style={styles.cell}>
                {formatDate(data.events.filters.from ?? data.range.from)} – {formatDate(data.events.filters.to ?? data.range.to)}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 1.4 }]}>GA4 analytics</Text>
              <Text style={styles.cell}>
                {formatDate(data.analytics.filters.from ?? data.range.from)} – {formatDate(data.analytics.filters.to ?? data.range.to)}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Donor health summary</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Metric</Text>
              <Text style={styles.cell}>Value</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Total donors</Text>
              <Text style={styles.cell}>{formatNumber(data.donors.summary.totalDonors)}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Active donors</Text>
              <Text style={styles.cell}>
                {formatNumber(data.donors.summary.activeDonors)} ({formatPercent(donorRatio)})
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Avg lifetime value</Text>
              <Text style={styles.cell}>{formatCurrency(data.donors.summary.averageLifetimeValue)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Monthly performance snapshot</Text>
          {monthlyPoints.map((point) => (
            <View key={point.label} style={styles.metricRow}>
              <Text style={styles.metricLabel}>{point.label}</Text>
              <Text style={styles.metricHelp}>Funds raised {formatCurrency(point.funds)}</Text>
              <MetricBar value={point.funds} max={maxFunds} color="#0f172a" />
              <Text style={[styles.metricHelp, { marginTop: 3 }]}>
                Tickets {formatNumber(point.tickets)} · Sessions {formatNumber(point.sessions)}
              </Text>
              <MetricBar value={point.tickets} max={maxTickets} color="#2563eb" />
              <MetricBar value={point.sessions} max={maxSessions} color="#059669" />
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top donors</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Name</Text>
              <Text style={styles.cell}>Lifetime given</Text>
              <Text style={styles.cell}>Last gift</Text>
            </View>
            {data.donors.donors.map((donor) => (
              <View key={donor.id} style={styles.tableRow}>
                <Text style={[styles.cell, { flex: 1.4 }]}>{donor.name}</Text>
                <Text style={styles.cell}>{formatCurrency(donor.totalGiven)}</Text>
                <Text style={styles.cell}>{donor.lastGiftDate ? formatDate(donor.lastGiftDate) : '—'}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={[styles.section, styles.splitRow]}>
          <View style={[styles.splitCol, { marginRight: 8 }]}>
            <Text style={styles.smallTableTitle}>Donor acquisition (last 6 months)</Text>
            {acquisitions.map((item) => (
              <View key={item.label} style={{ marginBottom: 6 }}>
                <Text style={styles.metricLabel}>{item.label}</Text>
                <Text style={styles.metricHelp}>{formatNumber(item.value)} new donors</Text>
                <MetricBar value={item.value} max={maxAcq} color="#2563eb" />
              </View>
            ))}
          </View>
          <View style={[styles.splitCol, { marginLeft: 8 }]}>
            <Text style={styles.smallTableTitle}>Lifetime gift distribution</Text>
            <View style={styles.table}>
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.cell, { flex: 1.4 }]}>Segment</Text>
                <Text style={styles.cell}>Donors</Text>
              </View>
              {data.donors.charts.giftDistribution.map((segment) => (
                <View key={segment.name} style={styles.tableRow}>
                  <Text style={[styles.cell, { flex: 1.4 }]}>{segment.name}</Text>
                  <Text style={styles.cell}>{formatNumber(segment.value)}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top events</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Event</Text>
              <Text style={styles.cell}>Tickets sold</Text>
              <Text style={styles.cell}>Capacity</Text>
              <Text style={styles.cell}>Gross revenue</Text>
            </View>
            {data.events.data.events.slice(0, 5).map((event) => (
              <View key={event.id} style={styles.tableRow}>
                <Text style={[styles.cell, { flex: 1.4 }]}>{event.name}</Text>
                <Text style={styles.cell}>{formatNumber(event.ticketsSold)}</Text>
                <Text style={styles.cell}>
                  {formatNumber(event.ticketsTotal)} ({formatPercent(event.ticketsTotal ? event.ticketsSold / event.ticketsTotal : 0)})
                </Text>
                <Text style={styles.cell}>{formatCurrency(event.grossRevenue)}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Revenue mix summary</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Metric</Text>
              <Text style={styles.cell}>Value</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Gross revenue</Text>
              <Text style={styles.cell}>{formatCurrency(grossRevenue)}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Net revenue</Text>
              <Text style={styles.cell}>{formatCurrency(netRevenue)}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Net capture</Text>
              <Text style={styles.cell}>{formatPercent(netShare)}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Avg capacity fill</Text>
              <Text style={styles.cell}>{formatPercent(data.metrics.avgOccupancy)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tickets per event (top 6)</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.cell, { flex: 1.6 }]}>Event</Text>
              <Text style={styles.cell}>Tickets</Text>
            </View>
            {ticketsPerEvent.map((event) => (
              <View key={event.name} style={styles.tableRow}>
                <Text style={[styles.cell, { flex: 1.6 }]}>{event.name}</Text>
                <Text style={styles.cell}>{formatNumber(event.tickets)}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Revenue per event</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Event</Text>
              <Text style={styles.cell}>Gross</Text>
              <Text style={styles.cell}>Net</Text>
            </View>
            {revenuePerEvent.map((event) => (
              <View key={event.name} style={styles.tableRow}>
                <Text style={[styles.cell, { flex: 1.4 }]}>{event.name}</Text>
                <Text style={styles.cell}>{formatCurrency(event.gross)}</Text>
                <Text style={styles.cell}>{formatCurrency(event.net)}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Event demand & occupancy</Text>
          {data.events.data.events.slice(0, 4).map((event) => {
            const occupancy = event.ticketsTotal ? event.ticketsSold / event.ticketsTotal : 0;
            return (
              <View key={`${event.id}-occupancy`} style={{ marginBottom: 8 }}>
                <Text style={styles.metricLabel}>{event.name}</Text>
                <Text style={styles.metricHelp}>
                  {formatNumber(event.ticketsSold)} / {formatNumber(event.ticketsTotal)} seats ({formatPercent(occupancy)})
                </Text>
                <MetricBar value={occupancy} max={1} color="#f97316" />
                <Text style={styles.metricHelp}>Revenue {formatCurrency(event.grossRevenue)}</Text>
              </View>
            );
          })}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Digital performance summary</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Metric</Text>
              <Text style={styles.cell}>Value</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Users</Text>
              <Text style={styles.cell}>{formatNumber(data.analytics.data.summary.users)}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Sessions</Text>
              <Text style={styles.cell}>{formatNumber(data.analytics.data.summary.sessions)}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Pageviews</Text>
              <Text style={styles.cell}>{formatNumber(data.analytics.data.summary.pageviews)}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 1.4 }]}>Avg engagement time</Text>
              <Text style={styles.cell}>
                {formatNumber(data.analytics.data.summary.averageEngagementTime, 1)} sec
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top pages (GA4)</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.cell, { flex: 1.8 }]}>Title</Text>
              <Text style={styles.cell}>Pageviews</Text>
            </View>
            {data.analytics.data.topPages.rows.map((row) => (
              <View key={`${row.path}-${row.title}`} style={styles.tableRow}>
                <Text style={[styles.cell, { flex: 1.8 }]}>{row.title}</Text>
                <Text style={styles.cell}>{formatNumber(row.pageviews)}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}


