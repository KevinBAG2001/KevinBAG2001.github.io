import { Reveal } from '../Reveal'
import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'

export function AboutSection() {
  const { locale } = useLocale()
  const a = copy.about[locale]

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{a.title}</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-base leading-relaxed text-[var(--color-text-muted)]">
            {a.description.split('\n').map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <p className="font-mono text-xs tracking-wider text-[var(--color-accent)] uppercase">{a.expanding}</p>
            <h3 className="mt-4 text-lg font-medium">{a.valueTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{a.value}</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
