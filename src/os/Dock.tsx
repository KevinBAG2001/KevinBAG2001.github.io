import { LayoutGrid } from 'lucide-react'
import { useLocale } from '../context/LocaleContext'
import { APP_REGISTRY } from './appRegistry'
import { tOs } from './i18n/osCopy'
import { OS_APP_ORDER } from './types'
import { useWindowManager } from './WindowManagerContext'

export function Dock() {
  const { locale } = useLocale()
  const labels = tOs('apps', locale)
  const { openApp, isAppOpen, windows } = useWindowManager()

  const openCount = windows.filter((w) => !w.minimized).length

  return (
    <div className="pointer-events-none absolute bottom-3 left-0 right-0 z-20 flex justify-center px-3">
      <div
        className="pointer-events-auto flex items-end gap-1 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-glass)] px-2 py-2 shadow-xl backdrop-blur-xl"
        role="toolbar"
        aria-label="Dock"
      >
        <button
          type="button"
          onClick={() => {
            OS_APP_ORDER.forEach((id) => {
              if (!isAppOpen(id)) openApp(id)
            })
          }}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-slate-500 to-slate-700 text-white hover:scale-105"
          title={locale === 'es' ? 'Todas las apps' : 'All apps'}
        >
          <LayoutGrid size={20} />
        </button>
        <div className="mx-1 h-8 w-px bg-[var(--color-border-subtle)]" />
        {OS_APP_ORDER.map((id) => {
          const app = APP_REGISTRY[id]
          const Icon = app.icon
          const active = isAppOpen(id)
          return (
            <button
              key={id}
              type="button"
              onClick={() => openApp(id)}
              aria-label={labels[id]}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl transition hover:-translate-y-1"
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${app.color} shadow-md`}
              >
                <Icon size={18} className="text-white" />
              </span>
              {active && (
                <span className="absolute -bottom-0.5 h-1 w-1 rounded-full bg-[var(--color-accent)]" />
              )}
            </button>
          )
        })}
        {openCount > 0 && (
          <span className="sr-only">
            {openCount} {locale === 'es' ? 'ventanas abiertas' : 'open windows'}
          </span>
        )}
      </div>
    </div>
  )
}
