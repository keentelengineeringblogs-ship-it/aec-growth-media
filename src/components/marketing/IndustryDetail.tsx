import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import InquiryForm from '@/components/marketing/InquiryForm'
import RevealMotion from '@/components/marketing/RevealMotion'

export type IndustryDetailData = {
  variant: 'engineering' | 'construction' | 'architecture' | 'drafting'
  title: string
  introduction: string
  image: string
  imageAlt: string
  insightTitle: string
  insightBody: string
  challenges: [string, string][]
  capabilities: [string, string, string][]
  evidenceHeading: string
  evidenceBody: string
  imageSecondary: string
  imageSecondaryAlt: string
  processIntro: string
  process: [string, string][]
  faqs: [string, string][]
  finalTitle: string
}

const industryNotes = {
 engineering: {
   eyebrow: 'ENGINEERING FIRMS',
   hook: 'Engineering Clients Need Confidence Before They Make Contact.',
   kicker: 'TECHNICAL BUYER JOURNEYS',
   detail: 'From specialized studies and design disciplines to procurement qualifications, engineering prospects require accuracy, relevant experience and a clear explanation of service fit.',
   featureTitle: 'Present every engineering discipline with the clarity it deserves.',
   featureText: 'A strong engineering website connects actual service specializations, verified credentials and approved project experience. Civil, structural, MEP or electrical capabilities should only appear where the firm actually provides them.',
   secondaryCTA: 'Explore Our Services',
   finalCTA: 'Request an Engineering Growth Consultation',
   audience: 'engineering firms',
 },
 construction: {
   eyebrow: 'CONSTRUCTION COMPANIES',
   hook: 'Construction Buyers Look for Project Fit, Credibility and Clear Next Steps.',
   kicker: 'BUILT AROUND PROJECT DEMAND',
   detail: 'Owners, developers and project teams compare construction capabilities, experience, geographic coverage and the ability to support their scope before requesting a conversation.',
   featureTitle: 'Turn authentic construction work into useful buyer evidence.',
   featureText: 'Real, client-approved project examples can show what your construction company actually builds. Pair those assets with clear service-area and project-type information instead of decorative portfolios or unsupported claims.',
   secondaryCTA: 'Explore Our Services',
   finalCTA: 'Discuss Your Growth Strategy',
   audience: 'construction companies',
 },
 architecture: {
   eyebrow: 'ARCHITECTURE FIRMS',
   hook: 'Your Work Deserves a Stronger Digital Presentation.',
   kicker: 'DESIGN-LED BUYER JOURNEYS',
   detail: 'Clients assess design perspective, portfolio relevance, expertise and the consultation experience. A well-composed website makes visual storytelling and practical decision-making work together.',
   featureTitle: 'Let your portfolio lead. Let your expertise provide the context.',
   featureText: 'Large, approved project photography should be accompanied by clear service explanations, sectors, scope and contact pathways. Every published project should accurately reflect the practice’s actual contribution.',
   secondaryCTA: 'Explore Our Services',
   finalCTA: 'Discuss Your Architecture Website',
   audience: 'architecture firms',
 },
 drafting: {
   eyebrow: 'PERMIT & DRAFTING',
   hook: 'Make Technical Drawing Services Easier to Understand.',
   kicker: 'CLEARER PROJECT REQUESTS',
   detail: 'Property owners, contractors and design teams often arrive looking for a specific drawing, plan or permitting-related deliverable. Clear content and request forms reduce uncertainty.',
   featureTitle: 'Connect drawing-service clarity with a more useful inquiry.',
   featureText: 'Technical service pages should explain real drawing categories, project information needed, deliverable boundaries and appropriate jurisdictional considerations without promising permit approval.',
   secondaryCTA: 'Explore Our Services',
   finalCTA: 'Discuss Your Digital Growth Needs',
   audience: 'permit and drafting businesses',
 },
} satisfies Record<IndustryDetailData['variant'], {
 eyebrow:string;hook:string;kicker:string;detail:string;featureTitle:string;featureText:string;secondaryCTA:string;finalCTA:string;audience:string
}>

