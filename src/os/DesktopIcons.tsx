import { useLocale } from '../context/LocaleContext'
import { APP_REGISTRY } from './appRegistry'
import { tOs } from './i18n/osCopy'
import { OS_APP_ORDER } from './types'
import { useWindowManager } from './WindowManagerContext'

export function DesktopIcons() {
  const { locale } = useLocale()
  const labels = tOs('apps', locale)
  const { openApp, isAppOpen } = useWindowManager()

  return (
    <nav
      className="absolute top-4 left-3 z-[1] hidden max-h-[calc(100%-8rem)] flex-col gap-4 overflow-y-auto md:flex lg:left-5"
      aria-label="Applications"
    >
      {OS_APP_ORDER.map((id) => {
        const app = APP_REGISTRY[id]
        const Icon = app.icon
        const active = isAppOpen(id)
        return (
          <button
            key={id}
            type="button"
            onClick={() => openApp(id)}
            className="group flex w-[4.5rem] flex-col items-center gap-1.5 rounded-lg p-1 text-center outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${app.color} shadow-lg transition group-hover:scale-105 ${
                active ? 'ring-2 ring-[var(--color-accent)] ring-offset-2 ring-offset-transparent' : ''
              }`}
            >
              <Icon size={22} className="text-white" strokeWidth={1.75} />
            </span>
            <span className="text-[11px] leading-tight text-[var(--color-text)] drop-shadow-sm">{labels[id]}</span>
          </button>
        )
      })}
    </nav>
  )
}
