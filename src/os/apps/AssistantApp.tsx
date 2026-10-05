import { Bot, Send } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useLocale } from '../../context/LocaleContext'
import { copy, projectsData, stackData } from '../../i18n/translations'
import { tOs } from '../i18n/osCopy'

type Msg = { role: 'user' | 'bot'; text: string }

function answerFor(query: string, locale: 'es' | 'en'): string | null {
  const q = query.toLowerCase()
  const hero = copy.hero[locale]
  const contact = copy.contact[locale].email

  if (/proyect|project|abyssan|portfolio/.test(q)) {
    const titles = (['abyssan', 'docMgmt', 'personnel', 'predial'] as const)
      .map((k) => `• ${projectsData[k][locale].title}`)
      .join('\n')
    return locale === 'es'
      ? `Proyectos destacados:\n${titles}\n\nAbyssan es open source: github.com/KevinBAG2001/Abyssan. Ábrelo en la app Proyectos para el case study.`
      : `Featured projects:\n${titles}\n\nAbyssan is open source: github.com/KevinBAG2001/Abyssan. Open the Projects app for the full case study.`
  }
  if (/stack|tech|tecnolog/.test(q)) {
    const c = stackData.core
    return `Core:\nFrontend: ${c.frontend.join(', ')}\nBackend: ${c.backend.join(', ')}\nData: ${c.data.join(', ')}\nDevOps: ${c.devops.join(', ')}`
  }
  if (/contact|correo|email|hire|contrat/.test(q)) {
    return `${contact}\nGitHub: github.com/KevinBAG2001\nGitLab: gitlab.com/KevinBAG2001`
  }
  if (/abyssan|git client/.test(q)) {
    return projectsData.abyssan[locale].summary
  }
  if (/experiencia|experience|cv|resume/.test(q)) {
    const first = copy.experience[locale].roles[0]
    return first
      ? `${first.title} @ ${first.org}\n${first.bullets[0]}`
      : null
  }
  if (/quien|who|about|sobre/.test(q)) {
    return `${hero.name} — ${hero.role}\n${hero.oneLiner}`
  }
  return null
}

export function AssistantApp() {
  const { locale } = useLocale()
  const t = tOs('assistant', locale)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'bot',
      text: locale === 'es' ? copy.hero[locale].headline : copy.hero[locale].headline,
    },
  ])

  const suggestions = useMemo(() => t.suggestions, [t.suggestions])

  const send = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    const reply = answerFor(trimmed, locale) ?? t.fallback
    setMessages((m) => [...m, { role: 'user', text: trimmed }, { role: 'bot', text: reply }])
    setInput('')
  }

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center gap-2 border-b border-[var(--color-border-subtle)] px-4 py-3">
        <Bot className="text-[var(--color-accent)]" size={22} />
        <div>
          <p className="font-medium">{t.title}</p>
          <p className="text-xs text-[var(--color-text-muted)]">{t.subtitle}</p>
        </div>
      </header>
      <div className="flex flex-wrap gap-2 border-b border-[var(--color-border-subtle)] px-4 py-2">
        {suggestions.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => send(s)}
            className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs hover:bg-[var(--color-surface)]"
          >
            {s}
          </button>
        ))}
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <div
            key={`${i}-${m.text.slice(0, 12)}`}
            className={`max-w-[90%] rounded-xl px-3 py-2 text-sm whitespace-pre-wrap ${
              m.role === 'user'
                ? 'ml-auto bg-[var(--color-accent)] text-white'
                : 'bg-[var(--color-surface)] text-[var(--color-text-muted)]'
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>
      <form
        className="flex gap-2 border-t border-[var(--color-border-subtle)] p-3"
        onSubmit={(e) => {
          e.preventDefault()
          send(input)
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.placeholder}
          className="min-w-0 flex-1 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
        />
        <button
          type="submit"
          className="flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-3 text-white"
          aria-label={t.send}
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  )
}
