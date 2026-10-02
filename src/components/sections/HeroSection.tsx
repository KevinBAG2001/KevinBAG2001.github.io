import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { GitHubIcon, GitLabIcon } from '../icons/BrandIcons'
import { Link } from 'react-router-dom'
import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'

export function HeroSection() {
  const { locale } = useLocale()
  const h = copy.hero[locale]
  const nav = copy.nav[locale]
  const reduce = useReducedMotion()

  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24" aria-labelledby="hero-name">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-mono text-xs tracking-[0.2em] text-[var(--color-text-muted)] uppercase">{h.role}</p>
        <h1 id="hero-name" className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {h.name}
        </h1>
        <p className="mt-4 max-w-2xl font-mono text-sm text-[var(--color-accent)] sm:text-base">{h.focus}</p>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed font-medium text-[var(--color-text)] sm:text-2xl">
          {h.headline}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">{h.oneLiner}</p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--color-accent-soft)]"
          >
            {nav.viewProjects}
            <ArrowDown size={16} />
          </a>
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
          <Link
            to="/projects/abyssan"
            className="text-sm text-[var(--color-text-muted)] underline-offset-4 hover:text-[var(--color-text)] hover:underline"
          >
            Abyssan {nav.caseStudy}
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
