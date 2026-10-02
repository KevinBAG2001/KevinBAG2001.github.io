import { useLocale } from '../../context/LocaleContext'
import { copy } from '../../i18n/translations'

export function AvailabilityPill() {
  const { locale } = useLocale()
  const label = copy.hero[locale].availability

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3 py-1.5">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="font-mono text-[11px] tracking-wide text-emerald-300/95 uppercase">{label}</span>
    </div>
  )
}
