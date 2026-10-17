import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight, Check, CheckCircle2, FileCheck2, MapPin, BriefcaseBusiness,
  SearchCheck, Monitor, Bot, Megaphone, ShieldCheck, BarChart3, MousePointerClick,
  UsersRound, Building2, Compass, ChevronRight
} from 'lucide-react'
import HeroSlider from '@/components/marketing/HeroSlider'
import InquiryForm from '@/components/marketing/InquiryForm'
import { industries, services, photos, processSteps, locations, faq, articles } from '@/lib/marketing/site-data'

const trust = ['Architecture', 'Engineering', 'Construction', 'Permit & Drafting', 'AI Search', 'Web Experience']

const work = [
  { label: 'WEBSITE EXPERIENCE', title: 'Technical services made easier to understand', text: 'Clear information architecture, credible project proof and purposeful conversion paths for complex AEC services.', image: photos.work },
  { label: 'SEARCH VISIBILITY', title: 'Discovery built around real buyer intent', text: 'Service, industry and location architecture designed around how AEC buyers actually research and shortlist partners.', image: photos.engineering },
  { label: 'LEAD OPERATIONS', title: 'A cleaner path from inquiry to follow-up', text: 'Practical intake, qualification and handoff workflows that support the team behind the website.', image: photos.construction },
]

