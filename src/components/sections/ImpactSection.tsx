import { Reveal } from '../Reveal'
import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'

export function ImpactSection() {
  const { locale } = useLocale()
  const i = copy.impact[locale]

  return (
    <section id="impact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{i.title}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {i.items.map((item, idx) => (
            <div
              key={item}
              className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] p-6 transition hover:border-[var(--color-accent)]/40"
            >
              <span className="font-mono text-3xl font-semibold text-[var(--color-accent)]/80">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{item}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
