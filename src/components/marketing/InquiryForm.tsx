'use client';
import {FormEvent,useState} from 'react';
import {ArrowRight,CheckCircle2,AlertCircle,LoaderCircle} from 'lucide-react';
const sectors=['Engineering firm','Construction company','Architecture firm','Permit or drafting firm','Other AEC business'];
export default function InquiryForm({compact=false}:{compact?:boolean}){
 const [state,setState]=useState<'idle'|'pending'|'success'|'error'>('idle'); const [error,setError]=useState('');
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault(); const form=e.currentTarget;if(!form.reportValidity())return;setState('pending');setError('');const fd=new FormData(form);const body=Object.fromEntries(fd.entries());
 try{const r=await fetch('/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});const data=await r.json();if(!r.ok)throw new Error(data.error||'Unable to send right now.');setState('success');form.reset()}catch(ex){setState('error');setError(ex instanceof Error?ex.message:'Unable to send your request.')}}
 return <form className={'agm-form '+(compact?'agm-form-compact':'')} onSubmit={submit} noValidate={false} aria-label="AEC Growth Audit request form">
  <div className="agm-form-heading"><span className="agm-eyebrow">START WITH CLARITY</span><h3>Request your AEC Growth Audit</h3><p>Tell us a little about your company and what you want to improve.</p></div>
  <div className="agm-form-grid"><label>Full name <span>*</span><input type="text" name="fullName" placeholder="Your name" required minLength={2} autoComplete="name" maxLength={100}/></label>
  <label>Work email <span>*</span><input type="email" name="email" placeholder="you@company.com" required autoComplete="email" maxLength={180}/></label>
  <label>Company <span>*</span><input type="text" name="company" placeholder="Company name" required maxLength={120} autoComplete="organization"/></label>
  <label>Website URL <span>*</span><input type="url" name="website" placeholder="https://yourcompany.com" required maxLength={300} inputMode="url"/></label>
  <label>Industry <span>*</span><select name="industry" required defaultValue=""><option value="" disabled>Select your industry</option>{sectors.map(s=><option key={s}>{s}</option>)}</select></label>
  <label>Primary goal <span>*</span><select name="goal" required defaultValue=""><option value="" disabled>What would you improve?</option><option>Search visibility and SEO</option><option>Website design or redesign</option><option>Lead generation and ads</option><option>AI automation and follow-up</option><option>Not sure yet</option></select></label></div>
  <label className="agm-form-message">Tell us about your challenge (optional)<textarea name="message" placeholder="For example: We want to improve visibility for our engineering services in Florida." maxLength={2000} rows={3}/></label>
  <div className="agm-form-honeypot" aria-hidden="true"><label>Leave this blank<input name="website_confirm" tabIndex={-1} autoComplete="off"/></label></div>
  <label className="agm-consent"><input type="checkbox" name="consent" required value="yes"/><span>I agree to be contacted about this inquiry and have reviewed the <a href="/privacy-policy/">privacy notice</a>. <strong>*</strong></span></label>
  <button className="agm-btn agm-btn-primary agm-submit" type="submit" disabled={state==='pending'}>{state==='pending'?<><LoaderCircle size={17} className="agm-spin"/> Sending...</>:<>Request my audit <ArrowRight size={18}/></>}</button>
  <p className="agm-form-note">No guaranteed rankings or instant automated report. Your request will be reviewed by a person.</p>
  {state==='success'&&<p className="agm-form-success" role="status"><CheckCircle2 size={18}/> Your request was received. We’ll review it and follow up if there’s a fit.</p>}
  {state==='error'&&<p className="agm-form-error" role="alert"><AlertCircle size={18}/>{error}</p>}
 </form>
}
