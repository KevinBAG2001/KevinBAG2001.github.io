export type Locale = 'es' | 'en'

export const copy = {
  meta: {
    es: {
      title: 'Kevin Bryan Austria Galvan — Full-Stack Developer',
      description:
        'Desarrollo software de extremo a extremo, conectando desarrollo, datos y entrega para llevar soluciones desde la idea hasta producción.',
    },
    en: {
      title: 'Kevin Bryan Austria Galvan — Full-Stack Developer',
      description:
        'I build end-to-end software, connecting development, data, and delivery to take solutions from idea to production.',
    },
  },
  nav: {
    es: {
      about: 'Sobre mí',
      stack: 'Stack',
      build: 'Cómo construyo',
      projects: 'Proyectos',
      impact: 'Impacto',
      experience: 'Experiencia',
      education: 'Formación',
      contact: 'Contacto',
      viewProjects: 'Ver proyectos',
      caseStudy: 'Case study',
      backHome: 'Inicio',
    },
    en: {
      about: 'About',
      stack: 'Stack',
      build: 'How I build',
      projects: 'Projects',
      impact: 'Impact',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
      viewProjects: 'View projects',
      caseStudy: 'Case study',
      backHome: 'Home',
    },
  },
  hero: {
    es: {
      name: 'Kevin Bryan Austria Galvan',
      role: 'Full-Stack Developer',
      focus: 'Ingeniería de Software · DevOps · Datos',
      headline: 'Construyo software para problemas reales, desde la idea hasta producción.',
      oneLiner:
        'Desarrollo software de extremo a extremo, conectando desarrollo, datos y entrega para llevar soluciones desde la idea hasta producción.',
    },
    en: {
      name: 'Kevin Bryan Austria Galvan',
      role: 'Full-Stack Developer',
      focus: 'Software Engineering · DevOps · Data',
      headline: 'Building real-world software from idea to production.',
      oneLiner:
        'I build end-to-end software, connecting development, data, and delivery to take solutions from idea to production.',
    },
  },
  about: {
    es: {
      title: 'Sobre mí',
      description: `Soy Full-Stack Developer enfocado en construir y evolucionar software para problemas reales, trabajando a lo largo de todo el ciclo de desarrollo: desde el análisis y diseño de soluciones hasta la implementación, integración, despliegue y evolución en producción.
Mi experiencia combina desarrollo frontend y backend, diseño de APIs, bases de datos relacionales, automatización, CI/CD y administración de entornos, con participación en sistemas empresariales y proyectos donde también he asumido responsabilidades de liderazgo técnico y coordinación.
Actualmente continúo desarrollando mi perfil hacia los datos, la analítica y la inteligencia artificial, complementando mi experiencia en ingeniería de software con una Maestría en Analítica e Inteligencia de Negocios.`,
      valueTitle: 'Propuesta de valor',
      value: `Convierto necesidades de negocio y operación en soluciones de software que pueden desarrollarse, desplegarse y evolucionar de forma sostenible. Combino desarrollo Full-Stack, datos, automatización y prácticas DevOps para participar en todo el ciclo de vida del software, buscando que una solución no sólo funcione, sino que también sea mantenible, integrable y preparada para producción.`,
      expanding: 'En expansión: Datos, Analítica e IA',
    },
    en: {
      title: 'About',
      description: `I'm a Full-Stack Developer focused on building and evolving software for real-world problems, working across the complete development lifecycle—from solution analysis and design to implementation, integration, deployment, and production evolution.
My experience combines frontend and backend development, API design, relational databases, automation, CI/CD, and environment management, with hands-on work on enterprise systems and technical leadership and coordination responsibilities.
I'm currently expanding my profile into data, analytics, and artificial intelligence through a Master's degree in Business Analytics and Intelligence, complementing my software engineering background with a stronger data-driven perspective.`,
      valueTitle: 'Value proposition',
      value: `I turn business and operational needs into software solutions that can be developed, deployed, maintained, and evolved sustainably. I combine Full-Stack development, data, automation, and DevOps practices to work across the software lifecycle, focusing not only on making solutions work, but also on making them maintainable, integrable, and production-ready.`,
      expanding: 'Expanding into Data, Analytics & AI',
    },
  },
  stack: {
    es: {
      title: 'What I work with',
      core: 'Core',
      supporting: 'Supporting',
      practices: 'Engineering practices',
      growing: 'Growing',
      evidence: 'Profundidad por evidencia',
    },
    en: {
      title: 'What I work with',
      core: 'Core',
      supporting: 'Supporting',
      practices: 'Engineering practices',
      growing: 'Growing',
      evidence: 'Depth by evidence',
    },
  },
  howBuild: {
    es: {
      title: 'How I build',
      flow: 'Build → Test → Automate → Deploy → Improve',
      architecture: 'Arquitectura — Diseño por capas, contratos claros y separación de responsabilidades.',
      development: 'Desarrollo — APIs REST, frontends mantenibles y dominio alineado al negocio.',
      data: 'Datos — Modelado relacional, consultas eficientes y trazabilidad en producción.',
      delivery: 'Entrega — GitFlow dev/qa/main, pipelines GitLab CI/CD y automatización.',
      production: 'Producción — Operación de entornos, despliegues controlados y evolución continua.',
    },
    en: {
      title: 'How I build',
      flow: 'Build → Test → Automate → Deploy → Improve',
      architecture: 'Architecture — Layered design, clear contracts, and separation of concerns.',
      development: 'Development — REST APIs, maintainable frontends, and domain aligned to the business.',
      data: 'Data — Relational modeling, efficient queries, and production traceability.',
      delivery: 'Delivery — GitFlow dev/qa/main, GitLab CI/CD pipelines, and automation.',
      production: 'Production — Environment operations, controlled releases, and continuous evolution.',
    },
  },
  projects: {
    es: {
      title: 'Proyectos destacados',
      openSource: 'Open Source / Personal',
      professional: 'Professional Work',
    },
    en: {
      title: 'Featured projects',
      openSource: 'Open Source / Personal',
      professional: 'Professional Work',
    },
  },
  impact: {
    es: {
      title: 'Impacto',
      items: [
        '50+ despliegues a producción vía GitLab CI/CD (ramas dev/qa/main)',
        'Reportes automatizados: de 15 horas a 5 minutos',
        'Sistema integral de RRHH para 100+ empleados (Laravel 11, PHP, PostgreSQL)',
        'Dirigió 3 sistemas internos en administración pública (.NET, C#, PHP, JavaScript, SQL Server); coordinación de hasta 4 desarrolladores',
      ],
    },
    en: {
      title: 'Impact',
      items: [
        '50+ production deployments via GitLab CI/CD (dev/qa/main branches)',
        'Automated reports: from 15 hours down to 5 minutes',
        'Integrated HR system for 100+ employees (Laravel 11, PHP, PostgreSQL)',
        'Led 3 internal systems for public administration (.NET, C#, PHP, JavaScript, SQL Server); coordinated up to 4 developers',
      ],
    },
  },
  experience: {
    es: {
      title: 'Experiencia',
      roles: [
        {
          period: 'Abr 2026 – Actualidad',
          title: 'Líder de Proyecto — Sistema Integral de Recursos Humanos',
          org: 'IMSS-Bienestar',
          bullets: [
            'Diseño y desarrollo de sistema integral con Laravel 11, PHP y PostgreSQL.',
            'Gestión documental y expedientes digitales integrados con Alfresco.',
            'Modelos relacionales, seguridad basada en roles y reportes PDF/Excel.',
            'Administración de servidores, entornos y pipelines GitLab CI/CD.',
          ],
        },
        {
          period: 'Jul 2025 – Abr 2026',
          title: 'Desarrollador de Sistemas / Sublíder Full-Stack',
          org: 'Municipio de Pachuca de Soto',
          bullets: [
            'Desarrollo de sistemas internos con .NET, C#, PHP, JavaScript y SQL Server.',
            'Coordinación de equipo, calidad de código y cumplimiento de objetivos.',
            'Administración de bases de datos e infraestructura para sistemas críticos.',
          ],
        },
        {
          period: '2024 – 2025',
          title: 'Supervisor de Turno / Capacitador',
          org: 'Starbucks',
          bullets: [
            'Supervisión de operaciones y coordinación de equipos por turno.',
            'Capacitación de colaboradores en procedimientos y servicio al cliente.',
          ],
        },
        {
          period: '2023 – 2024',
          title: 'Desarrollador de Sistemas Junior',
          org: 'Hopewell System',
          bullets: [
            'Aplicaciones web y móviles con Flutter, Dart, JavaScript y PostgreSQL.',
            'Integración de sistemas y gestión de código con Git.',
          ],
        },
      ],
    },
    en: {
      title: 'Experience',
      roles: [
        {
          period: 'Apr 2026 – Present',
          title: 'Project Lead — Integrated Human Resources System',
          org: 'IMSS-Bienestar',
          bullets: [
            'Design and development of an integrated system with Laravel 11, PHP, and PostgreSQL.',
            'Document management and digital records integrated with Alfresco.',
            'Relational models, role-based security, and PDF/Excel reporting.',
            'Server administration, environments, and GitLab CI/CD pipelines.',
          ],
        },
        {
          period: 'Jul 2025 – Apr 2026',
          title: 'Systems Developer / Full-Stack Sub-Lead',
          org: 'Municipality of Pachuca de Soto',
          bullets: [
            'Internal systems with .NET, C#, PHP, JavaScript, and SQL Server.',
            'Team coordination, code quality, and delivery of objectives.',
            'Database and infrastructure administration for critical systems.',
          ],
        },
        {
          period: '2024 – 2025',
          title: 'Shift Supervisor / Trainer',
          org: 'Starbucks',
          bullets: [
            'Daily operations supervision and shift team coordination.',
            'Training new hires on procedures and customer service.',
          ],
        },
        {
          period: '2023 – 2024',
          title: 'Junior Systems Developer',
          org: 'Hopewell System',
          bullets: [
            'Web and mobile applications with Flutter, Dart, JavaScript, and PostgreSQL.',
            'Systems integration and source control with Git.',
          ],
        },
      ],
    },
  },
  education: {
    es: {
      title: 'Educación y certificaciones',
      educationLabel: 'Educación',
      certsLabel: 'Certificaciones',
      items: [
        { name: 'Ingeniería en Software y Redes', place: 'UNITEC', period: '2023 – 2025' },
        {
          name: 'Maestría en Analítica e Inteligencia de Negocios',
          place: 'En curso',
          period: '',
        },
      ],
      certs: [
        {
          name: 'Especialización Microsoft Inteligencia Artificial (150 h)',
          place: 'Centro Público de Formación en Inteligencia Artificial',
          period: 'Ene – Jul 2026 · Completada',
        },
      ],
      cvEs: 'Descargar CV (ES)',
      cvEn: 'Descargar CV (EN)',
    },
    en: {
      title: 'Education & certifications',
      educationLabel: 'Education',
      certsLabel: 'Certifications',
      items: [
        { name: 'Software and Network Engineering', place: 'UNITEC', period: '2023 – 2025' },
        {
          name: "Master's in Business Analytics and Intelligence",
          place: 'In progress',
          period: '',
        },
      ],
      certs: [
        {
          name: 'Microsoft Artificial Intelligence Specialization (150 h)',
          place: 'Centro Público de Formación en Inteligencia Artificial',
          period: 'Jan – Jul 2026 · Completed',
        },
      ],
      cvEs: 'Download CV (ES)',
      cvEn: 'Download CV (EN)',
    },
  },
  contact: {
    es: {
      title: 'Contacto',
      email: 'kevinbryan_austria@outlook.com',
    },
    en: {
      title: 'Contact',
      email: 'kevinbryan_austria@outlook.com',
    },
  },
  status: {
    PRODUCTION: { es: 'PRODUCTION', en: 'PRODUCTION' },
    IN_DEVELOPMENT: { es: 'IN DEVELOPMENT', en: 'IN DEVELOPMENT' },
    OPEN_SOURCE: { es: 'OPEN SOURCE', en: 'OPEN SOURCE' },
  },
} as const

