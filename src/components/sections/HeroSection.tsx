import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GitHubIcon, GitLabIcon } from '../icons/BrandIcons'
import { AvailabilityPill } from '../hero/AvailabilityPill'
import { HeroPipelineVisual } from '../hero/HeroPipelineVisual'
import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'

export function HeroSection() {
  const { locale } = useLocale()
  const h = copy.hero[locale]
  const nav = copy.nav[locale]
  const reduce = useReducedMotion()

  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24" aria-labelledby="hero-name">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <AvailabilityPill />
          <p className="mt-5 font-mono text-xs tracking-[0.2em] text-[var(--color-text-muted)] uppercase">{h.role}</p>
          <h1 id="hero-name" className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            {h.name}
          </h1>
          <p className="mt-4 font-mono text-sm text-[var(--color-accent)] sm:text-base">{h.focus}</p>
          <p className="mt-6 text-xl leading-relaxed font-medium text-[var(--color-text)] sm:text-2xl">{h.headline}</p>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">{h.oneLiner}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--color-accent-soft)]"
            >
              {nav.viewProjects}
              <ArrowDown size={16} />
            </a>
            <Link
              to="/projects/abyssan"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-text)] transition hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface-elevated)]"
            >
              <BookOpen size={16} className="text-[var(--color-text-muted)]" />
              {h.abyssanCaseStudy}
            </Link>
            <a
              href="https://github.com/KevinBAG2001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-text)] transition hover:bg-[var(--color-surface-elevated)]"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
            <a
              href="https://gitlab.com/KevinBAG2001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-text)] transition hover:bg-[var(--color-surface-elevated)]"
            >
              <GitLabIcon size={16} />
              GitLab
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="lg:justify-self-end lg:max-w-md xl:max-w-none xl:w-full"
        >
          <HeroPipelineVisual />
        </motion.div>
      </div>
    </section>
  )
}
