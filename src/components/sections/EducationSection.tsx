import { Mail } from 'lucide-react'
import { Reveal } from '../Reveal'
import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'

export function EducationSection() {
  const { locale } = useLocale()
  const ed = copy.education[locale]
  const contact = copy.contact[locale]

  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{ed.title}</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs tracking-wider text-[var(--color-text-muted)] uppercase">
              {ed.educationLabel}
            </h3>
            <ul className="mt-4 space-y-4">
              {ed.items.map((item) => (
                <li key={item.name} className="glass-panel rounded-xl p-4">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {item.place}
                    {item.period ? ` · ${item.period}` : ''}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs tracking-wider text-[var(--color-text-muted)] uppercase">
              {ed.certsLabel}
            </h3>
            <ul className="mt-4 space-y-4">
              {ed.certs.map((item) => (
                <li key={item.name} className="glass-panel rounded-xl p-4">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {item.place} · {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 glass-panel rounded-xl border border-dashed border-[var(--color-border)] p-5">
          <p className="font-medium">{ed.cvOnRequest}</p>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{ed.cvOnRequestHint}</p>
          <a
            href={`mailto:${contact.email}?subject=${encodeURIComponent(locale === 'es' ? 'Solicitud de CV' : 'CV request')}`}
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm transition hover:bg-[var(--color-surface-elevated)]"
          >
            <Mail size={16} className="text-[var(--color-accent)]" />
            {contact.email}
          </a>
        </div>
      </Reveal>
    </section>
  )
}