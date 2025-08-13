# Getting Started

## Available Scripts

In the project directory, you can run:

### `pnpm install`

Install the dependencies.

### `pnpm dev`

Run apps in dev mode via turbo.

Example for the minimal example skeleton:

```
pnpm -w -C apps/example dev
```

### `pnpm lint`

Lint your codes before committing.

## Example skeleton app

We added a minimal Rsbuild + React example at `apps/example` that has no external/internal workspace dependencies, suitable for demo and onboarding.

Scripts:

```
pnpm -w -C apps/example dev
pnpm -w -C apps/example build
pnpm -w -C apps/example preview
```
