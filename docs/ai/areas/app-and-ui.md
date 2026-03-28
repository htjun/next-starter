# App and UI Area

Read this when touching `app/**`, `components/**`, or `lib/**`.

## Current shape

- `app/layout.tsx` wires Geist fonts and global CSS.
- `app/page.tsx` is the placeholder home page.
- `app/globals.css` holds the Tailwind v4 theme tokens and utility layer.
- `components/ui/button.tsx` is the only shared UI primitive today.
- `lib/utils.ts` exposes the shared `cn` helper.

## Conventions

- Build UI from shadcn primitives. Add new ones with `pnpm dlx shadcn@latest add <component>`.
- Merge Tailwind classes with `cn()`, never string concatenation.
- Use Tailwind v4 theme tokens from `globals.css` for colors, spacing, and radii. Avoid hardcoded values.
- Keep UI additions starter-friendly and reusable.
- Prefer building from existing theme tokens and shared utilities before adding new patterns.
- If you add a durable component convention, update this file or a decision doc.
