import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { StatusBadge } from '../components/StatusBadge'
import { useLocale } from '../context/LocaleContext'
import { bastionCaseStudy, copy, projectsData } from '../i18n/translations'

export function BastionCaseStudyPage() {
  const { locale } = useLocale()
  const cs = bastionCaseStudy[locale]
  const nav = copy.nav[locale]

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
      >
        <ArrowLeft size={16} />
        {nav.backHome}
      </Link>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <StatusBadge status="OPEN_SOURCE" />
        <StatusBadge status="IN_DEVELOPMENT" />
        <a
          href={projectsData.bastion.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline"
        >
          GitHub <ExternalLink size={14} />
        </a>
      </div>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">{cs.title}</h1>
      <p className="mt-3 text-base text-[var(--color-text-muted)]">{projectsData.bastion[locale].tagline}</p>
      <div className="mt-10 space-y-10">
        {cs.sections.map((section, i) => (
          <Reveal key={section.id} delay={i * 0.04}>
            <section id={section.id}>
              <h2 className="font-mono text-sm tracking-wider text-[var(--color-accent)] uppercase">{section.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--color-text-muted)]">{section.body}</p>
            </section>
          </Reveal>
        ))}
      </div>
    </article>
  )
}