const additionalQuestions: Record<IndustryDetailData['variant'], [string,string][]> = {
 engineering: [
  ['How can AI search visibility support an engineering firm?','It can complement accurate service content, technical SEO and verifiable expertise signals. No specific citation or recommendation in AI-generated answers can be guaranteed.'],
  ['Do you support engineering firms across the United States?','The planned AEC Growth Media offering serves U.S. businesses nationally. Any state-specific engineering license or service claims on a client website must match that firm’s verified qualifications.'],
 ],
 construction: [
  ['How can we assess qualified construction leads?','Define relevant scope, project type, service geography and decision-maker context first. Track inquiries against those criteria rather than judging campaigns only by submission volume.'],
  ['How should campaign performance be measured?','Review relevant search and advertising activity alongside on-site service engagement, estimate requests and available downstream proposal opportunities.'],
 ],
 architecture: [
  ['Will a redesign improve the portfolio on mobile?','A responsive redesign can give project imagery appropriate proportions, accessible browsing controls and clear service context across phone, tablet and desktop layouts.'],
  ['What helps architecture content appear in search?','Useful sector and service content, well-structured project explanations, internal links, technical accessibility and verified expertise can support discoverability.'],
 ],
 drafting: [
  ['How can drafting websites improve inquiry quality?','Explain drawing types and practical requirements, then request essential project details through usable forms before a human team reviews the scope.'],
  ['What role does local search play for permit and drafting firms?','Geographic pages should reflect real service eligibility, original local information and relevant demand—not mass-produced county duplicates or invented offices.'],
 ],
}

