import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import InquiryForm from '@/components/marketing/InquiryForm'
import RevealMotion from '@/components/marketing/RevealMotion'

export const metadata: Metadata = {
 title:'Paid Media & Lead Generation for AEC Firms',
 description:'Paid media and lead generation for architecture, engineering and construction companies. Reach relevant audiences and improve campaign measurement.',
 alternates:{canonical:'/services/lead-generation/'},
}

const img={
 hero:'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=84',
 team:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=84',
 site:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=84',
 engineering:'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=84',
 architecture:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=84',
 drafting:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=84',
 process:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=84',
 digital:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=84',
}

const different=[
 ['01','Longer Consideration Periods','Some buyers research and compare suppliers over an extended period before making contact.'],
 ['02','Specialized Services','Advertising for technical engineering services, construction capabilities, or permit drawing support requires specific messaging.'],
 ['03','Qualification Matters','A large number of clicks or form submissions does not necessarily indicate valuable commercial demand. Advertising should be evaluated using relevant inquiry quality and available downstream outcomes.'],
]
const benefits=[
 ['01','Improve Market Visibility','Make priority services easier to discover through appropriately targeted campaigns.'],
 ['02','Reach Defined Audiences','Align targeting, messaging, and channels with relevant buyers and geographic markets.'],
 ['03','Support Qualified Inquiries','Connect advertisements with relevant landing pages and useful contact experiences.'],
 ['04','Learn from Performance','Use campaign and conversion data to guide ongoing adjustments and budget decisions.'],
]
const scope=[
 ['01','Paid Media Strategy','Define campaign objectives, priority services, target markets, available budgets, and measurement requirements.'],
 ['02','Google Search Advertising','Develop relevant search campaigns based on service demand, geographic targeting, keywords, ad messaging, and suitable landing pages.'],
 ['03','Paid Social Campaigns','Plan appropriate advertising across relevant social platforms, depending on the audience and campaign objective.'],
 ['04','Retargeting Strategy','Where appropriate and permitted, reach previous website visitors with relevant follow-up advertising.'],
 ['05','Landing Page Development','Create or improve dedicated landing pages that connect advertising messages with clear information and suitable inquiry forms.'],
 ['06','Conversion Tracking','Configure agreed website events and conversion measurement using compatible analytics and advertising tools.'],
 ['07','Campaign Optimization','Review relevant search terms, audiences, creative assets, landing-page behavior, and budget allocation.'],
 ['08','Performance Reporting','Provide reporting around agreed campaign metrics and commercial outcomes where reliable tracking is available.'],
]
const methodology=[
 ['01','Understand the Market','Review services, buyers, geographic priorities, competition, and business goals.'],
 ['02','Identify Demand','Assess relevant search behavior, campaign opportunities, and suitable channels.'],
 ['03','Develop the Campaign','Create campaign structure, targeting, messages, creative assets, and landing-page requirements.'],
 ['04','Launch & Validate','Check campaign configuration, destination pages, tracking, and required approvals.'],
 ['05','Monitor Performance','Review delivery, engagement, conversions, search terms, and inquiry relevance.'],
 ['06','Optimize & Report','Use available evidence to refine messaging, targeting, landing pages, and budget allocation.'],
]
const industries=[
 ['Construction Companies','Promote relevant construction services, capabilities, and geographic markets while helping prospects find suitable project inquiry pathways.',img.site,'/industries/construction-companies/'],
 ['Engineering Firms','Support visibility for selected engineering disciplines and technical services where paid advertising is commercially appropriate.',img.engineering,'/industries/engineering-firms/'],
 ['Architecture Firms','Promote specific design services, project expertise, and relevant consultation opportunities.',img.architecture,'/industries/architecture-firms/'],
 ['Permit & Drafting Companies','Reach buyers researching drawing, drafting, permit preparation, and site-plan services through relevant search and conversion experiences.',img.drafting,'/industries/permit-drafting-companies/'],
]
const deliverables=[
 ['Advertising Opportunity Review','Assessment of priority services, markets, channels, and initial demand considerations.'],
 ['Campaign Strategy','Objectives, targeting, campaign structure, messaging direction, and agreed budget approach.'],
 ['Campaign Setup','Configuration of approved advertising campaigns and relevant account settings.'],
 ['Creative & Ad Copy','Campaign messaging and visual assets suited to the target audience.'],
 ['Landing Page Recommendations','Improvements to the destination experience and conversion journey.'],
 ['Conversion Measurement','Agreed event configuration and campaign performance tracking.'],
 ['Optimization & Reporting','Ongoing review of results, completed improvements, and next priorities.'],
]
const process=[
 ['01','Discover & Research','Understand the audience, services, markets, objectives, and existing advertising activity.'],
 ['02','Plan & Create','Develop campaign structure, messaging, targeting, landing pages, and tracking requirements.'],
 ['03','Launch & Optimize','Activate approved campaigns and refine them using relevant performance information.'],
 ['04','Measure & Improve','Review inquiry quality, campaign results, and available downstream outcomes to guide future decisions.'],
]
const applications=[
 ['CONSTRUCTION SERVICE CAMPAIGNS','Promote priority construction services','Use relevant search intent, suitable geographic markets and service-specific landing pages.',img.site],
 ['ENGINEERING SERVICE CAMPAIGNS','Support selected technical disciplines','Use paid visibility where the target audience and commercial demand justify advertising.',img.engineering],
 ['PERMIT & DRAFTING LEAD CAMPAIGNS','Connect service searches to clear requests','Direct relevant visitors to useful information and focused request forms.',img.drafting],
]
const measurement=[
 ['Campaign Reach','Impressions, relevant exposure, and audience coverage.'],
 ['Traffic Quality','Search-term relevance, user engagement, and landing-page behavior.'],
 ['Conversion Activity','Form submissions, relevant calls, and other agreed conversion events.'],
 ['Lead Quality',"Whether inquiries match the company's services, locations, and project requirements."],
 ['Cost Efficiency','Advertising spend in relation to conversions and qualified opportunities.'],
 ['Business Outcomes','Proposal opportunities and downstream results where reliable tracking is available.'],
]
const faqs=[
 ['01','Can paid advertising help construction companies generate leads?','Paid advertising can help construction companies reach relevant service demand and direct interested prospects to appropriate landing pages. Results depend on targeting, competition, budget, market demand, and conversion quality.'],
 ['02','Do you manage Google Ads for AEC companies?','Google Search advertising is one of the services that can be included in an agreed paid media engagement, depending on campaign goals and suitability.'],
 ['03','Is paid social advertising useful for engineering firms?',"It can support selected awareness, audience development, or lead-generation objectives. Channel suitability should be assessed based on the firm's target buyers and business goals."],
 ['04','How much should an AEC company spend on advertising?','Budget recommendations depend on the target market, services, competitive conditions, business goals, available search demand, and the cost of reaching relevant audiences.'],
 ['05','How long does it take to evaluate advertising performance?','The appropriate evaluation period depends on campaign volume, conversion frequency, market conditions, and the quality of available data. Early results should be interpreted cautiously.'],
 ['06','Do you create landing pages for advertising campaigns?','Yes. Landing-page development or improvement can be included when it supports the agreed advertising strategy and conversion goals.'],
 ['07','How do you measure qualified leads?','Qualified lead measurement can incorporate inquiry details, project relevance, service fit, geographic requirements, and available CRM or sales-process information.'],
 ['08','Can paid advertising work alongside SEO?','Yes. Paid media and organic search can serve complementary objectives. Their roles should be coordinated around business priorities, landing pages, content, and measurement.'],
]

