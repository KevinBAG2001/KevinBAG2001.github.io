import { ExternalLink, Search, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import { StatusBadge } from '../../components/StatusBadge'
import { useLocale } from '../../context/LocaleContext'
import { abyssanCaseStudy, bastionCaseStudy, projectsData, type ProjectStatus } from '../../i18n/translations'
import { tOs } from '../i18n/osCopy'

type ProjectKey = keyof typeof projectsData

const PROJECT_KEYS: ProjectKey[] = ['abyssan', 'bastion', 'docMgmt', 'personnel', 'predial']

const CASE_STUDY_KEYS = new Set<ProjectKey>(['abyssan', 'bastion'])

export function ProjectsApp() {
  const { locale } = useLocale()
  const t = tOs('projectsApp', locale)
  const [query, setQuery] = useState('')
  const [view, setView] = useState<'list' | ProjectKey>('list')

  const productionCount = PROJECT_KEYS.filter((k) => {
    const s = projectsData[k].status
    return s === 'PRODUCTION' || s === 'OPEN_SOURCE'
  }).length

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PROJECT_KEYS.filter((key) => {
      const p = projectsData[key]
      const loc = p[locale]
      const haystack = [loc.title, loc.summary, ...('highlights' in loc ? loc.highlights : []), ...p.stack].join(' ').toLowerCase()
      return !q || haystack.includes(q)
    })
  }, [query, locale])

  if (view !== 'list' && CASE_STUDY_KEYS.has(view)) {
    const key = view
    const cs = key === 'abyssan' ? abyssanCaseStudy[locale] : bastionCaseStudy[locale]
    const proj = projectsData[key][locale]
    const pdata = projectsData[key]
    return (
      <div className="flex h-full flex-col overflow-hidden">
        <div className="flex items-center gap-2 border-b border-[var(--color-border-subtle)] px-4 py-2">
          <button
            type="button"
            onClick={() => setView('list')}
            className="text-sm text-[var(--color-accent)] hover:underline"
          >
            ← {t.backToList}
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={pdata.status as ProjectStatus} />
            {'secondaryStatus' in pdata && pdata.secondaryStatus ? (
              <StatusBadge status={pdata.secondaryStatus as ProjectStatus} />
            ) : null}
            {'url' in pdata && pdata.url ? (
              <a
                href={pdata.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline"
              >
                GitHub <ExternalLink size={14} />
              </a>
            ) : null}
          </div>
          <img
            src={`/assets/projects/${key}/logo.svg`}
            alt=""
            className="mt-4 h-12 w-12"
            width={48}
            height={48}
          />
          <h2 className="mt-4 text-lg font-semibold">{proj.title}</h2>
          {'tagline' in proj && <p className="mt-1 text-sm text-[var(--color-text-muted)]">{proj.tagline}</p>}
          <div className="mt-6 space-y-6">
            {cs.sections.map((section) => (
              <section key={section.id}>
                <h3 className="font-mono text-xs tracking-wider text-[var(--color-accent)] uppercase">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[var(--color-surface-elevated)]/40">
      <div className="border-b border-[var(--color-border-subtle)] px-4 py-3">
        <p className="text-lg font-semibold">{locale === 'es' ? 'Proyectos de Kevin' : "Kevin's projects"}</p>
        <p className="text-xs text-[var(--color-text-muted)]">
          {t.projectCount(PROJECT_KEYS.length)} · {t.inProduction(productionCount)}
        </p>
        <label className="relative mt-3 flex items-center">
          <Search size={16} className="absolute left-3 text-[var(--color-text-muted)]" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] py-2 pr-3 pl-9 text-sm outline-none focus:border-[var(--color-accent)]"
          />
        </label>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <h3 className="mb-3 text-xs font-medium tracking-wide text-[var(--color-text-muted)] uppercase">
          {t.featured}
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {filtered.map((key) => {
            const p = projectsData[key]
            const loc = p[locale]
            const hasCaseStudy = CASE_STUDY_KEYS.has(key)
            const repoUrl = 'url' in p ? p.url : undefined
            return (
              <article
                key={key}
                className="glass-panel flex flex-col rounded-xl p-4 transition hover:border-[var(--color-border)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="flex items-center gap-1.5 font-medium">
                    {hasCaseStudy && <Star size={14} className="text-amber-400" fill="currentColor" />}
                    {loc.title}
                  </h4>
                  <StatusBadge status={p.status as ProjectStatus} />
                </div>
                {'tagline' in loc && (
                  <p className="mt-1 text-xs text-[var(--color-accent)]">{loc.tagline}</p>
                )}
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--color-text-muted)]">{loc.summary}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {p.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-[var(--color-surface)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {hasCaseStudy && (
                    <>
                      <button
                        type="button"
                        onClick={() => setView(key)}
                        className="rounded-lg bg-[var(--color-accent)] px-3 py-1.5 text-xs font-medium text-white hover:opacity-90"
                      >
                        {t.openCaseStudy}
                      </button>
                      {repoUrl ? (
                        <a
                          href={repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-[var(--color-border)] px-3 py-1.5 text-xs hover:bg-[var(--color-surface)]"
                        >
                          {t.openGitHub}
                        </a>
                      ) : null}
                    </>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
