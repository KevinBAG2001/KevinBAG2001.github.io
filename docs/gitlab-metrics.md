# Métricas GitLab (solo lectura)

El portafolio muestra **MR fusionados** y **releases a producción** desde `data/gitlab-metrics.json`, generado en build en `src/generated/buildStats.ts`.

## Qué cuenta como cada métrica

| Métrica | Definición |
|---|---|
| **MR fusionados** (`mergedMrs`) | Merge requests en estado *merged* en cualquier rama destino, con `merged_at` dentro del periodo configurado en el JSON (`period.since` / `period.until`), sumados en todos los proyectos del grupo GitLab. |
| **Releases a producción** (`productionReleases`) | Mismos criterios, pero solo MR fusionados con **`target_branch = main`** (entrega a producción en el flujo dev/qa/main). |
| **Proyectos** (`projectCount`) | Cantidad de proyectos no archivados devueltos por la API del grupo (incluye subgrupos). |

El periodo por defecto está en `data/gitlab-metrics.json` (etiquetas `label.es` / `label.en` para UI).

## Secretos y variables (Kevin)

1. **`GITLAB_READ_TOKEN`** (secret del repo): token personal o project/group access token de GitLab con scope **`read_api`** únicamente. Sin permisos de escritura.
2. **`GITLAB_GROUP_ID`** (variable del repo): ID numérico del **grupo privado** cuyos proyectos se deben medir (visible en GitLab → Group → Settings).

Opcional: `GITLAB_METRICS_SINCE` / `GITLAB_METRICS_UNTIL` (ISO 8601) en el workflow para acotar el periodo sin editar el JSON.

## Workflow

`.github/workflows/gitlab-metrics.yml`:

- **Diario** (12:15 UTC) y **`workflow_dispatch`** manual.
- Llama `scripts/fetch-gitlab-metrics.mjs`.
- Si falta token o `GITLAB_GROUP_ID`, o la API falla → **no modifica** el JSON (se mantiene el último valor válido commiteado).
- Si hay cambios → commit `chore: actualizar métricas GitLab desde API`.

El deploy a Pages solo **lee** el JSON; no llama a GitLab en build.

## Seguridad

- Solo lectura en GitLab; no se modifican proyectos, pipelines ni merge requests.
- No se registran nombres de clientes ni entidades sensibles en logs del workflow.