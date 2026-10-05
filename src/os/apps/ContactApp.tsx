import { Mail } from 'lucide-react'
import { GitHubIcon, GitLabIcon } from '../../components/icons/BrandIcons'
import { useState } from 'react'
import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'
import { tOs } from '../i18n/osCopy'

export function ContactApp() {
  const { locale } = useLocale()
  const t = tOs('contactApp', locale)
  const email = copy.contact[locale].email
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const mailto = () => {
    const subject = encodeURIComponent(`Portfolio — ${name || 'Contact'}`)
    const body = encodeURIComponent(message || '')
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="flex h-full flex-col gap-5 overflow-y-auto p-5">
      <p className="text-sm text-[var(--color-text-muted)]">{t.intro}</p>
      <div className="flex flex-col gap-3">
        <a
          href={`mailto:${email}`}
          className="glass-panel flex items-center gap-3 rounded-xl p-4 hover:border-[var(--color-accent)]"
        >
          <Mail className="text-[var(--color-accent)]" size={20} />
          <span className="font-mono text-sm">{email}</span>
        </a>
        <a
          href="https://github.com/KevinBAG2001"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel flex items-center gap-3 rounded-xl p-4 hover:border-[var(--color-accent)]"
        >
          <GitHubIcon className="h-5 w-5" />
          <span className="text-sm">github.com/KevinBAG2001</span>
        </a>
        <a
          href="https://gitlab.com/KevinBAG2001"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel flex items-center gap-3 rounded-xl p-4 hover:border-[var(--color-accent)]"
        >
          <GitLabIcon className="h-5 w-5" />
          <span className="text-sm">gitlab.com/KevinBAG2001</span>
        </a>
      </div>
      <form
        className="glass-panel space-y-3 rounded-xl p-4"
        onSubmit={(e) => {
          e.preventDefault()
          mailto()
        }}
      >
        <label className="block text-xs text-[var(--color-text-muted)]">
          {t.name}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
          />
        </label>
        <label className="block text-xs text-[var(--color-text-muted)]">
          {t.message}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="mt-1 w-full resize-none rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-lg bg-[var(--color-accent)] py-2 text-sm font-medium text-white hover:opacity-90"
        >
          {t.send}
        </button>
      </form>
    </div>
  )
}
