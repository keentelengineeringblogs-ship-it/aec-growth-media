'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, BarChart3, ChevronDown, MapPin, Menu, X } from 'lucide-react'

const nav = [
  {label:'Services',href:'/services/',submenu:[['SEO + AI Visibility','/services/ai-search-seo/'],['Website Design','/services/website-design/'],['AI Automation','/services/ai-automation/'],['Paid Media & Lead Generation','/services/lead-generation/']]},
  {label:'Industries',href:'/industries/',submenu:[['Engineering Firms','/industries/engineering-firms/'],['Construction Companies','/industries/construction-companies/'],['Architecture Firms','/industries/architecture-firms/'],['Permit & Drafting','/industries/permit-drafting-companies/']]},
  {label:'Locations',href:'/locations/florida/',submenu:[['Florida','/locations/florida/']]},
  {label:'Case Studies',href:'/projects/'},
  {label:'Resources',href:'/blog/',submenu:[['Insights & Articles','/blog/'],['Case Studies','/projects/']]},
  {label:'About',href:'/about/'},
]

export default function Header(){
 const [open,setOpen]=useState(false)
 const [scrolled,setScrolled]=useState(false)
 const [desktopMenu,setDesktopMenu]=useState<string|null>(null)
 const closeTimer=useRef<ReturnType<typeof setTimeout>|null>(null)
 useEffect(()=>{const s=()=>setScrolled(window.scrollY>12);const k=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};s();window.addEventListener('scroll',s,{passive:true});window.addEventListener('keydown',k);return()=>{window.removeEventListener('scroll',s);window.removeEventListener('keydown',k)}},[])
 useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow=''}},[open])
 const close=()=>{setOpen(false);setDesktopMenu(null)}
 const openDesktop=(label:string)=>{if(closeTimer.current)clearTimeout(closeTimer.current);setDesktopMenu(label)}
 const scheduleClose=()=>{if(closeTimer.current)clearTimeout(closeTimer.current);closeTimer.current=setTimeout(()=>setDesktopMenu(null),140)}
 return <header className={'agm-header agm-hf-header'+(scrolled?' is-scrolled':'')}>
   <div className="agm-hf-utility">
    <div className="agm-shell agm-hf-utility-inner">
     <span className="agm-hf-tagline"><BarChart3 size={15}/>AI Search &amp; Digital Growth for the Built World.</span>
     <span className="agm-hf-location"><MapPin size={15}/>U.S. Nationwide</span>
    </div>
   </div>
   <div className="agm-hf-nav">
    <div className="agm-shell agm-hf-nav-inner">
     <Link className="agm-brand agm-hf-brand" href="/" onClick={close} aria-label="AEC Growth Media home"><Image src="/brand/logo.svg" alt="AEC Growth Media" width={1000} height={205} priority/></Link>
     <nav className={'agm-nav agm-hf-menu'+(open?' is-open':'')} aria-label="Main navigation">
      {nav.map(item=><div className="agm-nav-entry agm-hf-nav-entry" key={item.label} onMouseEnter={()=>item.submenu&&openDesktop(item.label)} onMouseLeave={scheduleClose}>{item.submenu?<details open={desktopMenu===item.label || undefined} onToggle={(e)=>{if(window.innerWidth<=920)setDesktopMenu((e.currentTarget as HTMLDetailsElement).open?item.label:null)}}><summary onClick={(e)=>{if(window.innerWidth>920){e.preventDefault();openDesktop(item.label)}}}>{item.label}<ChevronDown size={13}/></summary><div className="agm-nav-popover" onMouseEnter={()=>openDesktop(item.label)} onMouseLeave={scheduleClose}>{item.submenu.map(x=><Link key={x[1]} href={x[1]} onClick={close}>{x[0]}</Link>)}</div></details>:<Link href={item.href} onClick={close}>{item.label}</Link>}</div>)}
      <Link className="agm-mobile-cta" href="/#audit" onClick={close}>Get an Audit <ArrowRight size={16}/></Link>
     </nav>
     <Link href="/#audit" className="agm-hf-cta">Get an Audit <ArrowRight size={17}/></Link>
     <button className="agm-menu-toggle agm-hf-toggle" type="button" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </div>
   </div>
  </header>
}
