import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'
import { Minus, Square, X } from 'lucide-react'
import { useLocale } from '../context/LocaleContext'
import { APP_REGISTRY } from './appRegistry'
import { tOs } from './i18n/osCopy'
import type { OsWindowState } from './types'
import { useWindowManager } from './WindowManagerContext'

type Props = {
  window: OsWindowState
  title: string
}

export function OsWindow({ window: win, title }: Props) {
  const { locale } = useLocale()
  const wt = tOs('window', locale)
  const { focusWindow, closeWindow, toggleMinimize, toggleMaximize, focusedId } = useWindowManager()
  const app = APP_REGISTRY[win.appId]
  const focused = focusedId === win.id

  if (win.minimized) return null

  const sizeClass = win.maximized
    ? 'inset-3 md:inset-4 lg:inset-6'
    : 'left-1/2 top-[8%] w-[min(92vw,var(--os-w))] h-[min(78vh,var(--os-h))] -translate-x-1/2'

  return (
    <motion.section
      role="dialog"
      aria-label={title}
      initial={{ opacity: 0, scale: 0.96, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      style={
        {
          zIndex: win.zIndex,
          ...(win.maximized
            ? {}
            : { '--os-w': `${app.defaultSize.w}px`, '--os-h': `${app.defaultSize.h}px` }),
        } as CSSProperties
      }
      className={`absolute flex flex-col overflow-hidden rounded-xl border shadow-2xl ${
        focused ? 'border-[var(--color-accent)]/50' : 'border-[var(--color-border-subtle)]'
      } bg-[var(--color-surface-elevated)]/95 backdrop-blur-md ${sizeClass}`}
      onMouseDown={() => focusWindow(win.id)}
      onFocus={() => focusWindow(win.id)}
      tabIndex={-1}
    >
      <header className="flex h-10 shrink-0 cursor-default items-center justify-between border-b border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 px-3">
        <span className="truncate text-sm font-medium">{title}</span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label={wt.minimize}
            onClick={() => toggleMinimize(win.id)}
            className="rounded p-1 text-[var(--color-text-muted)] hover:bg-[var(--color-border-subtle)]"
          >
            <Minus size={16} />
          </button>
          <button
            type="button"
            aria-label={win.maximized ? wt.restore : wt.maximize}
            onClick={() => toggleMaximize(win.id)}
            className="rounded p-1 text-[var(--color-text-muted)] hover:bg-[var(--color-border-subtle)]"
          >
            <Square size={14} />
          </button>
          <button
            type="button"
            aria-label={wt.close}
            onClick={() => closeWindow(win.id)}
            className="rounded p-1 text-[var(--color-text-muted)] hover:bg-red-500/20 hover:text-red-400"
          >
            <X size={16} />
          </button>
        </div>
      </header>
      <div className="min-h-0 flex-1 overflow-hidden">{app.render()}</div>
    </motion.section>
  )
}
