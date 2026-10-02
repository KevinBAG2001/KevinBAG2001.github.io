import { Reveal } from '../Reveal'
import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'

export function HowBuildSection() {
  const { locale } = useLocale()
  const b = copy.howBuild[locale]
  const rows = [b.architecture, b.development, b.data, b.delivery, b.production]

  return (
    <section id="build" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{b.title}</h2>
        <p className="mt-3 font-mono text-sm text-[var(--color-accent)]">{b.flow}</p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {rows.map((row, i) => (
            <div
              key={row}
              className="group rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] p-5 transition hover:border-[var(--color-border)]"
            >
              <span className="font-mono text-[10px] text-[var(--color-text-muted)]">0{i + 1}</span>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)] group-hover:text-[var(--color-text)]">
                {row}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
