'use client';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect,useState} from 'react';
import {ArrowUpRight, Menu, X, ChevronDown} from 'lucide-react';
const nav=[
 {label:'Services',href:'/services/',submenu:[['SEO + AI Search','/services/ai-search-seo/'],['Website Design','/services/website-design/'],['AI Automation','/services/ai-automation/'],['Lead Generation','/services/lead-generation/']]},
 {label:'Industries',href:'/industries/',submenu:[['Engineering Firms','/industries/engineering-firms/'],['Construction Companies','/industries/construction-companies/'],['Architecture Firms','/industries/architecture-firms/'],['Permit & Drafting','/industries/permit-drafting-companies/']]},
 {label:'Locations',href:'/locations/florida/'},
 {label:'Our Work',href:'/projects/'},
 {label:'Insights',href:'/blog/'},
 {label:'About',href:'/about/'}
];
export default function Header(){
 const [open,setOpen]=useState(false);
 useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow=''}},[open]);
 return <header className="agm-header"><div className="agm-shell agm-header-inner">
  <Link className="agm-brand" href="/" aria-label="AEC Growth Media home" onClick={()=>setOpen(false)}><Image src="/brand/logo.svg" alt="AEC Growth Media" width={1000} height={205} priority/></Link>
  <nav className={'agm-nav '+(open?'is-open':'')} aria-label="Main navigation">
    <Link className="agm-mobile-home" href="/" onClick={()=>setOpen(false)}>Home</Link>
    {nav.map(n=><div key={n.label} className="agm-nav-entry">{n.submenu?<details><summary>{n.label}<ChevronDown size={14}/></summary><div className="agm-nav-popover"><Link className="agm-nav-all" href={n.href} onClick={()=>setOpen(false)}>View all {n.label.toLowerCase()} <ArrowUpRight size={15}/></Link>{n.submenu.map(s=><Link key={s[1]} href={s[1]} onClick={()=>setOpen(false)}>{s[0]}</Link>)}</div></details>:<Link href={n.href} onClick={()=>setOpen(false)}>{n.label}</Link>}</div>)}
    <Link className="agm-mobile-cta" href="/#audit" onClick={()=>setOpen(false)}>Get an AEC Growth Audit <ArrowUpRight size={16}/></Link>
  </nav>
  <Link href="/#audit" className="agm-btn agm-btn-primary agm-header-cta">Get an AEC Growth Audit <ArrowUpRight size={16}/></Link>
  <button type="button" className="agm-menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div></header>
}
