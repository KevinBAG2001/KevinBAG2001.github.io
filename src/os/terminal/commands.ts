import type { Locale } from '../../i18n/translations'
import { copy, projectsData, stackData } from '../../i18n/translations'

export type TerminalLine = { type: 'out' | 'err' | 'cmd'; text: string }

function lines(...texts: string[]): TerminalLine[] {
  return texts.map((text) => ({ type: 'out' as const, text }))
}

export function runTerminalCommand(input: string, locale: Locale): TerminalLine[] {
  const cmd = input.trim()
  if (!cmd) return []

  const parts = cmd.split(/\s+/)
  const name = parts[0]!.toLowerCase()

  switch (name) {
    case 'help':
      return lines(
        locale === 'es'
          ? `Comandos:
  help      — esta ayuda
  about     — perfil breve
  projects  — proyectos destacados
  stack     — stack principal
  whoami    — identidad
  hire      — contacto
  clear     — limpiar pantalla
  ls        — alias de projects
  deploy    — easter egg: pipeline dev/qa/main`
          : `Commands:
  help      — this help
  about     — short profile
  projects  — featured projects
  stack     — core stack
  whoami    — identity
  hire      — contact
  clear     — clear screen
  ls        — alias for projects
  deploy    — easter egg: dev/qa/main pipeline`,
      )
    case 'clear':
      return [{ type: 'out', text: '__CLEAR__' }]
    case 'whoami':
      return lines('kevin-bryan-austria-galvan', 'groups: full-stack, devops, builder')
    case 'about': {
      const h = copy.hero[locale]
      return lines(h.name, h.role, h.focus, '', h.oneLiner)
    }
    case 'stack': {
      const c = stackData.core
      return lines(
        `Frontend: ${c.frontend.join(' · ')}`,
        `Backend: ${c.backend.join(' · ')}`,
        `Data: ${c.data.join(' · ')}`,
        `DevOps: ${c.devops.join(' · ')}`,
      )
    }
    case 'projects':
    case 'ls': {
      const keys = ['abyssan', 'docMgmt', 'personnel', 'predial'] as const
      return lines(
        ...keys.map((key) => {
          const p = projectsData[key]
          const localized = p[locale]
          return `• ${localized.title} [${p.status}]`
        }),
      )
    }
    case 'hire':
    case 'contact':
      return lines(
        copy.contact[locale].email,
        'https://github.com/KevinBAG2001',
        'https://gitlab.com/KevinBAG2001',
      )
    case 'deploy':
      return lines(
        'gitlab-ci · dev → qa → main',
        'deploy #50+ ✔ production',
        locale === 'es' ? 'Sin humo — solo métricas verificadas del CV.' : 'No fluff — CV-verified metrics only.',
      )
    case 'sudo':
      return [{ type: 'err', text: locale === 'es' ? 'Nice try. Usa hire si quieres hablar.' : 'Nice try. Use hire if you want to talk.' }]
    case 'exit':
      return [{ type: 'out', text: locale === 'es' ? 'Kevin OS no se cierra — minimiza la ventana.' : "Kevin OS doesn't quit — minimize the window." }]
    default:
      return [
        {
          type: 'err',
          text:
            locale === 'es'
              ? `Comando no encontrado: ${name}. Escribe help.`
              : `Command not found: ${name}. Type help.`,
        },
      ]
  }
}
