import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, BarChart3, Handshake, Settings, UsersRound } from 'lucide-react'
import RevealMotion from './RevealMotion'
import { photos } from '@/lib/marketing/site-data'

const values = [
  { title:'Industry-First Mindset', text:'We know the AEC world and speak your language.', icon:UsersRound },
  { title:'Practical Solutions', text:'Strategy and execution that fit real-world AEC businesses.', icon:Settings },
  { title:'Transparency Always', text:'Clear communication, real metrics, and honest expectations.', icon:BarChart3 },
  { title:'Long-Term Partnerships', text:"We're here for your next project, not just the next campaign.", icon:Handshake },
]

export default function AboutPage(){
 return <main id="main" className="agm-about">
  <RevealMotion />
  <section className="agm-about-hero">
   <Image src={photos.hero} alt="Contemporary commercial architecture" fill priority sizes="100vw" className="agm-img-cover"/>
   <span className="agm-about-hero-shade"/>
   <div className="agm-shell agm-about-hero-copy" data-reveal>
    <div className="agm-about-breadcrumb"><Link href="/">Home</Link><b>›</b><span>About Us</span></div>
    <i className="agm-about-accent"/>
    <h1 className="agm-shared-hero-title">About<br/><em>AEC Growth Media</em></h1>
    <p>The AI Search &amp; Digital Growth partner for architecture, engineering, construction, and permitting companies.</p>
   </div>
  </section>

  <section className="agm-about-section agm-about-story" id="story">
   <div className="agm-shell agm-about-story-grid">
    <div className="agm-about-copy" data-reveal>
     <span className="agm-about-label">OUR STORY <i/></span>
     <h2>Built for the companies<br/>that build what’s next.</h2>
     <p>AEC Growth Media was founded to help architecture, engineering, construction, and permitting companies grow in a more complex, AI-driven world. We combine industry expertise, modern marketing strategy, and advanced technology to help our clients get found, win more work, and build long-term success.</p>
     <Link href="#values" className="agm-btn agm-about-btn">Our Mission &amp; Values <ArrowUpRight size={17}/></Link>
    </div>
    <div className="agm-about-story-visual" data-reveal>
     <div className="agm-about-story-image"><Image src={photos.construction} alt="Construction professionals reviewing a project" fill sizes="(max-width:800px) 100vw, 55vw" className="agm-img-cover"/></div>
     <aside className="agm-about-fact-panel">
      <div><strong>U.S.</strong><b>Nationwide</b><small>With a Florida-First Focus</small></div>
      <div><strong>Single</strong><b>Point of Accountability</b><small>Strategy. Execution. Results.</small></div>
      <div><strong>AEC</strong><b>Industry Specialized</b><small>Built-world growth focus</small></div>
     </aside>
    </div>
   </div>
  </section>

  <section className="agm-about-values" id="values">
   <div className="agm-shell agm-about-values-grid">
    <div className="agm-about-values-intro" data-reveal><span className="agm-about-label">OUR VALUES <i/></span><h2>Built on<br/>partnership,<br/>not just projects.</h2></div>
    {values.map(({title,text,icon:Icon},i)=><article key={title} data-reveal style={{'--reveal-delay':`${i*70}ms`} as React.CSSProperties}><Icon/><h3>{title}</h3><p>{text}</p></article>)}
   </div>
  </section>

  <section className="agm-about-section agm-about-approach">
   <div className="agm-shell agm-about-approach-grid">
    <div className="agm-about-approach-image" data-reveal><Image src={photos.process} alt="AEC professionals collaborating around project strategy" fill sizes="(max-width:800px) 100vw, 52vw" className="agm-img-cover"/></div>
    <div className="agm-about-copy" data-reveal>
     <span className="agm-about-label">OUR APPROACH <i/></span>
     <h2>Strategy, technology,<br/>and real AEC insight.</h2>
     <p>We bring together AI-powered search strategy, high-performance websites, targeted media, and industry expertise to help your firm stand out in a competitive market and convert visibility into real project opportunities.</p>
     <Link href="/#process" className="agm-btn agm-about-btn">How We Work <ArrowUpRight size={17}/></Link>
    </div>
   </div>
  </section>

  <section className="agm-about-impact">
   <Image src={photos.architecture} alt="" fill sizes="100vw" className="agm-img-cover"/>
   <span className="agm-about-impact-shade"/>
   <div className="agm-shell agm-about-impact-inner" data-reveal>
    <span className="agm-about-label agm-about-label-light">OUR IMPACT <i/></span>
    <h2>Helping AEC companies<br/><em>grow with confidence.</em></h2>
    <p>From local firms to multi-discipline organizations, we help AEC businesses improve visibility, generate higher-quality leads, and build a stronger, more predictable pipeline — without the guesswork.</p>
    <div className="agm-about-impact-grid">
     <div><strong>U.S.</strong><span>Nationwide Market Focus</span></div>
     <div><strong>Florida-First</strong><span>Initial Market Strategy</span></div>
     <div><strong>AEC</strong><span>Industry-Specialized Marketing</span></div>
     <div><strong>One</strong><span>Connected Growth Approach</span></div>
    </div>
   </div>
  </section>

  <section className="agm-about-section agm-about-team">
   <div className="agm-shell agm-about-team-grid">
    <div className="agm-about-copy" data-reveal>
     <span className="agm-about-label">OUR TEAM <i/></span>
     <h2>People who understand<br/>the AEC industry.</h2>
     <p>Our team brings together expertise in AI search, digital marketing, web technology, and the AEC industry. We understand your challenges, your buyers, and what it takes to turn visibility into real opportunities.</p>
     <Link href="/contact/" className="agm-btn agm-about-btn">Meet Our Team <ArrowUpRight size={17}/></Link>
    </div>
    <div className="agm-about-team-images" data-reveal>
     <div><Image src={photos.engineering} alt="AEC professionals collaborating on technical work" fill sizes="(max-width:700px) 100vw, 28vw" className="agm-img-cover"/></div>
     <div><Image src={photos.heroTwo} alt="Modern built-environment project" fill sizes="(max-width:700px) 100vw, 28vw" className="agm-img-cover"/></div>
    </div>
   </div>
  </section>
 </main>
}
