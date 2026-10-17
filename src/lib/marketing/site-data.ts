import type { LucideIcon } from 'lucide-react';
import { HardHat, DraftingCompass, Building2, Ruler, SearchCheck, Monitor, Bot, Megaphone, ClipboardCheck, Target, PencilRuler, ChartNoAxesCombined, ArrowUpRight, ShieldCheck } from 'lucide-react';
export const BRAND = {name:'AEC Growth Media', shortName:'AEC Growth Media', tagline:'Digital growth for a stronger built tomorrow.', website:'https://aecgrowthmedia.com', contactEmail:''};
export const photos = {
  hero: 'https://images.unsplash.com/photo-1772760110976-c9ce40fcb12b?auto=format&fit=crop&w=1800&q=82',
  heroTwo: 'https://images.unsplash.com/photo-1761896171748-ca4e9c81b5de?auto=format&fit=crop&w=1800&q=82',
  heroThree: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1800&q=82',
  construction: 'https://images.unsplash.com/photo-1761896171748-ca4e9c81b5de?auto=format&fit=crop&w=900&q=82',
  engineering: 'https://images.unsplash.com/photo-1764449321624-913ca52646c6?auto=format&fit=crop&w=900&q=82',
  architecture: 'https://images.unsplash.com/photo-1758813238589-6f7e3c8ce303?auto=format&fit=crop&w=900&q=82',
  drafting: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=900&q=82',
  process: 'https://images.unsplash.com/photo-1774600166834-175d06febcd4?auto=format&fit=crop&w=1100&q=82',
  work: 'https://images.unsplash.com/photo-1771432998536-fea330a65c26?auto=format&fit=crop&w=1200&q=82',
  blogOne: 'https://images.unsplash.com/photo-1764449321624-913ca52646c6?auto=format&fit=crop&w=800&q=82',
  blogTwo: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=82',
  blogThree: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=82',
};
export const heroSlides = [
  {eyebrow:'AEC-FOCUSED DIGITAL GROWTH',title:'AI Search & Digital Growth for Architecture, Engineering & Construction Firms',desc:'We help firms that design, engineer, permit and build get discovered, earn buyer trust and turn digital interest into qualified opportunities.', image:photos.hero, alt:'Contemporary commercial architecture representing the built environment'},
  {eyebrow:'FINDABLE. CREDIBLE. CONVERTING.',title:'A stronger digital presence for technical businesses',desc:'Make complex services easy to understand, improve discoverability and give potential clients a clear reason to contact you.',image:photos.heroTwo,alt:'Active construction site with structural development in progress'},
  {eyebrow:'FROM SEARCH TO QUALIFIED INQUIRIES',title:'Make your expertise easier to find and easier to choose',desc:'Connect search visibility, useful content, website experience and reliable follow-up into a measurable growth system.', image:photos.heroThree,alt:'Technical architectural plans and precise design work'},
];
export type Service = {title:string; short:string; detail:string; href:string; icon:LucideIcon; bullets:string[]};
export const services:Service[] = [
  {title:'SEO + AI Search Visibility',short:'Technical SEO, local discovery and search visibility designed for AEC buyers.',detail:'An integrated search visibility strategy built around how clients look for engineers, architects, contractors and permitting specialists.',href:'/services/ai-search-seo/',icon:SearchCheck,bullets:['Technical audits and search architecture','Relevant service and industry content','Local search and Google Business Profile guidance','AI answer visibility measurement']},
  {title:'Website Design & Redesign',short:'Fast, credible websites built to turn technical capabilities into clear next steps.',detail:'High-performance AEC websites with purposeful navigation, project proof, accessible UX and conversion-minded page templates.',href:'/services/website-design/',icon:Monitor,bullets:['Strategy-led information architecture','Responsive website and page templates','Portfolio and case-study structure','Performance, accessibility and conversion QA']},
  {title:'AI Automation & Lead Operations',short:'Better inquiry routing, qualification, follow-up and human handoff.',detail:'Practical automation for contact requests, missed opportunities and follow-up workflows—with privacy and human oversight in place.',href:'/services/ai-automation/',icon:Bot,bullets:['Lead intake and qualification flows','Appointment and follow-up workflows','CRM integrations and attribution','Consent review and human escalation']},
  {title:'Paid Media & Lead Generation',short:'Search and advertising campaigns designed around meaningful project inquiries.',detail:'Campaign strategy, landing pages and measurement informed by your service geography, sales cycle and prospect economics.',href:'/services/lead-generation/',icon:Megaphone,bullets:['Google Ads and landing page strategy','Industry-appropriate paid campaigns','Campaign analytics and conversion tracking','Lead-quality and pipeline reporting']},
];
export type Industry = {title:string;desc:string;image:string;alt:string;href:string;icon:LucideIcon; buyer:string};
export const industries: Industry[] = [
  {title:'Construction Companies',desc:'Reach decision-makers looking for a proven team to build their next project.',image:photos.construction,alt:'Real construction site with cranes and structural work',href:'/industries/construction-companies/',icon:HardHat,buyer:'Project inquiries, bids and local visibility'},
  {title:'Engineering Firms',desc:'Communicate technical credibility and support your firm’s project pipeline.',image:photos.engineering,alt:'Engineering professionals reviewing a construction project',href:'/industries/engineering-firms/',icon:Ruler,buyer:'Technical expertise, procurement and B2B qualification'},
  {title:'Architecture Firms',desc:'Present your portfolio, design expertise and credentials with confidence.',image:photos.architecture,alt:'Contemporary architectural building showing facade design',href:'/industries/architecture-firms/',icon:Building2,buyer:'Portfolio discovery, authority and reputation'},
  {title:'Permit & Drafting Firms',desc:'Help prospects find your drawing, permit and site-plan services.',image:photos.drafting,alt:'Architectural plans and technical drafting documents',href:'/industries/permit-drafting-companies/',icon:DraftingCompass,buyer:'Service intent, conversion and order workflows'},
];
export const processSteps = [
  {title:'Discover',desc:'Understand your company, buyers, services and objectives.',icon:Target},
  {title:'Audit',desc:'Review the website, search visibility and conversion gaps.',icon:SearchCheck},
  {title:'Build',desc:'Implement page architecture, useful content and workflows.',icon:PencilRuler},
  {title:'Establish proof',desc:'Present verified expertise, projects and trust signals.',icon:ShieldCheck},
  {title:'Track',desc:'Measure search, inquiry quality and pipeline contribution.',icon:ChartNoAxesCombined},
  {title:'Improve',desc:'Refine what creates better business opportunities.',icon:ArrowUpRight},
];
export const locations = ['Hillsborough County','Orange County','Miami-Dade County','Broward County','Palm Beach County'];
export const faq = [
  {q:'What makes AEC Growth Media different?',a:'Our strategy focuses on the buyer journeys of architecture, engineering, construction and permitting businesses. Technical credibility, procurement trust, project documentation and qualified inquiries require a different approach from general consumer marketing.'},
  {q:'Do you work with companies outside Florida?',a:'The planned offering is nationwide across the United States, beginning with a Florida-first market focus. Texas, California, North Carolina and Georgia are subsequent expansion priorities.'},
  {q:'Can you help with both SEO and website design?',a:'Yes. Search visibility, site structure, technical performance, clear service content and conversion design are planned as integrated capabilities when they support your goals.'},
  {q:'How long until we see SEO results?',a:'Results depend on current site health, competition, demand and implementation scope. We agree on measurable benchmarks, review progress regularly and avoid guarantees about rankings or lead volume.'},
  {q:'Is AI search optimization a separate service?',a:'AI search visibility is included in our main search visibility approach. We focus on useful content, technical SEO, verified expertise and measurable visibility rather than promises of guaranteed placement in AI answers.'},
  {q:'What happens when I request an audit?',a:'You share your website, industry and goals. A team member can assess your request and follow up about fit, scope and available next steps. Submitting the form is not an instant automated site audit.'}
];
export const articles = [
  {kicker:'ENGINEERING',title:'SEO for Engineering Firms: Building Search Visibility and Technical Trust',desc:'How technical service content, professional credibility and website structure work together.',image:photos.blogOne},
  {kicker:'CONSTRUCTION',title:'How Construction Companies Can Improve Website Lead Generation',desc:'Practical ways to connect service areas, projects and responsive inquiry forms.',image:photos.blogThree},
  {kicker:'AI SEARCH',title:'AI Search Visibility: What AEC Firms Should Measure',desc:'What it means to be cited or mentioned in AI answers—and what to track.',image:photos.blogTwo},
];
