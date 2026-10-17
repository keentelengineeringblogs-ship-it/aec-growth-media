import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import InquiryForm from '@/components/marketing/InquiryForm'
import RevealMotion from '@/components/marketing/RevealMotion'
import { photos } from '@/lib/marketing/site-data'

export const metadata: Metadata = {
 title:'SEO + AI Visibility for AEC Companies | AEC Growth Media',
 description:'SEO and AI visibility strategy for architecture, engineering, construction and permitting firms, focused on discoverability, credibility and qualified project opportunities.',
 alternates:{canonical:'/services/ai-search-seo/'},
}

const benefits=[
 ['01','Reach Buyers Earlier','Get in front of decision-makers when they’re actively searching for AEC solutions.'],
 ['02','Build Credibility','Showcase your expertise with useful content and an authoritative search presence.'],
 ['03','Improve Lead Quality','Attract more qualified traffic and connect with the right project opportunities.'],
 ['04','Measure What Matters','Track performance, refine strategy, and focus on meaningful business outcomes.'],
]
const scope=[
 ['Technical SEO','Crawlability, indexing, page performance, technical architecture and search readiness.'],
 ['Local Search','Google Business Profile strategy where eligible, location relevance, and local search visibility.'],
 ['AI Visibility','Useful, credible content and measurement of visibility in AI-powered search experiences.'],
 ['AEC Content','Industry-specific service content, expertise signals and topic architecture.'],
 ['Website Architecture','Clear service, industry and geographic information organization.'],
 ['Measurement','Search Console, analytics, qualified inquiries and continuous optimization.'],
]
const industries=[
 ['Architecture Firms','Showcase your design expertise and win more projects.',photos.architecture,'/industries/architecture-firms/'],
 ['Construction Companies','Increase visibility and attract qualified bids.',photos.construction,'/industries/construction-companies/'],
 ['Engineering Firms','Build authority and generate more project opportunities.',photos.engineering,'/industries/engineering-firms/'],
]
const faqs=[
 ['How is AEC SEO different from general SEO?','AEC SEO needs to communicate technical services, industry expertise, relevant geography and credible project context to buyers who often research carefully before making contact.'],
 ['Do you optimize for AI search tools like ChatGPT?','Yes. The approach includes useful content, technical SEO, clear expertise signals and measurement of visibility in AI-assisted search experiences without guaranteeing placement in AI answers.'],
 ['How long does SEO take to show results?','Timing depends on current site health, competition, demand and implementation scope. We establish measurable benchmarks and review progress without guaranteeing rankings or lead volume.'],
 ['Can you help if we already have a marketing agency?','Yes, where responsibilities are clear. We can focus on a defined SEO, AI visibility or technical workstream and coordinate with an existing internal or external marketing team.'],
 ['Do you work with AEC firms nationwide?','The planned offering is nationwide across the United States, beginning with a Florida-first market focus.'],
 ['What happens after requesting an audit?','A team member reviews the website, firm context and priorities you submit, then follows up about fit, practical opportunities and appropriate next steps.'],
]
export default function SEOAIServicePage(){
 return <main id="main" className="agm-svc">
  <RevealMotion/>
  <section className="agm-svc-hero">
   <Image src={photos.heroTwo} alt="Commercial construction project representing AEC search visibility" fill priority sizes="100vw" className="agm-img-cover"/>
   <div className="agm-svc-hero-overlay"/>
   <div className="agm-shell agm-svc-hero-inner" data-reveal>
    <nav className="agm-svc-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/services/">Services</Link><span>/</span><b>SEO + AI Visibility</b></nav>
    <span className="agm-svc-label">SERVICE OVERVIEW <i/></span>
    <h1>SEO + AI Visibility<br/><em>for AEC Companies.</em></h1>
    <p>Helping architecture, engineering, construction, and permitting firms improve search visibility, communicate credibility, and turn qualified interest into project opportunities.</p>
    <div className="agm-svc-actions"><Link href="#audit" className="agm-btn agm-btn-primary">Get an AEC Growth Audit <ArrowRight size={17}/></Link><Link href="#service-scope" className="agm-btn agm-btn-outline-white">View Service Scope</Link></div>
   </div>
  </section>

  <section className="agm-svc-intro" id="audit">
   <div className="agm-shell agm-svc-intro-grid">
    <div className="agm-svc-intro-copy" data-reveal>
     <span className="agm-svc-label">WHY IT MATTERS <i/></span><h2>Be where your<br/>next project<br/>is searching.</h2>
     <p>Technical buyers discover and shortlist AEC firms through search, AI-assisted research, referrals and website content. Your digital presence should make expertise easy to find and easy to trust.</p>
     <div className="agm-svc-mini-benefits"><span><CheckCircle2/>More visibility in search &amp; AI</span><span><CheckCircle2/>Attract qualified project leads</span><span><CheckCircle2/>Stand out with credible expertise</span><span><CheckCircle2/>Turn traffic into real opportunities</span></div>
    </div>
    <div className="agm-svc-intro-image" data-reveal><Image src={photos.engineering} alt="AEC professionals reviewing construction plans" fill sizes="(max-width:900px) 100vw, 28vw" className="agm-img-cover"/></div>
    <div className="agm-svc-form" data-reveal><InquiryForm/></div>
   </div>
  </section>

  <section className="agm-svc-benefits" id="benefits">
   <div className="agm-shell agm-svc-benefit-grid">
    <div data-reveal><span className="agm-svc-label">KEY BENEFITS <i/></span><h2>A smarter strategy<br/>for greater visibility<br/>and growth.</h2><p>Improve search presence, build trust with your audience, and attract more high-quality opportunities.</p></div>
    <div className="agm-svc-timeline">{benefits.map((b,i)=><article key={b[0]} className={`agm-svc-benefit b${i+1}`} data-reveal style={{'--reveal-delay':`${i*90}ms`} as React.CSSProperties}><span>{b[0]}</span><h3>{b[1]}</h3><p>{b[2]}</p></article>)}</div>
   </div>
  </section>

  <section className="agm-svc-scope" id="service-scope">
   <div className="agm-shell agm-svc-scope-grid">
    <div className="agm-svc-scope-image" data-reveal><Image src={photos.work} alt="Commercial AEC project representing technical SEO and digital visibility" fill sizes="(max-width:800px) 100vw, 48vw" className="agm-img-cover"/></div>
    <div data-reveal><span className="agm-svc-label">SERVICE SCOPE <i/></span><h2>Complete SEO &amp; AI visibility<br/>for AEC firms.</h2><p>Our strategy combines technical SEO, local search, and AI optimization with industry-focused content and a high-performance website to help you get found, build authority and convert interest into projects.</p><div className="agm-svc-scope-list">{scope.map((s,i)=><div key={s[0]} data-reveal style={{'--reveal-delay':`${i*60}ms`} as React.CSSProperties}><CheckCircle2/><span><strong>{s[0]}</strong><small>{s[1]}</small></span></div>)}</div></div>
   </div>
  </section>

  <section className="agm-svc-industries">
   <div className="agm-shell"><div className="agm-svc-industry-head" data-reveal><div><span className="agm-svc-label">INDUSTRY FOCUS <i/></span><h2>Focused on the industries<br/>that build tomorrow.</h2></div><p>We work with architecture, engineering, construction and permitting companies across key AEC sectors.</p></div>
   <div className="agm-svc-industry-grid">{industries.map((x,i)=><Link href={x[3]} key={x[0]} className="agm-svc-industry-card" data-reveal style={{'--reveal-delay':`${i*80}ms`} as React.CSSProperties}><div><Image src={x[2]} alt={x[0]} fill sizes="(max-width:700px) 100vw, 33vw" className="agm-img-cover"/></div><section><h3>{x[0]}</h3><p>{x[1]}</p><ArrowRight/></section></Link>)}</div></div>
  </section>

  <section className="agm-svc-process" id="process">
   <Image src={photos.process} alt="" fill sizes="100vw" className="agm-img-cover"/><div className="agm-svc-process-overlay"/>
   <div className="agm-shell agm-svc-process-inner"><div className="agm-svc-process-title" data-reveal><span className="agm-svc-label agm-svc-label-light">OUR PROCESS <i/></span><h2>A proven process for<br/>measurable results.</h2><p>We follow a strategic, data-driven process to help AEC firms improve visibility, attract qualified leads and turn interest into real projects.</p></div>
   <div className="agm-svc-steps">{[['01','Discover & Analyze','Understand your market, competitors and opportunities.'],['02','Strategy & Planning','Build a focused SEO and AI visibility strategy for your firm.'],['03','Implement & Optimize','Execute technical, content and on-page improvements.'],['04','Measure & Grow','Track performance, refine strategy and scale results.']].map((x,i)=><article key={x[0]} data-reveal style={{'--reveal-delay':`${i*90}ms`} as React.CSSProperties}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p>{i<3&&<ArrowRight className="agm-svc-step-arrow"/>}</article>)}</div></div>
  </section>

  <section className="agm-svc-faq">
   <div className="agm-shell agm-svc-faq-grid"><div data-reveal><span className="agm-svc-label">FAQS <i/></span><h2>Common questions<br/>about SEO + AI visibility.</h2><p>Get answers to common questions from architecture, engineering, construction and permitting companies.</p><Link href="/contact/" className="agm-btn agm-btn-primary">View All FAQs <ArrowRight size={16}/></Link></div>
   <div className="agm-svc-faq-list" data-reveal>{faqs.map((f)=><details key={f[0]}><summary>{f[0]}<span>+</span></summary><div><p>{f[1]}</p></div></details>)}</div></div>
  </section>

  <section className="agm-svc-final">
   <Image src={photos.architecture} alt="" fill sizes="100vw" className="agm-img-cover"/><div className="agm-svc-final-overlay"/><div className="agm-shell agm-svc-final-inner" data-reveal><div><span>Ready to improve your visibility?</span><h2>Let’s grow your search presence.</h2><p>Start with a practical review of your website, search presence, and opportunities to reach more qualified AEC buyers.</p></div><Link href="#audit" className="agm-btn agm-btn-primary">Request an AEC Growth Audit <ArrowRight size={17}/></Link></div>
  </section>
 </main>
}
