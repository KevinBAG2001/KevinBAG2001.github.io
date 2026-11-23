import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GitHubIcon, GitLabIcon } from '../icons/BrandIcons'
import { AvailabilityPill } from '../hero/AvailabilityPill'
import { BlurHeadline } from '../hero/BlurHeadline'
import { HeroPipelineVisual } from '../hero/HeroPipelineVisual'
import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'

export function HeroSection() {
  const { locale } = useLocale()
  const h = copy.hero[locale]
  const nav = copy.nav[locale]
  const reduce = useReducedMotion()

  const taglineEn = 'Building real-world software from idea to production.'

  return (
    <section
      className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-center px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:pb-20 lg:pt-20"
      aria-labelledby="hero-name"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <AvailabilityPill />
          <p className="mt-6 font-mono text-xs tracking-[0.2em] text-[var(--color-text-muted)] uppercase">{h.role}</p>
          <h1
            id="hero-name"
            className="mt-4 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em]"
          >
            <BlurHeadline text={locale === 'es' ? h.name : h.headline} />
          </h1>
          {locale === 'es' ? (
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)] sm:text-xl">{h.headline}</p>
          ) : (
            <p className="mt-4 text-lg text-[var(--color-text)] sm:text-xl">{h.name}</p>
          )}
          <p className="mt-4 font-mono text-sm text-[var(--color-accent)] sm:text-base">{h.focus}</p>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{h.languages}</p>
          {(locale === 'es' || h.headline !== taglineEn) && (
            <p className="mt-6 text-lg font-medium leading-relaxed text-[var(--color-secondary)] sm:text-xl">
              {locale === 'es' ? taglineEn : h.headline}
            </p>
          )}
          <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)]">{h.oneLiner}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_40px_-12px_rgba(226,54,54,0.55)] transition hover:bg-[var(--color-accent-soft)] hover:-translate-y-0.5"
            >
              {nav.viewProjects}
              <ArrowDown size={16} />
            </a>
            <Link
              to="/projects/bastion"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-text)] transition hover:border-[var(--color-secondary)]/50 hover:bg-[var(--color-surface-elevated)]"
            >
              <BookOpen size={16} className="text-[var(--color-text-muted)]" />
              {h.bastionCaseStudy}
            </Link>
            <Link
              to="/projects/abyssan"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-text)] transition hover:border-[var(--color-secondary)]/50 hover:bg-[var(--color-surface-elevated)]"
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
          <motion.p
            className="mt-8 hidden text-xs text-[var(--color-text-muted)] lg:block"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <Link to="/os" className="text-[var(--color-secondary)] transition hover:text-[var(--color-text)]">
              Kevin OS →
            </Link>
          </motion.p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="lg:justify-self-end"
        >
          <HeroPipelineVisual />
        </motion.div>
      </div>
    </section>
  )
}