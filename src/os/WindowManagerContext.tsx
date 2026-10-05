import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import type { OsAppId, OsWindowState } from './types'

type WindowManagerValue = {
  windows: OsWindowState[]
  focusedId: string | null
  openApp: (appId: OsAppId) => void
  closeWindow: (id: string) => void
  focusWindow: (id: string) => void
  toggleMinimize: (id: string) => void
  toggleMaximize: (id: string) => void
  isAppOpen: (appId: OsAppId) => boolean
  getWindowForApp: (appId: OsAppId) => OsWindowState | undefined
}

const WindowManagerContext = createContext<WindowManagerValue | null>(null)

function newWindowId(appId: OsAppId) {
  return `${appId}-${Date.now().toString(36)}`
}

export function WindowManagerProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<OsWindowState[]>([])
  const [focusedId, setFocusedId] = useState<string | null>(null)
  const zCounter = useRef(10)

  const bumpZ = useCallback(() => {
    zCounter.current += 1
    return zCounter.current
  }, [])

  const focusWindow = useCallback(
    (id: string) => {
      const z = bumpZ()
      setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, zIndex: z, minimized: false } : w)))
      setFocusedId(id)
    },
    [bumpZ],
  )

  const openApp = useCallback(
    (appId: OsAppId) => {
      setWindows((prev) => {
        const existing = prev.find((w) => w.appId === appId)
        if (existing) {
          const z = bumpZ()
          setFocusedId(existing.id)
          return prev.map((w) =>
            w.id === existing.id ? { ...w, zIndex: z, minimized: false } : w,
          )
        }
        const id = newWindowId(appId)
        const z = bumpZ()
        setFocusedId(id)
        return [
          ...prev,
          { id, appId, minimized: false, maximized: false, zIndex: z },
        ]
      })
    },
    [bumpZ],
  )

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const next = prev.filter((w) => w.id !== id)
      setFocusedId((f) => (f === id ? (next[next.length - 1]?.id ?? null) : f))
      return next
    })
  }, [])

  const toggleMinimize = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: !w.minimized } : w)),
    )
    setFocusedId((f) => (f === id ? null : f))
  }, [])

  const toggleMaximize = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, maximized: !w.maximized } : w)),
    )
    focusWindow(id)
  }, [focusWindow])

  const isAppOpen = useCallback(
    (appId: OsAppId) => windows.some((w) => w.appId === appId && !w.minimized),
    [windows],
  )

  const getWindowForApp = useCallback(
    (appId: OsAppId) => windows.find((w) => w.appId === appId),
    [windows],
  )

  const value = useMemo(
    () => ({
      windows,
      focusedId,
      openApp,
      closeWindow,
      focusWindow,
      toggleMinimize,
      toggleMaximize,
      isAppOpen,
      getWindowForApp,
    }),
    [
      windows,
      focusedId,
      openApp,
      closeWindow,
      focusWindow,
      toggleMinimize,
      toggleMaximize,
      isAppOpen,
      getWindowForApp,
    ],
  )

  return <WindowManagerContext.Provider value={value}>{children}</WindowManagerContext.Provider>
}

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext)
  if (!ctx) throw new Error('useWindowManager must be used within WindowManagerProvider')
  return ctx
}
