import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext'
import { copy } from '../i18n/translations'

const SITE = 'https://kevinbag2001.github.io'
const OG_IMAGE = `${SITE}/assets/projects/abyssan/banner.svg`

export function useDocumentMeta(page?: 'home' | 'abyssan' | 'bastion' | 'desktop') {
  const { locale } = useLocale()
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = copy.meta[locale]
    const pathNormalized = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
    const canonicalUrl = `${SITE}${pathNormalized === '/' ? '/' : pathNormalized}`

    if (page === 'desktop') {
      document.title = locale === 'es' ? 'Kevin OS — Portfolio' : 'Kevin OS — Portfolio'
    } else if (page === 'abyssan') {
      document.title = `Abyssan — ${meta.title}`
    } else if (page === 'bastion') {
      document.title = `Bastion — ${meta.title}`
    } else {
      document.title = meta.title
    }

    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', meta.description)

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', canonicalUrl)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', document.title)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', meta.description)

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', OG_IMAGE)

    const ogLocale = document.querySelector('meta[property="og:locale"]')
    if (ogLocale) ogLocale.setAttribute('content', locale === 'es' ? 'es_MX' : 'en_US')

    let twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (!twitterCard) {
      twitterCard = document.createElement('meta')
      twitterCard.setAttribute('name', 'twitter:card')
      document.head.appendChild(twitterCard)
    }
    twitterCard.setAttribute('content', 'summary_large_image')

    let twitterImage = document.querySelector('meta[name="twitter:image"]')
    if (!twitterImage) {
      twitterImage = document.createElement('meta')
      twitterImage.setAttribute('name', 'twitter:image')
      document.head.appendChild(twitterImage)
    }
    twitterImage.setAttribute('content', OG_IMAGE)

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', document.title)

    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', meta.description)
  }, [locale, page, pathname])
}