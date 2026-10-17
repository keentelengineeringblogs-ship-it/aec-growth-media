import { photos } from './site-data'
export type PageDetail = {
  eyebrow: string
  title: string
  description: string
  image: string
  sections: { title: string; body: string }[]
  listTitle: string
  points: string[]
  cta: string
  featured?: boolean
}
export const landingPages: Record<string, PageDetail> = {
  services: {
    eyebrow: 'OUR CAPABILITIES',
    title: 'Digital growth services designed around AEC buyers',
    description:
      'From search discovery to a clearer site experience and better lead operations, our four service pillars fit together as one measurable business-growth system.',
    image: photos.hero,
    sections: [
      {
        title: 'Connect the whole buyer journey',
        body: 'We bring search, websites, advertising and automation together when the business case supports doing so. Your firm should not have to manage disconnected tactics without understanding their contribution.',
      },
      {
        title: 'Different services for different industries',
        body: 'Contractors often prioritize service geography and timely estimates. Engineering and architecture firms may need deeper technical credibility, portfolios, procurement trust and project-stage visibility.',
      },
    ],
    listTitle: 'Core disciplines',
    points: [
      'AI Search + technical and local SEO',
      'Website design, redesign and conversion UX',
      'AI-powered lead operations with human handoff',
      'Campaign strategy and measured lead generation',
    ],
    cta: 'Talk about your priorities',
  },
  'services/ai-search-seo': {
    eyebrow: 'SEARCH VISIBILITY',
    title: 'AI Search & SEO for AEC Companies',
    description:
      'Strengthen discoverability across traditional search, location-driven queries and AI-assisted research without making unsupported placement guarantees.',
    image: photos.engineering,
    sections: [
      {
        title: 'Work from technical foundations',
        body: 'We review crawlability, indexing, site structure, internal linking and on-page relevance before scaling a content program.',
      },
      {
        title: 'Support the way AEC buyers search',
        body: 'Build a clear relationship between technical services, industry expertise, project examples and relevant geography. We measure useful visibility and qualified demand rather than isolated ranking snapshots.',
      },
    ],
    listTitle: 'What the engagement may include',
    points: [
      'Technical and content architecture audit',
      'Service and industry keyword/intent mapping',
      'Local SEO and Google Business Profile strategy',
      'AI visibility tracking and referral analysis',
    ],
    cta: 'Request a search visibility review',
  },
  'services/website-design': {
    eyebrow: 'WEB EXPERIENCE',
    title: 'Website Design & Redesign for AEC Firms',
    description:
      'Build a credible, fast website that helps prospective clients understand complex services, evaluate expertise and get in touch with less friction.',
    image: photos.architecture,
    sections: [
      {
        title: 'Start with how people evaluate your firm',
        body: 'Engineering and architecture clients often need evidence of relevant capabilities, credentials and project context before they make contact.',
      },
      {
        title: 'Design for findability and clarity',
        body: 'Our page templates emphasize strong information architecture, accessibility, performance, responsive behavior and measurable conversions.',
      },
    ],
    listTitle: 'Typical deliverables',
    points: [
      'Homepage and service page design',
      'Industry and project/portfolio templates',
      'Responsive performance and accessibility review',
      'Forms, CTA flows and content migration planning',
    ],
    cta: 'Discuss a website project',
  },
  'services/ai-automation': {
    eyebrow: 'LEAD OPERATIONS',
    title: 'AI Automation for AEC Inquiry Management',
    description:
      'Reduce friction between an initial inquiry and your team’s response with responsible workflows, clear qualification and practical human handoff.',
    image: photos.drafting,
    sections: [
      {
        title: 'Create a better first response',
        body: 'Automated intake and helpful routing can reduce missed requests, improve context for your team and guide prospects to the right next step.',
      },
      {
        title: 'Keep people in control',
        body: 'Clear notices, opt-in practices, privacy review and human escalation are essential whenever automated chat or voice systems contact prospective clients.',
      },
    ],
    listTitle: 'Workflow opportunities',
    points: [
      'Website inquiry triage',
      'Appointment scheduling and reminders',
      'CRM lead-status workflows',
      'Human escalation and consent handling',
    ],
    cta: 'Discuss lead operations',
  },
  'services/lead-generation': {
    eyebrow: 'DEMAND GENERATION',
    title: 'Paid Media & Lead Generation for AEC Firms',
    description:
      'Plan useful campaigns and conversion journeys around the real economics of bids, projects, technical procurement and sales-qualified inquiries.',
    image: photos.construction,
    sections: [
      {
        title: 'Match advertising to buyer intent',
        body: 'Some contractors benefit from location-specific search campaigns, while longer-cycle engineering engagements may need authority building and better-qualified research traffic.',
      },
      {
        title: 'Focus on revenue-relevant outcomes',
        body: 'Campaign reporting should distinguish impressions and clicks from form submissions, qualified consultations, proposals and won opportunities.',
      },
    ],
    listTitle: 'Campaign building blocks',
    points: [
      'Google Ads strategy and landing pages',
      'Relevant Meta or LinkedIn campaign assessment',
      'Form, call and consultation tracking',
      'CRM pipeline and lead-quality reporting',
    ],
    cta: 'Review your lead funnel',
  },
  industries: {
    eyebrow: 'WHO WE SERVE',
    title: 'Digital marketing for the businesses that shape our built environment',
    description:
      'A focused digital growth approach for construction companies, engineering firms, architecture practices, and permit/drafting specialists.',
    image: photos.construction,
    sections: [
      {
        title: 'Industry context changes the marketing plan',
        body: 'A consumer-oriented lead funnel does not fit every AEC discipline. We prioritize content and conversion paths based on how qualified customers actually shortlist and select your services.',
      },
    ],
    listTitle: 'Specialist audiences',
    points: [
      'Construction companies and specialty contractors',
      'Civil, structural, MEP and electrical engineering',
      'Architecture and design practices',
      'Permit, drafting and site plan services',
    ],
    cta: 'Discuss your industry',
  },
  'industries/construction-companies': {
    eyebrow: 'CONSTRUCTION',
    title: 'Digital Marketing for Construction Companies',
    description:
      'Help project owners and commercial buyers find the right construction team, assess your work and request an estimate with confidence.',
    image: photos.construction,
    sections: [
      {
        title: 'Show what you build and where you work',
        body: 'Project location, building type, specialties, credible proof and a clear inquiry path matter more than broad claims of being the best contractor.',
      },
      {
        title: 'Measure quality over volume',
        body: 'Track whether inquiries match project size, trade, region and timeline, not simply how many forms arrived.',
      },
    ],
    listTitle: 'Priority focus areas',
    points: [
      'Service and geography pages',
      'Project galleries and approved case examples',
      'Local search and targeted paid search',
      'Quote request forms and response tracking',
    ],
    cta: 'Discuss construction marketing',
  },
  'industries/engineering-firms': {
    eyebrow: 'ENGINEERING',
    title: 'Digital Marketing for Engineering Firms',
    description:
      'Communicate technical specialties, professional credibility and relevant project experience to buyers who value expertise.',
    image: photos.engineering,
    sections: [
      {
        title: 'Make complex expertise understandable',
        body: 'Support evaluators with clear descriptions of disciplines, study types, capabilities, service regions and projects.',
      },
      {
        title: 'Build technical authority with evidence',
        body: 'Well-supported technical articles, verified credentials and distinct service pages can contribute to confidence during procurement and shortlisting.',
      },
    ],
    listTitle: 'Priority focus areas',
    points: [
      'Technical service page architecture',
      'B2B search and industry content',
      'Project scope and evidence templates',
      'RFP and consultation conversion paths',
    ],
    cta: 'Discuss engineering marketing',
  },
  'industries/architecture-firms': {
    eyebrow: 'ARCHITECTURE',
    title: 'Digital Marketing for Architecture Firms',
    description:
      'Present your practice’s perspective, project portfolio and design expertise in a site experience that inspires trust.',
    image: photos.architecture,
    sections: [
      {
        title: 'Let the portfolio do meaningful work',
        body: 'Each project can clarify the design challenge, sector, service scope and outcome without relying on decorative image grids alone.',
      },
      {
        title: 'Build findable, accessible experiences',
        body: 'Carefully structured projects and services, thoughtful navigation and good page performance help both visitors and search engines.',
      },
    ],
    listTitle: 'Priority focus areas',
    points: [
      'Project and portfolio discovery',
      'Practice positioning and expertise',
      'Search architecture for services and sectors',
      'Client inquiry flows',
    ],
    cta: 'Discuss architecture marketing',
  },
  'industries/permit-drafting-companies': {
    eyebrow: 'PERMIT & DRAFTING',
    title: 'Digital Marketing for Permit & Drafting Companies',
    description:
      'Make it easier for property owners, designers and builders to find the right drawing or site plan service and understand the order process.',
    image: photos.drafting,
    sections: [
      {
        title: 'Match high-intent service searches',
        body: 'Explain deliverables, use cases, service geography, ordering requirements and turnaround constraints accurately.',
      },
      {
        title: 'Reduce friction to the first order',
        body: 'Clear upload, quote and follow-up workflows can help prospects move forward while keeping expectations realistic.',
      },
    ],
    listTitle: 'Priority focus areas',
    points: [
      'Drawing and permit service pages',
      'City/state intent research',
      'Conversion-focused order pathways',
      'Helpful process content and FAQs',
    ],
    cta: 'Discuss drafting company marketing',
  },
  'locations/florida': {
    eyebrow: 'OUR FIRST MARKET',
    title: 'Digital Growth for Florida AEC Businesses',
    description:
      'Florida is the first focused geographic market in our national AEC Growth Media strategy. We prioritize useful market-specific work over mass-produced county landing pages.',
    image: photos.hero,
    sections: [
      {
        title: 'Florida-first, without invented offices',
        body: 'This page communicates a planned market focus; it does not imply a physical Florida office, local staff or completed client engagements.',
      },
      {
        title: 'A measured county approach',
        body: 'Initial research priorities include Hillsborough, Orange, Miami-Dade, Broward and Palm Beach. Additional county pages should only be released when buyer intent and original local value are established.',
      },
    ],
    listTitle: 'Initial Florida market research priorities',
    points: [
      'Hillsborough County',
      'Orange County',
      'Miami-Dade County',
      'Broward County',
      'Palm Beach County',
    ],
    cta: 'Discuss the Florida market',
  },
  projects: {
    eyebrow: 'EXPERIENCE & EVIDENCE',
    title: 'Our Work — Built for Clear, Verifiable Proof',
    description:
      'A portfolio should show the actual business challenge, work delivered and permitted evidence. We are preparing approved project documentation before publishing named client results.',
    image: photos.work,
    sections: [
      {
        title: 'What will qualify as a case study?',
        body: 'Measurable claims need a documented baseline, time period, approved client context and sources such as analytics or CRM reports. Project descriptions without verified outcome data should be presented as projects, not results stories.',
      },
    ],
    listTitle: 'Our evidence standard',
    points: [
      'Client permission or appropriate anonymization',
      'Clear scope and delivery dates',
      'Approved visuals and deliverables',
      'Measured results only with supporting evidence',
    ],
    cta: 'Ask about relevant experience',
  },
  blog: {
    eyebrow: 'INSIGHTS & RESEARCH',
    title: 'Practical AEC Marketing Insights',
    description:
      'Our editorial plan emphasizes helpful guidance for engineering, architecture, construction and permitting buyers rather than thin or repetitive SEO content.',
    image: photos.blogTwo,
    sections: [
      {
        title: 'Editorial plan in development',
        body: 'The initial content strategy includes practical articles on engineering SEO, construction lead conversion, architecture website portfolios, permit/drafting search journeys and AI search measurement.',
      },
    ],
    listTitle: 'Research themes',
    points: [
      'SEO for engineering firms',
      'Construction website growth',
      'Marketing for architecture practices',
      'AI search and content visibility',
    ],
    cta: 'Suggest a research topic',
  },
  about: {
    eyebrow: 'ABOUT AEC GROWTH MEDIA',
    title: 'A Specialist Growth Partner for the AEC Industry',
    description:
      'AEC Growth Media is a proposed specialist marketing brand built around the needs of companies that design, engineer, permit and construct.',
    image: photos.process,
    sections: [
      {
        title: 'Our approach',
        body: 'We focus on buyers, industry context, credible work, measurable business outcomes and transparent delivery. Exact team details and any parent-agency relationship must be verified before being claimed publicly.',
      },
      {
        title: 'Clarity over empty promises',
        body: 'We do not claim guaranteed ranking placements, invented customer results or physical offices where we do not operate.',
      },
    ],
    listTitle: 'Working principles',
    points: [
      'Specialist industry focus',
      'Research before execution',
      'Clear deliverables and approvals',
      'Measured outcomes and honest reporting',
    ],
    cta: 'Start a conversation',
  },
  contact: {
    eyebrow: 'START A CONVERSATION',
    title: 'Tell Us What You Want Your AEC Business to Achieve',
    description:
      'Share your website, industry and priorities. We’ll use your inquiry to understand the challenge and identify appropriate next steps.',
    image: photos.heroThree,
    sections: [
      {
        title: 'What to include',
        body: 'Your company website, target market, primary service, current digital challenges and ideal outcome help make an initial conversation more useful.',
      },
    ],
    listTitle: 'Common starting points',
    points: [
      'Increase qualified search inquiries',
      'Improve an outdated company website',
      'Clarify industry and service positioning',
      'Strengthen lead qualification and follow-up',
    ],
    cta: 'Request an audit',
  },
  'book-consultation': {
    eyebrow: 'DISCOVERY',
    title: 'Request an AEC Marketing Consultation',
    description:
      'Start with a short inquiry about your company and growth priorities. Scheduling integrations can be added once an approved booking system is connected.',
    image: photos.architecture,
    sections: [
      {
        title: 'First understand your goals',
        body: 'The initial consultation is designed to review the business context and assess whether the right services and capacity are available.',
      },
    ],
    listTitle: 'Useful details to share',
    points: [
      'Your website and target markets',
      'Services you want to grow',
      'Biggest current website or lead challenge',
      'Approximate goals and time horizon',
    ],
    cta: 'Request a conversation',
  },
  'privacy-policy': {
    eyebrow: 'LEGAL DRAFT · REVIEW REQUIRED',
    title: 'Privacy Notice',
    description:
      'This is a pre-launch placeholder. A complete, legally reviewed privacy notice must be published before launch and must accurately describe the final form, analytics and communication systems.',
    image: photos.hero,
    sections: [
      {
        title: 'What this site may collect',
        body: 'The inquiry form is designed to collect contact details, company information, a website URL, an industry, a stated marketing goal and optional context. Its server handler stores submissions only when the database is configured.',
      },
      {
        title: 'Before publishing',
        body: 'Specify actual controller contact information, vendor processors, retention periods, lawful bases and user rights, cookie/analytics choices, and the process for requesting deletion. Do not publish this draft as a final privacy policy.',
      },
    ],
    listTitle: 'Required review items',
    points: [
      'Identity and contact address',
      'Data use and retention',
      'Service providers and security',
      'Privacy rights and consent requirements',
    ],
    cta: 'Contact us',
  },
  terms: {
    eyebrow: 'LEGAL DRAFT · REVIEW REQUIRED',
    title: 'Website Terms',
    description:
      'Terms must be reviewed and approved before publication. This draft indicates where the final legal terms belong.',
    image: photos.hero,
    sections: [
      {
        title: 'Not a binding services agreement',
        body: 'Nothing on this pre-launch website should be construed as a guarantee of outcomes. Scope, price, timelines and responsibilities belong in a mutually approved service agreement.',
      },
    ],
    listTitle: 'Required review items',
    points: [
      'Permitted website use',
      'Intellectual property and content accuracy',
      'Limitation of liability and governing law',
      'Contact and dispute process',
    ],
    cta: 'Contact us',
  },
  accessibility: {
    eyebrow: 'ACCESSIBILITY',
    title: 'Accessibility Commitment',
    description:
      'We aim to make the website useful with keyboard navigation, readable contrast, semantic structure, accessible forms and responsive layouts.',
    image: photos.hero,
    sections: [
      {
        title: 'Ongoing improvement',
        body: 'Accessibility requires review and real-user testing. Contact pathways and actual assessment dates should be provided by the site operator before launch.',
      },
    ],
    listTitle: 'Design considerations',
    points: [
      'Keyboard-operable controls',
      'Visible focus indicators',
      'Clear labels and validation feedback',
      'Alternative text and readable type',
    ],
    cta: 'Report an accessibility issue',
  },
}
