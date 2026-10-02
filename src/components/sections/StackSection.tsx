import { Reveal } from '../Reveal'
import { useLocale } from '../../context/LocaleContext'
import { copy, stackData } from '../../i18n/translations'

function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] px-2.5 py-1 font-mono text-xs text-[var(--color-text)]">
      {children}
    </span>
  )
}

function Row({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <span className="text-xs text-[var(--color-text-muted)]">{label}</span>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((x) => (
          <Chip key={x}>{x}</Chip>
        ))}
      </div>
    </div>
  )
}

export function StackSection() {
  const { locale } = useLocale()
  const s = copy.stack[locale]
  const evidence = stackData.evidence[locale]

  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{s.title}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="glass-panel rounded-2xl p-5 lg:col-span-2">
            <h3 className="font-mono text-xs tracking-wider text-[var(--color-text-muted)] uppercase">{s.core}</h3>
            <div className="mt-4 space-y-4 text-sm">
              <Row label="Frontend" items={stackData.core.frontend} />
              <Row label="Backend" items={stackData.core.backend} />
              <Row label="Data" items={stackData.core.data} />
              <Row label="DevOps" items={stackData.core.devops} />
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-5">
            <h3 className="font-mono text-xs tracking-wider text-[var(--color-text-muted)] uppercase">
              {s.supporting}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {stackData.supporting.map((x) => (
                <Chip key={x}>{x}</Chip>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-5">
            <h3 className="font-mono text-xs tracking-wider text-[var(--color-text-muted)] uppercase">{s.growing}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {stackData.growing.map((x) => (
                <Chip key={x}>{x}</Chip>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-5 sm:col-span-2 lg:col-span-4">
            <h3 className="font-mono text-xs tracking-wider text-[var(--color-text-muted)] uppercase">
              {s.practices}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {stackData.practices.map((x) => (
                <Chip key={x}>{x}</Chip>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-l-2 border-[var(--color-accent)] pl-4">
          <p className="font-mono text-xs text-[var(--color-text-muted)] uppercase">{s.evidence}</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
            {evidence.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
