import { chromium } from 'playwright'

const base = process.argv[2] || 'http://127.0.0.1:4173'
const prefix = process.argv[3] || 'before'
const out = '/opt/cursor/artifacts'

async function shot(page, path, opts = {}) {
  await page.screenshot({ path: `${out}/${prefix}-${path}`, ...opts })
}

async function main() {
  const browser = await chromium.launch()
  const ctx = await browser.newContext({ deviceScaleFactor: 2 })

  const desktop = await ctx.newPage()
  await desktop.setViewportSize({ width: 1440, height: 900 })
  await desktop.goto(`${base}/`, { waitUntil: 'networkidle' })
  await desktop.waitForTimeout(900)
  await shot(desktop, 'desktop-1440-classic-hero.png', { fullPage: false })
  await shot(desktop, 'desktop-1440-classic-full.png', { fullPage: true })

  const mobile = await ctx.newPage()
  await mobile.setViewportSize({ width: 390, height: 844 })
  await mobile.goto(`${base}/`, { waitUntil: 'networkidle' })
  await mobile.waitForTimeout(700)
  await shot(mobile, 'mobile-390-classic-hero.png', { fullPage: false })
  await shot(mobile, 'mobile-390-classic-full.png', { fullPage: true })

  const osDesk = await ctx.newPage()
  await osDesk.setViewportSize({ width: 1440, height: 900 })
  await osDesk.goto(base, { waitUntil: 'networkidle' })
  await osDesk.waitForTimeout(600)
  await shot(osDesk, 'desktop-1440-os.png', { fullPage: false })

  await browser.close()
  console.log(`Saved ${prefix}-* to ${out}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})