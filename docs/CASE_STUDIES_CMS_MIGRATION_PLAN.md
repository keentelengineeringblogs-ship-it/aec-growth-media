# AEC Growth Media — Case Studies CMS implementation plan

**Status:** Prepared only. No schema migration applied. Production-connected Neon data remains unchanged.

## Read-only baseline (17 October 2026)

- Application: Next.js 16, Payload CMS 3, Postgres adapter, Neon.
- Existing collections: `pages`, `posts`, `media`, `categories`, `users`, plus Payload plugin collections for forms, submissions, redirects and search.
- The configured CMS **does not contain a `projects` collection**.
- The database has 21 Pages records, all drafts, zero Posts records, and zero Forms records (checked using read-only SELECT queries). Existing published marketing routes are separate from these CMS drafts.
- The current `/projects/` frontend does not publish invented projects. A genuinely CMS-powered portfolio requires a new collection and a controlled migration.

## Proposed Projects collection (requires approval)

Use `src/collections/Projects/index.ts` with access rules equivalent to Posts: authenticated editors can create/update/delete; anonymous visitors read only published, approved records. Enable versions, drafts and preview.

Organize the admin editor into tabs:

**Content:** title, editable slug, industry, service types, overview, actual challenge, strategy, implemented work, documented outcomes.

**Media:** featured image (existing Media relation), approved screenshots, ordered image gallery, appropriate alt and captions.

**Evidence & Approvals:** optional verified client name, publication authorization status, evidence notes, result verification status, project completion date only if known, approved external URL.

**SEO:** meta title, description, image, canonical where necessary.

**Publishing:** featured flag, preview, draft/published status, publishedAt, review/checklist.

Fields storing measurements must clearly identify their provenance and review status. Frontend queries must require **both published status and publishable client approval** before displaying any case study publicly.

## Safe execution workflow

1. Confirm a complete Neon backup or create a separate Neon test branch from the current database.
2. Confirm the feature branch is current, and check Payload migrations and generated types.
3. Add the CollectionConfig and register it in `payload.config.ts` **only on the review branch**.
4. Generate the proposed Payload migration and inspect generated SQL for **CREATE-only** additions related to Projects. No dropping/rewriting existing tables.
5. Apply the migration only to the separate test Neon branch. Test editor permissions, media relations, save draft, preview, publication, updates, and rollback.
6. Build `/projects/` and `/projects/[slug]/` against `projects` with draft filtering, not-found handling, SEO metadata, verified media, and published-only sitemap URLs.
7. Obtain approved project information, screenshots and actual scope. Create four drafts. Publish only project entries with evidence and client permission.
8. Review a schema diff and obtain explicit approval **before any production-connected Neon migration**.
9. After approval, apply the reviewed migration, run Next.js production build, verify live CMS functions in Preview, and check all related links/sitemaps.
10. Keep a rollback plan using the backup branch and migration restore/forward fix, never deleting user content.

## Other launch dependency — AEC Growth Audit

`/api/leads` now has a server-side handler that validates submissions and writes to existing Payload `form-submissions` **only when a form record titled `AEC Growth Audit` exists**.

At review, `forms` contains **zero records**. A CMS administrator must configure the audit form and its field names before accepting real submissions. The handler intentionally returns HTTP 503 instead of reporting a false success when it cannot find that form. Do not send production test submissions containing real user data until configuration, anti-spam safeguards, and retention/privacy review are complete.

## Required approvals and evidence

- Explicit approval for the Projects collection schema and migration.
- Client/publication permission for each case study.
- Genuine approved desktop/mobile screenshots and factual project scope.
- Any proposed performance figures need a verifiable source and review.
- Business owner review of privacy/terms and prelaunch indexing settings before production publication.

**Do not perform an unreviewed migration, database reset, content deletion, or production deployment.**
