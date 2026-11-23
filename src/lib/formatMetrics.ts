import { buildStats } from '../generated/buildStats'

export function metricValue(key: 'mergedMrs' | 'productionReleases' | 'projectCount'): string {
  const g = buildStats.gitlab
  if (!g) return '—'
  const n = g[key]
  return typeof n === 'number' ? String(n) : '—'
}

export function periodLabel(locale: 'es' | 'en'): string {
  const g = buildStats.gitlab
  if (!g) return locale === 'es' ? 'may–sep 2026' : 'May–Sep 2026'
  return locale === 'es' ? g.periodLabelEs : g.periodLabelEn
}

/** Sustituye marcadores __MERGED_MRS__, __PRODUCTION_RELEASES__, __PERIOD__, __PROJECT_COUNT__ */
export function withMetrics(template: string, locale: 'es' | 'en'): string {
  const g = buildStats.gitlab
  const merged = g ? String(g.mergedMrs) : '—'
  const releases = g ? String(g.productionReleases) : '—'
  const projects = g ? String(g.projectCount) : '—'
  const period = periodLabel(locale)
  return template
    .replaceAll('__MERGED_MRS__', merged)
    .replaceAll('__PRODUCTION_RELEASES__', releases)
    .replaceAll('__PROJECT_COUNT__', projects)
    .replaceAll('__PERIOD__', period)
}