'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, SearchCheck, UsersRound, ShieldCheck } from 'lucide-react';
import { heroSlides } from '@/lib/marketing/site-data';
export default function HeroSlider(){
 const [index,setIndex]=useState(0);const active=heroSlides[index];
 const change=(step:number)=>setIndex(v=>(v+step+heroSlides.length)%heroSlides.length);
 useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(document.activeElement?.closest('.agm-hero')){if(e.key==='ArrowLeft')change(-1);if(e.key==='ArrowRight')change(1)}};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey)},[]);
 return <section className="agm-hero" aria-roledescription="carousel" aria-label="AEC Growth Media introduction"><div className="agm-hero-main">
  <div className="agm-hero-copy"><div className="agm-hero-copy-inner" key={'copy-'+index}>
   <span className="agm-eyebrow agm-eyebrow-light"><span className="agm-eyebrow-mark"/>{active.eyebrow}</span>
   {index===0?<h1>AI Search &amp; Digital Growth for <em>AEC Firms.</em><span className="agm-sr-only"> Architecture, Engineering and Construction Firms</span></h1>:<h1 className="agm-hero-althead">{active.title}</h1>}
   <p>{active.desc}</p>
   <div className="agm-hero-actions"><Link className="agm-btn agm-btn-primary" href="/#audit">Get an AEC Growth Audit <ArrowUpRight size={18}/></Link><Link className="agm-btn agm-btn-outline-white" href="/services/">Explore services <ArrowRight size={17}/></Link></div>
   <span className="agm-hero-disclaimer">Built around real AEC buyer journeys, not generic marketing playbooks.</span>
  </div></div>
  <div className="agm-hero-visual" key={'image-'+index}><Image src={active.image} alt={active.alt} fill sizes="(max-width:900px) 100vw, 58vw" priority={index===0} quality={82} className="agm-img-cover"/><div className="agm-hero-image-label"><span>BUILT FOR THE BUILT ENVIRONMENT</span><strong>Architecture<br/>Engineering<br/>Construction</strong></div></div>
  <div className="agm-slider-controls" aria-label="Hero slides"><button type="button" onClick={()=>change(-1)} aria-label="Previous slide"><ChevronLeft size={19}/></button><span className="agm-slider-count">0{index+1} <span>/ 0{heroSlides.length}</span></span><button type="button" onClick={()=>change(1)} aria-label="Next slide"><ChevronRight size={19}/></button></div>
 </div>
 <div className="agm-proofband"><div className="agm-shell agm-proofband-grid"><div><SearchCheck size={23}/><span>Search visibility<br/><small>Built around actual demand</small></span></div><div><UsersRound size={23}/><span>Relevant inquiries<br/><small>Qualified buyer journeys</small></span></div><div><ShieldCheck size={23}/><span>Technical credibility<br/><small>Evidence before claims</small></span></div><div className="agm-proofband-note">STRATEGY · DESIGN · DELIVERY</div></div></div>
 </section>
}
