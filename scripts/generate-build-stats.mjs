import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'src', 'generated')
const outFile = join(outDir, 'buildStats.ts')

let publicRepos = null

try {
  const response = await fetch('https://api.github.com/users/KevinBAG2001', {
    headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'kevinbag2001-portfolio-build' },
  })
  if (response.ok) {
    const data = await response.json()
    if (typeof data.public_repos === 'number') publicRepos = data.public_repos
  }
} catch {
  // Sin red o rate limit: el sitio usa solo métricas estáticas verificadas.
}

mkdirSync(outDir, { recursive: true })

const contents = `// Generado en build — no editar a mano.
export const buildStats = {
  publicRepos: ${publicRepos ?? 'null'},
  fetchedAt: ${JSON.stringify(new Date().toISOString())},
} as const
`

writeFileSync(outFile, contents)
console.log(`buildStats: publicRepos=${publicRepos ?? 'n/a'}`)