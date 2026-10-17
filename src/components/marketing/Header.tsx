'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, BarChart3, ChevronDown, MapPin, Menu, X } from 'lucide-react'

type NavItem = {label:string; href:string; submenu?:{label:string;href:string;description?:string}[]}
const navigation:NavItem[]=[
 {label:'Services',href:'/services/',submenu:[
  {label:'SEO + AI Visibility',href:'/services/ai-search-seo/',description:'Get discovered for relevant AEC expertise'},
  {label:'Website Design & Redesign',href:'/services/website-design/',description:'Build a clearer, more credible digital presence'},
  {label:'AI Automation',href:'/services/ai-automation/',description:'Improve intake, routing and team follow-up'},
  {label:'Paid Media & Lead Generation',href:'/services/lead-generation/',description:'Reach qualified buyers in priority markets'},
 ]},
 {label:'Industries',href:'/industries/',submenu:[
  {label:'Engineering Firms',href:'/industries/engineering-firms/'},
  {label:'Construction Companies',href:'/industries/construction-companies/'},
  {label:'Architecture Firms',href:'/industries/architecture-firms/'},
  {label:'Permit & Drafting',href:'/industries/permit-drafting-companies/'},
 ]},
 {label:'Locations',href:'/locations/florida/',submenu:[{label:'Florida',href:'/locations/florida/'}]},
 {label:'Case Studies',href:'/projects/'},
 {label:'Resources',href:'/blog/',submenu:[
  {label:'Blog / Insights',href:'/blog/'},
  {label:'Case Studies',href:'/projects/'},
 ]},
 {label:'About',href:'/about/'},
]