export const stackData = {
  core: {
    frontend: ['React', 'TypeScript', 'JavaScript'],
    backend: ['PHP', 'Laravel', 'C#', '.NET'],
    data: ['PostgreSQL', 'SQL Server', 'SQL'],
    devops: ['Git', 'GitHub', 'GitLab', 'GitLab CI/CD', 'Docker'],
  },
  supporting: ['Python', 'Flutter', 'Dart', 'Blade', 'Tailwind CSS', 'Bootstrap', 'VB.NET'],
  practices: [
    'System Design',
    'REST APIs',
    'Database Design',
    'Testing',
    'Security',
    'CI/CD',
    'Automation',
    'Documentation',
    'Production Operations',
    'Separation of Concerns',
  ],
  growing: ['Analytics', 'Business Intelligence', 'Artificial Intelligence'],
  evidence: {
    es: [
      'Laravel — Experiencia profesional construyendo y evolucionando sistemas empresariales.',
      'React / TypeScript — Frontend de Abyssan (cliente Git visual autoalojable).',
      'Docker — Entornos de aplicación y flujos de desarrollo/despliegue.',
    ],
    en: [
      'Laravel — Professional experience building and evolving enterprise systems.',
      'React / TypeScript — Used to build the frontend of Abyssan.',
      'Docker — Used in application environments and dev/deploy workflows.',
    ],
  },
}

