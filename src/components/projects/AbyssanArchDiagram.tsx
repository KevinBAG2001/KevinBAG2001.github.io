import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'

export function AbyssanArchDiagram() {
  const { locale } = useLocale()
  const d = copy.projectsArch[locale]

  const nodes = [
    { id: 'web', label: d.web },
    { id: 'api', label: d.api },
    { id: 'git', label: d.git },
  ]

  return (
    <div className="rounded-xl border border-[var(--color-border-subtle)] bg-[#0f111a]/80 p-4">
      <p className="font-mono text-[10px] tracking-wider text-[var(--color-text-muted)] uppercase">{d.title}</p>
      <div className="mt-4 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between">
        {nodes.map((node, i) => (
          <div key={node.id} className="flex flex-1 items-center gap-2">
            <div className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-3 py-2 text-center font-mono text-[10px] text-[var(--color-text)] sm:text-xs">
              {node.label}
            </div>
            {i < nodes.length - 1 && (
              <span className="hidden shrink-0 text-[var(--color-text-muted)] sm:inline" aria-hidden>
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-3 flex items-center gap-2 font-mono text-[10px] text-emerald-400/90">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {d.ws}
      </p>
    </div>
  )
}
