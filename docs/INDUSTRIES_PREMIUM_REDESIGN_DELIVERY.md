# AEC Growth Media — Premium Industries, Header and Footer Delivery

**Work branch:** `feature/aec-design-integration`  
**Status:** Code delivered to GitHub; deployment blocked by Vercel daily build-rate limit; real-device screenshots and interaction recordings not yet executed.

## Changed public routes

- `/industries/` — full editorial redesign: split-image hero, real-photo supporting section, four alternating image-led industry showcases, buyer-journey comparison, connected digital services, four-stage process, six numbered homepage-style FAQs and conversion CTA.
- `/industries/engineering-firms/` — split hero, technical procurement content, dedicated service-specialization editorial band, relevant work framing, inquiry form, six specialist FAQs.
- `/industries/construction-companies/` — split hero instead of old full-bleed background, authentic jobsite photography, project-fit content, construction-specific portfolio and lead inquiry band, six FAQs.
- `/industries/architecture-firms/` — light gallery-led design, split hero, architecture editorial image feature, portfolio and consultation context, six FAQs.
- `/industries/permit-drafting-companies/` — split hero, authentic plan/drawing photography, distinct three-stage drawing inquiry visualization, six FAQs.

All five routes are implemented in the **existing Next.js app**. The four industry detail routes retain the original industry-specific data, supplemented with unique sections and stronger layouts. No sample results are presented as verified case studies.

## Shared header

- Small dark navy utility bar with approved U.S. nationwide / Florida-first positioning.
- Existing AEC Growth Media logo, white main nav and copper/orange CTA.
- Desktop hover/click/keyboard dropdowns for Services, Industries, Locations and Resources.
- Case Studies and About are direct links.
- Dropdown "View All" links, Escape-to-close, focus handling, current-state styling, and delayed pointer-leave dismissal.
- Dedicated mobile menu with internal scrolling, touch-friendly expandable groups, Escape handling and scroll locking only while open.

**Navigation note:** This implementation follows the new brief's **Resources dropdown** requirement; the prior version used a standalone Blogs navigation item.

## Shared footer

- Deep navy foundation with a restrained top conversion band.
- Approved logo suitable for dark backgrounds, accurate remote-first positioning.
- Services, Industries, Explore/Resources and Company navigation groups.
- Footer legal links including Accessibility.
- Mobile column reflow and reduced-motion support.

## Responsive and animation system

- Additional scoped stylesheet: `src/components/marketing/industry-premium.css`.
- No changes to Payload collections, Neon schema, environment secrets, unrelated approved pages or production deployment settings.
- Layouts use desktop split columns and recompose for tablet and phone.
- Next.js Image for real Unsplash-based images, distinct industry heroes, meaningful alt descriptions and responsive `sizes`.
- Subtle hover, reveal, accordion-open and dropdown transitions respecting `prefers-reduced-motion`.

## Source-level checks performed

- Re-read the current Home FAQ CSS and reused its `agm-v2-faq`, `agm-v2-faq-grid`, `agm-v2-faq-list` styling and semantic `<details>` interaction pattern.
- Verified each page renders one H1 from its route or shared industry component source.
- Verified all industry routes point to existing service URLs.
- Verified all four industry pages include a numbered six-question FAQ list and shared form.
- Verified use of correct existing brand CSS variables.
- Verified the Next.js remote image configuration permits `images.unsplash.com`.

These source-level checks are **not a substitute for browser/device testing**.

## Automated visual and functional test suite (prepared; not executed)

`tests/e2e/industries-premium.e2e.spec.ts` includes:
- Public route checks, hero photographs, one H1, FAQ presence and header/footer presence.
- Responsive overflow checks at 1920, 1440, 1366, 1280, 1024, 768, 390 and 375 pixels.
- Full-page desktop and mobile screenshots of all five pages.
- Desktop hover dropdown screenshot and video.
- Mobile menu screenshot and interaction video.
- FAQ open/close keyboard test and interaction video.
- Footer screenshot.

To run after the approved Vercel Preview build succeeds:

```bash
# On the existing project with dependencies and browsers installed:
AEC_TEST_BASE_URL=https://YOUR-ACTUAL-READY-PREVIEW.vercel.app pnpm exec playwright test industries-premium.e2e.spec.ts --project=chromium
```

On Windows PowerShell:

```powershell
$env:AEC_TEST_BASE_URL = "https://YOUR-ACTUAL-READY-PREVIEW.vercel.app"
pnpm exec playwright test industries-premium.e2e.spec.ts --project=chromium
```

Screenshots and video artifacts appear under `test-results/`; review every screenshot and verify images fully load before approving release.

## Deployment blocker

**Vercel response:** HTTP 402 `payment_required`; resource `api-deployments-free-per-day` (more than 100 deployments in the daily period).  
**Latest GitHub commit status:** Vercel failure with a build-rate-limit upgrade message.

We did not modify Vercel billing or quotas. The latest design has **not** been validated in a fresh production build, and no new Preview URL is claimed. Wait for the reset or address the limit from the Vercel account before requesting a new Preview deployment.

## Remaining review

1. Wait for successful Preview deployment for the latest feature-branch commit.
2. Run the visual/interaction suite with the correct Preview URL.
3. Inspect full-page desktop/mobile captures and menu videos.
4. Resolve actual browser defects, if any.
5. Verify asset permission, image HTTP responses, cropping and loading in Preview.
6. Confirm no unexpected impact to all pages using the shared header/footer.
7. Do not deploy to production without explicit owner approval.

**No CMS/database schema changes or production deployment performed.**
