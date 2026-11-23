import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const metricsPath = join(root, 'data', 'gitlab-metrics.json')

const API = (process.env.GITLAB_API_URL || 'https://gitlab.com/api/v4').replace(/\/$/, '')
const token = process.env.GITLAB_READ_TOKEN
const groupId = process.env.GITLAB_GROUP_ID'

/** Inicio fijo del acumulado; `until` avanza con cada ejecución exitosa del workflow. */
const DEFAULT_SINCE = '2026-05-01T00:00:00.000Z'

const LABELS_CUMULATIVE = {
  es: 'desde may 2026',
  en: 'since May 2026',
}

function loadExisting() {
  return JSON.parse(readFileSync(metricsPath, 'utf8'))
}

function endOfTodayUtc() {
  const d = new Date()
  d.setUTCHours(23, 59, 59, 999)
  return d.toISOString()
}

async function gitlabGet(path, searchParams = {}) {
  const url = new URL(`${API}${path}`)
  for (const [k, v] of Object.entries(searchParams)) {
    if (v != null && v !== '') url.searchParams.set(k, String(v))
  }
  const res = await fetch(url, {
    headers: { 'PRIVATE-TOKEN': token, Accept: 'application/json' },
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`GitLab ${res.status} ${path}: ${body.slice(0, 200)}`)
  }
  return res.json()
}

async function listGroupProjects(gid) {
  const projects = []
  let page = 1
  for (;;) {
    const chunk = await gitlabGet(`/groups/${encodeURIComponent(gid)}/projects`, {
      include_subgroups: 'true',
      archived: 'false',
      per_page: 100,
      page,
      simple: 'true',
    })
    if (!Array.isArray(chunk) || chunk.length === 0) break
    projects.push(...chunk)
    if (chunk.length < 100) break
    page += 1
  }
  return projects
}

async function countMergedMrs(projectId, { since, until, targetBranch }) {
  let total = 0
  let page = 1
  for (;;) {
    const params = {
      state: 'merged',
      merged_after: since,
      merged_before: until,
      per_page: 100,
      page,
    }
    if (targetBranch) params.target_branch = targetBranch
    const chunk = await gitlabGet(`/projects/${projectId}/merge_requests`, params)
    if (!Array.isArray(chunk) || chunk.length === 0) break
    total += chunk.length
    if (chunk.length < 100) break
    page += 1
  }
  return total
}

async function main() {
  if (!token || !groupId) {
    console.log('fetch-gitlab-metrics: sin GITLAB_READ_TOKEN o GITLAB_GROUP_ID; se conserva data/gitlab-metrics.json')
    process.exit(0)
  }

  const since = process.env.GITLAB_METRICS_SINCE || DEFAULT_SINCE
  const until = process.env.GITLAB_METRICS_UNTIL || endOfTodayUtc()

  const projects = await listGroupProjects(groupId)
  if (projects.length === 0) {
    throw new Error('El grupo no devolvió proyectos (revisa GITLAB_GROUP_ID y permisos read_api)')
  }

  let mergedMrs = 0
  let productionReleases = 0

  for (const p of projects) {
    mergedMrs += await countMergedMrs(p.id, { since, until, targetBranch: null })
    productionReleases += await countMergedMrs(p.id, { since, until, targetBranch: 'main' })
  }

  const next = {
    version: 1,
    period: {
      mode: 'cumulative',
      since,
      until,
      label: { ...LABELS_CUMULATIVE },
    },
    metrics: {
      mergedMrs,
      productionReleases,
      projectCount: projects.length,
    },
    updatedAt: new Date().toISOString(),
    provenance: 'gitlab-api',
  }

  writeFileSync(metricsPath, `${JSON.stringify(next, null, 2)}\n`)
  console.log(
    `fetch-gitlab-metrics: cumulative since=${since} until=${until} mergedMrs=${mergedMrs} productionReleases=${productionReleases} projects=${projects.length}`,
  )
}

main().catch((err) => {
  console.error('fetch-gitlab-metrics: error — se conserva el JSON commiteado:', err.message)
  process.exit(0)
})