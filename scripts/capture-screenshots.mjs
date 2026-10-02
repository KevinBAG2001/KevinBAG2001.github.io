import { chromium } from 'playwright'

const base = 'http://127.0.0.1:4173'
const out = '/opt/cursor/artifacts'

async function main() {
  const browser = await chromium.launch()
  const ctx = await browser.newContext({ deviceScaleFactor: 2 })

  // Desktop ES full page
  const es = await ctx.newPage()
  await es.setViewportSize({ width: 1280, height: 800 })
  await es.goto(base, { waitUntil: 'networkidle' })
  await es.waitForTimeout(800)
  await es.screenshot({ path: `${out}/portfolio-full-es-desktop.png`, fullPage: true })

  // Desktop EN hero (viewport only)
  const en = await ctx.newPage()
  await en.setViewportSize({ width: 1280, height: 800 })
  await en.goto(base, { waitUntil: 'networkidle' })
  await en.getByRole('button', { name: /Switch to English|Cambiar a inglés/i }).click()
  await en.waitForTimeout(400)
  await en.screenshot({ path: `${out}/portfolio-hero-en-desktop.png`, fullPage: false })

  // Mobile ES full page
  const mob = await ctx.newPage()
  await mob.setViewportSize({ width: 390, height: 844 })
  await mob.goto(base, { waitUntil: 'networkidle' })
  await mob.waitForTimeout(600)
  await mob.screenshot({ path: `${out}/portfolio-full-es-mobile.png`, fullPage: true })

  // Abyssan case study
  const cs = await ctx.newPage()
  await cs.setViewportSize({ width: 1280, height: 800 })
  await cs.goto(`${base}/projects/abyssan`, { waitUntil: 'networkidle' })
  await cs.waitForTimeout(400)
  await cs.screenshot({ path: `${out}/portfolio-abyssan-case-study.png`, fullPage: true })

  await browser.close()
  console.log('Screenshots saved to', out)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
