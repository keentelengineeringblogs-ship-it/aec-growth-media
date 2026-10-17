import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BarChart3, Bot, MapPin, Search, TrendingUp } from 'lucide-react'

const groups=[
 {title:'SERVICES',links:[['SEO + AI Visibility','/services/ai-search-seo/'],['Website Design','/services/website-design/'],['AI Automation','/services/ai-automation/'],['Paid Media','/services/lead-generation/']]},
 {title:'INDUSTRIES',links:[['Engineering Firms','/industries/engineering-firms/'],['Construction Companies','/industries/construction-companies/'],['Architecture Firms','/industries/architecture-firms/'],['Permit & Drafting','/industries/permit-drafting-companies/']]},
 {title:'LOCATIONS',links:[['Florida','/locations/florida/']]},
 {title:'RESOURCES',links:[['Blog','/blog/'],['Case Studies','/projects/']]},
 {title:'COMPANY',links:[['About Us','/about/'],['Contact','/contact/'],['Privacy Policy','/privacy-policy/'],['Terms of Service','/terms/']]},
]
const values=[[Search,'More Visibility'],[BarChart3,'Higher-Quality Leads'],[Bot,'Smarter Marketing with AI'],[TrendingUp,'Real Business Growth']] as const

export default function Footer(){
 return <footer className="agm-footer agm-hf-footer">
  <div className="agm-hf-building" aria-hidden="true"><svg viewBox="0 0 700 210" fill="none"><path d="M20 200h660M290 200V92l90-54v162M380 200V74l110 62v64M490 200v-42l92-56 92 58v40M306 190V105l62-37M401 92l73 42M511 174l70-43 73 44" stroke="currentColor"/><path d="M330 200v-76m27 76v-93m54 93v-80m28 80v-62m103 62v-48m39 48v-69m38 69v-47" stroke="currentColor"/></svg></div>
  <div className="agm-shell">
   <div className="agm-hf-footer-grid">
    <div className="agm-hf-brand-col">
     <Link href="/" aria-label="AEC Growth Media home"><Image src="/brand/logo-on-dark.svg" alt="AEC Growth Media" width={1000} height={205}/></Link>
     <p>The AI Search &amp; Digital Growth partner for architecture, engineering, construction, and permitting companies.</p>
     <div className="agm-hf-values">{values.map(([Icon,label])=><span key={label}><Icon size={18}/>{label}</span>)}</div>
    </div>
    <div className="agm-hf-link-grid">{groups.map(g=><div className="agm-hf-col" key={g.title}><h3>{g.title}</h3><i/><div>{g.links.map(l=><Link key={l[1]} href={l[1]}>{l[0]}</Link>)}</div></div>)}</div>
    <div className="agm-hf-contact">
     <h3>LET&apos;S BUILD YOUR GROWTH STRATEGY.</h3>
     <span><MapPin size={18}/>U.S. Nationwide</span>
     <small>Remote-First. Florida-First Focus.</small>
     <Link href="/#audit" className="agm-hf-footer-cta">Book a Consultation <ArrowRight size={18}/></Link>
    </div>
   </div>
   <div className="agm-hf-bottom"><span>© {new Date().getFullYear()} AEC Growth Media. All rights reserved.</span><div><Link href="/privacy-policy/">Privacy Policy</Link><b/> <Link href="/terms/">Terms of Service</Link></div></div>
  </div>
 </footer>
}
