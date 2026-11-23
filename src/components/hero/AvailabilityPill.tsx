import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'

export function AvailabilityPill() {
  const { locale } = useLocale()
  const label = copy.hero[locale].availability

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/40 bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)] px-3 py-1.5">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-50 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
      </span>
      <span className="font-mono text-[11px] tracking-wide text-[color-mix(in_srgb,var(--color-accent)_90%,white)] uppercase">
        {label}
      </span>
    </div>
  )
}