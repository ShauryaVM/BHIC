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
  }
});

export function InsightsReport({ data }: { data: InsightsData }) {
  return (
    <Document>
      <Page style={styles.page} size="A4">
        <View style={styles.header}>
          <Text style={styles.title}>BHIC Integrated Insights</Text>
          <Text style={styles.subtitle}>
            Generated {formatDate(data.generatedAt)} · Data window {formatDate(data.range.from)} – {formatDate(data.range.to)}
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


