import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'

export function AboutApp() {
  const { locale } = useLocale()
  const hero = copy.hero[locale]
  const about = copy.about[locale]

  return (
    <div className="flex h-full flex-col gap-5 overflow-y-auto p-5 text-sm leading-relaxed">
      <header>
        <h2 className="text-xl font-semibold tracking-tight">{hero.name}</h2>
        <p className="mt-1 font-medium text-[var(--color-accent)]">{hero.role}</p>
        <p className="mt-1 text-[var(--color-text-muted)]">{hero.focus}</p>
        <p className="mt-4 text-base text-[var(--color-text)]">{hero.headline}</p>
        <p className="mt-3 text-[var(--color-text-muted)]">{hero.oneLiner}</p>
      </header>
      <section className="rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/60 p-4">
        <h3 className="font-mono text-xs tracking-wider text-[var(--color-text-muted)] uppercase">
          {about.title}
        </h3>
        <div className="mt-3 space-y-3 whitespace-pre-line text-[var(--color-text-muted)]">
          {about.description}
        </div>
      </section>
      <section className="rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/60 p-4">
        <h3 className="font-mono text-xs tracking-wider text-[var(--color-text-muted)] uppercase">
          {about.valueTitle}
        </h3>
        <p className="mt-3 text-[var(--color-text-muted)]">{about.value}</p>
      </section>
      <p className="inline-flex w-fit rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-emerald)]">
        {about.expanding}
      </p>
    </div>
  )
}
