import { chromium } from 'playwright'

const base = 'http://127.0.0.1:4173'
const out = '/opt/cursor/artifacts'

async function main() {
  const browser = await chromium.launch()
  const ctx = await browser.newContext({ deviceScaleFactor: 2 })
  const page = await ctx.newPage()
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto(base, { waitUntil: 'networkidle' })
  await page.waitForTimeout(600)
  await page.screenshot({ path: `${out}/kevin-os-desktop-idle.png`, fullPage: false })

  await page.getByRole('button', { name: /About|Sobre mí/i }).first().click()
  await page.waitForTimeout(300)
  await page.getByRole('button', { name: /Projects|Proyectos/i }).first().click()
  await page.waitForTimeout(400)
  await page.screenshot({ path: `${out}/kevin-os-about-projects.png`, fullPage: false })

  await page.getByRole('button', { name: /Terminal/i }).first().click()
  await page.waitForTimeout(300)
  const termInput = page.getByLabel('Terminal input')
  await termInput.fill('help')
  await termInput.press('Enter')
  await page.waitForTimeout(200)
  await page.screenshot({ path: `${out}/kevin-os-terminal.png`, fullPage: false })

  await page.getByRole('button', { name: /Resume|CV/i }).first().click()
  await page.waitForTimeout(200)
  await page.getByRole('button', { name: /Contact|Contacto/i }).first().click()
  await page.waitForTimeout(400)
  await page.screenshot({ path: `${out}/kevin-os-resume-contact.png`, fullPage: false })

  await browser.close()
  console.log('OS screenshots saved to', out)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
