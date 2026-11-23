import lighthouse from 'lighthouse'
import * as chromeLauncher from 'chrome-launcher'

const url = process.argv[2] || 'http://127.0.0.1:4173/'

async function main() {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--no-sandbox'] })
  const options = {
    logLevel: 'error',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
    formFactor: 'mobile',
    screenEmulation: { mobile: true, width: 390, height: 844, deviceScaleFactor: 2, disabled: false },
  }
  const runnerResult = await lighthouse(url, options)
  const cats = runnerResult.lhr.categories
  const scores = Object.fromEntries(
    Object.entries(cats).map(([k, v]) => [k, Math.round(v.score * 100)]),
  )
  console.log(JSON.stringify(scores, null, 2))
  await chrome.kill()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})