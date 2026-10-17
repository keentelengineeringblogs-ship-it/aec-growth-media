# AEC Growth Media Payload import audit

## Audit result

The existing marketing frontend contains 20 real AEC routes: the homepage plus 19 data-driven landing pages. A read-only database audit found one existing draft Pages record with `id=1` but null title and slug. No AEC slug currently exists, so the importer would create 20 missing records and would not modify that existing record.

| Page title | Current route | Payload slug | Exists |
| --- | --- | --- | --- |
| AEC Growth Media | `/` | `home` | No |
| Digital growth services designed around AEC buyers | `/services/` | `services` | No |
| AI Search & SEO for AEC Companies | `/services/ai-search-seo/` | `services/ai-search-seo` | No |
| Website Design & Redesign for AEC Firms | `/services/website-design/` | `services/website-design` | No |
| AI Automation for AEC Inquiry Management | `/services/ai-automation/` | `services/ai-automation` | No |
| Paid Media & Lead Generation for AEC Firms | `/services/lead-generation/` | `services/lead-generation` | No |
| Digital marketing for the businesses that shape our built environment | `/industries/` | `industries` | No |
| Digital Marketing for Construction Companies | `/industries/construction-companies/` | `industries/construction-companies` | No |
| Digital Marketing for Engineering Firms | `/industries/engineering-firms/` | `industries/engineering-firms` | No |
| Digital Marketing for Architecture Firms | `/industries/architecture-firms/` | `industries/architecture-firms` | No |
| Digital Marketing for Permit & Drafting Companies | `/industries/permit-drafting-companies/` | `industries/permit-drafting-companies` | No |
| Digital Growth for Florida AEC Businesses | `/locations/florida/` | `locations/florida` | No |
| Our Work — Built for Clear, Verifiable Proof | `/projects/` | `projects` | No |
| Practical AEC Marketing Insights | `/blog/` | `blog` | No |
| A Specialist Growth Partner for the AEC Industry | `/about/` | `about` | No |
| Tell Us What You Want Your AEC Business to Achieve | `/contact/` | `contact` | No |
| Request an AEC Marketing Consultation | `/book-consultation/` | `book-consultation` | No |
| Privacy Notice | `/privacy-policy/` | `privacy-policy` | No |
| Website Terms | `/terms/` | `terms` | No |
| Accessibility Commitment | `/accessibility/` | `accessibility` | No |

Payload/admin/demo/search/posts/preview/seed/sitemap routes are excluded because they are not AEC marketing pages.

## Schema mapping

The existing `pages` collection supports title, slug, hero rich text, Content blocks, and SEO title/description/image fields. The script maps title, slug, description, sections, bullet points, SEO title and meta description into those existing fields. It creates low-impact heroes and no media records.

The current schema does not represent the marketing eyebrow, service/industry card grids, custom CTA treatment, article roadmap cards, image URLs, or inquiry Form relationship. No schema changes were made. Full visual parity in CMS-managed rendering would require a later approved adapter/blocks change; the existing Next.js marketing components remain unchanged.

## Review before database write

- **PAGES FOUND:** 20 real AEC routes.
- **PAGES TO CREATE:** 20 missing slugs, all drafts.
- **PAGES TO SKIP:** any slug already present when the script runs; none matched in the audit.
- **SCHEMA CHANGES REQUIRED:** none for this basic import; additional visual parity fields/blocks are not included.
- **DATABASE WRITES:** up to 20 new `pages` inserts only; no updates/deletes.
- **IMPORT COMMAND:** `pnpm exec tsx scripts/import-aec-pages.ts`

## Import result

The approved command was run. The first successful run created 20 draft records and did not overwrite or delete anything. A read-only verification found 21 total `pages` rows: the original empty draft (`id=1`) plus 20 imported drafts. A retry found the first two records already present and stopped on Payload's unique-slug validation; it created no additional record.

**Created:** 20 on the successful run. **Skipped:** 0 on that run; 2 observed on the idempotence retry. **Failed:** 0 on the successful run; the retry stopped on a duplicate normalized slug and created 0 additional records.

Important limitation discovered during import: Payload's existing `slugField()` removed `/` from nested slugs. Therefore 9 nested records are stored as normalized values such as `servicesai-search-seo`, not the intended route slug `services/ai-search-seo`. No correction was made because correcting them would overwrite existing records and the approved scope prohibited that. A future approved schema/slug strategy is required before these 9 CMS records can drive their nested frontend routes.

No migrations, schema changes, deletes, overwrites, publishing, or deployment were performed.
