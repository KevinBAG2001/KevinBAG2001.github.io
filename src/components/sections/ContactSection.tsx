import { Mail } from 'lucide-react'
import { GitHubIcon, GitLabIcon } from '../icons/BrandIcons'
import { Reveal } from '../Reveal'
import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'

export function ContactSection() {
  const { locale } = useLocale()
  const c = copy.contact[locale]

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 pb-24 sm:px-6">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{c.title}</h2>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${c.email}`}
            className="glass-panel inline-flex items-center gap-3 rounded-xl px-5 py-4 text-sm transition hover:border-[var(--color-accent)]/50"
          >
            <Mail size={18} className="text-[var(--color-accent)]" />
            {c.email}
          </a>
          <a
            href="https://github.com/KevinBAG2001"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel inline-flex items-center gap-3 rounded-xl px-5 py-4 text-sm transition hover:border-[var(--color-accent)]/50"
          >
            <GitHubIcon size={18} />
            github.com/KevinBAG2001
          </a>
          <a
            href="https://gitlab.com/KevinBAG2001"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel inline-flex items-center gap-3 rounded-xl px-5 py-4 text-sm transition hover:border-[var(--color-accent)]/50"
          >
            <GitLabIcon size={18} />
            gitlab.com/KevinBAG2001
          </a>
        </div>
      </Reveal>
    </section>
  )
}
