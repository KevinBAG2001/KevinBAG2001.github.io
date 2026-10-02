import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../context/LocaleContext'
import { copy, projectsData, type ProjectStatus } from '../../i18n/translations'
import { AbyssanArchDiagram } from '../projects/AbyssanArchDiagram'
import { StatusBadge } from '../StatusBadge'
import { Reveal } from '../Reveal'

function ProTile({
  title,
  summary,
  stack,
  statuses,
  compact,
}: {
  title: string
  summary: string
  stack: string[]
  statuses: ProjectStatus[]
  compact?: boolean
}) {
  return (
    <article className="group glass-panel flex h-full flex-col rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/35 hover:shadow-[0_20px_50px_-24px_rgba(59,130,246,0.35)]">
      <div className="flex flex-wrap gap-2">
        {statuses.map((s) => (
          <StatusBadge key={s} status={s} />
        ))}
      </div>
      <h3 className="mt-3 text-base font-semibold tracking-tight sm:text-lg">{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed text-[var(--color-text-muted)] ${compact ? 'line-clamp-3' : ''}`}>
        {summary}
      </p>
      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        {stack.map((t) => (
          <span key={t} className="font-mono text-[10px] text-[var(--color-text-muted)]">
            {t}
          </span>
        ))}
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
  const nav = copy.nav[locale]

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{p.title}</h2>
        <p className="mt-2 font-mono text-xs text-[var(--color-text-muted)]">{p.subtitle}</p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-[auto_auto_auto]">
          <article className="group glass-panel relative flex flex-col overflow-hidden rounded-2xl lg:col-span-4 lg:row-span-3 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/35 hover:shadow-[0_24px_60px_-28px_rgba(16,185,129,0.35)]">
            <div className="border-b border-[var(--color-border-subtle)] bg-[#0f111a] px-6 py-5">
              <img
                src="/assets/projects/abyssan/banner.svg"
                alt=""
                className="mx-auto h-20 w-auto opacity-95"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status="OPEN_SOURCE" />
                <span className="font-mono text-[10px] tracking-wider text-[var(--color-text-muted)] uppercase">
                  {p.openSource}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">{aby.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {aby.tagline}. {aby.summary}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-muted)]">
                {aby.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="border-l border-emerald-500/40 pl-3">
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <AbyssanArchDiagram />
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <a
                  href={projectsData.abyssan.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--color-accent)] hover:underline"
                >
                  GitHub <ExternalLink size={14} />
                </a>
                <Link
                  to="/projects/abyssan"
                  className="rounded-lg border border-[var(--color-border)] px-3 py-1.5 text-[var(--color-text)] transition hover:border-[var(--color-accent)]/50"
                >
                  {nav.caseStudyAbyssan} →
                </Link>
              </div>
            </div>
          </article>

          <div className="flex flex-col gap-4 lg:col-span-2 lg:row-span-3">
            <p className="font-mono text-[10px] tracking-wider text-[var(--color-text-muted)] uppercase">
              {p.professional}
            </p>
            <ProTile
              title={doc.title}
              summary={doc.summary}
              stack={projectsData.docMgmt.stack}
              statuses={['PRODUCTION']}
              compact
            />
            <ProTile
              title={per.title}
              summary={per.summary}
              stack={projectsData.personnel.stack}
              statuses={['PRODUCTION', 'IN_DEVELOPMENT']}
              compact
            />
            <ProTile
              title={pre.title}
              summary={pre.summary}
              stack={projectsData.predial.stack}
              statuses={['PRODUCTION']}
              compact
            />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
