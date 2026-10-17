'use client'
import {FormEvent,useState} from 'react'
import {ArrowRight,CheckCircle2,AlertCircle,LoaderCircle} from 'lucide-react'

const sectors=['Engineering firm','Construction company','Architecture firm','Permit or drafting firm','Other AEC business']
const services=['SEO + AI Visibility','Website Design & Redesign','AI Automation','Paid Media & Social','Not sure yet']

export default function InquiryForm({compact=false}:{compact?:boolean}){
 const [state,setState]=useState<'idle'|'pending'|'success'|'error'>('idle')
 const [error,setError]=useState('')
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return
  setState('pending');setError('');const fd=new FormData(form);const body=Object.fromEntries(fd.entries())
  try{const r=await fetch('/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});const data=await r.json();if(!r.ok)throw new Error(data.error||'Unable to send right now.');setState('success');form.reset()}
  catch(ex){setState('error');setError(ex instanceof Error?ex.message:'Unable to send your request.')}
 }
 return <form className={'agm-form '+(compact?'agm-form-compact':'')} onSubmit={submit} aria-label="AEC Growth Audit request form">
  <div className="agm-form-heading"><span className="agm-eyebrow">START WITH CLARITY</span><h3>Request your AEC Growth Audit</h3><p>Tell us about your business, market and the growth challenge you want to solve.</p></div>
  <div className="agm-form-grid">
   <label>Full Name <span>*</span><input name="fullName" required minLength={2} maxLength={100} autoComplete="name" placeholder="Your name"/></label>
   <label>Work Email <span>*</span><input type="email" name="email" required maxLength={180} autoComplete="email" placeholder="you@company.com"/></label>
   <label>Company Name <span>*</span><input name="company" required maxLength={120} autoComplete="organization" placeholder="Company name"/></label>
   <label>Website URL <span>*</span><input type="url" name="website" required maxLength={300} placeholder="https://yourcompany.com"/></label>
   <label>State <span>*</span><input name="state" required maxLength={80} placeholder="e.g. Florida"/></label>
   <label>Business Sector <span>*</span><select name="industry" required defaultValue=""><option value="" disabled>Select sector</option>{sectors.map(s=><option key={s}>{s}</option>)}</select></label>
   <label>Interested Service <span>*</span><select name="goal" required defaultValue=""><option value="" disabled>Select service</option>{services.map(s=><option key={s}>{s}</option>)}</select></label>
   <label>Optional Budget <select name="budget" defaultValue=""><option value="">Prefer not to say</option><option>Under $5,000</option><option>$5,000–$10,000</option><option>$10,000–$25,000</option><option>$25,000+</option></select></label>
  </div>
  <label className="agm-form-message">Main Challenge <span>*</span><textarea name="challenge" required rows={3} maxLength={1200} placeholder="What is the main growth challenge you want to solve?"/></label>
  <label className="agm-form-message">Project Description<textarea name="message" rows={4} maxLength={2000} placeholder="Share useful context about your goals, market, timeline or current website."/></label>
  <div className="agm-form-honeypot" aria-hidden="true"><label>Leave this blank<input name="website_confirm" tabIndex={-1} autoComplete="off"/></label></div>
  <label className="agm-consent"><input type="checkbox" name="consent" required value="yes"/><span>I agree to be contacted about this inquiry and have reviewed the <a href="/privacy-policy/">privacy notice</a>. <strong>*</strong></span></label>
  <button className="agm-btn agm-btn-primary agm-submit" type="submit" disabled={state==='pending'}>{state==='pending'?<><LoaderCircle size={17} className="agm-spin"/> Sending...</>:<>Request my audit <ArrowRight size={18}/></>}</button>
  <p className="agm-form-note">Your request is reviewed by a person. We do not promise rankings or instant automated results.</p>
  {state==='success'&&<p className="agm-form-success" role="status"><CheckCircle2 size={18}/> Your request was received. We’ll review it and follow up if there’s a fit.</p>}
  {state==='error'&&<p className="agm-form-error" role="alert"><AlertCircle size={18}/>{error}</p>}
 </form>
}