# Tooling and Scripts Area

Read this when touching `scripts/**`, package scripts, or repo-level config.

## Current shape

- `scripts/init-starter.mjs` renames starter placeholders for downstream apps.
- `package.json` is the command source of truth.
- `.storybook/` contains Storybook setup.
- `vitest.config.ts`, `next.config.ts`, and `postcss.config.mjs` cover core local tooling.

## Conventions

- Keep starter setup idempotent and safe to rerun where practical.
- Linting and formatting use Ultracite (wraps ESLint + oxlint + oxfmt).
- Tests run via Vitest with browser-mode Playwright support.
- Storybook uses the `@storybook/nextjs-vite` framework.
- When commands or config meaning changes, update this file.
