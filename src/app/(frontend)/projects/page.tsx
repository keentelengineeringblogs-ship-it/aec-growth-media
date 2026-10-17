import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { photos } from '@/lib/marketing/site-data'

export const metadata:Metadata={title:'AEC Case Studies & Our Work | AEC Growth Media',description:'Explore our approach to documenting real AEC website, search and digital growth projects. Client case studies are published only with verified evidence and approval.',alternates:{canonical:'/projects/'}}

const steps=[
 ['01','Understand the Challenge',"Review the company's audience, technical requirements, current experience, and business objectives."],
 ['02','Build the Right Solution','Develop the agreed website, search, automation, or advertising improvements.'],
 ['03','Document the Work','Present verified implementation details, relevant deliverables, and measurable outcomes where available.'],
]
export default function Projects(){
 return <main id="main" className="agm-projects-page">
 <section className="agm-projects-hero"><Image src={photos.work} alt="Real architecture and construction environment" fill priority sizes="100vw" className="agm-img-cover"/><div className="agm-projects-hero-shade"/><div className="agm-shell agm-projects-hero-content"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Case Studies</span></nav><h1>Show the Work.<br/><em>Then Earn the Trust.</em></h1><p>Explore how thoughtful website architecture, search strategy, technical implementation, and digital experiences can help AEC businesses communicate their capabilities and create clearer paths to growth.</p><Link href="#our-approach" className="agm-btn agm-btn-primary">Our Approach <ArrowUpRight size={18}/></Link></div></section>
 <section className="agm-projects-evidence"><div className="agm-shell agm-projects-evidence-grid"><div><span className="agm-eyebrow">OUR WORK, PROPERLY DOCUMENTED</span><h2>Real projects deserve real evidence.</h2><p>We are preparing our approved case studies for publication. Until project scope, image permissions and results are verified, we will not publish invented client work or sample dashboards as actual outcomes.</p><p>When the approved projects are ready, you will be able to explore each challenge, the work delivered, and the results that can be supported by evidence.</p><Link className="agm-text-link" href="/#audit">Discuss a relevant project <ArrowUpRight size={18}/></Link></div><div className="agm-projects-evidence-media"><Image src={photos.engineering} alt="AEC professionals examining technical project plans" fill sizes="(max-width:800px) 100vw,50vw" className="agm-img-cover"/></div></div></section>
 <section className="agm-projects-standards"><div className="agm-shell"><h2>What you can expect from every published case study</h2><div className="agm-projects-standards-grid">{[['The Business Challenge','A clear explanation of the original problem and goals.'],['The Work Delivered','Documented scope, implementation details, and authentic screenshots.'],['Verified Outcomes','Measured results only when source data and publication permission support them.']].map(x=><article key={x[0]}><CheckCircle2 size={24}/><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>
 <section id="our-approach" className="agm-projects-process"><div className="agm-shell"><div className="agm-projects-process-intro"><span className="agm-eyebrow">OUR WORKING APPROACH</span><h2>Every Project Starts With a Clear Business Challenge.</h2></div><div className="agm-projects-process-list">{steps.map(s=><article key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div></article>)}</div></div></section>
 <section className="agm-projects-cta"><div className="agm-shell"><h2>Let&apos;s Build Something Worth Showing.</h2><p>Tell us about your website, visibility challenges, and business goals. We&apos;ll help identify a practical place to start.</p><Link href="/#audit" className="agm-btn agm-btn-primary">Discuss Your Project <ArrowUpRight size={18}/></Link></div></section>
 </main>
}
