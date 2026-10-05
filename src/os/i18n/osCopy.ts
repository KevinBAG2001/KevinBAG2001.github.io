import type { Locale } from '../../i18n/translations'

export const osCopy = {
  meta: {
    es: {
      title: 'Kevin OS — Portfolio',
      description:
        'Portafolio interactivo de Kevin Bryan Austria Galvan. Full-Stack Developer — software de idea a producción.',
    },
    en: {
      title: 'Kevin OS — Portfolio',
      description:
        'Interactive portfolio of Kevin Bryan Austria Galvan. Full-Stack Developer — software from idea to production.',
    },
  },
  apps: {
    es: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      resume: 'CV',
      contact: 'Contacto',
      terminal: 'Terminal',
      assistant: 'Asistente',
    },
    en: {
      about: 'About',
      projects: 'Projects',
      resume: 'Resume',
      contact: 'Contact',
      terminal: 'Terminal',
      assistant: 'Assistant',
    },
  },
  statusBar: {
    es: {
      availability: 'Disponible para freelance y remoto',
      classicView: 'Vista clásica',
      localeEs: 'ES',
      localeEn: 'EN',
    },
    en: {
      availability: 'Available for freelance & remote',
      classicView: 'Classic view',
      localeEs: 'ES',
      localeEn: 'EN',
    },
  },
  window: {
    es: {
      minimize: 'Minimizar',
      maximize: 'Maximizar',
      restore: 'Restaurar',
      close: 'Cerrar',
    },
    en: {
      minimize: 'Minimize',
      maximize: 'Maximize',
      restore: 'Restore',
      close: 'Close',
    },
  },
  desktop: {
    es: {
      skipToShell: 'Ir al escritorio',
      openApp: 'Abrir',
    },
    en: {
      skipToShell: 'Skip to desktop',
      openApp: 'Open',
    },
  },
  projectsApp: {
    es: {
      browserTitle: 'Proyectos — Kevin OS',
      searchPlaceholder: 'Buscar proyectos o tecnologías…',
      featured: 'Destacados',
      professional: 'Trabajo profesional',
      openSource: 'Open source',
      openCaseStudy: 'Abrir caso de estudio',
      openGitHub: 'Ver en GitHub',
      backToList: 'Volver a proyectos',
      projectCount: (n: number) => `${n} proyectos`,
      inProduction: (n: number) => `${n} en producción`,
    },
    en: {
      browserTitle: 'Projects — Kevin OS',
      searchPlaceholder: 'Search projects or technologies…',
      featured: 'Featured',
      professional: 'Professional work',
      openSource: 'Open source',
      openCaseStudy: 'Open case study',
      openGitHub: 'View on GitHub',
      backToList: 'Back to projects',
      projectCount: (n: number) => `${n} projects`,
      inProduction: (n: number) => `${n} in production`,
    },
  },
  resumeApp: {
    es: {
      tabs: { experience: 'Experiencia', education: 'Formación', impact: 'Impacto' },
      downloadHint: 'CV PDF (si está disponible en el sitio)',
      noCv: 'Los PDF del CV se publicarán en public/assets/cv/ cuando estén listos.',
    },
    en: {
      tabs: { experience: 'Experience', education: 'Education', impact: 'Impact' },
      downloadHint: 'CV PDF (when available on the site)',
      noCv: 'CV PDFs will appear under public/assets/cv/ when published.',
    },
  },
  contactApp: {
    es: {
      intro: 'Correo directo o repos públicos. El formulario abre tu cliente de correo.',
      name: 'Nombre',
      message: 'Mensaje',
      send: 'Enviar correo',
      linkedin: 'LinkedIn',
      linkedinNote: 'Perfil público (añade URL cuando lo compartas).',
    },
    en: {
      intro: 'Direct email or public repos. The form opens your mail client.',
      name: 'Name',
      message: 'Message',
      send: 'Send email',
      linkedin: 'LinkedIn',
      linkedinNote: 'Public profile (add URL when you share it).',
    },
  },
  terminal: {
    es: {
      title: 'Terminal',
      banner:
        'Shell local de Kevin OS. Escribe help para comandos; algunos incluyen detalles técnicos del portafolio.',
      prompt: 'kevin@kevin-os:~$',
      welcome: `Kevin OS Terminal v1.0.0
Type 'help' for commands · 'about' for profile · 'hire' for contact.`,
    },
    en: {
      title: 'Terminal',
      banner:
        'Kevin OS local shell. Type help for commands; some include portfolio technical details.',
      prompt: 'kevin@kevin-os:~$',
      welcome: `Kevin OS Terminal v1.0.0
Type 'help' for commands · 'about' for profile · 'hire' for contact.`,
    },
  },
  assistant: {
    es: {
      title: 'Asistente',
      subtitle: 'Respuestas estáticas basadas en el contenido del portafolio (sin API externa).',
      placeholder: 'Pregunta sobre proyectos, stack o contacto…',
      send: 'Enviar',
      suggestions: [
        '¿Dónde están tus proyectos?',
        'Muéstrame tu stack',
        '¿Cómo te contacto?',
        'Cuéntame de Abyssan',
      ],
      fallback:
        'No tengo una respuesta preparada para eso. Prueba con proyectos, stack, experiencia o contacto.',
    },
    en: {
      title: 'Assistant',
      subtitle: 'Static answers from portfolio content (no external API).',
      placeholder: 'Ask about projects, stack, or contact…',
      send: 'Send',
      suggestions: [
        'Where are your projects?',
        'Show me your stack',
        'How can I contact you?',
        'Tell me about Abyssan',
      ],
      fallback:
        "I don't have a prepared answer for that. Try projects, stack, experience, or contact.",
    },
  },
  mobile: {
    es: {
      title: 'Kevin Bryan Austria Galvan',
      subtitle: 'Full-Stack Developer · Vista móvil',
      hint: 'En pantallas grandes, abre Kevin OS en el escritorio.',
    },
    en: {
      title: 'Kevin Bryan Austria Galvan',
      subtitle: 'Full-Stack Developer · Mobile view',
      hint: 'On larger screens, open Kevin OS on the desktop.',
    },
  },
} as const

export function tOs<S extends keyof typeof osCopy>(section: S, locale: Locale) {
  return osCopy[section][locale] as (typeof osCopy)[S]['en']
}
