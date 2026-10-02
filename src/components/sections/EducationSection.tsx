import { FileDown } from 'lucide-react'
import { Reveal } from '../Reveal'
import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'

export function EducationSection() {
  const { locale } = useLocale()
  const ed = copy.education[locale]

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
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/assets/cv/Kevin_Austria_FullStack_ES.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm transition hover:bg-[var(--color-surface-elevated)]"
          >
            <FileDown size={16} />
            {ed.cvEs}
          </a>
          <a
            href="/assets/cv/Kevin_Austria_FullStack_EN.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm transition hover:bg-[var(--color-surface-elevated)]"
          >
            <FileDown size={16} />
            {ed.cvEn}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
