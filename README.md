# Next Starter

Private Next.js starter with Tailwind v4, shadcn, Zustand, Ultracite, Vitest,
and Storybook already wired in.

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
