import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../context/LocaleContext'
import { copy, projectsData, type ProjectStatus } from '../../i18n/translations'
import { StatusBadge } from '../StatusBadge'
import { Reveal } from '../Reveal'

function ProjectCard({
  title,
  summary,
  highlights,
  stack,
  statuses,
  href,
  caseStudyHref,
  heroImage,
}: {
  title: string
  summary: string
  highlights: string[]
  stack: string[]
  statuses: ProjectStatus[]
  href?: string
  caseStudyHref?: string
  heroImage?: string
}) {
  const { locale } = useLocale()
  const nav = copy.nav[locale]

  return (
    <article className="group glass-panel flex h-full flex-col overflow-hidden rounded-2xl transition hover:border-[var(--color-border)]">
      {heroImage && (
        <div className="border-b border-[var(--color-border-subtle)] bg-[#0f111a] p-6">
          <img src={heroImage} alt="" className="mx-auto h-24 w-auto opacity-90" loading="lazy" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          {statuses.map((s) => (
            <StatusBadge key={s} status={s} />
          ))}
        </div>
        <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{summary}</p>
        <ul className="mt-4 flex-1 space-y-2 text-sm text-[var(--color-text-muted)]">
          {highlights.map((h) => (
            <li key={h} className="border-l border-[var(--color-border)] pl-3">
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((t) => (
            <span key={t} className="font-mono text-[10px] text-[var(--color-text-muted)]">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--color-accent)] hover:underline"
            >
              GitHub <ExternalLink size={14} />
            </a>
          )}
          {caseStudyHref && (
            <Link to={caseStudyHref} className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
              {nav.caseStudy} →
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

export function ProjectsSection() {
  const { locale } = useLocale()
  const p = copy.projects[locale]
  const aby = projectsData.abyssan[locale]
  const doc = projectsData.docMgmt[locale]
  const per = projectsData.personnel[locale]
  const pre = projectsData.predial[locale]

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{p.title}</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <h3 className="mt-10 font-mono text-xs tracking-wider text-[var(--color-text-muted)] uppercase">
          {p.openSource}
        </h3>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <ProjectCard
            title={aby.title}
            summary={`${aby.tagline}. ${aby.summary}`}
            highlights={aby.highlights}
            stack={projectsData.abyssan.stack}
            statuses={['OPEN_SOURCE']}
            href={projectsData.abyssan.url}
            caseStudyHref="/projects/abyssan"
            heroImage="/assets/projects/abyssan/banner.svg"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h3 className="mt-12 font-mono text-xs tracking-wider text-[var(--color-text-muted)] uppercase">
          {p.professional}
        </h3>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <ProjectCard
            title={doc.title}
            summary={doc.summary}
            highlights={doc.highlights}
            stack={projectsData.docMgmt.stack}
            statuses={['PRODUCTION']}
          />
          <ProjectCard
            title={per.title}
            summary={per.summary}
            highlights={per.highlights}
            stack={projectsData.personnel.stack}
            statuses={['PRODUCTION', 'IN_DEVELOPMENT']}
          />
          <ProjectCard
            title={pre.title}
            summary={pre.summary}
            highlights={pre.highlights}
            stack={projectsData.predial.stack}
            statuses={['PRODUCTION']}
          />
        </div>
      </Reveal>
    </section>
  )
}
