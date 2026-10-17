import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import InquiryForm from '@/components/marketing/InquiryForm'
import RevealMotion from '@/components/marketing/RevealMotion'
import { photos } from '@/lib/marketing/site-data'

export const metadata: Metadata = {
 title:'SEO + AI Visibility for AEC Companies | AEC Growth Media',
 description:'SEO and AI visibility strategy for architecture, engineering, construction and permitting firms.',
 alternates:{canonical:'/services/ai-search-seo/'},
}

const different=[
 ['01','Technical Expertise','Engineering and architecture buyers look for evidence of specialization, experience, professional credentials, service capabilities and relevant project work.'],
 ['02','Project-Based Intent','Construction and permit/drafting prospects frequently search around specific services, projects, deliverables, locations and project requirements.'],
 ['03','Long Decision Cycles','Some AEC businesses depend on direct inquiries, while others rely on referrals, procurement processes, shortlisting and requests for proposals.'],
]
const benefits=[
 ['01','Reach Buyers Earlier','Improve visibility when potential clients begin researching AEC services and solutions.'],
 ['02','Build Credibility','Present your capabilities, credentials, expertise and project information with greater clarity.'],
 ['03','Improve Lead Relevance','Align landing pages and service content with specific buyer needs to attract better-matched inquiries.'],
 ['04','Measure What Matters','Evaluate search visibility, engagement, qualified inquiries and business opportunities rather than relying on rankings alone.'],
]
const scope=[
 ['01','Technical SEO','Site structure, crawlability, indexability, canonical URLs, page performance, mobile usability and search engine accessibility.'],
 ['02','Service & Industry SEO','Clear service architecture and industry-specific pages that explain capabilities and address relevant buyer questions.'],
 ['03','Local SEO','Location relevance, Google Business Profile support where eligible, relevant local content and local conversion improvements.'],
 ['04','AI Search Visibility','Improve source clarity, content quality and expertise signals while monitoring relevant mentions, citations and attributable AI referrals.'],
 ['05','AEC Content Strategy','Create and improve service explanations, project documentation, industry insights, helpful resources and original expertise-driven content.'],
 ['06','Analytics & Optimization','Track Search Console performance, organic landing pages, inquiries, lead quality and ongoing improvement opportunities.'],
]
const methodology=[
 ['01','Discover demand','Understand buyers, services, geographic opportunities and search behavior.'],
 ['02','Audit foundations','Evaluate technical SEO, existing pages, content quality and measurement.'],
 ['03','Build useful content','Improve service, industry and proof-based information.'],
 ['04','Strengthen discoverability','Connect internal architecture, technical health, location relevance and credible expertise.'],
 ['05','Measure visibility','Monitor traditional search and AI-search presence using defined reporting methods.'],
 ['06','Improve conversions','Refine landing pages, CTAs, lead forms and follow-up opportunities.'],
]
const industries=[
 ['Construction Companies','Help potential clients find relevant construction services, view project capabilities and take the next step toward a qualified inquiry.',photos.construction,'/industries/construction-companies/'],
 ['Engineering Firms','Improve discovery of specialized engineering services while communicating technical expertise and professional trust.',photos.engineering,'/industries/engineering-firms/'],
 ['Architecture Firms','Present design capabilities, project portfolios, professional expertise and service offerings to relevant audiences.',photos.architecture,'/industries/architecture-firms/'],
 ['Permit & Drafting Companies','Support visibility for permit drawing, site plan, drafting and related services, with clear inquiry or order pathways.',photos.drafting,'/industries/permit-drafting-companies/'],
]
const deliverables=[
 ['Search Visibility Audit','An evaluation of technical health, indexation, search opportunities and priority improvements.'],
 ['SEO Roadmap','A prioritized plan that connects business goals, buyer intent, technical improvements and content architecture.'],
 ['Service & Industry Content Recommendations','Recommendations for important commercial pages and content gaps.'],
 ['Technical Implementation Plan','Actionable website improvements involving structure, internal linking, crawlability and performance.'],
 ['AI Visibility Measurement Framework','A method for assessing relevant AI mentions, citations, referral signals and practical visibility opportunities.'],
 ['Performance Reporting','Agreed reporting covering search performance, qualified inquiries, completed work and next priorities.'],
]
const process=[
 ['01','Discover & Analyze',"Review the firm's goals, services, buyers, current site and search opportunities."],
 ['02','Strategy & Planning','Prioritize technical improvements, important commercial pages, content and measurable objectives.'],
 ['03','Implement & Optimize','Apply agreed changes, improve the buyer journey and refine the website based on evidence.'],
 ['04','Measure & Evolve','Review performance, inquiry quality and emerging opportunities to guide the next phase.'],
]
const projects=[
 ['ENGINEERING WEBSITE EXPERIENCE','Technical services made easier to understand','Business challenge: communicate complex engineering services clearly. Work completed: information architecture, service-page experience and conversion-path improvements.',photos.engineering],
 ['CONTRACTOR SERVICE ARCHITECTURE','A clearer path from service discovery to inquiry','Implementation work focused on service organization, buyer-facing content structure and practical calls to action.',photos.construction],
 ['PERMIT & DRAFTING EXPERIENCE','Search and conversion improvements for technical services','Implementation project focused on clearer commercial pages, service relevance and inquiry pathways. No unverified performance claims are shown.',photos.drafting],
]
const measurement=[
 ['Organic Search','Relevant impressions, clicks, indexation health and non-branded search opportunities.'],
 ['AI Search','Tracked presence, citations, mentions and attributable referral signals.'],
 ['Website Engagement','Important landing pages, meaningful actions and conversion pathways.'],
 ['Qualified Leads','Relevant inquiries, booked consultations and prospect fit.'],
 ['Commercial Outcomes','Proposal opportunities and downstream pipeline progress where connected systems allow.'],
]
const faqs=[
 ['01','How is SEO for AEC companies different from general SEO?','AEC SEO must account for technical services, professional trust, project portfolios, location-specific needs, procurement research and longer buyer evaluation cycles. We build strategies around those factors rather than relying on generic keyword targeting.'],
 ['02','Can SEO help engineering firms generate qualified opportunities?','It can help engineering firms become discoverable for relevant services and present evidence of expertise. The result depends on search demand, buyer behavior, competition and how inquiries are qualified and followed up.'],
 ['03','Do you optimize websites for AI-powered search?','Yes. Our approach focuses on useful content, strong technical foundations, clear expertise signals and measurement of relevant AI-search mentions or referrals. We do not guarantee inclusion in AI-generated answers.'],
 ['04','How long does SEO take to produce meaningful results?',"Timelines depend on the website's starting condition, competition, scope of work, market demand and implementation pace. We establish realistic measurement benchmarks and review progress over time."],
 ['05','Do you work with companies outside Florida?','AEC Growth Media is positioned to serve companies across the United States, with a Florida-first launch strategy and planned expansion into other states.'],
 ['06','Can you help improve an existing AEC website?','Yes. Depending on the project, recommendations may cover technical issues, service architecture, industry content, website usability, landing pages and conversion pathways.'],
 ['07','How do you measure SEO and AI visibility?','We use an agreed measurement framework covering relevant search performance, technical health, qualified inquiries and AI-related visibility signals where reliable data is available.'],
 ['08','What happens after I request an AEC Growth Audit?','Our team reviews the information submitted and can follow up to discuss your website, business priorities and possible next steps. The form does not promise an instant automated audit.'],
]