export default function Home() {
  return <main id="main" className="agm-home-v2">
    <HeroSlider />

    <section className="agm-v2-trust" aria-label="AEC Growth Media disciplines">
      <div className="agm-v2-marquee">
        <div>{[...trust, ...trust].map((item, i) => <span key={item+i}><i />{item}</span>)}</div>
      </div>
    </section>

    <section className="agm-v2-section agm-v2-intro">
      <div className="agm-shell agm-v2-intro-grid">
        <div>
          <span className="agm-eyebrow">BUILT FOR THE BUILT ENVIRONMENT</span>
          <h2>Marketing that understands how AEC buyers choose.</h2>
        </div>
        <div className="agm-v2-intro-copy">
          <p>Technical businesses do not need louder marketing. They need a clearer digital presence—one that makes expertise visible, gives buyers confidence and creates a practical next step.</p>
          <div className="agm-v2-mini-proof">
            <span><SearchCheck /> Findable</span><span><ShieldCheck /> Credible</span><span><MousePointerClick /> Conversion-ready</span>
          </div>
        </div>
      </div>
    </section>

    <section className="agm-v2-section agm-v2-industries" id="industries">
      <div className="agm-shell">
        <div className="agm-v2-heading">
          <div><span className="agm-eyebrow">WHO WE SERVE</span><h2>Different disciplines.<br/><em>One growth standard.</em></h2></div>
          <div><p>Every AEC discipline has a different buyer journey. The strategy, proof and conversion experience should reflect it.</p><Link href="/industries/" className="agm-text-link">Explore industries <ArrowUpRight size={16}/></Link></div>
        </div>
        <div className="agm-v2-industry-grid">
          {industries.map((item, i) => <Link className={'agm-v2-industry-card agm-v2-industry-'+(i+1)} href={item.href} key={item.title}>
            <Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw" className="agm-img-cover"/>
            <span className="agm-v2-card-shade"/>
            <span className="agm-v2-card-index">0{i+1}</span>
            <div className="agm-v2-card-copy"><item.icon size={22}/><h3>{item.title}</h3><p>{item.desc}</p><span>Explore <ArrowUpRight size={16}/></span></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="agm-v3-services" id="services">
      <div className="agm-shell">
        <div className="agm-v2-heading">
          <div><span className="agm-eyebrow">OUR GROWTH SYSTEMS</span><h2>Connected capabilities.<br/><em>Built to work together.</em></h2></div>
          <div><p>Search, website experience, automation and demand generation are stronger when they share one commercial direction.</p><Link href="/services/" className="agm-text-link">View all services <ArrowUpRight size={16}/></Link></div>
        </div>
        <div className="agm-v3-service-grid">
          {services.map((s, i) => <Link href={s.href} className="agm-v3-service-card" key={s.title}>
            <div className="agm-v3-service-image"><Image src={[photos.engineering,photos.architecture,photos.drafting,photos.construction][i]} alt={s.title} fill sizes="(max-width:700px) 100vw, 50vw" className="agm-img-cover"/><span className="agm-v3-service-number">0{i+1}</span></div>
            <div className="agm-v3-service-body"><span className="agm-v3-service-icon"><s.icon size={22}/></span><h3>{i===0?'SEO + AI Visibility':i===2?'AI Automation':i===3?'Paid Media & Social':s.title}</h3><p>{s.short}</p><span className="agm-v3-service-link">Explore service <ArrowUpRight size={17}/></span></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="agm-v2-section agm-v2-work" id="work">
      <div className="agm-shell">
        <div className="agm-v2-heading">
          <div><span className="agm-eyebrow">RESULTS & PROJECT PROOF</span><h2>Show the work.<br/><em>Then earn the trust.</em></h2></div>
          <div><p>We structure digital work around evidence: the problem, the implementation and the outcome that can actually be verified.</p><Link href="/projects/" className="agm-text-link">Explore our work <ArrowUpRight size={16}/></Link></div>
        </div>
        <div className="agm-v2-work-grid">
          {work.map((item, i) => <article className={'agm-v2-work-card '+(i===0?'is-featured':'')} key={item.title}>
            <div className="agm-v2-work-image"><Image src={item.image} alt="" fill sizes="(max-width:800px) 100vw, 60vw" className="agm-img-cover"/></div>
            <div className="agm-v2-work-copy"><span>{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></div>
          </article>)}
        </div>
        <p className="agm-v2-evidence-note"><FileCheck2 size={16}/> Client names, screenshots and performance metrics are published only when approved and verifiable.</p>
      </div>
    </section>

    <section className="agm-v2-process" id="process">
      <div className="agm-shell">
        <div className="agm-v2-process-head"><span className="agm-eyebrow">OUR PROCESS</span><h2>A clear path from discovery to conversion.</h2><p>One connected workflow, with evidence and accountability at every stage.</p></div>
        <div className="agm-v2-process-line">
          {processSteps.map((step, i) => <div className="agm-v2-process-step" key={step.title}>
            <span className="agm-v2-process-number">{String(i+1).padStart(2,'0')}</span><span className="agm-v2-process-dot"/>
            <step.icon size={21}/><h3>{i===3?'Establish Evidence':i===4?'Track Visibility':i===5?'Convert':step.title}</h3><p>{step.desc}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="agm-v2-florida" id="locations">
      <div className="agm-v2-florida-image"><Image src={photos.heroTwo} alt="AEC market and construction activity" fill sizes="50vw" className="agm-img-cover"/></div>
      <div className="agm-v2-florida-copy">
        <span className="agm-eyebrow agm-eyebrow-light">FLORIDA SPOTLIGHT</span>
        <h2>National capability.<br/>A focused first market.</h2>
        <p>Our U.S. positioning starts with research-led Florida market development—without invented offices or unsupported local claims.</p>
        <div className="agm-v2-location-list">{locations.map((l,i)=><div key={l}><span>0{i+1}</span><strong>{l}</strong><MapPin size={15}/></div>)}</div>
        <Link href="/locations/florida/" className="agm-btn agm-btn-primary">Explore Florida focus <ArrowUpRight size={17}/></Link>
      </div>
    </section>

    <section className="agm-v2-section agm-v2-insights">
      <div className="agm-shell">
        <div className="agm-v2-heading"><div><span className="agm-eyebrow">INSIGHTS & RESOURCES</span><h2>Useful thinking for<br/><em>technical growth teams.</em></h2></div><div><p>Practical guidance for owners, marketers and technical leaders navigating search, websites and lead generation.</p><Link href="/blog/" className="agm-text-link">View insights <ArrowUpRight size={16}/></Link></div></div>
        <div className="agm-v2-article-grid">{articles.map((a,i)=><article key={a.title} className="agm-v2-article"><Link href="/blog/" className="agm-v2-article-image"><Image src={a.image} alt="" fill sizes="(max-width:700px) 100vw, 33vw" className="agm-img-cover"/><span>0{i+1}</span></Link><div><span>{a.kicker}</span><h3>{a.title}</h3><p>{a.desc}</p><Link href="/blog/">Read insight <ArrowUpRight size={15}/></Link></div></article>)}</div>
      </div>
    </section>

    <section className="agm-v2-delivery">
      <div className="agm-shell agm-v2-delivery-grid">
        <div><span className="agm-eyebrow agm-eyebrow-light">THE DELIVERY STANDARD</span><h2>Clear ownership.<br/>Evidence before claims.</h2></div>
        <div className="agm-v2-delivery-list">
          <span><CheckCircle2/>AEC-specialist positioning</span><span><CheckCircle2/>Transparent review cycles</span><span><CheckCircle2/>Measurable reporting</span><span><CheckCircle2/>Responsible automation</span>
        </div>
        <div className="agm-v2-delivery-stat"><strong>01</strong><p>One accountable growth direction across search, website and lead experience.</p></div>
      </div>
    </section>

    <section className="agm-v2-consult" id="audit">
      <div className="agm-shell">
        <div className="agm-v2-consult-head"><span className="agm-eyebrow">PLAN WITH CLARITY</span><h2>Start with a focused conversation.</h2><p>Share where your business is today. We will use the first conversation to understand the opportunity and define a sensible next step.</p></div>
        <div className="agm-v2-next-steps">
          {[
            ['01','Tell Us About Your Business','Share your website, market, services and the challenge you want to solve.'],
            ['02','Discuss Growth Opportunities','We review the context and talk through search, website and lead-experience opportunities.'],
            ['03','Plan Your Next Steps','Leave with a clearer direction for the work that matters most.'],
          ].map(x=><div key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}
        </div>
        <div className="agm-v2-form-shell">
          <div className="agm-v2-form-aside"><span className="agm-eyebrow agm-eyebrow-light">AEC GROWTH AUDIT</span><h2>Find the opportunities hiding in plain sight.</h2><p>A human-reviewed starting point for your website, visibility and lead experience. No fake instant score. No guaranteed rankings.</p><div><span><SearchCheck/>Website & search review</span><span><UsersRound/>Buyer journey review</span><span><BarChart3/>Practical next-step discussion</span></div></div>
          <InquiryForm />
        </div>
      </div>
    </section>

    <section className="agm-v3-reviews" aria-label="Client reviews">
      <div className="agm-shell agm-v3-review-shell">
        <div><span className="agm-eyebrow agm-eyebrow-light">CLIENT REVIEWS</span><h2>Real feedback belongs here.</h2><p>This component is ready for approved AEC Growth Media testimonials. We will not publish invented client names, star ratings or outcomes.</p></div>
        <div className="agm-v3-review-placeholder"><span>VERIFIED REVIEWS ONLY</span><blockquote>Approved client feedback will appear here with the client name, organization and source when permission is available.</blockquote><div><ShieldCheck size={20}/><span>Evidence before claims</span></div></div>
      </div>
    </section>

    <section className="agm-v2-faq" id="faq">
      <div className="agm-shell agm-v2-faq-grid">
        <div className="agm-v2-faq-intro"><span className="agm-eyebrow">COMMON QUESTIONS</span><h2>Clear answers before we work together.</h2><p>What AEC leaders usually want to know before starting a growth engagement.</p><Link href="/contact/" className="agm-text-link">Ask us directly <ArrowUpRight size={16}/></Link></div>
        <div className="agm-v2-faq-list">{faq.map((f,i)=><details key={f.q} open={i===0}><summary><span>{String(i+1).padStart(2,'0')}</span><strong>{f.q}</strong><i>+</i></summary><div><p>{f.a}</p></div></details>)}</div>
      </div>
    </section>

    <section className="agm-v2-final">
      <div className="agm-shell"><span>AEC GROWTH MEDIA</span><h2>Build a digital presence as credible as the work you deliver.</h2><div><Link href="/#audit" className="agm-btn agm-btn-primary">Request an AEC Growth Audit <ArrowUpRight size={17}/></Link><Link href="/projects/" className="agm-v2-final-link">See our work <ChevronRight size={17}/></Link></div></div>
    </section>
  </main>
}
