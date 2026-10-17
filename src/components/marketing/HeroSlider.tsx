import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { photos } from '@/lib/marketing/site-data'

export default function HeroSlider(){
 return <section className="agm-v3-hero" aria-labelledby="agm-home-title">
  <div className="agm-v3-hero-media">
   <Image src={photos.hero} alt="Contemporary commercial architecture representing the built environment" fill priority quality={88} sizes="100vw" className="agm-img-cover"/>
   <div className="agm-v3-hero-wash"/>
  </div>
  <div className="agm-shell agm-v3-hero-layout">
   <div className="agm-v3-hero-copy" data-reveal>
    <span className="agm-eyebrow agm-eyebrow-light"><span className="agm-eyebrow-mark"/>AEC-FOCUSED DIGITAL GROWTH</span>
    <h1 id="agm-home-title">AI Search &amp; Digital Growth for <span>Architecture, Engineering &amp; Construction Firms.</span></h1>
    <p>We help firms that design, engineer, permit and build get discovered, earn buyer trust and turn digital interest into qualified opportunities.</p>
    <div className="agm-v3-hero-actions">
     <Link className="agm-btn agm-btn-primary" href="/#audit">Get an AEC Growth Audit <ArrowUpRight size={18}/></Link>
     <Link className="agm-v3-hero-secondary" href="/projects/">See Our Work <ArrowUpRight size={17}/></Link>
    </div>
   </div>
   <aside className="agm-v3-hero-panel" data-reveal aria-label="AEC Growth Media approach">
    <span>BUILT FOR THE BUILT ENVIRONMENT</span>
    <strong>Findable.<br/>Credible.<br/>Conversion-ready.</strong>
    <div><CheckCircle2/> Search &amp; AI visibility</div><div><CheckCircle2/> High-trust web experience</div><div><CheckCircle2/> Practical lead operations</div>
   </aside>
  </div>
  <a className="agm-v3-scroll" href="#industries" aria-label="Scroll to industries"><span>Explore</span><ArrowDown size={16}/></a>
 </section>
}