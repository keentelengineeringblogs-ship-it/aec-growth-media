import Link from 'next/link';import Image from 'next/image';import {ArrowUpRight,Mail} from 'lucide-react';
const groups=[
 {title:'Services',links:[['Search visibility','/services/ai-search-seo/'],['Website design','/services/website-design/'],['AI automation','/services/ai-automation/'],['Lead generation','/services/lead-generation/']]},
 {title:'Industries',links:[['Engineering firms','/industries/engineering-firms/'],['Construction','/industries/construction-companies/'],['Architecture','/industries/architecture-firms/'],['Permits & drafting','/industries/permit-drafting-companies/']]},
 {title:'Explore',links:[['Our approach','/about/'],['Projects & proof','/projects/'],['Florida focus','/locations/florida/'],['Resources','/blog/']]}
];
export default function Footer(){return <footer className="agm-footer"><div className="agm-shell">
 <div className="agm-footer-top"><div className="agm-footer-brand"><Link href="/"><Image src="/brand/logo-on-dark.svg" alt="AEC Growth Media" width={1000} height={205}/></Link><p>AI search and digital growth for the firms that design, engineer, permit and build.</p><Link href="/contact/" className="agm-footer-contact"><Mail size={16}/> Contact our team <ArrowUpRight size={15}/></Link></div>
 {groups.map(g=><div className="agm-footer-col" key={g.title}><h3>{g.title}</h3>{g.links.map(x=><Link key={x[1]} href={x[1]}>{x[0]}</Link>)}</div>)}
 <div className="agm-footer-col"><h3>Start here</h3><p>Tell us about your site, market and growth priorities.</p><Link className="agm-btn agm-btn-primary" href="/#audit">Request an audit <ArrowUpRight size={16}/></Link></div></div>
 <div className="agm-footer-bottom"><span>© {new Date().getFullYear()} AEC Growth Media. All rights reserved.</span><div><Link href="/privacy-policy/">Privacy</Link><Link href="/terms/">Terms</Link><Link href="/accessibility/">Accessibility</Link></div><span>US-focused · Florida-first</span></div>
 </div></footer>}
