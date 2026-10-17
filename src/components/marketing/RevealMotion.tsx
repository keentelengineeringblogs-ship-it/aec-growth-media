'use client'
import { useEffect } from 'react'
export default function RevealMotion(){
 useEffect(()=>{
  const els=[...document.querySelectorAll<HTMLElement>('[data-reveal], .agm-v2-heading, .agm-v3-service-card, .agm-v2-industry-card, .agm-v2-work-card, .agm-v2-process-step, .agm-v2-article, .agm-v2-faq-list details')]
  if(!('IntersectionObserver' in window)){els.forEach(el=>el.classList.add('is-visible'));return}
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -45px'})
  els.forEach((el,i)=>{el.classList.add('agm-reveal');el.style.setProperty('--reveal-delay',String((i%4)*55)+'ms');io.observe(el)})
  return()=>io.disconnect()
 },[])
 return null
}
