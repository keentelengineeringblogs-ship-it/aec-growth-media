import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import InquiryForm from '@/components/marketing/InquiryForm'

export type IndustryDetailData={
 variant:'engineering'|'construction'|'architecture'|'drafting'
 title:string
 introduction:string
 image:string
 imageAlt:string
 insightTitle:string
 insightBody:string
 challenges:[string,string][]
 capabilities:[string,string,string][]
 evidenceHeading:string
 evidenceBody:string
 imageSecondary:string
 imageSecondaryAlt:string
 processIntro:string
 process:[string,string][]
 faqs:[string,string][]
 finalTitle:string
}
export default function IndustryDetail({data:d}:{data:IndustryDetailData}){
return <main id="main" className={'agm-industry-detail agm-industry-detail--'+d.variant}>
<section className="agm-ind-detail-hero"><div className="agm-shell agm-ind-detail-hero-grid"><div className="agm-ind-detail-hero-copy"><nav aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/industries/">Industries</Link> / {d.title}</nav><h1>{d.title}</h1><p>{d.introduction}</p><Link href="#industry-audit" className="agm-btn agm-btn-primary">Discuss Your Growth Goals <ArrowRight size={17}/></Link></div><div className="agm-ind-detail-hero-photo"><Image src={d.image} alt={d.imageAlt} fill priority sizes="(max-width:850px) 100vw,52vw" className="agm-img-cover"/></div></div></section>
<section className="agm-ind-detail-insight"><div className="agm-shell agm-ind-detail-insight-grid"><h2>{d.insightTitle}</h2><p>{d.insightBody}</p></div></section>
<section className="agm-ind-detail-challenges"><div className="agm-shell"><header><h2>What your prospective clients need to understand.</h2></header><div className="agm-ind-detail-challenge-grid">{d.challenges.map((x,i)=><article key={x[0]}><span>{String(i+1).padStart(2,'0')}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>
<section className="agm-ind-detail-services"><div className="agm-shell"><div className="agm-ind-detail-services-intro"><h2>Build the right path from discovery to inquiry.</h2><p>These capabilities support different moments in your buyer journey. The appropriate mix depends on your goals, service markets and existing systems.</p></div><div className="agm-ind-detail-capabilities">{d.capabilities.map((x,i)=><article key={x[0]}><b>{String(i+1).padStart(2,'0')}</b><div><h3>{x[0]}</h3><p>{x[1]}</p></div><Link href={x[2]} aria-label={'Explore '+x[0]}><ArrowRight size={20}/></Link></article>)}</div></div></section>
<section className="agm-ind-detail-evidence"><div className="agm-shell"><div className="agm-ind-detail-evidence-photo"><Image src={d.imageSecondary} alt={d.imageSecondaryAlt} fill sizes="(max-width:850px) 100vw,48vw" className="agm-img-cover"/></div><div className="agm-ind-detail-evidence-copy"><h2>{d.evidenceHeading}</h2><p>{d.evidenceBody}</p><div><CheckCircle2 size={19}/> Relevant work, credentials and claims should be verified before publication.</div><Link href="/projects/" className="agm-text-link">How we document our work <ArrowRight size={16}/></Link></div></div></section>
<section className="agm-ind-detail-process"><div className="agm-shell"><header><h2>Practical execution, not generic marketing activity.</h2><p>{d.processIntro}</p></header><div>{d.process.map((x,i)=><article key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>
<section className="agm-ind-detail-faq"><div className="agm-shell"><h2>Questions from {d.variant==='drafting'?'permit and drafting businesses':d.variant==='engineering'?'engineering firms':d.variant==='architecture'?'architecture firms':'construction companies'}.</h2><div>{d.faqs.map(x=><details key={x[0]}><summary>{x[0]}<span>+</span></summary><p>{x[1]}</p></details>)}</div></div></section>
<section className="agm-ind-detail-audit" id="industry-audit"><div className="agm-shell agm-ind-detail-audit-grid"><div><h2>{d.finalTitle}</h2><p>Share your website, key services, market priorities and business challenge. Our team can review your inquiry and discuss an appropriate next step.</p><Link href="/services/" className="agm-text-link">Explore all services <ArrowRight size={16}/></Link></div><div><InquiryForm compact sourcePage={'industry-'+d.variant}/></div></div></section>
</main>}
