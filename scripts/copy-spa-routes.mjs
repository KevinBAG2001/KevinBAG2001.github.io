import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const indexHtml = readFileSync(join(dist, 'index.html'), 'utf8')

/** Rutas con index.html propio para GitHub Pages (HTTP 200, sin depender de 404.html). */
const spaRoutes = ['classic', 'os', 'projects/abyssan', 'projects/bastion']

for (const route of spaRoutes) {
  const dir = join(dist, route)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), indexHtml)
}

console.log(`SPA routes: ${spaRoutes.map((r) => `/${r}/`).join(', ')}`)