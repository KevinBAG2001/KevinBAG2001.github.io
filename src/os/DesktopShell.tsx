import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocale } from '../context/LocaleContext'
import { DesktopIcons } from './DesktopIcons'
import { Dock } from './Dock'
import { MobileShell } from './MobileShell'
import { OsWindow } from './OsWindow'
import { StatusBar } from './StatusBar'
import { Wallpaper } from './Wallpaper'
import { WindowManagerProvider, useWindowManager } from './WindowManagerContext'
import { osCopy, tOs } from './i18n/osCopy'

function DesktopInner() {
  const { locale } = useLocale()
  const labels = tOs('apps', locale)
  const { windows } = useWindowManager()
  const desktop = tOs('desktop', locale)

  return (
    <div id="kevin-os-desktop" className="relative h-dvh w-full overflow-hidden bg-[var(--color-surface)]">
      <a
        href="#kevin-os-desktop"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-12 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-white"
      >
        {desktop.skipToShell}
      </a>
      <Wallpaper />
      <StatusBar />
      <DesktopIcons />
      <main className="absolute inset-0 pt-9 pb-20" aria-label="Window area">
        <AnimatePresence>
          {[...windows]
            .sort((a, b) => a.zIndex - b.zIndex)
            .map((win) => (
              <OsWindow key={win.id} window={win} title={labels[win.appId]} />
            ))}
        </AnimatePresence>
      </main>
      <Dock />
    </div>
  )
}

function useIsMobileOs() {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return mobile
}

export function DesktopShell() {
  const { locale } = useLocale()
  const isMobile = useIsMobileOs()

  useEffect(() => {
    const meta = osCopy.meta[locale]
    document.title = meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', meta.description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', meta.title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', meta.description)
  }, [locale])

  if (isMobile) return <MobileShell />

  return (
    <WindowManagerProvider>
      <DesktopInner />
    </WindowManagerProvider>
  )
}
