import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext'
import { useTheme } from '../context/ThemeContext'
import { copy } from '../i18n/translations'

const navIds = ['about', 'stack', 'build', 'projects', 'impact', 'experience', 'education', 'contact'] as const

export function Header() {
  const { locale, toggleLocale } = useLocale()
  const { theme, toggleTheme } = useTheme()
  const t = copy.nav[locale]
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/classic'

  const link = (id: string, label: string) =>
    isHome ? (
      <a
        href={`#${id}`}
        className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]"
        onClick={() => setOpen(false)}
      >
        {label}
      </a>
    ) : (
      <Link
        to={`/classic#${id}`}
        className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]"
        onClick={() => setOpen(false)}
      >
        {label}
      </Link>
    )

  const labels: Record<(typeof navIds)[number], string> = {
    about: t.about,
    stack: t.stack,
    build: t.build,
    projects: t.projects,
    impact: t.impact,
    experience: t.experience,
    education: t.education,
    contact: t.contact,
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border-subtle)] bg-[color-mix(in_srgb,var(--color-surface)_88%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/classic"
          className="font-mono text-sm font-medium tracking-tight text-[var(--color-text)]"
          onClick={() => setOpen(false)}
        >
          K. Austria
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navIds.map((id) => (
            <span key={id}>{link(id, labels[id])}</span>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-lg border border-[var(--color-border-subtle)] px-2.5 py-1.5 font-mono text-xs text-[var(--color-text-muted)] transition hover:border-[var(--color-border)] hover:text-[var(--color-text)]"
            aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a español'}
          >
            {locale === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg border border-[var(--color-border-subtle)] p-2 text-[var(--color-text-muted)] transition hover:border-[var(--color-border)] hover:text-[var(--color-text)]"
            aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            className="rounded-lg border border-[var(--color-border-subtle)] p-2 text-[var(--color-text-muted)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-3 border-t border-[var(--color-border-subtle)] px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          {navIds.map((id) => (
            <span key={id}>{link(id, labels[id])}</span>
          ))}
        </nav>
      )}
    </header>
  )
}
