import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'

const stages = ['dev', 'qa', 'main'] as const

export function HeroPipelineVisual() {
  const { locale } = useLocale()
  const v = copy.heroVisual[locale]
  const reduce = useReducedMotion()
  const [activeStage, setActiveStage] = useState(0)
  const [deployDone, setDeployDone] = useState(false)

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
      <div className="glass-panel overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-[0_24px_80px_-24px_rgba(59,130,246,0.25)]">
        <div className="flex items-center gap-2 border-b border-[var(--color-border-subtle)] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[10px] tracking-wider text-[var(--color-text-muted)] uppercase">
            {v.pipelineLabel}
          </span>
        </div>
        <div className="space-y-3 p-4 font-mono text-xs sm:text-sm">
          <p className="text-[var(--color-text-muted)]">
            <span className="text-emerald-400">$</span> gitlab-ci pipeline run
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {stages.map((stage, i) => {
              const lit = i <= activeStage || deployDone
              return (
                <motion.span
                  key={stage}
                  className={`rounded-md border px-2.5 py-1 transition-colors ${
                    lit
                      ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-300'
                      : 'border-[var(--color-border-subtle)] text-[var(--color-text-muted)]'
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
                deployDone
                  ? 'border-emerald-400/60 bg-emerald-500/20 text-emerald-200'
                  : 'border-[var(--color-border-subtle)] text-[var(--color-text-muted)]'
              }`}
              animate={deployDone && !reduce ? { opacity: [0.7, 1] } : {}}
            >
              {v.deployLine}
            </motion.span>
          </div>
          <p className="text-[var(--color-text-muted)]">
            <span className="text-[var(--color-accent)]">INFO</span> {v.branchFlow}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        {v.impactCards.map((card, i) => (
          <motion.div
            key={card.label}
            className="glass-panel rounded-xl border border-[var(--color-border-subtle)] p-4 transition hover:border-[var(--color-accent)]/30"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.45 }}
          >
            <p className="font-mono text-lg font-semibold text-[var(--color-accent)]">{card.metric}</p>
            <p className="mt-1 text-xs leading-snug text-[var(--color-text-muted)]">{card.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
