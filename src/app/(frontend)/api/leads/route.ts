import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const runtime = 'nodejs'

const fields = ['fullName','email','company','website','state','industry','goal','budget','challenge','message','sourcePage'] as const
const maximum: Record<string,number> = {
 fullName:100,email:180,company:120,website:300,state:80,industry:100,goal:100,
 budget:80,challenge:1200,message:2000,sourcePage:100,
}
const required = ['fullName','email','company','website','state','industry','goal','challenge'] as const

export async function POST(request: NextRequest) {
 try {
  if (!request.headers.get('content-type')?.includes('application/json')) {
   return NextResponse.json({error:'Expected a JSON form submission.'},{status:415})
  }
  const raw = await request.text()
  if (raw.length > 11000) return NextResponse.json({error:'Submission is too long.'},{status:413})
  const body: Record<string,unknown> = JSON.parse(raw)
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
   return NextResponse.json({error:'Invalid form submission.'},{status:400})
  }
  // Honeypot: do not forward automated submissions to the CMS.
  if (typeof body.website_confirm === 'string' && body.website_confirm.trim()) {
   return NextResponse.json({ok:true},{status:200})
  }
  const cleaned:Record<string,string>={}
  for (const field of fields) {
   const val=body[field]
   if(val!==undefined && typeof val!=='string')return NextResponse.json({error:'Invalid field format.'},{status:400})
   const text=(val||'').toString().trim()
   if(text.length>(maximum[field]||200))return NextResponse.json({error:'A field exceeds the allowed length.'},{status:400})
   cleaned[field]=text
  }
  if(required.some(field=>!cleaned[field]))return NextResponse.json({error:'Please complete all required fields.'},{status:400})
  if(body.consent!=='yes')return NextResponse.json({error:'Consent is required.'},{status:400})
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned.email))return NextResponse.json({error:'Please enter a valid email address.'},{status:400})
  try {const url=new URL(cleaned.website);if(!['http:','https:'].includes(url.protocol))throw Error()}catch{return NextResponse.json({error:'Please enter a valid website URL.'},{status:400})}

  const payload=await getPayload({config:configPromise})
  const forms=await payload.find({
   collection:'forms',
   where:{title:{equals:'AEC Growth Audit'}},
   depth:0,limit:1,overrideAccess:true,
  })
  const auditForm=forms.docs[0]
  if(!auditForm){
   return NextResponse.json({error:'The audit form is temporarily unavailable. Please try again later.'},{status:503})
  }
  await payload.create({
   collection:'form-submissions',
   overrideAccess:true,
   data:{
    form:auditForm.id,
    submissionData:fields.filter(field=>cleaned[field]).map(field=>({field,value:cleaned[field]})),
   },
  })
  return NextResponse.json({ok:true},{status:201})
 } catch {
  return NextResponse.json({error:'Unable to submit this request right now. Please try again later.'},{status:500})
 }
}
