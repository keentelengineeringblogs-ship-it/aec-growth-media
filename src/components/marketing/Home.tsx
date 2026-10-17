import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight, FileCheck2, MapPin,
  SearchCheck, ShieldCheck, BarChart3, MousePointerClick,
  UsersRound, ChevronRight
} from 'lucide-react'
import HeroSlider from '@/components/marketing/HeroSlider'
import InquiryForm from '@/components/marketing/InquiryForm'
import RevealMotion from '@/components/marketing/RevealMotion'
import { industries, services, photos, processSteps, locations, faq, articles } from '@/lib/marketing/site-data'

const trust = ['Architecture', 'Engineering', 'Construction', 'Permit & Drafting', 'AI Search', 'Web Experience']

const work = [
  { label: 'WEBSITE EXPERIENCE', title: 'Technical services made easier to understand', text: 'Clear information architecture, credible project proof and purposeful conversion paths for complex AEC services.', image: photos.work },
  { label: 'SEARCH VISIBILITY', title: 'Discovery built around real buyer intent', text: 'Service, industry and location architecture designed around how AEC buyers actually research and shortlist partners.', image: photos.engineering },
  { label: 'LEAD OPERATIONS', title: 'A cleaner path from inquiry to follow-up', text: 'Practical intake, qualification and handoff workflows that support the team behind the website.', image: photos.construction },
]

