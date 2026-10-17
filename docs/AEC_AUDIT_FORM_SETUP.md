# AEC Growth Media — Activate shared Payload audit form

**Status:** Server route implemented; CMS form record required. No production database modifications have been made through this task.

## Existing implementation

- Shared frontend component: `src/components/marketing/InquiryForm.tsx`
- POST handler: `src/app/(frontend)/api/leads/route.ts`
- Payload collections used: existing `forms` and `form-submissions`.
- All four service pages automatically select the relevant service.
- The handler checks required fields, lengths, email format, website URL, consent, and a bot honeypot before writing.
- If no matching form exists, it returns HTTP **503**, not a false success.

## Why this step is needed

A read-only check found **zero records** in the existing Neon `forms` table. The website therefore cannot truthfully claim that audit inquiries are being received.

## Payload Admin setup

Sign in at `/admin`. Go to **Forms** and create **exactly one form** titled:

`AEC Growth Audit`

Use the Form Builder controls to add fields with the following exact machine names:

| Name | Label | Type | Required |
| --- | --- | --- | --- |
| fullName | Full Name | text | Yes |
| email | Work Email | email | Yes |
| company | Company Name | text | Yes |
| website | Website URL | text | Yes |
| state | State | text | Yes |
| industry | Business Sector | select | Yes |
| goal | Interested Service | select | Yes |
| budget | Optional Budget | select | No |
| challenge | Main Challenge | textarea | Yes |
| message | Project Description | textarea | No |
| sourcePage | Source Page | text | No |

Interested Service options must match the shared component:
- SEO + AI Visibility
- Website Design & Redesign
- AI Automation
- Paid Media & Social
- Not sure yet

Business Sector options:
- Engineering firm
- Construction company
- Architecture firm
- Permit or drafting firm
- Other AEC business

Budget:
- Prefer not to say
- Under $5,000
- $5,000–$10,000
- $10,000–$25,000
- $25,000+

Set the form's internal submission destination to the built-in **Form Submissions** collection. Review any notification emails and privacy/retention expectations before enabling.

Save the form, then perform one consented test submission with clearly labeled TEST data using the Preview site. Verify:

1. The client gets a success state only after the server returns success.
2. The record appears in Payload > Form Submissions.
3. The selected Interested Service and sourcePage are preserved.
4. Required-field and consent validation prevent incomplete submission.
5. Invalid requests fail with an appropriate error; no duplicate submission is recorded.
6. Email notifications work only if explicitly configured, with a verified destination and provider.
7. The form remains usable at mobile widths and its consent copy wraps.

## Security before launch

The present route uses input validation and a honeypot; deploy appropriate abuse/rate protection and review data retention, consent language and notification recipient configuration before production launch.

Never commit email credentials, CMS secrets, Neon connection strings or private inquiry data.

The form is **not yet marked verified**. Do not use real client contact information in tests until the business owner confirms the data-handling setup.
