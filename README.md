# AI@UNCP

The permanent landing page for AI@UNCP, a student-led organization at the University of North Carolina at Pembroke. The site presents AI@UNCP and HackUNCP in a compact, timeless format.

## Local development

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
npm run typecheck
npm run build
npm audit
```

The production build is exported to `out`.

## Deployment

Pushes to the `main` branch are built and deployed to GitHub Pages by `.github/workflows/nextjs.yml`. The workflow installs the lockfile with `npm ci`, creates the static export, and publishes the `out` directory.
