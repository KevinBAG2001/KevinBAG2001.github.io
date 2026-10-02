import type { ProjectStatus } from '../i18n/translations'
import { useLocale } from '../context/LocaleContext'
import { copy } from '../i18n/translations'

const styles: Record<ProjectStatus, string> = {
  PRODUCTION: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
  IN_DEVELOPMENT: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
  OPEN_SOURCE: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
}

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { locale } = useLocale()
  const label =
    status === 'IN_DEVELOPMENT'
      ? copy.status.IN_DEVELOPMENT[locale]
      : copy.status[status][locale]

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] font-medium tracking-wider uppercase ${styles[status]}`}
    >
      {label}
    </span>
  )
}