export default function LeadGenerationPage(){
 return <main id="main" className="agm-svc agm-svc-master agm-paid-page"><RevealMotion/>
  <section className="agm-svc-hero">
   <Image src={img.hero} alt="Active commercial construction site representing AEC business growth" fill priority sizes="100vw" className="agm-img-cover"/><div className="agm-svc-hero-overlay"/>
   <div className="agm-shell agm-svc-hero-inner" data-reveal>
    <nav className="agm-svc-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/services/">Services</Link><span>/</span><b>Paid Media &amp; Social</b></nav>
    <h1 className="agm-shared-hero-title">Paid Media &amp; Social<br/><em>for AEC Companies.</em></h1>
    <p>Reach relevant audiences, promote your capabilities, and create clearer opportunities for qualified project inquiries.</p>
    <div className="agm-svc-actions"><Link href="#audit" className="agm-btn agm-btn-primary">Discuss Your Advertising Goals <ArrowRight size={17}/></Link><Link href="#service-scope" className="agm-btn agm-btn-outline-white">Explore Paid Media Services <ArrowRight size={17}/></Link></div>
   </div>
  </section>

  <section className="agm-svc-buyer-intro"><div className="agm-shell agm-svc-buyer-grid">
   <div className="agm-svc-buyer-copy" data-reveal><h2>Advertising should connect your expertise with real opportunities.</h2><p>Paid advertising can help AEC businesses reach people researching relevant services, exploring solutions, and comparing potential providers.</p><p>A useful paid media strategy considers the audience, service, location, message, landing page, and actions that follow an inquiry.</p>
   <div className="agm-svc-buyer-points"><span>Reach relevant search demand</span><span>Promote priority capabilities</span><span>Connect ads to better landing pages</span><span>Improve campaign visibility</span></div></div>
   <div className="agm-svc-buyer-photo" data-reveal><Image src={img.team} alt="Professional team collaborating on business strategy" fill sizes="(max-width:900px) 100vw, 48vw" className="agm-img-cover"/></div>
  </div></section>

  <section className="agm-svc-intro" id="audit"><div className="agm-shell agm-svc-overview-grid">
   <div className="agm-svc-overview-left" data-reveal><h2>Connect market demand with a clearer path to inquiry.</h2><p>AEC Growth Media helps architecture, engineering, construction, and permitting companies plan and manage digital advertising campaigns that connect market demand, relevant messaging, landing pages, and measurable business outcomes.</p><p>Our approach focuses on commercial relevance rather than traffic volume alone.</p>
    <div className="agm-svc-overview-benefits">{['Reach relevant buyers in priority markets.','Promote the services you want to grow.','Align campaign messages with focused landing pages.','Measure meaningful actions and inquiry quality.'].map(x=><span key={x}><CheckCircle2/>{x}</span>)}</div>
    <div className="agm-svc-overview-image"><Image src={img.digital} alt="Digital campaign analytics displayed on a computer" fill sizes="(max-width:900px) 100vw, 52vw" className="agm-img-cover"/></div>
   </div>
   <div className="agm-svc-form agm-svc-compact-form" data-reveal><InquiryForm compact defaultService="Paid Media & Social" sourcePage="paid-media-service"/></div>
  </div></section>

  <section className="agm-svc-different"><div className="agm-shell"><div className="agm-svc-editorial-head" data-reveal><h2>The right audience matters more than the largest audience.</h2><p>AEC companies often serve specialized buyers with complex requirements. Campaign quality depends on relevance, clear positioning and appropriate qualification.</p></div><div className="agm-svc-different-grid">{different.map((x,i)=><article key={x[0]} data-reveal style={{'--reveal-delay':`${i*90}ms`} as React.CSSProperties}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></div></section>

  <section className="agm-svc-benefits agm-paid-benefits"><div className="agm-shell agm-svc-benefit-grid"><div data-reveal><h2>More relevant reach. Clearer opportunities. Better decisions.</h2><p>Build campaigns around the services, markets and business opportunities that matter.</p></div><div className="agm-svc-timeline">{benefits.map((b,i)=><article key={b[0]} className={`agm-svc-benefit b${i+1}`} data-reveal><span>{b[0]}</span><h3>{b[1]}</h3><p>{b[2]}</p></article>)}</div></div></section>

  <section className="agm-svc-scope" id="service-scope"><div className="agm-shell agm-svc-scope-grid"><div className="agm-svc-scope-image" data-reveal><Image src={img.site} alt="Construction professional working at an active project site" fill sizes="(max-width:800px) 100vw, 48vw" className="agm-img-cover"/></div><div data-reveal><h2>Connected advertising from strategy to measurement.</h2><div className="agm-svc-scope-list">{scope.map(s=><div key={s[0]}><b>{s[0]}</b><span><strong>{s[1]}</strong><small>{s[2]}</small></span></div>)}</div><Link href="#audit" className="agm-text-link agm-svc-inline-cta">Discuss Your Campaign Opportunities <ArrowRight size={16}/></Link></div></div></section>

  <section className="agm-svc-method"><div className="agm-shell"><div className="agm-svc-method-head" data-reveal><h2>Build campaigns around commercial relevance.</h2></div><div className="agm-svc-method-flow">{methodology.map(x=><article key={x[0]} data-reveal><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></div></section>

  <section className="agm-svc-industries"><div className="agm-shell"><div className="agm-svc-industry-head" data-reveal><div><h2>Campaigns designed around different AEC audiences.</h2></div><p>Different AEC services require different buyer intent, messages and conversion paths.</p></div><div className="agm-svc-industry-grid agm-svc-industry-grid-four">{industries.map(x=><Link href={x[3]} key={x[0]} className="agm-svc-industry-overlay-card" data-reveal><Image src={x[2]} alt={x[0]} fill sizes="(max-width:700px) 100vw, 25vw" className="agm-img-cover"/><span className="agm-svc-card-shade"/><div><h3>{x[0]}</h3><p>{x[1]}</p><ArrowRight/></div></Link>)}</div></div></section>

  <section className="agm-svc-receive"><div className="agm-shell agm-svc-receive-grid"><div data-reveal><h2>Clear planning, accountable execution, and practical reporting.</h2><p>Depending on the agreed engagement, deliverables may include the following.</p><small>Advertising spend and service fees should be clearly distinguished in commercial proposals.</small></div><div className="agm-svc-deliverables">{deliverables.map((x,i)=><article key={x[0]} data-reveal><span>{String(i+1).padStart(2,'0')}</span><div><h3>{x[0]}</h3><p>{x[1]}</p></div></article>)}</div></div></section>

  <section className="agm-svc-process"><Image src={img.process} alt="Modern commercial architecture representing campaign planning" fill sizes="100vw" className="agm-img-cover"/><div className="agm-svc-process-overlay"/><div className="agm-shell agm-svc-process-inner"><div className="agm-svc-process-title" data-reveal><h2>From advertising strategy to measurable improvement.</h2></div><div className="agm-svc-steps">{process.map((x,i)=><article key={x[0]} data-reveal><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p>{i<3&&<ArrowRight className="agm-svc-step-arrow"/>}</article>)}</div></div></section>

  

  <section className="agm-svc-measure"><div className="agm-shell agm-svc-measure-grid"><div data-reveal><h2>Look beyond clicks and impressions.</h2><p>Paid media reporting should help businesses understand campaign activity and its relationship to commercial outcomes. We do not guarantee specific lead volumes, conversion rates, or advertising returns.</p></div><div className="agm-svc-report" data-reveal><div className="agm-svc-report-head"><span>CAMPAIGN FRAMEWORK</span><b>Meaningful measurement</b></div>{measurement.map((x,i)=><div className="agm-svc-report-row" key={x[0]}><span>0{i+1}</span><div><strong>{x[0]}</strong><p>{x[1]}</p></div></div>)}</div></div></section>

  <section className="agm-svc-faq"><div className="agm-shell agm-svc-faq-grid"><div data-reveal><h2>Common questions about paid media for AEC firms.</h2><p>Clear answers about channels, budgets, measurement and campaign fit.</p></div><div className="agm-svc-faq-list agm-svc-numbered-faq" data-reveal>{faqs.map(x=><details key={x[0]}><summary><b>{x[0]}</b><strong>{x[1]}</strong><span>+</span></summary><div><p>{x[2]}</p></div></details>)}</div></div></section>

  <section className="agm-svc-final agm-svc-final-separated"><Image src={img.architecture} alt="Contemporary AEC project" fill sizes="100vw" className="agm-img-cover"/><div className="agm-svc-final-overlay"/><div className="agm-shell agm-svc-final-inner"><div data-reveal><h2>Turn advertising activity into a more focused growth strategy.</h2><p>Build campaigns around the services you want to grow, the markets you want to reach, and the business opportunities that matter.</p></div><div className="agm-svc-final-actions"><Link href="#audit" className="agm-btn agm-btn-primary">Discuss Your Advertising Goals <ArrowRight size={17}/></Link><Link href="/services/" className="agm-btn agm-btn-outline-white">Explore Our Services <ArrowRight size={17}/></Link></div></div></section>
 </main>
}
