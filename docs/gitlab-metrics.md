# Métricas GitLab (solo lectura)

El portafolio muestra **MR fusionados** y **releases a producción** desde `data/gitlab-metrics.json`, inyectado en build como `buildStats.gitlab`.

## Periodo (acumulado)

Por defecto, cada ejecución exitosa del workflow mide un **acumulado**:

| Campo | Valor por defecto |
|---|---|
| `since` | `2026-05-01T00:00:00.000Z` (fijo) |
| `until` | Fin del día UTC en que corre el workflow (hoy) |

Etiquetas de UI tras sync: **«desde may 2026»** / **«since May 2026»**.

El JSON commiteado puede conservar un **baseline** (`provenance: baseline-verificada`) con otra ventana y etiqueta (p. ej. `may–sep 2026`) hasta la **primera** ejecución exitosa con token; entonces se actualizan cifras, `until` y etiquetas. Si la API falla o no hay secret, **no se modifica** el archivo (nunca se inventan números ni se fuerza 0).

Overrides opcionales en el workflow: `GITLAB_METRICS_SINCE` / `GITLAB_METRICS_UNTIL` (ISO 8601).

## Qué cuenta como cada métrica

| Métrica | Definición |
|---|---|
| **MR fusionados** (`mergedMrs`) | MR en estado *merged*, `merged_at` entre `since` y `until`, todos los proyectos del grupo. |
| **Releases a producción** (`productionReleases`) | Igual, solo `target_branch = main`. |
| **Proyectos** (`projectCount`) | Proyectos no archivados del grupo (incluye subgrupos). |

## Secretos y variables (Kevin)

1. **`GITLAB_READ_TOKEN`** (secret): token con scope **`read_api`** únicamente.
2. **`GITLAB_GROUP_ID`** (variable): ID numérico del grupo privado.

## Workflow

`.github/workflows/gitlab-metrics.yml` — diario (12:15 UTC) + `workflow_dispatch` → `scripts/fetch-gitlab-metrics.mjs` → commit si cambió `data/gitlab-metrics.json`.

El deploy a Pages solo lee el JSON; no llama a GitLab en build.

## Seguridad

Solo lectura en GitLab; sin cambios en proyectos ni pipelines.