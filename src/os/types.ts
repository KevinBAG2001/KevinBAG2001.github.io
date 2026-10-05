export type OsAppId = 'about' | 'projects' | 'resume' | 'contact' | 'terminal' | 'assistant'

export type OsWindowState = {
  id: string
  appId: OsAppId
  minimized: boolean
  maximized: boolean
  zIndex: number
}

export const OS_APP_ORDER: OsAppId[] = ['about', 'projects', 'resume', 'contact', 'terminal', 'assistant']
