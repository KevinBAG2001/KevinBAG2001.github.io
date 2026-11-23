export type Locale = 'es' | 'en'

export const copy = {
  meta: {
    es: {
      title: 'Kevin Bryan Austria Galvan — Full-Stack Developer',
      description:
        'Desarrollo software de punta a punta: ingeniería, datos y entrega continua para llevar ideas hasta producción con criterio.',
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
      build: 'Mi forma de construir',
      projects: 'Proyectos',
      impact: 'Impacto',
      experience: 'Experiencia',
      education: 'Formación',
      contact: 'Contacto',
      viewProjects: 'Ver proyectos',
      caseStudy: 'Caso de estudio',
      caseStudyAbyssan: 'Caso de estudio: Abyssan',
      caseStudyBastion: 'Caso de estudio: Bastion',
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
      caseStudyAbyssan: 'Case study: Abyssan',
      caseStudyBastion: 'Case study: Bastion',
      backHome: 'Home',
    },
  },
  hero: {
    es: {
      name: 'Kevin Bryan Austria Galvan',
      role: 'Full-Stack Developer',
      focus: 'Ingeniería de software · DevOps · Datos',
      headline: 'Construyo software para problemas reales, de la idea a producción.',
      oneLiner:
        'Trabajo todo el ciclo: análisis, implementación, integración y operación, con datos y automatización como parte del mismo criterio.',
      availability: 'Disponible para proyectos freelance y trabajo remoto',
      languages: 'Español nativo · Inglés básico',
      abyssanCaseStudy: 'Caso de estudio: Abyssan',
      bastionCaseStudy: 'Caso de estudio: Bastion',
    },
    en: {
      name: 'Kevin Bryan Austria Galvan',
      role: 'Full-Stack Developer',
      focus: 'Software Engineering · DevOps · Data',
      headline: 'Building real-world software from idea to production.',
      oneLiner:
        'I build end-to-end software, connecting development, data, and delivery to take solutions from idea to production.',
      availability: 'Available for freelance & remote work',
      languages: 'Native Spanish · Basic English',
      abyssanCaseStudy: 'Case study: Abyssan',
      bastionCaseStudy: 'Case study: Bastion',
    },
  },
  heroVisual: {
    es: {
      pipelineLabel: 'gitlab-ci · dev/qa/main',
      deployLineTemplate: '__PRODUCTION_RELEASES__ releases ✓ producción',
      branchFlow: 'Flujo dev → qa → main · despliegue continuo',
      impactCards: [
        {
          metric: '__MERGED_MRS__',
          label: 'MR fusionados (__PERIOD__) en __PROJECT_COUNT__ proyectos',
        },
        { metric: '__PRODUCTION_RELEASES__', label: 'Releases a producción en el mismo periodo' },
        {
          metric: '__PUBLIC_REPOS__',
          label: 'Repositorios públicos en GitHub (actualizado en cada build)',
        },
      ],
    },
    en: {
      pipelineLabel: 'gitlab-ci · dev/qa/main',
      deployLineTemplate: '__PRODUCTION_RELEASES__ releases ✓ production',
      branchFlow: 'Branches dev → qa → main · continuous deployment',
      impactCards: [
        {
          metric: '__MERGED_MRS__',
          label: 'Merged MRs (__PERIOD__) across __PROJECT_COUNT__ projects',
        },
        { metric: '__PRODUCTION_RELEASES__', label: 'Production releases in the same period' },
        {
          metric: '__PUBLIC_REPOS__',
          label: 'Public GitHub repos (updated at build time)',
        },
      ],
    },
  },
  projectsArch: {
    es: {
      title: 'Arquitectura',
      web: 'Web SPA',
      api: 'API Express',
      git: 'Git adapter',
      ws: 'WebSocket · cambios en el repositorio',
    },
    en: {
      title: 'Architecture',
      web: 'Web SPA',
      api: 'Express API',
      git: 'Git adapter',
      ws: 'WebSocket · repo changes',
    },
  },
  about: {
    es: {
      title: 'Sobre mí',
      description: `Soy desarrollador Full-Stack orientado a problemas reales. Trabajo todo el ciclo: análisis, diseño, implementación, integración, despliegue y evolución en producción.
Combino frontend y backend, APIs, bases relacionales, automatización, CI/CD y operación de entornos, con experiencia en sistemas empresariales y roles de liderazgo técnico y coordinación.
Hoy amplío mi perfil hacia datos, analítica e inteligencia artificial mediante una maestría en Analítica e Inteligencia de Negocios, en paralelo a mi práctica de ingeniería.`,
      valueTitle: 'Qué aporto',
      value: `Traduzco necesidades de negocio y operación en software que se puede construir, desplegar y mantener sin fricción. Integro desarrollo Full-Stack, datos, automatización y DevOps en un solo criterio: que la solución funcione, sea integrable y aguante producción.`,
      expanding: 'En crecimiento: datos, analítica e IA',
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
      title: 'Stack y herramientas',
      core: 'Núcleo',
      supporting: 'Complemento',
      practices: 'Prácticas de ingeniería',
      growing: 'En desarrollo',
      evidence: 'Experiencia comprobable',
      rowFrontend: 'Frontend',
      rowBackend: 'Backend',
      rowData: 'Datos',
      rowDevops: 'DevOps',
    },
    en: {
      title: 'What I work with',
      core: 'Core',
      supporting: 'Supporting',
      practices: 'Engineering practices',
      growing: 'Growing',
      evidence: 'Depth by evidence',
      rowFrontend: 'Frontend',
      rowBackend: 'Backend',
      rowData: 'Data',
      rowDevops: 'DevOps',
    },
  },
  howBuild: {
    es: {
      title: 'Mi forma de construir',
      flow: 'Construir → Probar → Automatizar → Desplegar → Mejorar',
      architecture: 'Arquitectura — Capas claras, contratos explícitos y responsabilidades separadas.',
      development: 'Desarrollo — APIs REST, frontends mantenibles y dominio alineado al negocio.',
      data: 'Datos — Modelado relacional, consultas eficientes y trazabilidad en producción.',
      delivery: 'Entrega — GitFlow dev/qa/main, pipelines en GitLab CI/CD y automatización.',
      production: 'Producción — Operación de entornos, releases controlados y mejora continua.',
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
      subtitle: 'Open source y trabajo profesional (casos con nombres anonimizados)',
      openSource: 'Open source / personal',
      professional: 'Trabajo profesional',
    },
    en: {
      title: 'Featured projects',
      subtitle: 'Open source and professional work (anonymized cases)',
      openSource: 'Open Source / Personal',
      professional: 'Professional Work',
    },
  },
  impact: {
    es: {
      title: 'Impacto',
      items: [
        '__PERIOD__: __MERGED_MRS__ MR fusionados en __PROJECT_COUNT__ proyectos y __PRODUCTION_RELEASES__ releases a producción (GitLab CI/CD, ramas dev/qa/main).',
        'Sistema integral de recursos humanos en sector público: expedientes digitales, reportes PDF/Excel y despliegues controlados.',
        'Plataforma de operaciones de personal (React 19, FastAPI, PostgreSQL 16, Docker) en evolución activa.',
        'Coordinación técnica de hasta cuatro desarrolladores en sistemas internos de gobierno municipal.',
      ],
    },
    en: {
      title: 'Impact',
      items: [
        '__PERIOD__: __MERGED_MRS__ merged MRs across __PROJECT_COUNT__ projects and __PRODUCTION_RELEASES__ production releases (GitLab CI/CD, dev/qa/main).',
        'Integrated public-sector HR system: digital records, PDF/Excel reporting, and controlled deployments.',
        'Personnel operations platform (React 19, FastAPI, PostgreSQL 16, Docker) under active development.',
        'Technical coordination of up to 4 developers on internal municipal government systems.',
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
          org: 'Sector público (salud)',
          bullets: [
            'Diseño y evolución de un sistema integral de RH en sector público (React 19, TypeScript, Vite, FastAPI, PostgreSQL 16, Docker).',
            'Gestión documental y expedientes digitales conectados a un gestor documental empresarial.',
            'Modelos relacionales, seguridad por roles y reportes PDF/Excel.',
            'Operación de entornos y pipelines en GitLab CI/CD (dev/qa/main).',
          ],
        },
        {
          period: 'Jul 2025 – Abr 2026',
          title: 'Desarrollador de Sistemas / Sublíder Full-Stack',
          org: 'Gobierno municipal',
          bullets: [
            'Desarrollo de sistemas internos con .NET, C#, JavaScript y SQL Server.',
            'Coordinación de equipo, calidad de código y cumplimiento de entregables.',
            'Administración de bases de datos e infraestructura para sistemas críticos.',
          ],
        },
        {
          period: '2024 – 2025',
          title: 'Supervisor de Turno / Capacitador',
          org: 'Starbucks',
          bullets: [
            'Supervisión de operación diaria y coordinación de equipos por turno.',
            'Capacitación en procedimientos operativos y servicio al cliente.',
          ],
        },
        {
          period: '2023 – 2024',
          title: 'Desarrollador de Sistemas Junior',
          org: 'Hopewell System',
          bullets: [
            'Aplicaciones web y móviles con Flutter, Dart, JavaScript y PostgreSQL.',
            'Integración entre sistemas y control de versiones con Git.',
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
          org: 'Public sector (health)',
          bullets: [
            'Design and evolution of an integrated public-sector HR system (React 19, TypeScript, Vite, FastAPI, PostgreSQL 16, Docker).',
            'Document management and digital records integrated with an enterprise document manager.',
            'Relational models, role-based security, and PDF/Excel reporting.',
            'Environment operations and GitLab CI/CD pipelines (dev/qa/main).',
          ],
        },
        {
          period: 'Jul 2025 – Apr 2026',
          title: 'Systems Developer / Full-Stack Sub-Lead',
          org: 'Municipal government',
          bullets: [
            'Internal systems with .NET, C#, JavaScript, and SQL Server.',
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
      cvOnRequest: 'CV disponible a solicitud',
      cvOnRequestHint: 'Escríbeme por correo y te comparto la versión actualizada.',
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
      cvOnRequest: 'CV available on request',
      cvOnRequestHint: 'Email me and I will share an updated copy when ready.',
    },
  },
  contact: {
    es: {
      title: 'Contacto',
      email: 'kevinbryan_austria@outlook.com',
      linkedin: 'Kevin Bryan Austria Galvan',
      linkedinUrl: 'https://www.linkedin.com/in/kevin-austria-galvan-605117274',
    },
    en: {
      title: 'Contact',
      email: 'kevinbryan_austria@outlook.com',
      linkedin: 'Kevin Bryan Austria Galvan',
      linkedinUrl: 'https://www.linkedin.com/in/kevin-austria-galvan-605117274',
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
    frontend: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS'],
    backend: ['FastAPI', 'Python', 'C#', '.NET'],
    data: ['PostgreSQL', 'SQL Server', 'SQL'],
    devops: ['Git', 'GitHub', 'GitLab', 'GitLab CI/CD', 'Docker'],
  },
  supporting: ['Next.js', 'PHP', 'Flutter', 'Dart', 'Prisma', 'Auth.js'],
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
      'React 19 / FastAPI — Plataforma de operaciones de personal y sistemas de RH en sector público.',
      'React / TypeScript — Frontend de Abyssan, cliente Git visual autoalojable.',
      'Docker — Entornos de aplicación y flujos de desarrollo y despliegue.',
    ],
    en: [
      'React 19 / FastAPI — Personnel operations platform and public-sector HR systems.',
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
        'Monorepo en pnpm con SPA en React y backend en Node: grafo DAG, staging visual, diff y operaciones Git con capas y DDD ligero.',
      highlights: [
        'Notificaciones en tiempo real de cambios en repositorios vía WebSocket.',
        'Sandbox de rutas bajo PROJECTS_ROOT y confirmación en operaciones destructivas.',
        'Empaque con Docker Compose para API e interfaz.',
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
        'Sistema empresarial en sector público: gestión documental, flujos de validación y trazabilidad operativa, con gestor documental y almacenamiento en nube.',
      highlights: [
        'Integración con Alfresco y Nextcloud; flujos de conocimiento, seguimiento, validación y cierre.',
        'Bloqueo de edición en documentos ya validados; circuito firma física → PDF firmado → cierre.',
        'Permisos por rol y área; OTP y sesión única en roles sensibles; panel de sesiones activas.',
        'Semáforo de urgencia; reportes diarios en PDF/Excel; certificaciones con carga masiva.',
        'Evolución continua con GitLab CI/CD (ramas dev/qa/main).',
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
        'Continuous evolution with GitLab CI/CD (dev/qa/main branches).',
      ],
    },
  },
  personnel: {
    status: 'PRODUCTION' as ProjectStatus,
    secondaryStatus: 'IN_DEVELOPMENT' as ProjectStatus,
    stack: ['React 19', 'TypeScript', 'Vite', 'FastAPI', 'Docker', 'PostgreSQL 16'],
    es: {
      title: 'Personnel Operations Platform',
      summary: 'Plataforma hecha desde cero para operaciones de personal y expedientes.',
      highlights: [
        'Captura diaria, roles, reportes diarios y expedientes con autocaptura.',
        'Metas desde Excel, guardias, historial por persona y mes, vacaciones e incidencias.',
        'Capacitación y productividad con exportación a PDF.',
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
    stack: ['.NET', 'C#', 'JavaScript', 'SQL Server'],
    es: {
      title: 'Digital Property-Tax Collection System',
      summary:
        'Sistema municipal para generar y validar códigos de barras de predial, con pago habilitado por un canal externo de recaudación.',
      highlights: [
        'Validación de códigos y flujos alineados a procesos institucionales.',
        'Stack: .NET, C#, JavaScript y SQL Server.',
      ],
    },
    en: {
      title: 'Digital Property-Tax Collection System',
      summary:
        'Municipal government system for generating and validating property-tax barcodes, with payment enabled through an external collection channel.',
      highlights: [
        'Barcode validation and workflows aligned with institutional processes.',
        'Stack: .NET, C#, JavaScript, and SQL Server.',
      ],
    },
  },
  bastion: {
    status: 'OPEN_SOURCE' as ProjectStatus,
    secondaryStatus: 'IN_DEVELOPMENT' as ProjectStatus,
    url: 'https://github.com/KevinBAG2001/bastion',
    stack: [
      'Next.js 16',
      'TypeScript',
      'Auth.js v5',
      'Prisma 6',
      'PostgreSQL',
      'Argon2id',
      'Playwright',
      'CodeQL',
    ],
    es: {
      title: 'Bastion',
      tagline: 'Plataforma educativa de ciberseguridad en español',
      summary:
        'Proyecto open source (Apache-2.0) para principiantes: lecciones guiadas, autenticación segura y prácticas actuales. Aún sin despliegue público.',
      highlights: [
        'Auth.js v5, Argon2id, 2FA TOTP y revisión de contraseñas con Have I Been Pwned.',
        'Prisma 6 y PostgreSQL; superficie pensada para auditoría y endurecimiento progresivo.',
        'Playwright para pruebas E2E y CodeQL en el pipeline de calidad.',
      ],
    },
    en: {
      title: 'Bastion',
      tagline: 'Spanish-language cybersecurity learning platform',
      summary:
        'Apache-2.0 open source for beginners: guided lessons, secure auth, and modern practices. Not in public production yet.',
      highlights: [
        'Auth.js v5, Argon2id, TOTP 2FA, and Have I Been Pwned password checks.',
        'Prisma 6 + PostgreSQL; surface designed for audit and progressive hardening.',
        'Playwright E2E and CodeQL in the quality pipeline.',
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
        body: 'Los clientes Git maduros cubren lo básico, pero pocas veces muestran el efecto de un merge o reset antes de ejecutarlo. Abyssan busca Git visual, comprensión y seguridad en un cliente local autoalojable.',
      },
      {
        id: 'decisions',
        title: 'Decisiones',
        body: 'Monorepo en pnpm; adaptador Git único (simple-git) sin shell arbitrario; respuestas JSON uniformes en la API; copy en español; confirmación explícita en operaciones destructivas; sin base de datos en v1.',
      },
      {
        id: 'architecture',
        title: 'Arquitectura',
        body: 'HTTP → GitController → GitUseCases → SimpleGitAdapter. SPA en React 19 con Vite 6 y Tailwind 4; servidor Express con WebSocket (chokidar) para cambios bajo PROJECTS_ROOT.',
      },
      {
        id: 'security',
        title: 'Seguridad',
        body: 'Rutas fuera de PROJECTS_ROOT devuelven 403; CORS restringido; token de instancia fuera de localhost; WebSocket con handshake AUTH; sin log de diffs completos en producción.',
      },
      {
        id: 'testing',
        title: 'Testing',
        body: 'Vitest y oxlint en el monorepo; batería de pruebas de perímetro de seguridad (pnpm test:seguridad).',
      },
      {
        id: 'status',
        title: 'Estado',
        body: 'Fases 0–3 cerradas (Daily Driver, power, OAuth con forjas). Siguiente horizonte: Identidad — vista previa antes de merge/rebase, diario de deshacer y Explain Mode.',
      },
      {
        id: 'roadmap',
        title: 'Roadmap',
        body: 'Fase 4 Identidad → Fase 5 worktrees y contexto de forja → Fase 6 plataforma (Compose de producción, plugins). Sin IA ni hosting de repos en este horizonte.',
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

export const bastionCaseStudy = {
  es: {
    title: 'Bastion — Case study',
    sections: [
      {
        id: 'problem',
        title: 'Problema',
        body: 'Gran parte del material de ciberseguridad está en inglés o asume bases previas. Bastion ofrece una ruta en español para principiantes, con práctica de autenticación e higiene de contraseñas sin exponer un entorno productivo.',
      },
      {
        id: 'decisions',
        title: 'Decisiones',
        body: 'Next.js 16 y TypeScript; Auth.js v5 con sesiones explícitas; Argon2id; 2FA TOTP opcional; consulta a Have I Been Pwned al registrar o cambiar contraseña; Prisma 6 sobre PostgreSQL; Apache-2.0 con desarrollo abierto y sin despliegue público hasta cerrar el endurecimiento.',
      },
      {
        id: 'architecture',
        title: 'Arquitectura',
        body: 'App Router con capas de dominio para usuarios y progreso de lecciones; Prisma como ORM; middleware de autenticación; E2E con Playwright y análisis estático con CodeQL en CI.',
      },
      {
        id: 'result',
        title: 'Resultado',
        body: 'Repositorio público con base de seguridad verificable (hash, 2FA, filtraciones) y contenido educativo estructurado. Estado: en desarrollo, preparando una primera demo autoalojable.',
      },
    ],
  },
  en: {
    title: 'Bastion — Case study',
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        body: 'Much cybersecurity material is English-only or assumes prior knowledge. Bastion targets a Spanish learning path for beginners, with hands-on auth and password hygiene without relying on an exposed production environment.',
      },
      {
        id: 'decisions',
        title: 'Decisions',
        body: 'Next.js 16 and TypeScript; Auth.js v5 with explicit sessions; Argon2id hashing; optional TOTP 2FA; Have I Been Pwned on sign-up/password change; Prisma 6 on PostgreSQL; Apache-2.0 open development with no public deploy until hardening is complete.',
      },
      {
        id: 'architecture',
        title: 'Architecture',
        body: 'App Router with domain layers for users and lesson progress; Prisma ORM; auth middleware; Playwright E2E and CodeQL static analysis in CI.',
      },
      {
        id: 'result',
        title: 'Outcome',
        body: 'Public repository with verifiable security baseline (hashing, 2FA, breach checks) and structured educational content. Status: in development — preparing a self-hostable demo release.',
      },
    ],
  },
}
