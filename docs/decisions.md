# Decisions

- `2026-04-05`: Keep this repository a generic starter.
  Why: downstream apps should customize from a clean reusable baseline.
  Affects: `README.md`, `AGENTS.md`, starter surface files

- `2026-04-05`: Use `AGENTS.md` plus small root docs as the shared agent
  harness.
  Why: keeps initial token cost low across tools.
  Affects: `AGENTS.md`, `CLAUDE.md`, `docs/*`

- `2026-04-05`: Keep root docs budgeted and use plans only for multi-session
  work.
  Why: lowers drift risk and token cost.
  Affects: `docs/*`, `scripts/docs-check.mjs`

- `2026-04-05`: Treat starter placeholder files as intentional customization
  surfaces.
  Why: `starter:init` rewrites them for downstream apps.
  Affects: `README.md`, `app/layout.tsx`, `app/page.tsx`, `.env.example`,
  `package.json`, `scripts/init-starter.mjs`
