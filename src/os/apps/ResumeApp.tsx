import { useState } from 'react'
import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'
import { tOs } from '../i18n/osCopy'

type Tab = 'experience' | 'education' | 'impact'

export function ResumeApp() {
  const { locale } = useLocale()
  const t = tOs('resumeApp', locale)
  const [tab, setTab] = useState<Tab>('experience')
  const exp = copy.experience[locale]
  const edu = copy.education[locale]
  const impact = copy.impact[locale]

  const tabs: { id: Tab; label: string }[] = [
    { id: 'experience', label: t.tabs.experience },
    { id: 'education', label: t.tabs.education },
    { id: 'impact', label: t.tabs.impact },
  ]

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] px-4 py-3">
        <div>
          <p className="font-semibold">{copy.hero[locale].name}</p>
          <p className="text-xs text-[var(--color-text-muted)]">{copy.hero[locale].role}</p>
        </div>
        <div className="flex gap-2 text-xs">
          <a
            href="/assets/cv/cv-es.pdf"
            className="rounded-lg border border-[var(--color-border)] px-2 py-1 hover:bg-[var(--color-surface)]"
            download
          >
            {edu.cvEs}
          </a>
          <a
            href="/assets/cv/cv-en.pdf"
            className="rounded-lg border border-[var(--color-border)] px-2 py-1 hover:bg-[var(--color-surface)]"
            download
          >
            {edu.cvEn}
          </a>
        </div>
      </div>
      <div className="flex gap-1 border-b border-[var(--color-border-subtle)] px-4 py-2">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
              tab === id
                ? 'bg-[var(--color-accent)] text-white'
                : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface)]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto p-4 text-sm">
        {tab === 'experience' && (
          <ul className="space-y-5">
            {exp.roles.map((role) => (
              <li key={`${role.period}-${role.title}`} className="border-l-2 border-[var(--color-accent)] pl-3">
                <p className="font-mono text-[10px] text-[var(--color-text-muted)]">{role.period}</p>
                <p className="font-medium">{role.title}</p>
                <p className="text-[var(--color-text-muted)]">{role.org}</p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-[var(--color-text-muted)]">
                  {role.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
        {tab === 'education' && (
          <div className="space-y-6">
            <section>
              <h3 className="text-xs font-medium tracking-wide text-[var(--color-text-muted)] uppercase">
                {edu.educationLabel}
              </h3>
              <ul className="mt-2 space-y-3">
                {edu.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-[var(--color-text-muted)]">
                      {item.place} {item.period && `· ${item.period}`}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="text-xs font-medium tracking-wide text-[var(--color-text-muted)] uppercase">
                {edu.certsLabel}
              </h3>
              <ul className="mt-2 space-y-3">
                {edu.certs.map((c) => (
                  <li key={c.name}>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-[var(--color-text-muted)]">
                      {c.place} · {c.period}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
            <p className="text-xs text-[var(--color-text-muted)]">{t.noCv}</p>
          </div>
        )}
        {tab === 'impact' && (
          <ul className="list-disc space-y-2 pl-4 text-[var(--color-text-muted)]">
            {impact.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