export default function IndustryDetail({ data: d }: { data: IndustryDetailData }) {
 const notes = industryNotes[d.variant]
 const faqs = [...d.faqs, ...additionalQuestions[d.variant]]
 return <main id="main" className={'agm-industry-detail agm-industry-detail--' + d.variant}>
  <RevealMotion />
  <section className="agm-ind-detail-hero">
   <div className="agm-shell agm-ind-detail-hero-grid">
    <div className="agm-ind-detail-hero-copy" data-reveal>
     <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/industries/">Industries</Link><span>/</span><span>{notes.eyebrow}</span></nav>
     <span className="agm-industry-eyebrow">{notes.eyebrow}</span>
     <h1>{d.title}</h1>
     <p>{d.introduction}</p>
     <div className="agm-ind-hero-actions">
      <Link href="#industry-audit" className="agm-btn agm-btn-primary">Discuss Your Growth Goals <ArrowRight size={18}/></Link>
      <Link href="/services/" className="agm-ind-hero-secondary">{notes.secondaryCTA} <ArrowUpRight size={17}/></Link>
     </div>
    </div>
    <div className="agm-ind-detail-hero-photo" data-reveal>
     <Image src={d.image} alt={d.imageAlt} fill priority sizes="(max-width:800px) 100vw, (max-width:1200px) 45vw, 580px" className="agm-img-cover"/>
     <span className="agm-ind-image-corner" aria-hidden="true"/>
    </div>
   </div>
  </section>
  <section className="agm-ind-detail-insight">
   <div className="agm-shell agm-ind-insight-editorial">
    <div data-reveal><span className="agm-industry-eyebrow">{notes.kicker}</span><h2>{notes.hook}</h2><p>{d.insightBody}</p></div>
    <div className="agm-ind-detail-insight-image" data-reveal><Image src={d.imageSecondary} alt={d.imageSecondaryAlt} fill sizes="(max-width:800px) 100vw, 49vw" className="agm-img-cover"/></div>
   </div>
  </section>
  <section className="agm-ind-detail-challenges">
   <div className="agm-shell">
    <header data-reveal><span className="agm-industry-eyebrow">THE DIGITAL CHALLENGE</span><h2>What {notes.audience} need to communicate clearly.</h2><p>{notes.detail}</p></header>
    <div className="agm-ind-detail-challenge-grid">{d.challenges.map((x,i)=><article key={x[0]} data-reveal><span>{String(i+1).padStart(2,'0')}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div>
   </div>
  </section>
  <section className="agm-ind-detail-services">
   <div className="agm-shell">
    <div className="agm-ind-detail-services-intro" data-reveal><div><span className="agm-industry-eyebrow">DIGITAL GROWTH CAPABILITIES</span><h2>Connect visibility, credibility and qualified inquiries.</h2></div><p>We match the right capabilities to your actual service scope, buyer needs and available marketing systems—not to a generic package.</p></div>
    <div className="agm-ind-detail-capabilities">{d.capabilities.map((x,i)=><article key={x[0]} data-reveal><b>{String(i+1).padStart(2,'0')}</b><div><h3>{x[0]}</h3><p>{x[1]}</p></div><Link href={x[2]} aria-label={'Explore '+x[0]}><ArrowUpRight size={20}/></Link></article>)}</div>
   </div>
  </section>
  <section className="agm-ind-detail-evidence">
   <div className="agm-shell agm-ind-evidence-layout">
    <div className="agm-ind-detail-evidence-copy" data-reveal><span className="agm-industry-eyebrow">CLEAR EVIDENCE, NO EMPTY CLAIMS</span><h2>{notes.featureTitle}</h2><p>{notes.featureText}</p><p>{d.evidenceBody}</p><div><CheckCircle2 size={19}/> Only approved actual project work may be presented as client evidence.</div><Link href="/projects/" className="agm-text-link">Explore Our Approach to Project Evidence <ArrowUpRight size={16}/></Link></div>
    <div className="agm-ind-evidence-sidenote" data-reveal><span>01 / CREDIBLE CONTENT</span><h3>{d.evidenceHeading}</h3><p>Relevant services, authentic information and trustworthy examples help buyers decide whether a company fits the work.</p></div>
   </div>
  </section>
  <section className="agm-ind-detail-process">
   <div className="agm-shell">
    <header data-reveal><span className="agm-industry-eyebrow">OUR PROCESS</span><h2>Research first. Then build the right experience.</h2><p>{d.processIntro}</p></header>
    <div className="agm-ind-process-grid">{d.process.map((x,i)=><article key={x[0]} data-reveal><span>{String(i+1).padStart(2,'0')}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div>
   </div>
  </section>
  <section className="agm-v2-faq agm-ind-premium-faq" id="industry-faq">
   <div className="agm-shell agm-v2-faq-grid">
    <div className="agm-v2-faq-intro" data-reveal><span className="agm-industry-eyebrow">FREQUENTLY ASKED QUESTIONS</span><h2>Clear Answers for {notes.audience.replace(/^./,c=>c.toUpperCase())}.</h2><p>Practical questions about search, websites and qualified growth.</p><Link href="#industry-audit" className="agm-text-link">Ask About Your Project <ArrowUpRight size={16}/></Link></div>
    <div className="agm-v2-faq-list" data-reveal>{faqs.map((f,i)=><details key={f[0]} open={i===0}><summary><span>{String(i+1).padStart(2,'0')}</span><strong>{f[0]}</strong><i>+</i></summary><div><p>{f[1]}</p></div></details>)}</div>
   </div>
  </section>
  <section className="agm-ind-detail-audit" id="industry-audit">
   <div className="agm-shell agm-ind-detail-audit-grid">
    <div data-reveal><span className="agm-industry-eyebrow">NEXT STEP</span><h2>{notes.finalCTA.endsWith('.')?notes.finalCTA:notes.finalCTA+'.'}</h2><p>{d.finalTitle} Share your website, relevant services, markets and the challenge you want to solve. We'll review the request and discuss suitable next steps.</p><Link href="/services/" className="agm-text-link">Explore Our Services <ArrowUpRight size={16}/></Link></div>
    <div data-reveal><InquiryForm compact sourcePage={'industry-'+d.variant}/></div>
   </div>
  </section>
 </main>
}
