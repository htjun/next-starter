# AGENTS.md

Entry point for agent context. Keep this file short.

## Repo

- This repository is a generic Next.js starter.
- Main surfaces: `app/`, `components/ui/`, `lib/`, and `scripts/init-starter.mjs`.
- Keep the repo starter-only. Do not add product-specific code or secrets.
- Use source files as truth. Docs are only a routing layer.

## Commands

- `pnpm dev`
- `pnpm run docs:check`
- `pnpm run lint`
- `pnpm run typecheck`
- `pnpm run build`
- `pnpm run test:run`
- `pnpm run build-storybook` (Node `20.19.0+`)

## Read Next

- `docs/index.md`

## Rules

- Keep docs terse. Link to source files instead of restating them.
- Update `docs/status.md` when current state or active work changes.
- Update `docs/decisions.md` when a durable repo rule changes.
- Add a short plan under `docs/plans/active/` only for multi-session work.
- Move done or stale plans to `docs/plans/archive/`.