export default function Home() {
  return <main id="main" className="agm-home-v2">
    <RevealMotion />
    <HeroSlider />

    <section className="agm-v2-trust" aria-label="AEC Growth Media disciplines">
      <div className="agm-v2-marquee">
        <div>{[...trust, ...trust].map((item, i) => <span key={item+i}><i />{item}</span>)}</div>
      </div>
    </section>

    <section className="agm-v2-section agm-v2-intro">
      <div className="agm-shell agm-v2-intro-grid">
        <div className="agm-v4-intro-content">
          <h2>Marketing that understands how AEC buyers choose.</h2>
          <p>Technical businesses do not need louder marketing. They need a clearer digital presence—one that makes expertise visible, gives buyers confidence and creates a practical next step.</p>
          <div className="agm-v2-mini-proof">
            <span><SearchCheck /> Findable</span><span><ShieldCheck /> Credible</span><span><MousePointerClick /> Conversion-ready</span>
          </div>
        </div>
        <div className="agm-v4-intro-image"><Image src={photos.architecture} alt="Architecture and engineering collaboration" fill sizes="(max-width:700px) 100vw, 45vw" className="agm-img-cover"/></div>
      </div>
    </section>

    <section className="agm-v2-section agm-v2-industries" id="industries">
      <div className="agm-shell">
        <div className="agm-v2-heading">
          <div><h2>Different disciplines.<br/><em>One growth standard.</em></h2></div>
          <div><p>Every AEC discipline has a different buyer journey. The strategy, proof and conversion experience should reflect it.</p><Link href="/industries/" className="agm-text-link">Explore industries <ArrowUpRight size={16}/></Link></div>
        </div>
        <div className="agm-v2-industry-grid">
          {industries.map((item, i) => <Link className={'agm-v2-industry-card agm-v2-industry-'+(i+1)} href={item.href} key={item.title}>
            <Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw" className="agm-img-cover"/>
            <span className="agm-v2-card-shade"/>
            <span className="agm-v2-card-index">0{i+1}</span>
            <div className="agm-v2-card-copy"><h3>{item.title}</h3><p>{item.desc}</p><span>Explore <ArrowUpRight size={16}/></span></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="agm-v3-services" id="services">
      <div className="agm-shell">
        <div className="agm-v2-heading">
          <div><h2>Connected capabilities.<br/><em>Built to work together.</em></h2></div>
          <div><p>Search, website experience, automation and demand generation are stronger when they share one commercial direction.</p><Link href="/services/" className="agm-text-link">View all services <ArrowUpRight size={16}/></Link></div>
        </div>
        <div className="agm-v3-service-grid">
          {services.map((s, i) => <Link href={s.href} className="agm-v3-service-card" key={s.title}>
            <div className="agm-v3-service-image"><Image src={[photos.engineering,photos.architecture,photos.drafting,photos.construction][i]} alt={s.title} fill sizes="(max-width:700px) 100vw, 50vw" className="agm-img-cover"/><span className="agm-v3-service-number">0{i+1}</span></div>
            <div className="agm-v3-service-body"><h3>{i===0?'SEO + AI Visibility':i===2?'AI Automation':i===3?'Paid Media & Social':s.title}</h3><p>{s.short}</p><span className="agm-v3-service-link">Explore service <ArrowUpRight size={17}/></span></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="agm-v2-process" id="process">
      <div className="agm-shell">
        <div className="agm-v2-process-head"><h2>A clear path from discovery to conversion.</h2><p>One connected workflow with clear ownership, practical execution and measurable progress.</p></div>
        <div className="agm-v4-process-map">
          {[
            ['01','Discover','Understand your market, buyers, services and current digital performance.'],
            ['02','Plan','Prioritize the search, website and lead-experience opportunities that matter most.'],
            ['03','Build & Prove','Execute the work and strengthen the evidence buyers need to trust your firm.'],
            ['04','Measure & Convert','Track visibility, improve the journey and turn qualified interest into action.'],
          ].map((step,i)=><article className={'agm-v4-process-card agm-v4-process-card-'+(i+1)} key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></article>)}
        </div>
      </div>
    </section>

    <section className="agm-v2-florida" id="locations">
      <div className="agm-v2-florida-image"><Image src={photos.heroTwo} alt="AEC market and construction activity" fill sizes="50vw" className="agm-img-cover"/></div>
      <div className="agm-v2-florida-copy">
        
        <h2>National capability.<br/>A focused first market.</h2>
        <p>Our U.S. positioning starts with research-led Florida market development—without invented offices or unsupported local claims.</p>
        <div className="agm-v2-location-list">{locations.map((l,i)=><div key={l}><span>0{i+1}</span><strong>{l}</strong><MapPin size={15}/></div>)}</div>
        <Link href="/locations/florida/" className="agm-btn agm-btn-primary">Explore Florida focus <ArrowUpRight size={17}/></Link>
      </div>
    </section>

    <section className="agm-v2-section agm-v2-insights">
      <div className="agm-shell">
        <div className="agm-v2-heading"><div><h2>Useful thinking for<br/><em>technical growth teams.</em></h2></div><div><p>Practical guidance for owners, marketers and technical leaders navigating search, websites and lead generation.</p><Link href="/blog/" className="agm-text-link">View insights <ArrowUpRight size={16}/></Link></div></div>
        <div className="agm-v2-article-grid">{articles.map((a,i)=><article key={a.title} className="agm-v2-article"><Link href="/blog/" className="agm-v2-article-image"><Image src={a.image} alt="" fill sizes="(max-width:700px) 100vw, 33vw" className="agm-img-cover"/><span>0{i+1}</span></Link><div><span>{a.kicker}</span><h3>{a.title}</h3><p>{a.desc}</p><Link href="/blog/">Read insight <ArrowUpRight size={15}/></Link></div></article>)}</div>
        <div className="agm-v4-insights-cta"><Link href="/blog/" className="agm-btn agm-btn-dark">View All Insights <ArrowUpRight size={17}/></Link></div>
      </div>
    </section>

    <section className="agm-v2-section agm-v5-reviews" id="reviews">
      <div className="agm-shell">
        <div className="agm-v2-heading">
          <div><h2>What AEC teams<br/><em>value in a growth partner.</em></h2></div>
          <div><p>Client feedback belongs here once it is approved and verifiable. Until then, we do not publish invented testimonials, names, companies or ratings.</p></div>
        </div>
        <div className="agm-v5-review-placeholder">
          <div><span>CLIENT REVIEWS</span><h3>Verified client feedback coming soon.</h3><p>This space is designed for real testimonials and project-specific proof as approvals become available.</p></div>
          <Link href="/#audit" className="agm-btn agm-btn-dark">Start a conversation <ArrowUpRight size={17}/></Link>
        </div>
      </div>
    </section>

    <section className="agm-v2-consult" id="audit">
      <div className="agm-shell">
        <div className="agm-v2-form-shell">
          <div className="agm-v2-form-aside">
            <h2>Find the opportunities hiding in plain sight.</h2>
            <p>A human-reviewed starting point for your website, visibility and lead experience. No fake instant score. No guaranteed rankings.</p>
            <div className="agm-v4-form-image"><Image src={photos.construction} alt="AEC professionals reviewing a project" fill sizes="(max-width:1050px) 100vw, 40vw" className="agm-img-cover"/></div>
            <div className="agm-v4-form-benefits"><span><SearchCheck/>Website & search review</span><span><UsersRound/>Buyer journey review</span><span><BarChart3/>Practical next-step discussion</span></div>
            <div className="agm-v4-form-next"><h3>What happens next</h3><ol><li><strong>Share your business</strong><small>Tell us about your market, services and priorities.</small></li><li><strong>Discuss the opportunity</strong><small>We review the context and identify the highest-value areas.</small></li><li><strong>Plan the next step</strong><small>Leave with a clear direction for what should happen next.</small></li></ol></div>
          </div>
          <InquiryForm />
        </div>
      </div>
    </section>

    <section className="agm-v2-faq" id="faq">
      <div className="agm-shell agm-v2-faq-grid">
        <div className="agm-v2-faq-intro"><h2>Clear answers before we work together.</h2><p>What AEC leaders usually want to know before starting a growth engagement.</p><Link href="/contact/" className="agm-text-link">Ask us directly <ArrowUpRight size={16}/></Link></div>
        <div className="agm-v2-faq-list">{faq.map((f,i)=><details key={f.q} open={i===0}><summary><span>{String(i+1).padStart(2,'0')}</span><strong>{f.q}</strong><i>+</i></summary><div><p>{f.a}</p></div></details>)}</div>
      </div>
    </section>

    <section className="agm-v2-final">
      <div className="agm-shell"><span>AEC GROWTH MEDIA</span><h2>Build a digital presence as credible as the work you deliver.</h2><div><Link href="/#audit" className="agm-btn agm-btn-primary">Request an AEC Growth Audit <ArrowUpRight size={17}/></Link><Link href="/projects/" className="agm-v2-final-link">See our work <ChevronRight size={17}/></Link></div></div>
    </section>
  </main>
}
