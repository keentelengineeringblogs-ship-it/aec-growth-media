import type { Metadata } from 'next'
import IndustryDetail, { type IndustryDetailData } from '@/components/marketing/IndustryDetail'
import { photos } from '@/lib/marketing/site-data'

export const metadata: Metadata = {title:"Digital Marketing for Architecture Firms | AEC Growth Media",description:"Portfolio-led website design, SEO and lead experience for architecture practices that need to communicate real work, expertise and design fit.",alternates:{canonical:'/industries/architecture-firms/'}}

const data: IndustryDetailData = {
  "variant": "architecture",
  "title": "Digital Marketing for Architecture Firms",
  "introduction": "Build a digital experience that gives your work room to speak while making practice expertise, sectors, services and consultation opportunities easy to explore.",
  "image": photos.architecture,
  "imageAlt": "Contemporary architectural facade with refined geometry",
  "insightTitle": "Strong architecture marketing balances visual expression with clarity.",
  "insightBody": "A beautiful portfolio draws attention, but prospects also need to understand your design approach, sectors, project stages and how collaboration begins. A carefully structured website supports both exploration and practical evaluation.",
  "challenges": [
    [
      "Portfolio Discovery",
      "Organize real approved design work by project type, market and services so prospective clients can evaluate relevance."
    ],
    [
      "Design Practice Positioning",
      "Explain the problems you solve and the kinds of projects you are best equipped to design."
    ],
    [
      "Consultation Experience",
      "Make it easy for interested clients and collaborators to share project goals and reach the right person."
    ]
  ],
  "capabilities": [
    [
      "Search Visibility for Architecture",
      "Connect service, sector and project content to relevant search questions.",
      "/services/ai-search-seo/"
    ],
    [
      "Editorial Portfolio Websites",
      "Design image-led experiences with strong typography, accessible navigation and carefully optimized photography.",
      "/services/website-design/"
    ],
    [
      "Lead Operations & Inquiry Intake",
      "Structure project inquiries and follow-up for appropriate practice teams.",
      "/services/ai-automation/"
    ],
    [
      "Relevant Audience Campaigns",
      "Assess campaigns where service, sector and target-client fit justify paid promotion.",
      "/services/lead-generation/"
    ]
  ],
  "evidenceHeading": "The portfolio should tell a genuine design story.",
  "evidenceBody": "Approved photographs, thoughtful project descriptions, scope and sector details help prospective clients understand what you designed and why it matters. We avoid presenting unrelated imagery as a firm's own projects.",
  "imageSecondary": photos.heroThree,
  "imageSecondaryAlt": "Architectural drawings and design process documentation",
  "processIntro": "We begin with the practice's positioning, target project types, available portfolio permissions and the client journey from inspiration to consultation.",
  "process": [
    [
      "Understand the practice",
      "Identify audience, design sectors, services and distinctive expertise."
    ],
    [
      "Shape the portfolio architecture",
      "Map projects, service relationships, supporting content and navigation."
    ],
    [
      "Create an elegant web experience",
      "Improve typography, imagery, performance and practical contact paths."
    ],
    [
      "Measure meaningful engagement",
      "Review portfolio discovery, service interest and qualified consultations."
    ]
  ],
  "faqs": [
    [
      "Should architects emphasize visual portfolios or written content?",
      "Both matter. Images demonstrate design, while relevant project and service context helps buyers evaluate suitability and find information."
    ],
    [
      "Can search optimization work for an architecture practice?",
      "Yes, with useful service and sector pages and well-structured project content. Search success depends on demand, competition and relevance."
    ],
    [
      "Can our team update projects in a CMS?",
      "A maintainable CMS can support approved project publishing, media organization and content updates when included in the scope."
    ],
    [
      "Can you redesign without changing our visual identity?",
      "Yes. The goal can be to strengthen usability, performance and content architecture while preserving appropriate brand elements."
    ]
  ],
  "finalTitle": "Present your architectural practice with more purpose."
}

export default function Page(){return <IndustryDetail data={data}/>}