export type ProjectStatus = 'PRODUCTION' | 'IN_DEVELOPMENT' | 'OPEN_SOURCE'

export const projectsData = {
  abyssan: {
    status: 'OPEN_SOURCE' as ProjectStatus,
    url: 'https://github.com/KevinBAG2001/Abyssan',
    stack: ['React 19', 'TypeScript', 'Node.js', 'Express', 'WebSocket', 'Docker'],
    es: {
      title: 'Abyssan',
      tagline: 'Cliente Git visual, local y autoalojable',
      summary:
        'Monorepo pnpm con SPA React y backend Node: grafo DAG, staging visual, diff y operaciones Git con arquitectura por capas y DDD ligero.',
      highlights: [
        'Notificaciones en tiempo real de cambios en repos vía WebSocket.',
        'Sandbox de rutas bajo PROJECTS_ROOT y confirmación para operaciones destructivas.',
        'Empaque con Docker Compose para API + interfaz.',
      ],
    },
    en: {
      title: 'Abyssan',
      tagline: 'Local, self-hostable visual Git client',
      summary:
        'pnpm monorepo with React SPA and Node backend: DAG graph, visual staging, diff, and Git operations with layered architecture and lightweight DDD.',
      highlights: [
        'Implemented real-time repo change notifications via WebSocket.',
        'Path sandbox under PROJECTS_ROOT and confirmation for destructive operations.',
        'Docker Compose packaging for API + UI.',
      ],
    },
  },
  docMgmt: {
    status: 'PRODUCTION' as ProjectStatus,
    stack: ['Laravel', 'PHP', 'PostgreSQL', 'GitLab CI/CD'],
    es: {
      title: 'Document Management & Operational Tracking System',
      summary:
        'Sistema empresarial para sector público: gestión documental, flujos de validación y trazabilidad operativa con integraciones a gestor documental y almacenamiento en nube.',
      highlights: [
        'Integración con Alfresco y Nextcloud; flujos de conocimiento, seguimiento, validación y conclusión.',
        'Regla que bloquea modificar un documento ya validado; circuito firma física → PDF firmado → cierre.',
        'Permisos por rol/área; OTP y sesión única para roles sensibles; panel de sesiones activas.',
        'Semáforo de urgencia; reportes diarios PDF/Excel; certificaciones con carga masiva.',
        '250+ merge requests en evolución continua con GitLab CI/CD.',
      ],
    },
    en: {
      title: 'Document Management & Operational Tracking System',
      summary:
        'Enterprise system for the public sector: document management, validation workflows, and operational traceability with document manager and cloud storage integrations.',
      highlights: [
        'Alfresco and Nextcloud integration; knowledge, tracking, validation, and closure flows.',
        'Rule blocking edits to validated documents; physical signature → signed PDF → closure circuit.',
        'Role/area permissions; OTP and single session for sensitive roles; active session panel.',
        'Urgency traffic-light; daily PDF/Excel reports; bulk certification uploads.',
        '250+ merge requests in continuous evolution with GitLab CI/CD.',
      ],
    },
  },
  personnel: {
    status: 'PRODUCTION' as ProjectStatus,
    secondaryStatus: 'IN_DEVELOPMENT' as ProjectStatus,
    stack: ['Laravel', 'PHP', 'PostgreSQL'],
    es: {
      title: 'Personnel Operations Platform',
      summary: 'Plataforma construida desde cero para operaciones de personal y expedientes.',
      highlights: [
        'Captura diaria, roles, reportes diarios y expedientes con autocaptura.',
        'Metas desde Excel, guardias, historial por persona/mes, vacaciones e incidencias.',
        'Capacitación, productividad con exportación PDF.',
      ],
    },
    en: {
      title: 'Personnel Operations Platform',
      summary: 'Platform built from scratch for personnel operations and employee records.',
      highlights: [
        'Daily capture, roles, daily reports, and records with auto-capture.',
        'Goals from Excel, shifts, history grouped by person/month, vacations, and incidents.',
        'Training, productivity with PDF export.',
      ],
    },
  },
  predial: {
    status: 'PRODUCTION' as ProjectStatus,
    stack: ['.NET', 'C#', 'PHP', 'JavaScript', 'SQL Server'],
    es: {
      title: 'Digital Property-Tax Collection System',
      summary:
        'Sistema municipal para generación y validación de códigos de barras del predial, habilitando pago a través de un canal externo de recaudación (tiendas de conveniencia).',
      highlights: [
        'Validación de códigos y flujos alineados a procesos institucionales.',
        'Stack alineado al ecosistema del municipio: .NET, C#, PHP, JavaScript y SQL Server.',
      ],
    },
    en: {
      title: 'Digital Property-Tax Collection System',
      summary:
        'Municipal system for generating and validating property-tax barcodes, enabling payment through an external collection channel (convenience retail).',
      highlights: [
        'Barcode validation and workflows aligned with institutional processes.',
        'Stack aligned to the municipality ecosystem: .NET, C#, PHP, JavaScript, and SQL Server.',
      ],
    },
  },
}

