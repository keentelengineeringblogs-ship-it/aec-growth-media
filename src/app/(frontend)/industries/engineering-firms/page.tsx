import type { Metadata } from 'next'
import IndustryDetail, { type IndustryDetailData } from '@/components/marketing/IndustryDetail'
import { photos } from '@/lib/marketing/site-data'

export const metadata: Metadata = {title:"Digital Marketing for Engineering Firms | AEC Growth Media",description:"SEO, websites and lead operations for engineering firms, built around technical credibility, service expertise and qualified B2B opportunities.",alternates:{canonical:'/industries/engineering-firms/'}}

const data: IndustryDetailData = {
  "variant": "engineering",
  "title": "Digital Marketing for Engineering Firms",
  "introduction": "Make specialized engineering expertise easier to discover, assess and shortlist. A stronger digital experience should clearly communicate your disciplines, qualifications, relevant work and appropriate next steps.",
  "image": photos.engineering,
  "imageAlt": "Professional engineering environment with technical drawings",
  "insightTitle": "Engineering buyers need evidence, not empty superlatives.",
  "insightBody": "Technical buyers often evaluate qualifications, service scope, industry experience and project requirements before reaching out. Useful content and a disciplined website structure help decision-makers determine whether your firm is a credible fit.",
  "challenges": [
    [
      "Technical Service Clarity",
      "Make disciplines, studies, inspections, design packages and capabilities easy to distinguish without sacrificing technical accuracy."
    ],
    [
      "Professional Credibility",
      "Present licenses, credentials, experience and relevant project context only when verified."
    ],
    [
      "Qualified B2B Conversations",
      "Guide owners, contractors, procurement teams and project partners to the most relevant contact path."
    ]
  ],
  "capabilities": [
    [
      "Technical SEO & AI Visibility",
      "Connect commercial search intent with useful specialist service and industry pages.",
      "/services/ai-search-seo/"
    ],
    [
      "Engineering Website Experience",
      "Improve technical hierarchy, navigation, mobile usability and project storytelling.",
      "/services/website-design/"
    ],
    [
      "Lead Routing & Follow-Up",
      "Organize inquiry details and route questions to appropriate engineering or business-development teams.",
      "/services/ai-automation/"
    ],
    [
      "Targeted Paid Media",
      "Assess paid search or audience campaigns when there is identifiable commercial demand.",
      "/services/lead-generation/"
    ]
  ],
  "evidenceHeading": "Make the technical work understandable without making it generic.",
  "evidenceBody": "Engineering buyers need accurate service explanations, discipline-specific expertise and practical evidence of project fit. A strong digital system supports that evaluation through clear content and usable interfaces.",
  "imageSecondary": photos.work,
  "imageSecondaryAlt": "Real commercial built environment and engineered structure",
  "processIntro": "We consider the firm’s practice areas, regulatory context, target markets and decision-makers before recommending channels or building pages.",
  "process": [
    [
      "Audit services and buyer intent",
      "Identify core disciplines, target industries, opportunity sources and gaps in existing pages."
    ],
    [
      "Structure specialist information",
      "Plan content that relates expertise to services, sectors and verifiable project work."
    ],
    [
      "Improve digital pathways",
      "Refine technical pages, inquiry forms, mobile experience and lead handoffs."
    ],
    [
      "Review commercial relevance",
      "Track search demand, meaningful engagement, qualified inquiries and follow-up quality."
    ]
  ],
  "faqs": [
    [
      "Can SEO help a specialized engineering discipline?",
      "Yes, where relevant demand exists. A useful strategy aligns accurate discipline pages and technical expertise with the searches real buyers perform."
    ],
    [
      "Do engineering websites need project case studies?",
      "Relevant projects can help establish fit and credibility, but only work with approved client details and verified responsibilities should be published."
    ],
    [
      "Can you target our engineering service states?",
      "Geographic targeting should reflect actual licenses, availability and the markets where services can be provided."
    ],
    [
      "Is paid advertising suitable for engineering firms?",
      "It depends on buyer behavior, demand and economics. The appropriate channels should be assessed rather than assumed."
    ]
  ],
  "finalTitle": "Make engineering expertise easier to find and trust."
}

export default function Page(){return <IndustryDetail data={data}/>}
