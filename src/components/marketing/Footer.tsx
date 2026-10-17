import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'

const linkGroups=[
 {name:'SERVICES',items:[
  ['SEO + AI Visibility','/services/ai-search-seo/'],
  ['Website Design & Redesign','/services/website-design/'],
  ['AI Automation','/services/ai-automation/'],
  ['Paid Media & Social','/services/lead-generation/'],
 ]},
 {name:'INDUSTRIES',items:[
  ['Engineering Firms','/industries/engineering-firms/'],
  ['Construction Companies','/industries/construction-companies/'],
  ['Architecture Firms','/industries/architecture-firms/'],
  ['Permit & Drafting Companies','/industries/permit-drafting-companies/'],
 ]},
 {name:'EXPLORE',items:[
  ['Blog & Insights','/blog/'],
  ['Case Studies','/projects/'],
  ['All Services','/services/'],
  ['All Industries','/industries/'],
  ['Florida Focus','/locations/florida/'],
 ]},
 {name:'COMPANY',items:[
  ['About','/about/'],
  ['Contact','/contact/'],
  ['Privacy Policy','/privacy-policy/'],
  ['Terms of Service','/terms/'],
  ['Accessibility','/accessibility/'],
 ]},
]

export default function Footer(){
 return <footer className="agm-footer agm-hf-footer agm-premium-footer">
  <div className="agm-premium-footer-cta">
   <div className="agm-shell agm-premium-footer-cta-inner">
    <div><span className="agm-premium-footer-kicker">AEC GROWTH MEDIA</span><h2>Build a Digital Presence as Credible as the Work You Deliver.</h2><p>Connect your AEC business with a clearer search, website, and digital growth strategy.</p></div>
    <Link href="/contact/#inquire" className="agm-btn agm-btn-primary">Request an AEC Growth Audit <ArrowRight size={18}/></Link>
   </div>
  </div>
  <div className="agm-shell">
   <div className="agm-premium-footer-main">
    <div className="agm-premium-footer-brand">
     <Link href="/" aria-label="AEC Growth Media homepage"><Image src="/brand/logo-on-dark.svg" alt="AEC Growth Media" width={1000} height={205}/></Link>
     <p>A focused digital growth partner for architecture, engineering, construction and permitting businesses.</p>
     <div className="agm-premium-footer-region"><MapPin size={17}/><span>U.S. Nationwide<br/><small>Remote-First · Florida-First Focus</small></span></div>
    </div>
    <div className="agm-premium-footer-links">{linkGroups.map(group=><div className="agm-premium-footer-group" key={group.name}><h3>{group.name}</h3><ul>{group.items.map(([label,href])=><li key={href}><Link href={href}>{label}</Link></li>)}</ul></div>)}</div>
   </div>
   <div className="agm-premium-footer-bottom"><span>© {new Date().getFullYear()} AEC Growth Media. All rights reserved.</span><div><Link href="/privacy-policy/">Privacy</Link><Link href="/terms/">Terms</Link><Link href="/accessibility/">Accessibility</Link><Link href="/contact/">Contact <ArrowUpRight size={13}/></Link></div></div>
  </div>
 </footer>
}
