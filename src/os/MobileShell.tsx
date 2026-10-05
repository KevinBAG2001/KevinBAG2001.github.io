import { Link } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext'
import { copy } from '../i18n/translations'
import { AboutApp } from './apps/AboutApp'
import { ContactApp } from './apps/ContactApp'
import { ProjectsApp } from './apps/ProjectsApp'
import { ResumeApp } from './apps/ResumeApp'
import { tOs } from './i18n/osCopy'

export function MobileShell() {
  const { locale, toggleLocale } = useLocale()
  const m = tOs('mobile', locale)
  const hero = copy.hero[locale]

  const sections = [
    { id: 'about', title: copy.nav[locale].about, body: <AboutApp /> },
    { id: 'projects', title: copy.nav[locale].projects, body: <ProjectsApp /> },
    { id: 'resume', title: copy.nav[locale].experience, body: <ResumeApp /> },
    { id: 'contact', title: copy.nav[locale].contact, body: <ContactApp /> },
  ]

  return (
    <div className="min-h-dvh bg-[var(--color-surface)] pt-4 pb-8">
      <header className="border-b border-[var(--color-border-subtle)] px-4 pb-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="text-lg font-semibold">{m.title}</h1>
            <p className="text-sm text-[var(--color-text-muted)]">{m.subtitle}</p>
            <p className="mt-2 text-sm">{hero.headline}</p>
          </div>
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-lg border border-[var(--color-border)] px-2 py-1 text-xs uppercase"
          >
            {locale === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
        <p className="mt-2 text-xs text-[var(--color-emerald)]">{copy.hero[locale].availability}</p>
        <Link to="/classic" className="mt-2 inline-block text-xs text-[var(--color-accent)]">
          {tOs('statusBar', locale).classicView}
        </Link>
      </header>
      <p className="px-4 py-3 text-xs text-[var(--color-text-muted)]">{m.hint}</p>
      {sections.map((s) => (
        <section key={s.id} id={s.id} className="border-b border-[var(--color-border-subtle)]">
          <h2 className="sticky top-0 z-10 bg-[var(--color-surface)]/95 px-4 py-2 text-sm font-medium backdrop-blur">
            {s.title}
          </h2>
          <div className="h-[min(70vh,520px)]">{s.body}</div>
        </section>
      ))}
    </div>
  )
}
