# AI Context Core

Use this repo as the source of truth. Ignore hidden tool memory if it conflicts with tracked files.

## Startup

1. Read this file.
2. Load the area doc from `docs/ai/areas/` that matches your task.
3. Read `docs/ai/active.md` only for ongoing or multi-session work.

## Doc index

| File                                              | Purpose                                                     |
| ------------------------------------------------- | ----------------------------------------------------------- |
| `docs/ai/core.md`                                 | Invariants, architecture, commands, conventions (this file) |
| `docs/ai/areas/app-and-ui.md`                     | UI structure, component patterns, styling                   |
| `docs/ai/areas/tooling-and-scripts.md`            | Scripts, testing, linting, Storybook                        |
| `docs/ai/decisions/0001-repo-first-ai-harness.md` | Why AI context lives in `docs/ai/`                          |
| `docs/ai/active.md`                               | Transient handoff notes for multi-session work              |

## Repo shape

- `app/` -- App Router entrypoints, layouts, and global CSS.
- `components/` -- shared UI primitives (shadcn-based).
- `lib/` -- shared utilities (`cn` helper, future domain logic).
- `scripts/` -- starter setup (`init-starter.mjs`).
- `.husky/` -- Git hooks (pre-commit: lint-staged + type check).
- `docs/ai/` -- AI context (this harness).
- `@/*` path alias maps to the repo root via `tsconfig.json`.

## Core commands

- `pnpm dev` -- run the Next.js app locally.
- `pnpm lint` / `pnpm format` -- Ultracite check / autofix.
- `pnpm test:run` -- run Vitest once.
- `pnpm build` -- production Next.js build.
- `pnpm build-storybook` -- build static Storybook.
- `pnpm storybook` -- start Storybook locally.
- `pnpm starter:init` -- rename starter placeholders for a downstream app.

## Verification

Run before considering work done:

1. `pnpm lint`
2. `pnpm test:run`
3. `pnpm build`
4. `pnpm build-storybook`

## Conventions

- Use shadcn UI primitives from `components/ui/`. Add new ones with `pnpm dlx shadcn@latest add <component>`.
- Merge class names with `cn()` from `@/lib/utils`.
- Fonts: Geist Sans (`font-sans`) and Geist Mono (`font-mono`) via the `geist` package, exported from `app/fonts.ts`.
- Icons: Lucide React (`lucide-react`). Import individual icons as React components.
- Client state: Zustand. Create stores under `lib/`.
- Styling: Tailwind v4 with theme tokens in `app/globals.css`. No inline `style` props.

## Invariants

- Keep the starter generic. No product-specific copy, flows, or secrets.
- Prefer concise durable guidance over chatty historical notes.
- Tool adapters (`AGENTS.md`, `CLAUDE.md`, `.cursor/rules/`) stay thin. Shared guidance belongs here.
- If a note stops helping the next agent start correctly, shrink or delete it.
