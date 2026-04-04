# Next Starter

Next.js starter with Tailwind v4, shadcn, Zustand, Lucide React, Ultracite,
Vitest, and Storybook.

## Quick start

Clone with `degit`, run the init script, install, and go:

```bash
pnpm dlx degit --mode=git git@github.com:<owner>/next-starter.git my-app
cd my-app
node scripts/init-starter.mjs --name my-app --title "My App"
pnpm install
pnpm dev
```

The init script replaces placeholder names across `package.json`, the
layout, the home page, and `.env.example`. You can also run it via
`pnpm run starter:init -- --name my-app --title "My App"`.

## What's included

- **Next.js 16** with the App Router
- **Tailwind v4** with theme tokens in `app/globals.css`
- **shadcn** UI primitives in `components/ui/`
- **Zustand** for client state
- **Geist** typeface (sans + mono)
- **Lucide React** for icons
- **Ultracite** (ESLint + oxlint + oxfmt) for linting and formatting
- **Husky** + **lint-staged** pre-commit hook (lint, format, type check)
- **Vitest** with jsdom
- **Storybook** via `@storybook/nextjs-vite`

## Commands

| Command                | What it does                 |
| ---------------------- | ---------------------------- |
| `pnpm dev`             | Start the dev server         |
| `pnpm docs:check`      | Check doc budgets/structure  |
| `pnpm build`           | Production build             |
| `pnpm typecheck`       | Run `tsc --noEmit`           |
| `pnpm lint` / `format` | Ultracite check / autofix    |
| `pnpm test:run`        | Run Vitest once              |
| `pnpm storybook`       | Start Storybook on port 6006 |
| `pnpm build-storybook` | Build static Storybook       |
| `pnpm starter:init`    | Rename starter placeholders  |

## Project structure

```
app/            App Router pages, layouts, fonts, and global CSS
components/ui/  shadcn primitives
lib/            Shared utilities (cn helper, future domain logic)
scripts/        Starter setup and repo checks
.husky/         Git hooks (pre-commit)
docs/           Minimal repo context for agents
```

The `@/*` path alias maps to the repo root.

## Typography

Geist Sans (`font-sans`) and Geist Mono (`font-mono`) are wired through
`app/fonts.ts`.

## Agent context

Start with `AGENTS.md`. Durable repo context lives under `docs/`.

The harness is intentionally small:

- `AGENTS.md`: entry point
- `docs/index.md`: routing map
- `docs/status.md`: current state and active plan pointer
- `docs/project-overview.md`: starter purpose and stable surfaces
- `docs/engineering-guide.md`: runtime, commands, verification
- `docs/decisions.md`: durable repo rules only
- `docs/plans/`: optional multi-session plans only

## License

MIT -- see [LICENSE](LICENSE).
