import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import RevealMotion from '@/components/marketing/RevealMotion'
import { photos } from '@/lib/marketing/site-data'

export const metadata: Metadata = {
 title: 'AEC Industries We Serve | AEC Growth Media',
 description: 'Industry-specific digital growth for engineering, construction, architecture, and permit or drafting firms. Explore buyer journeys, SEO, websites and qualified inquiry strategies.',
 alternates:{canonical:'/industries/'},
}

const heroImage='https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1500&q=85'
const contentImage='https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1300&q=84'
const industries=[
 {n:'01',name:'Engineering Firms',url:'/industries/engineering-firms/',image:photos.engineering,alt:'Engineering professionals and infrastructure-related work',desc:'Engineering buyers often assess technical specializations, qualifications, project experience and service capabilities before contacting a provider. We help firms make those details easier to discover and evaluate.',points:['Technical service visibility','Industry-focused content','Professional websites','Qualified inquiry pathways'],cta:'Explore Engineering Marketing'},
 {n:'02',name:'Construction Companies',url:'/industries/construction-companies/',image:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=83',alt:'Active commercial construction site',desc:'Construction buyers need clear information about capabilities, markets served, relevant projects and actual services. We connect credible service presentation to relevant buyer demand.',points:['Construction service SEO','Real project portfolios','Geographic relevance','Better lead-generation UX'],cta:'Explore Construction Marketing'},
 {n:'03',name:'Architecture Firms',url:'/industries/architecture-firms/',image:photos.architecture,alt:'Contemporary architectural building facade',desc:'Architecture firms need digital experiences that balance compelling project imagery, professional positioning, service information and consultation opportunities.',points:['Portfolio-led web design','Architecture search visibility','Credibility-focused content','Consultation experiences'],cta:'Explore Architecture Marketing'},
 {n:'04',name:'Permit & Drafting Companies',url:'/industries/permit-drafting-companies/',image:photos.drafting,alt:'Architectural drawing plans and technical documents',desc:'Permit and drafting businesses depend on clear deliverables, geographic relevance, accurate project requirements and efficient inquiry handling.',points:['Drafting service search','Permit information hierarchy','Relevant market targeting','Structured project intake'],cta:'Explore Permit & Drafting Marketing'},
]
const journeys=[
 ['ENGINEERING','Technical procurement and discipline fit','Qualifications, technical services and relevant documented experience.'],
 ['CONSTRUCTION','Scope, geography and project readiness','Construction capabilities, real project types and useful estimating paths.'],
 ['ARCHITECTURE','Portfolio relevance and design confidence','Project storytelling, practice identity and consultation context.'],
 ['PERMIT & DRAFTING','Specific deliverable and request intent','Drawing scope, project inputs, market fit and clear next steps.'],
]
const services=[
 ['SEO + AI Visibility','Help relevant buyers find and understand authentic expertise.','/services/ai-search-seo/'],
 ['Website Design & Redesign','Present services and real work in a credible user experience.','/services/website-design/'],
 ['AI Automation','Support lead intake, routing and human-reviewed follow-up.','/services/ai-automation/'],
 ['Paid Media & Social','Connect selected buyer demand to focused landing pages.','/services/lead-generation/'],
]
const steps=[
 ['01','Understand the Market','Learn the services, buyers, procurement context and competitive landscape.'],
 ['02','Define the Opportunity','Identify priority demand, credibility gaps and practical conversion paths.'],
 ['03','Implement the Strategy','Improve the website, visibility, advertising or lead operations as needed.'],
 ['04','Measure and Improve','Review engagement, qualified inquiries and useful business signals.'],
]
const faqs=[
 ['Why does AEC marketing require an industry-specific strategy?','AEC buyers evaluate different services and project risks. Engineering procurement, construction estimates, architecture portfolios and permit drawing requests call for distinct content, evidence and conversion paths.'],
 ['Do you work with engineering and construction businesses?','The AEC Growth Media offering is designed for engineering, construction, architecture and permit or drafting companies, with priorities defined around their actual services and target markets.'],
 ['Can you improve an existing AEC website?','Yes. A website audit can determine whether focused information-architecture, content, performance and form improvements are sufficient or a larger redesign is justified.'],
 ['Do your services include SEO and AI visibility?','Yes. We combine technical SEO, accurate service content, real expertise signals and responsible AI-search observation without guaranteeing inclusion in generated answers.'],
 ['Can AEC companies use paid advertising?','Paid search and social campaigns can be useful for selected services and geographic markets. We first assess demand, buyer fit, competition, landing pages and tracking.'],
 ['How do we determine the right starting point?','Start with the business goal, service priorities and biggest buyer-journey bottleneck. An audit can help prioritize search visibility, the website, lead operations or targeted demand.'],
]

export default function IndustriesOverview(){
 return <main id="main" className="agm-industries-page agm-industries-premium">
  <RevealMotion />
  <section className="agm-indp-hero">
   <div className="agm-shell agm-indp-hero-grid">
    <div className="agm-indp-hero-copy" data-reveal>
     <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span>Industries</nav>
     <span className="agm-industry-eyebrow">INDUSTRIES WE SERVE</span>
     <h1>Digital Growth for the Industries That Build Our World.</h1>
     <p>AEC Growth Media helps architecture, engineering, construction, and permit/drafting businesses improve search visibility, strengthen website experiences, and create clearer paths to qualified inquiries.</p>
     <div className="agm-ind-hero-actions"><Link href="#industries" className="agm-btn agm-btn-primary">Explore Our Industries <ArrowRight size={17}/></Link><Link href="/#audit" className="agm-ind-hero-secondary">Request an AEC Growth Audit <ArrowUpRight size={17}/></Link></div>
    </div>
    <div className="agm-indp-hero-visual" data-reveal><Image src={heroImage} alt="Professionals collaborating on a project in a real office environment" fill priority sizes="(max-width:800px) 100vw, 49vw" className="agm-img-cover"/></div>
   </div>
  </section>
  <section className="agm-indp-intro"><div className="agm-shell agm-indp-intro-grid"><div data-reveal><span className="agm-industry-eyebrow">BUILT AROUND YOUR BUYERS</span><h2>Different Disciplines.<br/>Different Buyer Journeys.</h2><p>Technical expertise, procurement requirements, service geography and project expectations influence how every AEC buyer researches possible partners. A useful digital strategy accounts for those differences before deciding on content or channels.</p><p>We focus on clearer evidence, well-organized capabilities and appropriate paths from discovery to inquiry.</p></div><div className="agm-indp-intro-photo" data-reveal><Image src={contentImage} alt="Architectural project plans and technical drawings" fill sizes="(max-width:800px) 100vw,45vw" className="agm-img-cover"/></div></div></section>
  <section className="agm-indp-showcases" id="industries"><div className="agm-shell">
   <header data-reveal><span className="agm-industry-eyebrow">INDUSTRIES WE SUPPORT</span><h2>Specialized Digital Growth for Every AEC Discipline.</h2><p>Different buyers. Different requirements. A more intentional digital experience for each business.</p></header>
   <div className="agm-indp-showcase-list">{industries.map((x,i)=><article key={x.n} className={'agm-indp-showcase agm-indp-showcase-'+(i+1)} data-reveal>
    <div className="agm-indp-showcase-image"><Image src={x.image} alt={x.alt} fill sizes="(max-width:800px) 100vw,50vw" className="agm-img-cover"/><span>{x.n} / AEC DISCIPLINE</span></div>
    <div className="agm-indp-showcase-copy"><span className="agm-industry-eyebrow">INDUSTRY {x.n}</span><h3>{x.name}</h3><p>{x.desc}</p><ul>{x.points.map(p=><li key={p}><CheckCircle2 size={17}/>{p}</li>)}</ul><Link href={x.url} className="agm-text-link">{x.cta} <ArrowUpRight size={18}/></Link></div>
   </article>)}</div>
  </div></section>
  <section className="agm-indp-buyers"><div className="agm-shell"><div className="agm-indp-buyers-head" data-reveal><span className="agm-industry-eyebrow">BUYER JOURNEY COMPARISON</span><h2>Understand the Buyer Before Planning the Campaign.</h2><p>Each market asks different questions before choosing a partner. Relevant content and well-designed inquiry paths should answer them.</p></div><div className="agm-indp-buyers-rows">{journeys.map((x,i)=><article key={x[0]} data-reveal><span>0{i+1}</span><h3>{x[0]}</h3><strong>{x[1]}</strong><p>{x[2]}</p></article>)}</div></div></section>
  <section className="agm-indp-connected"><div className="agm-shell agm-indp-connected-grid"><div data-reveal><span className="agm-industry-eyebrow">ONE CONNECTED APPROACH</span><h2>One Strategy Across Search, Websites, and Lead Operations.</h2><p>Visibility creates discovery. Your website supports evaluation. Useful lead workflows make the next step clearer. Paid campaigns can complement these systems when they fit the market.</p><Link href="/services/" className="agm-btn agm-btn-primary">View All Services <ArrowRight size={17}/></Link></div><div className="agm-indp-connected-links">{services.map((s,i)=><Link key={s[0]} href={s[2]}><span>0{i+1}</span><div><h3>{s[0]}</h3><p>{s[1]}</p></div><ArrowUpRight size={21}/></Link>)}</div></div></section>
  <section className="agm-indp-process"><div className="agm-shell"><header data-reveal><span className="agm-industry-eyebrow">OUR PROCESS</span><h2>From Market Understanding to Meaningful Improvement.</h2></header><div className="agm-indp-process-grid">{steps.map(x=><article key={x[0]} data-reveal><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></div></section>
  <section className="agm-v2-faq agm-ind-premium-faq"><div className="agm-shell agm-v2-faq-grid"><div className="agm-v2-faq-intro" data-reveal><span className="agm-industry-eyebrow">COMMON QUESTIONS</span><h2>Industry Expertise. Clear Answers.</h2><p>Useful answers about AEC search, websites and qualified digital growth.</p><Link href="/contact/" className="agm-text-link">Ask Us Directly <ArrowUpRight size={16}/></Link></div><div className="agm-v2-faq-list" data-reveal>{faqs.map((x,i)=><details key={x[0]} open={i===0}><summary><span>{String(i+1).padStart(2,'0')}</span><strong>{x[0]}</strong><i>+</i></summary><div><p>{x[1]}</p></div></details>)}</div></div></section>
  <section className="agm-indp-final"><div className="agm-shell"><span className="agm-industry-eyebrow">READY TO MOVE FORWARD?</span><h2>Build a Digital Presence That Reflects Your Expertise.</h2><p>Tell us what your company does, who you serve and where growth matters most. We’ll help identify an appropriate next step.</p><Link href="/#audit" className="agm-btn agm-btn-primary">Request an AEC Growth Audit <ArrowRight size={17}/></Link></div></section>
 </main>
}
