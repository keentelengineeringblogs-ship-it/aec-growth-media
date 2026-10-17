# AEC design integration

Work is on `feature/aec-design-integration`. The local backup branch
`backup/pre-design-integration-20261016` snapshots the pre-integration working
tree, including the demo files. Ignored environment files stay on disk and
are never included in the backup commit.

The design source is the supplied `../AEC_Growth_Media_NextJS` project.
No folder named `new-design-reference` was present during inspection.

## Integration boundaries

- Reuse the current Next.js 16, React 19 and Payload 3 dependencies. No
  framework downgrade or separate PostgreSQL client is needed.
- Reference UI lives in `src/components/marketing`, with structured content
  in `src/lib/marketing` and the supplied logo SVGs in `public/brand`.
- The scoped stylesheet preserves existing Tailwind utilities and CMS styling.
- Keep all existing admin, REST, GraphQL, search, posts, preview and CMS routes.
  Existing CMS pages take priority over reference content at the same slug.
- The root page renders the reference homepage; draft mode retains the original
  CMS homepage and live preview.
- Header/footer retain CMS-managed additional navigation links.
- Photos retain the reference URLs. The image wrapper serves those pre-sized
  images directly without replacing the existing Payload image configuration.
- The reference's standalone SQL lead handler, database table, environment
  files, Next.js configuration, robots rules and dependency manifest are not
  imported.

## Existing form builder

The audit form uses the current `/api/forms` and `/api/form-submissions`
endpoints. It looks for an existing form with title `AEC Growth Audit` and
field names `fullName`, `email`, `company`, `website`, `industry`, `goal`,
`message` and `consent`. Configure these through Payload only after approval
for database changes. If absent, submission shows a clear error.

Existing CMS forms keep their current components and submission behavior.
No form or submission record is created as part of integration verification.

## Verification commands

Run from this project directory:

```powershell
pnpm.cmd exec tsc --noEmit --incremental false
node scripts/lint-design.mjs
node scripts/verify-next.mjs build
node scripts/verify-next.mjs start
# In another terminal, against the read-only server on port 3002:
node scripts/smoke-design.mjs
```

The verification wrapper invokes Next directly, disables Payload development
schema push, and adds PostgreSQL's read-only connection option in memory.
It never edits the environment files. The existing `pnpm build` script runs
`payload migrate`; do not use it against production without approval.

Browser checks mock form APIs, test viewport widths 320/375/768/1440,
slider controls, mobile navigation, representative reference and existing
routes, and success/error feedback. Screenshots are written under the ignored
`test-results/design` directory.

The existing ESLint config uses FlatCompat with a Next version that already
provides flat configs. `scripts/lint-design.mjs` uses those installed native
configs for the integrated files without changing the existing configuration.

## Read-only backend readiness

The readiness check (`node scripts/check-design-data.mjs`) confirmed the existing
Neon connection works and PostgreSQL reports the read-only guard is active.
There were zero forms titled `AEC Growth Audit`. Creating that form and testing
real lead storage remain pending database-write approval.
Payload also reported that no email adapter is configured.

## Verification results

- TypeScript passed.
- The focused lint check passed. The existing project-wide lint command still
  fails with the previously present FlatCompat/circular-configuration error.
- The full Next.js production build passed with 23 generated pages, using
  read-only database connections and no migrations.
- Chromium passed widths 320, 375, 768 and 1440 with no horizontal overflow;
  slider controls, mobile menu/Escape, representative reference routes, posts,
  search, admin login, and mocked form success/error handling passed.
- Neon connectivity and the PostgreSQL read-only guard were confirmed.
- The normal sandbox blocks Unsplash connections. With network access, all 11
  rendered images (photos and logos) loaded successfully. The final desktop
  capture is `test-results/design/home-1440-photos.png`. Source image references
  remain unchanged.
- The initial integration verification did not deploy, push, run migrations,
  create forms or submit live inquiries.

The local verification server uses `http://localhost:3002`.

## Header and release preparation

The header uses one dropdown at a time, outside-click and Escape dismissal,
mobile focus containment, background scroll locking, and link/resize cleanup.
`node scripts/check-header.mjs` checks these interactions on desktop, mobile
and a short landscape viewport.

`vercel.json` overrides only the deployment build command: it runs the guarded
read-only Next build followed by the existing sitemap postbuild. This prevents
the default package build command from applying production migrations. Runtime
database settings and environment variables remain unchanged.
