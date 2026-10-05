import type { ReactNode } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MeshBackground } from './components/MeshBackground'
import { useDocumentMeta } from './hooks/useDocumentMeta'
import { DesktopShell } from './os/DesktopShell'
import { AbyssanCaseStudyPage } from './pages/AbyssanCaseStudyPage'
import { HomePage } from './pages/HomePage'

function ClassicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MeshBackground />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}

function AppRoutes() {
  const location = useLocation()
  const page = location.pathname.includes('abyssan')
    ? 'abyssan'
    : location.pathname.startsWith('/classic')
      ? 'home'
      : 'desktop'
  useDocumentMeta(page)

  return (
    <Routes>
      <Route path="/" element={<DesktopShell />} />
      <Route
        path="/classic"
        element={
          <ClassicLayout>
            <HomePage />
          </ClassicLayout>
        }
      />
      <Route
        path="/projects/abyssan"
        element={
          <ClassicLayout>
            <AbyssanCaseStudyPage />
          </ClassicLayout>
        }
      />
    </Routes>
  )
}

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <AppRoutes />
    </>
  )
}
