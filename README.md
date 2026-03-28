# Next Starter

Private Next.js starter with Tailwind v4, shadcn, Zustand, Remixicon, Ultracite,
Vitest, and Storybook already wired in.

## Create a project from this starter

After you push this starter to a private GitHub repo named `next-starter`,
create a new app with:

```bash
pnpm dlx degit --mode=git git@github.com:<owner>/next-starter.git my-app
cd my-app
node scripts/init-starter.mjs --name my-app --title "My App"
pnpm install
pnpm dev
```

If you prefer the package script after cloning:

```bash
pnpm run starter:init -- --name my-app --title "My App"
```

Initialize git manually after copying if you want a fresh repository:

```bash
git init
```

## Publish this starter

Push this repo to GitHub before using the `degit` flow:

```bash
git remote add origin git@github.com:<owner>/next-starter.git
git push -u origin main
```

## Local development

```bash
pnpm install
pnpm dev
```

## Typography

This starter pins `geist@1.7.0` and exports the fonts from `app/fonts.ts`, so
`font-sans` uses Geist Sans and `font-mono` uses Geist Mono with system fallbacks.

OpenType helpers are available through an `ot-features` host class plus flat
`ot-*` utilities:

```tsx
<p className="font-sans ot-features ot-ss01 ot-case">
  Shipping faster with calmer forms
</p>

<code className="font-mono ot-features ot-ss03">0OIl</code>
```

Supported utilities:

- `ot-ss01` through `ot-ss11`
- `ot-case`, `ot-frac`, `ot-ordn`, `ot-sups`, `ot-subs`, `ot-sinf`
- `ot-liga`, `ot-dlig`, `ot-tnum`, `ot-pnum`

Notes:

- Sans-only features such as `ot-liga`, `ot-dlig`, `ot-tnum`, and `ot-pnum`
  are ignored gracefully when the active font does not support them.
- Prefer one of `ot-tnum` or `ot-pnum` per element.
- Prefer one of `ot-sups`, `ot-subs`, or `ot-sinf` per element.
- Standard `font-*` weight utilities continue to drive the variable `wght`
  axis; no custom `font-variation-settings` helpers are needed.

## Verification

```bash
pnpm run lint
pnpm run test:run
pnpm run build
pnpm run build-storybook
```

## Maintainers

Keep this repo starter-only. Avoid adding product-specific code or secrets.

Before tagging or sharing starter updates, run:

```bash
pnpm install
pnpm run format
pnpm run lint
pnpm run test:run
pnpm run build
pnpm run build-storybook
```
