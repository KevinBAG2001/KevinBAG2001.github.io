import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocale } from '../../context/LocaleContext'
import { buildStats } from '../../generated/buildStats'
import { withMetrics } from '../../lib/formatMetrics'
import { copy } from '../../i18n/translations'

const stages = ['dev', 'qa', 'main'] as const

const litChip =
  'border-[var(--color-secondary)]/55 bg-[color-mix(in_srgb,var(--color-secondary)_18%,transparent)] text-[color-mix(in_srgb,var(--color-secondary)_85%,white)]'
const litDeploy =
  'border-[var(--color-accent)]/55 bg-[color-mix(in_srgb,var(--color-accent)_20%,transparent)] text-[color-mix(in_srgb,var(--color-accent)_80%,white)]'

function resolveMetric(metric: string): string {
  if (metric === '__PUBLIC_REPOS__') {
    return buildStats.publicRepos != null ? String(buildStats.publicRepos) : '—'
  }
  if (metric === '__MERGED_MRS__' && buildStats.gitlab) return String(buildStats.gitlab.mergedMrs)
  if (metric === '__PRODUCTION_RELEASES__' && buildStats.gitlab)
    return String(buildStats.gitlab.productionReleases)
  if (buildStats.gitlab) {
    if (metric === '__MERGED_MRS__') return String(buildStats.gitlab.mergedMrs)
    if (metric === '__PRODUCTION_RELEASES__') return String(buildStats.gitlab.productionReleases)
  }
  return metric.startsWith('__') ? '—' : metric
}

export function HeroPipelineVisual() {
  const { locale } = useLocale()
  const v = copy.heroVisual[locale]
  const reduce = useReducedMotion()
  const [activeStage, setActiveStage] = useState(0)
  const [deployDone, setDeployDone] = useState(false)

  const deployLine = withMetrics(v.deployLineTemplate, locale)

  useEffect(() => {
    if (reduce) {
      setActiveStage(2)
      setDeployDone(true)
      return
    }
    let cancelled = false
    const timeouts: ReturnType<typeof setTimeout>[] = []
    const runCycle = () => {
      setDeployDone(false)
      setActiveStage(0)
      timeouts.push(setTimeout(() => !cancelled && setActiveStage(1), 500))
      timeouts.push(setTimeout(() => !cancelled && setActiveStage(2), 1000))
      timeouts.push(setTimeout(() => !cancelled && setDeployDone(true), 1500))
    }
    runCycle()
    const interval = setInterval(runCycle, 3200)
    return () => {
      cancelled = true
      clearInterval(interval)
      timeouts.forEach(clearTimeout)
    }
  }, [reduce])

  return (
    <div className="flex flex-col gap-4" aria-hidden>
      <div className="glass-panel overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-[0_24px_80px_-24px_rgba(226,54,54,0.22)]">
        <div className="flex items-center gap-2 border-b border-[var(--color-border-subtle)] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-secondary)]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-secondary-deep)]/90" />
          <span className="ml-2 font-mono text-[10px] tracking-wider text-[var(--color-text-muted)] uppercase">
            {v.pipelineLabel}
          </span>
        </div>
        <div className="space-y-3 p-4 font-mono text-xs sm:text-sm">
          <p className="text-[var(--color-text-muted)]">
            <span className="text-[var(--color-secondary)]">$</span> gitlab-ci pipeline run
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {stages.map((stage, i) => {
              const lit = i <= activeStage || deployDone
              return (
                <motion.span
                  key={stage}
                  className={`rounded-md border px-2.5 py-1 transition-colors ${
                    lit ? litChip : 'border-[var(--color-border-subtle)] text-[var(--color-text-muted)]'
                  }`}
                  animate={lit && !reduce ? { scale: [1, 1.04, 1] } : {}}
                  transition={{ duration: 0.35 }}
                >
                  {stage}
                  {lit ? ' ✓' : ''}
                </motion.span>
              )
            })}
            <span className="text-[var(--color-text-muted)]">→</span>
            <motion.span
              className={`rounded-md border px-2.5 py-1 ${
                deployDone ? litDeploy : 'border-[var(--color-border-subtle)] text-[var(--color-text-muted)]'
              }`}
              animate={deployDone && !reduce ? { opacity: [0.7, 1] } : {}}
            >
              {deployLine}
            </motion.span>
          </div>
          <p className="text-[var(--color-text-muted)]">
            <span className="text-[var(--color-accent)]">INFO</span> {v.branchFlow}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        {v.impactCards.map((card, i) => {
          const metric = resolveMetric(card.metric)
          const label = withMetrics(card.label, locale)
          return (
            <motion.div
              key={card.label}
              className="glass-panel rounded-xl border border-[var(--color-border-subtle)] p-4 transition hover:border-[var(--color-accent)]/30"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.45 }}
            >
              <p className="font-mono text-lg font-semibold text-[var(--color-accent)]">{metric}</p>
              <p className="mt-1 text-xs leading-snug text-[var(--color-text-muted)]">{label}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}