export default function Header(){
 const pathname=usePathname()
 const [menuOpen,setMenuOpen]=useState(false)
 const [activeMenu,setActiveMenu]=useState<string|null>(null)
 const [scrolled,setScrolled]=useState(false)
 const closeTimer=useRef<ReturnType<typeof setTimeout>|null>(null)
 const root=useRef<HTMLElement|null>(null)
 const firstLink=useRef<HTMLAnchorElement|null>(null)
 const isDesktop=()=>typeof window!=='undefined' && window.matchMedia('(min-width: 1025px)').matches
 const hasHover=()=>typeof window!=='undefined' && window.matchMedia('(hover: hover) and (min-width: 1025px)').matches
 const clearClose=()=>{if(closeTimer.current){clearTimeout(closeTimer.current);closeTimer.current=null}}
 const close=()=>{clearClose();setActiveMenu(null);setMenuOpen(false)}
 const show=(label:string)=>{clearClose();if(isDesktop())setActiveMenu(label)}
 const schedule=()=>{if(!hasHover())return;clearClose();closeTimer.current=setTimeout(()=>setActiveMenu(null),210)}
 const toggle=(label:string)=>{clearClose();setActiveMenu(current=>current===label?null:label)}

 useEffect(()=>{
  setMenuOpen(false);setActiveMenu(null);clearClose()
 },[pathname])
 useEffect(()=>{
  const onScroll=()=>setScrolled(window.scrollY>9)
  const onKey=(e:KeyboardEvent)=>{
   if(e.key==='Escape'){
    const previous=activeMenu
    close()
    if(previous)root.current?.querySelector<HTMLButtonElement>(`[data-menu-trigger="${previous}"]`)?.focus()
   }
  }
  const onOutside=(e:PointerEvent)=>{
   if(root.current && !root.current.contains(e.target as Node))close()
  }
  const onResize=()=>{if(isDesktop())setMenuOpen(false);setActiveMenu(null)}
  onScroll()
  window.addEventListener('scroll',onScroll,{passive:true})
  document.addEventListener('pointerdown',onOutside)
  window.addEventListener('keydown',onKey)
  window.addEventListener('resize',onResize)
  return()=>{window.removeEventListener('scroll',onScroll);document.removeEventListener('pointerdown',onOutside);window.removeEventListener('keydown',onKey);window.removeEventListener('resize',onResize);clearClose()}
 },[activeMenu])
 useEffect(()=>{
  if(!menuOpen)return
  const before=document.body.style.overflow
  document.body.style.overflow='hidden'
  return()=>{document.body.style.overflow=before}
 },[menuOpen])

 const current=(href:string)=>pathname===href||pathname===href.replace(/\/$/,'')||href!=='/'&&pathname.startsWith(href)
 return <header ref={root} className={'agm-header agm-hf-header agm-premium-header'+(scrolled?' is-scrolled':'')}>
  <div className="agm-premium-utility">
   <div className="agm-shell agm-premium-utility-inner">
    <span><BarChart3 size={13}/>AI Search &amp; Digital Growth for the Built World</span>
    <span><MapPin size={13}/>U.S. Nationwide <b aria-hidden="true">·</b> Florida-First Focus</span>
   </div>
  </div>
  <div className="agm-premium-bar">
   <div className="agm-shell agm-premium-bar-inner">
    <Link href="/" className="agm-premium-logo" aria-label="AEC Growth Media, homepage" onClick={close}><Image src="/brand/logo.svg" width={1000} height={205} alt="AEC Growth Media" priority/></Link>
    <nav id="agm-primary-nav" className={'agm-premium-nav'+(menuOpen?' is-open':'')} aria-label="Primary navigation">
     <div className="agm-premium-links">
      {navigation.map(item=>{
       const expandable=Boolean(item.submenu?.length)
       const expanded=activeMenu===item.label
       const selected=current(item.href)||Boolean(item.submenu?.some(x=>current(x.href)))
       return <div key={item.label} className={'agm-premium-entry'+(expanded?' is-expanded':'')+(selected?' is-current':'')}
         onPointerEnter={()=>{if(expandable&&hasHover())show(item.label)}}
         onPointerLeave={schedule}
         onFocusCapture={()=>{if(expandable&&isDesktop())show(item.label)}}
         onBlurCapture={e=>{
          const next=e.relatedTarget as Node|null
          if(isDesktop()&&(!next||!e.currentTarget.contains(next)))setActiveMenu(current=>current===item.label?null:current)
         }}
        >
        {expandable
         ? <button type="button" className="agm-premium-trigger" data-menu-trigger={item.label} aria-haspopup="true" aria-expanded={expanded} aria-controls={'agm-menu-'+item.label.toLowerCase().replace(/\s+/g,'-')} onClick={()=>toggle(item.label)} onKeyDown={e=>{if(e.key==='ArrowDown'){e.preventDefault();show(item.label);requestAnimationFrame(()=>firstLink.current?.focus())}}}>
           <span>{item.label}</span><ChevronDown size={15} aria-hidden="true"/>
          </button>
         : <Link href={item.href} className="agm-premium-direct" aria-current={selected?'page':undefined} onClick={close}>{item.label}</Link>
        }
        {expandable&&<div className={'agm-premium-dropdown'+(expanded?' is-open':'')} id={'agm-menu-'+item.label.toLowerCase().replace(/\s+/g,'-')} role="group" aria-label={item.label+' navigation'} hidden={!expanded}>
          <div className="agm-premium-dropdown-list">
           {item.submenu?.map((entry,i)=><Link ref={expanded&&i===0?firstLink:undefined} key={entry.href} href={entry.href} onClick={close} aria-current={current(entry.href)?'page':undefined}><strong>{entry.label}</strong>{entry.description&&<small>{entry.description}</small>}<ArrowUpRight size={15}/></Link>)}
          </div>
          {item.label!=='Locations'&&<Link href={item.href} className="agm-premium-dropdown-all" onClick={close}>View All {item.label==='Resources'?'Resources':item.label} <ArrowRight size={16}/></Link>}
         </div>}
       </div>
      })}
     </div>
     <Link href="/contact/#inquire" onClick={close} className="agm-premium-mobile-cta">Request an AEC Growth Audit <ArrowRight size={18}/></Link>
    </nav>
    <Link href="/contact/#inquire" className="agm-premium-cta">Get an Audit <ArrowRight size={17}/></Link>
    <button type="button" className="agm-premium-toggle" aria-label={menuOpen?'Close navigation':'Open navigation'} aria-controls="agm-primary-nav" aria-expanded={menuOpen} onClick={()=>{clearClose();setMenuOpen(x=>!x);setActiveMenu(null)}}>{menuOpen?<X size={23}/>:<Menu size={23}/>}</button>
   </div>
  </div>
 </header>
}