export const abyssanCaseStudy = {
  es: {
    title: 'Abyssan — Case study',
    sections: [
      {
        id: 'problem',
        title: 'Problema',
        body: 'Los clientes Git maduros cubren operaciones básicas, pero rara vez ayudan a entender el efecto de un merge o reset antes de ejecutarlo. Abyssan apunta a Git visual + comprensión + seguridad en un cliente local autoalojable.',
      },
      {
        id: 'decisions',
        title: 'Decisiones',
        body: 'Monorepo pnpm; un adaptador Git (simple-git) sin shell arbitrario; envelope JSON único en API; español de producto; confirmación explícita para operaciones destructivas; sin base de datos en v1.',
      },
      {
        id: 'architecture',
        title: 'Arquitectura',
        body: 'HTTP → GitController → GitUseCases → SimpleGitAdapter. SPA React 19 + Vite 6 + Tailwind 4; servidor Express con WebSocket (chokidar) para cambios en repos bajo PROJECTS_ROOT.',
      },
      {
        id: 'security',
        title: 'Seguridad',
        body: 'validarRutaRepositorio fuera de PROJECTS_ROOT → 403; CORS restringido; token de instancia fuera de localhost; WebSocket con handshake AUTH; sin registrar diffs completos en producción.',
      },
      {
        id: 'testing',
        title: 'Testing',
        body: 'Vitest y oxlint en el monorepo; subconjunto de pruebas de perímetro de seguridad (pnpm test:seguridad).',
      },
      {
        id: 'status',
        title: 'Estado',
        body: 'Fases 0–3 cerradas (Daily Driver, power, forjas OAuth). Siguiente horizonte: Identidad — preview antes de merge/rebase, journal de undo y Explain Mode.',
      },
      {
        id: 'roadmap',
        title: 'Roadmap',
        body: 'Fase 4 Identidad → Fase 5 worktrees y contexto de forja → Fase 6 plataforma (Compose prod, plugins). Sin IA ni host de repos en este horizonte.',
      },
    ],
  },
  en: {
    title: 'Abyssan — Case study',
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        body: 'Mature Git clients cover basic operations but rarely help you understand the effect of a merge or reset before you run it. Abyssan targets visual Git + understanding + safety in a local, self-hostable client.',
      },
      {
        id: 'decisions',
        title: 'Decisions',
        body: 'pnpm monorepo; single Git adapter (simple-git) without arbitrary shell; one JSON API envelope; Spanish product copy; explicit confirmation for destructive ops; no database in v1.',
      },
      {
        id: 'architecture',
        title: 'Architecture',
        body: 'HTTP → GitController → GitUseCases → SimpleGitAdapter. React 19 SPA + Vite 6 + Tailwind 4; Express server with WebSocket (chokidar) for changes under PROJECTS_ROOT.',
      },
      {
        id: 'security',
        title: 'Security',
        body: 'validarRutaRepositorio outside PROJECTS_ROOT → 403; restricted CORS; instance token off localhost; WebSocket AUTH handshake; no full diff logging in production.',
      },
      {
        id: 'testing',
        title: 'Testing',
        body: 'Vitest and oxlint across the monorepo; security perimeter test subset (pnpm test:seguridad).',
      },
      {
        id: 'status',
        title: 'Status',
        body: 'Phases 0–3 complete (Daily Driver, power, forge OAuth). Next: Identity — preview before merge/rebase, persistent undo journal, and Explain Mode.',
      },
      {
        id: 'roadmap',
        title: 'Roadmap',
        body: 'Phase 4 Identity → Phase 5 worktrees and forge context → Phase 6 platform (prod Compose, plugins). No AI or repo hosting in this horizon.',
      },
    ],
  },
}
