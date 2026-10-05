import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocale } from '../context/LocaleContext'
import { copy } from '../i18n/translations'
import { tOs } from './i18n/osCopy'

function useClock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(id)
  }, [])
  return now
}

export function StatusBar() {
  const { locale, setLocale } = useLocale()
  const t = tOs('statusBar', locale)
  const hero = copy.hero[locale]
  const now = useClock()

  const timeFmt = new Intl.DateTimeFormat(locale === 'es' ? 'es-MX' : 'en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })
  const dateFmt = new Intl.DateTimeFormat(locale === 'es' ? 'es-MX' : 'en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <header className="absolute top-0 right-0 left-0 z-30 flex h-9 items-center justify-between border-b border-[var(--color-border-subtle)]/80 bg-[var(--color-surface)]/75 px-3 text-xs backdrop-blur-md">
      <div className="flex items-center gap-2 truncate">
        <span className="hidden font-semibold tracking-tight sm:inline">Kevin OS</span>
        <span className="hidden h-3 w-px bg-[var(--color-border-subtle)] sm:block" />
        <span className="truncate text-[var(--color-text-muted)]">{hero.role}</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="hidden items-center gap-1.5 rounded-full border border-[var(--color-emerald)]/40 bg-[var(--color-emerald)]/10 px-2 py-0.5 text-[10px] text-[var(--color-emerald)] md:inline-flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald)]" />
          {t.availability}
        </span>
        <Link
          to="/classic"
          className="hidden text-[var(--color-text-muted)] hover:text-[var(--color-text)] lg:inline"
        >
          {t.classicView}
        </Link>
        <div className="flex rounded-md border border-[var(--color-border-subtle)] p-0.5">
          <button
            type="button"
            onClick={() => setLocale('es')}
            className={`rounded px-2 py-0.5 ${locale === 'es' ? 'bg-[var(--color-accent)] text-white' : 'text-[var(--color-text-muted)]'}`}
          >
            {t.localeEs}
          </button>
          <button
            type="button"
            onClick={() => setLocale('en')}
            className={`rounded px-2 py-0.5 ${locale === 'en' ? 'bg-[var(--color-accent)] text-white' : 'text-[var(--color-text-muted)]'}`}
          >
            {t.localeEn}
          </button>
        </div>
        <span className="tabular-nums text-[var(--color-text-muted)]">
          {timeFmt.format(now)} · {dateFmt.format(now)}
        </span>
      </div>
    </header>
  )
}