export default function SEOAIServicePage(){
 return <main id="main" className="agm-svc agm-svc-master"><RevealMotion/>
  <section className="agm-svc-hero">
   <Image src={photos.heroTwo} alt="Contemporary commercial construction project" fill priority sizes="100vw" className="agm-img-cover"/><div className="agm-svc-hero-overlay"/>
   <div className="agm-shell agm-svc-hero-inner" data-reveal>
    <nav className="agm-svc-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/services/">Services</Link><span>/</span><b>SEO + AI Visibility</b></nav>
    <span className="agm-svc-label">SEO + AI SEARCH VISIBILITY <i/></span>
    <h1>SEO + AI Visibility<br/><em>for AEC Companies.</em></h1>
    <p>Help architecture, engineering, construction, and permit/drafting companies become easier to discover, communicate their expertise, and turn qualified search interest into real business opportunities.</p>
    <div className="agm-svc-actions"><Link href="#audit" className="agm-btn agm-btn-primary">Get an AEC Growth Audit <ArrowRight size={17}/></Link><Link href="#service-scope" className="agm-btn agm-btn-outline-white">Explore Our SEO Services <ArrowRight size={17}/></Link></div>
   </div>
  </section>

  <section className="agm-svc-intro" id="audit"><div className="agm-shell agm-svc-overview-grid">
   <div className="agm-svc-overview-left" data-reveal><span className="agm-svc-label">WHY IT MATTERS <i/></span><h2>Be where your next<br/>project is searching.</h2>
    <p>AEC buyers often research potential partners long before making an inquiry. They compare technical capabilities, project experience, locations served, professional credentials, and evidence of expertise.</p>
    <p>Our search visibility approach helps firms present the right information at the right stage of that decision-making process.</p>
    <div className="agm-svc-overview-benefits">{['Improve discoverability in relevant search results.','Help qualified buyers understand your expertise.','Strengthen trust through useful, credible information.','Create clearer paths from discovery to inquiry.'].map(x=><span key={x}><CheckCircle2/>{x}</span>)}</div>
    <div className="agm-svc-overview-image"><Image src={photos.engineering} alt="AEC professionals reviewing building plans" fill sizes="(max-width:900px) 100vw, 52vw" className="agm-img-cover"/></div>
   </div>
   <div className="agm-svc-form agm-svc-compact-form" data-reveal><InquiryForm compact/></div>
  </div></section>

  <section className="agm-svc-different"><div className="agm-shell">
   <div className="agm-svc-editorial-head" data-reveal><span className="agm-svc-label">INDUSTRY-SPECIFIC SEARCH <i/></span><h2>AEC buyers don&apos;t search like ordinary consumers.</h2><p>Architecture, engineering, construction, and permitting decisions involve technical requirements, professional qualifications, project scope, geographic relevance, budgets and long evaluation cycles. A useful search strategy must help buyers find specific services and understand whether a firm fits their project.</p></div>
   <div className="agm-svc-different-grid">{different.map((x,i)=><article key={x[0]} data-reveal style={{'--reveal-delay':`${i*90}ms`} as React.CSSProperties}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div>
  </div></section>

  <section className="agm-svc-benefits"><div className="agm-shell agm-svc-benefit-grid">
   <div data-reveal><span className="agm-svc-label">KEY BENEFITS <i/></span><h2>A smarter approach to visibility and growth.</h2><p>Build a stronger digital presence around the information, credibility and conversion opportunities that matter most to your future clients.</p></div>
   <div className="agm-svc-timeline">{benefits.map((b,i)=><article key={b[0]} className={`agm-svc-benefit b${i+1}`} data-reveal style={{'--reveal-delay':`${i*90}ms`} as React.CSSProperties}><span>{b[0]}</span><h3>{b[1]}</h3><p>{b[2]}</p></article>)}</div>
  </div></section>

  <section className="agm-svc-scope" id="service-scope"><div className="agm-shell agm-svc-scope-grid">
   <div className="agm-svc-scope-image" data-reveal><Image src={photos.work} alt="Commercial AEC project" fill sizes="(max-width:800px) 100vw, 48vw" className="agm-img-cover"/></div>
   <div data-reveal><span className="agm-svc-label">WHAT WE DO <i/></span><h2>Complete SEO + AI visibility for AEC firms.</h2><p>We combine technical website improvements, content strategy, local market relevance, AI search visibility assessment and measurement into one coordinated search visibility program.</p>
   <div className="agm-svc-scope-list">{scope.map((s,i)=><div key={s[0]}><b>{s[0]}</b><span><strong>{s[1]}</strong><small>{s[2]}</small></span></div>)}</div>
   <Link href="#audit" className="agm-text-link agm-svc-inline-cta">Discuss Your Search Strategy <ArrowRight size={16}/></Link></div>
  </div></section>

  <section className="agm-svc-method"><div className="agm-shell"><div className="agm-svc-method-head" data-reveal><span className="agm-svc-label agm-svc-label-light">OUR METHODOLOGY <i/></span><h2>From technical foundations to meaningful opportunities.</h2></div>
   <div className="agm-svc-method-flow">{methodology.map((x,i)=><article key={x[0]} data-reveal style={{'--reveal-delay':`${i*70}ms`} as React.CSSProperties}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div>
  </div></section>

  <section className="agm-svc-industries"><div className="agm-shell"><div className="agm-svc-industry-head" data-reveal><div><span className="agm-svc-label">INDUSTRY FOCUS <i/></span><h2>Search strategies built for the AEC industry.</h2></div><p>Industry context shapes how buyers search, evaluate expertise and move toward an inquiry.</p></div>
   <div className="agm-svc-industry-grid agm-svc-industry-grid-four">{industries.map((x,i)=><Link href={x[3]} key={x[0]} className="agm-svc-industry-overlay-card" data-reveal style={{'--reveal-delay':`${i*70}ms`} as React.CSSProperties}><Image src={x[2]} alt={x[0]} fill sizes="(max-width:700px) 100vw, 25vw" className="agm-img-cover"/><span className="agm-svc-card-shade"/><div><h3>{x[0]}</h3><p>{x[1]}</p><ArrowRight/></div></Link>)}</div>
  </div></section>

  <section className="agm-svc-receive"><div className="agm-shell agm-svc-receive-grid">
   <div data-reveal><span className="agm-svc-label">WHAT YOU RECEIVE <i/></span><h2>Clear work. Useful deliverables. Accountable execution.</h2><p>Expected deliverables are defined around the agreed engagement rather than treated as a one-size-fits-all package.</p><small>Final deliverables depend on the agreed scope of work.</small></div>
   <div className="agm-svc-deliverables">{deliverables.map((x,i)=><article key={x[0]} data-reveal style={{'--reveal-delay':`${i*55}ms`} as React.CSSProperties}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{x[0]}</h3><p>{x[1]}</p></div></article>)}</div>
  </div></section>

  <section className="agm-svc-process"><Image src={photos.process} alt="" fill sizes="100vw" className="agm-img-cover"/><div className="agm-svc-process-overlay"/><div className="agm-shell agm-svc-process-inner">
   <div className="agm-svc-process-title" data-reveal><span className="agm-svc-label agm-svc-label-light">OUR PROCESS <i/></span><h2>A clear path from assessment to improvement.</h2><p>One connected delivery process from discovery through measurement and ongoing improvement.</p></div>
   <div className="agm-svc-steps">{process.map((x,i)=><article key={x[0]} data-reveal style={{'--reveal-delay':`${i*90}ms`} as React.CSSProperties}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p>{i<3&&<ArrowRight className="agm-svc-step-arrow"/>}</article>)}</div>
  </div></section>

  <section className="agm-svc-projects"><div className="agm-shell"><div className="agm-svc-project-head" data-reveal><span className="agm-svc-label">RELEVANT WORK <i/></span><h2>Practical work behind stronger digital experiences.</h2><p>Implementation examples only. Results claims are shown only when independently verified and approved.</p></div>
   <div className="agm-svc-project-scroll">{projects.map((x,i)=><article key={x[0]} data-reveal><div className="agm-svc-project-image"><Image src={x[3]} alt="" fill sizes="(max-width:700px) 88vw, 46vw" className="agm-img-cover"/></div><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p><small>IMPLEMENTATION PROJECT</small></article>)}</div>
  </div></section>

  <section className="agm-svc-measure"><div className="agm-shell agm-svc-measure-grid">
   <div data-reveal><span className="agm-svc-label">PERFORMANCE &amp; MEASUREMENT <i/></span><h2>Know what is improving — and why it matters.</h2><p>Search performance should be connected to business goals. Rankings and impressions can help explain visibility, but they are not substitutes for qualified inquiries, proposals and revenue outcomes.</p></div>
   <div className="agm-svc-report" data-reveal><div className="agm-svc-report-head"><span>VISIBILITY FRAMEWORK</span><b>Illustrative reporting structure</b></div>{measurement.map((x,i)=><div className="agm-svc-report-row" key={x[0]}><span>0{i+1}</span><div><strong>{x[0]}</strong><p>{x[1]}</p></div></div>)}</div>
  </div></section>

  <section className="agm-svc-faq"><div className="agm-shell agm-svc-faq-grid"><div data-reveal><span className="agm-svc-label">COMMON QUESTIONS <i/></span><h2>Answers to the questions AEC firms ask before investing in SEO.</h2><p>Clear answers about scope, measurement, timing and fit before an engagement begins.</p></div>
   <div className="agm-svc-faq-list agm-svc-numbered-faq" data-reveal>{faqs.map(f=><details key={f[0]}><summary><b>{f[0]}</b><strong>{f[1]}</strong><span>+</span></summary><div><p>{f[2]}</p></div></details>)}</div>
  </div></section>

  <section className="agm-svc-final"><Image src={photos.architecture} alt="" fill sizes="100vw" className="agm-img-cover"/><div className="agm-svc-final-overlay"/><div className="agm-shell agm-svc-final-inner" data-reveal><div><span>READY TO IMPROVE YOUR VISIBILITY?</span><h2>Build a search presence as credible as the work you deliver.</h2><p>Start with a practical conversation about your website, market, search visibility and opportunities to reach the right AEC buyers.</p></div><div className="agm-svc-final-actions"><Link href="#audit" className="agm-btn agm-btn-primary">Request an AEC Growth Audit <ArrowRight size={17}/></Link><Link href="/services/" className="agm-btn agm-btn-outline-white">Explore Our Services</Link></div></div>
  </section>
 </main>
}
