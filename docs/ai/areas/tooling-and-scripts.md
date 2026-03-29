# Tooling and Scripts Area

Read this when touching `scripts/**`, package scripts, or repo-level config.

## Current shape

- `scripts/init-starter.mjs` renames starter placeholders for downstream apps.
- `package.json` is the command source of truth.
- `.storybook/` contains Storybook setup.
- `vitest.config.ts`, `next.config.ts`, and `postcss.config.mjs` cover core local tooling.
- `.husky/` contains git hooks managed by Husky.

## Pre-commit hook

Husky runs a pre-commit hook (`.husky/pre-commit`) that:

1. Runs `lint-staged` -- applies Ultracite fix to staged `*.{ts,tsx,js,jsx,mjs}` files.
2. Runs `tsc --noEmit` -- full project type check.

## Conventions

- Keep starter setup idempotent and safe to rerun where practical.
- Linting and formatting use Ultracite (wraps ESLint + oxlint + oxfmt).
- Tests run via Vitest with browser-mode Playwright support.
- Storybook uses the `@storybook/nextjs-vite` framework.
- When commands or config meaning changes, update this file.
