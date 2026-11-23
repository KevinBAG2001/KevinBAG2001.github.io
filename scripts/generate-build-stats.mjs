import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'src', 'generated')
const outFile = join(outDir, 'buildStats.ts')
const metricsPath = join(root, 'data', 'gitlab-metrics.json')

let publicRepos = null
let gitlab = null

try {
  const response = await fetch('https://api.github.com/users/KevinBAG2001', {
    headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'kevinbag2001-portfolio-build' },
  })
  if (response.ok) {
    const data = await response.json()
    if (typeof data.public_repos === 'number') publicRepos = data.public_repos
  }
} catch {
  // Sin red o rate limit: publicRepos queda null.
}

try {
  const raw = JSON.parse(readFileSync(metricsPath, 'utf8'))
  const m = raw.metrics
  if (
    raw?.period?.label &&
    typeof m?.mergedMrs === 'number' &&
    typeof m?.productionReleases === 'number' &&
    typeof m?.projectCount === 'number'
  ) {
    gitlab = {
      mergedMrs: m.mergedMrs,
      productionReleases: m.productionReleases,
      projectCount: m.projectCount,
      periodLabelEs: raw.period.label.es,
      periodLabelEn: raw.period.label.en,
      updatedAt: raw.updatedAt ?? null,
    }
  }
} catch {
  console.warn('generate-build-stats: no se pudo leer data/gitlab-metrics.json')
}

mkdirSync(outDir, { recursive: true })

const gitlabBlock = gitlab
  ? `{
  mergedMrs: ${gitlab.mergedMrs},
  productionReleases: ${gitlab.productionReleases},
  projectCount: ${gitlab.projectCount},
  periodLabelEs: ${JSON.stringify(gitlab.periodLabelEs)},
  periodLabelEn: ${JSON.stringify(gitlab.periodLabelEn)},
  updatedAt: ${JSON.stringify(gitlab.updatedAt)},
} as const`
  : 'null'

const contents = `// Generado en build — no editar a mano.
export const buildStats = {
  publicRepos: ${publicRepos ?? 'null'},
  gitlab: ${gitlabBlock},
  fetchedAt: ${JSON.stringify(new Date().toISOString())},
} as const
`

writeFileSync(outFile, contents)
console.log(
  `buildStats: publicRepos=${publicRepos ?? 'n/a'} gitlabMrs=${gitlab?.mergedMrs ?? 'n/a'} releases=${gitlab?.productionReleases ?? 'n/a'}`,
)