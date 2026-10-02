import { Reveal } from '../Reveal'
import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'

export function ExperienceSection() {
  const { locale } = useLocale()
  const e = copy.experience[locale]

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{e.title}</h2>
        <ol className="relative mt-10 space-y-8 border-l border-[var(--color-border)] pl-6">
          {e.roles.map((role) => (
            <li key={role.title + role.period} className="relative">
              <span className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
              <p className="font-mono text-xs text-[var(--color-text-muted)]">{role.period}</p>
              <h3 className="mt-1 text-lg font-medium">{role.title}</h3>
              <p className="text-sm text-[var(--color-accent)]">{role.org}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-[var(--color-text-muted)]">
                {role.bullets.map((b) => (
                  <li key={b}>· {b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}
