import type { Metadata } from 'next'
import IndustryDetail, { type IndustryDetailData } from '@/components/marketing/IndustryDetail'
import { photos } from '@/lib/marketing/site-data'

export const metadata: Metadata = {title:"Digital Marketing for Permit & Drafting Companies | AEC Growth Media",description:"Search visibility, service-page strategy, responsive websites and lead intake for permit drawing, site plan and drafting businesses.",alternates:{canonical:'/industries/permit-drafting-companies/'}}

const data: IndustryDetailData = {
  "variant": "drafting",
  "title": "Digital Marketing for Permit & Drafting Companies",
  "introduction": "Help buyers understand the drawing services available, the information needed to begin and how to request accurate project support with confidence.",
  "image": photos.drafting,
  "imageAlt": "Architectural and site plan documentation on a desk",
  "insightTitle": "Buyers often arrive with a specific drawing or permitting need.",
  "insightBody": "Property owners, designers and contractors may search for permit drawings, site plans, drafting support or defined documentation packages. A clear site can reduce uncertainty around deliverables, service geography, requirements and the request process.",
  "challenges": [
    [
      "Explain Deliverables",
      "Clarify what drawings or plan packages include without making unsupported approval guarantees."
    ],
    [
      "Match Service Intent",
      "Help visitors reach the right drawing category and related support for their project type."
    ],
    [
      "Simplify Request Details",
      "Capture relevant location, scope and documentation needs before a human review or estimate."
    ]
  ],
  "capabilities": [
    [
      "Permit & Drafting SEO",
      "Improve visibility for genuine service and location demand through useful, distinct pages.",
      "/services/ai-search-seo/"
    ],
    [
      "Service-Focused Website Design",
      "Create clear package explanations, navigation, examples and suitable quote pathways.",
      "/services/website-design/"
    ],
    [
      "Request Intake Automation",
      "Structure recurring questions, missing information and internal follow-up with human oversight.",
      "/services/ai-automation/"
    ],
    [
      "Demand-Focused Paid Search",
      "Evaluate selected permit and drafting campaigns connected to high-intent landing pages.",
      "/services/lead-generation/"
    ]
  ],
  "evidenceHeading": "Clear documentation starts with clear expectations.",
  "evidenceBody": "Explain the services actually offered, submission requirements, review steps and practical limits. Use genuine drawings and approved project details; avoid implying that a permit will be approved without jurisdictional review.",
  "imageSecondary": photos.heroThree,
  "imageSecondaryAlt": "Technical architectural drawings and plan sets",
  "processIntro": "Search intent and order-readiness often matter more than decorative design for drafting and permit buyers.",
  "process": [
    [
      "Map request types",
      "List common project types, drawing categories and required details."
    ],
    [
      "Explain service scope",
      "Build distinct, helpful pages for real deliverables and markets."
    ],
    [
      "Improve contact and intake",
      "Create useful quote questions and organized follow-up workflows."
    ],
    [
      "Review quality and friction",
      "Assess inquiry relevance, missing information and repeat customer questions."
    ]
  ],
  "faqs": [
    [
      "Do drafting companies need separate pages for every drawing type?",
      "Distinct pages can help when the services and intent are meaningfully different and the content provides original value."
    ],
    [
      "Can you guarantee building permit approval?",
      "No. Approval depends on the relevant authority and project requirements; marketing content should not imply otherwise."
    ],
    [
      "Should location pages be created for every county?",
      "Only when a company actually serves that region and useful local content exists. Avoid automatic near-duplicate pages."
    ],
    [
      "Can automation help with drafting requests?",
      "It can collect common inputs, organize documents and route requests, while technical review and decisions remain with qualified staff."
    ]
  ],
  "finalTitle": "Make the right drawing service easier to request."
}

export default function Page(){return <IndustryDetail data={data}/>}
