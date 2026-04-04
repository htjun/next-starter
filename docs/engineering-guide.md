# Engineering Guide

## Runtime

- Node: `20.19.0+`
- pnpm: `10.13.1+`

## Commands

- `pnpm dev`
- `pnpm run docs:check`
- `pnpm run lint`
- `pnpm run typecheck`
- `pnpm run build`
- `pnpm run test:run`
- `pnpm run build-storybook`
- `pnpm run starter:init -- --name my-app --title "My App"`

## Layout

- `app/`: routes, layout, fonts, global CSS
- `components/ui/`: starter UI primitives
- `lib/`: shared utilities
- `scripts/`: starter setup and repo checks
- `.husky/`: git hooks
- `docs/`: durable agent context

## Rules

- Source files win over docs.
- Keep UI starter-friendly and reusable.
- Use plans only for multi-session work.

## Verify

`pnpm run docs:check && pnpm run lint && pnpm run typecheck && pnpm run build`

- `pnpm run test:run`: available, but there are no committed tests yet.
- `pnpm run build-storybook`: use on Node `20.19.0+`.
