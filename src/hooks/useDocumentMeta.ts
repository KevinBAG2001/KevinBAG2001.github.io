import { useEffect } from 'react'
import { useLocale } from '../context/LocaleContext'
import { copy } from '../i18n/translations'
export function useDocumentMeta(page?: 'home' | 'abyssan' | 'desktop') {
  const { locale } = useLocale()

  useEffect(() => {
    if (page === 'desktop') return
    const meta = copy.meta[locale]
    document.title = page === 'abyssan' ? `Abyssan — ${meta.title}` : meta.title

    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', meta.description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', meta.title)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', meta.description)

    const ogLocale = document.querySelector('meta[property="og:locale"]')
    if (ogLocale) ogLocale.setAttribute('content', locale === 'es' ? 'es_MX' : 'en_US')
  }, [locale, page])
}
