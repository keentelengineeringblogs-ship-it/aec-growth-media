import type { Metadata } from 'next'
import IndustryDetail, { type IndustryDetailData } from '@/components/marketing/IndustryDetail'
import { photos } from '@/lib/marketing/site-data'

export const metadata: Metadata = {title:"Digital Marketing for Construction Companies | AEC Growth Media",description:"Construction marketing focused on service areas, project credibility, better websites, qualified quote inquiries and practical follow-up.",alternates:{canonical:'/industries/construction-companies/'}}

const data: IndustryDetailData = {
  "variant": "construction",
  "title": "Digital Marketing for Construction Companies",
  "introduction": "Show the projects you can deliver, the markets you serve and the next step for a serious buyer. Connect clear service positioning, real project evidence and practical inquiry pathways.",
  "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
  "imageAlt": "Active commercial construction site with structural work",
  "insightTitle": "Construction demand begins with project fit.",
  "insightBody": "Prospects need to know where your company operates, what construction work you undertake, the project types you specialize in and how to discuss scope. Better discovery is valuable only when it reaches an appropriate buyer.",
  "challenges": [
    [
      "Service & Geography Fit",
      "Show real markets, trades, project types and scope accurately rather than using broad claims or thin location pages."
    ],
    [
      "Portfolio Trust",
      "Present approved project imagery, services performed and relevant experience without unsupported results."
    ],
    [
      "Estimate Readiness",
      "Help buyers share the details that matter to your estimating or business-development process."
    ]
  ],
  "capabilities": [
    [
      "Construction Search Visibility",
      "Improve service and local search architecture around real market and buyer intent.",
      "/services/ai-search-seo/"
    ],
    [
      "High-Trust Contractor Websites",
      "Present services, project examples, credentials and clear consultation pathways.",
      "/services/website-design/"
    ],
    [
      "Inquiry & Estimate Follow-Up",
      "Organize requests, missing details and handoffs so qualified prospects get appropriate attention.",
      "/services/ai-automation/"
    ],
    [
      "Targeted Construction Campaigns",
      "Evaluate search and paid social campaigns around selected services and markets.",
      "/services/lead-generation/"
    ]
  ],
  "evidenceHeading": "Real jobsite work is your strongest visual story.",
  "evidenceBody": "Photographs of actual completed projects and documented scope can help clients understand the type and quality of work your company undertakes. Construction marketing should never pass off stock imagery as completed client projects.",
  "imageSecondary": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=83",
  "imageSecondaryAlt": "Commercial building construction at an active site",
  "processIntro": "We focus on services, job types and locations where qualified work is genuinely feasible—not vanity traffic totals.",
  "process": [
    [
      "Identify priority work",
      "Review job sizes, trades, service areas and target client profiles."
    ],
    [
      "Clarify relevant service pages",
      "Present project fit, process, credibility and inquiry expectations."
    ],
    [
      "Build practical lead paths",
      "Improve forms, call actions, mobile navigation and response workflows."
    ],
    [
      "Measure project opportunity",
      "Review relevant inquiries and pipeline outcomes where data is available."
    ]
  ],
  "faqs": [
    [
      "Can a construction website help generate more relevant estimate requests?",
      "Clear project scope, service locations and contact questions can improve inquiry relevance; volume is never guaranteed."
    ],
    [
      "Should contractors create pages for every service area?",
      "Only where they genuinely serve the area and can provide useful, original local context. Avoid mass-produced duplicates."
    ],
    [
      "What should be included in a construction portfolio?",
      "Approved project photos, location when permissible, type of work, your actual scope and verified outcome details."
    ],
    [
      "Are Google Ads useful for construction firms?",
      "They can be for selected services and markets, but competitiveness, audience fit and conversion economics matter."
    ]
  ],
  "finalTitle": "Turn your construction capabilities into clearer opportunities."
}

export default function Page(){return <IndustryDetail data={data}/>}
