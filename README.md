# Next Starter

Next.js starter with Tailwind v4, shadcn, Zustand, Remixicon, Ultracite,
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
- **Geist** typeface (sans + mono) with OpenType utility classes
- **Remixicon** via CSS
- **Ultracite** (ESLint + oxlint + oxfmt) for linting and formatting
- **Vitest** with jsdom
- **Storybook** via `@storybook/nextjs-vite`

## Project structure

```
app/            App Router pages, layouts, fonts, and global CSS
components/ui/  shadcn primitives
lib/            Shared utilities (cn helper, future domain logic)
scripts/        Starter setup (init-starter.mjs)
docs/ai/        AI agent context (see below)
```

The `@/*` path alias maps to the repo root.

## Commands

| Command                  | What it does                  |
| ------------------------ | ----------------------------- |
| `pnpm dev`               | Start the dev server          |
| `pnpm build`             | Production build              |
| `pnpm lint` / `format`   | Ultracite check / autofix     |
| `pnpm test:run`          | Run Vitest once               |
| `pnpm storybook`         | Start Storybook on port 6006  |
| `pnpm build-storybook`   | Build static Storybook        |
| `pnpm starter:init`      | Rename starter placeholders   |

## Typography

Geist Sans (`font-sans`) and Geist Mono (`font-mono`) are wired through
`app/fonts.ts`. OpenType utilities (`ot-ss01`, `ot-case`, `ot-tnum`,
etc.) are available under an `ot-features` host class -- see
`app/globals.css` for the full list.

## AI agent context

This repo ships structured context for AI coding agents under `docs/ai/`.
Tool-specific adapters (`AGENTS.md`, `CLAUDE.md`, `.cursor/rules/`) are
thin pointers into that shared context.

| File                                   | Purpose                              |
| -------------------------------------- | ------------------------------------ |
| `docs/ai/core.md`                      | Architecture, commands, conventions  |
| `docs/ai/areas/app-and-ui.md`          | UI structure and component patterns  |
| `docs/ai/areas/tooling-and-scripts.md` | Scripts, testing, linting, Storybook |
| `docs/ai/decisions/`                   | Architecture decision records        |
| `docs/ai/active.md`                    | Transient handoff notes              |

Agents read `core.md` first, then the area doc matching their task.
See [ADR 0001](docs/ai/decisions/0001-repo-first-ai-harness.md) for
the rationale behind this approach.

## License

MIT -- see [LICENSE](LICENSE).
