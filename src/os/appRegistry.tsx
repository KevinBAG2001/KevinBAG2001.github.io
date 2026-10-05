import type { ReactNode } from 'react'
import {
  Bot,
  FolderKanban,
  IdCard,
  Mail,
  Terminal,
  User,
  type LucideIcon,
} from 'lucide-react'
import { AboutApp } from './apps/AboutApp'
import { AssistantApp } from './apps/AssistantApp'
import { ContactApp } from './apps/ContactApp'
import { ProjectsApp } from './apps/ProjectsApp'
import { ResumeApp } from './apps/ResumeApp'
import { TerminalApp } from './apps/TerminalApp'
import type { OsAppId } from './types'

export type AppDef = {
  id: OsAppId
  icon: LucideIcon
  color: string
  defaultSize: { w: number; h: number }
  render: () => ReactNode
}

export const APP_REGISTRY: Record<OsAppId, AppDef> = {
  about: {
    id: 'about',
    icon: User,
    color: 'from-blue-600 to-indigo-700',
    defaultSize: { w: 480, h: 520 },
    render: () => <AboutApp />,
  },
  projects: {
    id: 'projects',
    icon: FolderKanban,
    color: 'from-slate-600 to-slate-800',
    defaultSize: { w: 720, h: 540 },
    render: () => <ProjectsApp />,
  },
  resume: {
    id: 'resume',
    icon: IdCard,
    color: 'from-violet-600 to-purple-800',
    defaultSize: { w: 560, h: 520 },
    render: () => <ResumeApp />,
  },
  contact: {
    id: 'contact',
    icon: Mail,
    color: 'from-emerald-600 to-teal-800',
    defaultSize: { w: 440, h: 480 },
    render: () => <ContactApp />,
  },
  terminal: {
    id: 'terminal',
    icon: Terminal,
    color: 'from-neutral-700 to-neutral-900',
    defaultSize: { w: 640, h: 420 },
    render: () => <TerminalApp />,
  },
  assistant: {
    id: 'assistant',
    icon: Bot,
    color: 'from-indigo-500 to-blue-700',
    defaultSize: { w: 420, h: 480 },
    render: () => <AssistantApp />,
  },
}
