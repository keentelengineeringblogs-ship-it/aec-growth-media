import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import RichText from '@/components/RichText'
import { ArrowUpRight } from 'lucide-react'

type Args={params:Promise<{slug:string}>}
async function getArticle(slug:string){
 const {isEnabled:draft}=await draftMode()
 const payload=await getPayload({config:configPromise})
 const response=await payload.find({collection:'posts',where:{slug:{equals:slug}},limit:1,depth:2,draft,overrideAccess:draft})
 return response.docs[0]||null
}
export async function generateMetadata({params}:Args):Promise<Metadata>{
 const {slug}=await params
 const post=await getArticle(slug)
 if(!post)return {title:'Article Not Found',robots:{index:false}}
 const description=post.meta?.description||'AEC marketing insights and resources.'
 return {title:post.meta?.title||post.title,description,alternates:{canonical:'/blog/'+slug+'/'},openGraph:{title:post.meta?.title||post.title,description,type:'article',images:typeof post.heroImage==='object'&&post.heroImage?.url?[{url:post.heroImage.url}]:[]}}
}
export default async function Article({params}:Args){
 const {slug}=await params
 const post=await getArticle(slug)
 if(!post)notFound()
 const categories=(post.categories||[]).filter((x):x is Exclude<typeof x,number>=>typeof x==='object')
 const hero=typeof post.heroImage==='object'?post.heroImage:null
 const published=post.publishedAt||post.createdAt
 const canonical='https://aecgrowthmedia.com/blog/'+slug+'/'
 const schema={'@context':'https://schema.org','@type':'BlogPosting',headline:post.title,datePublished:published,dateModified:post.updatedAt,mainEntityOfPage:canonical,description:post.meta?.description||undefined,image:hero?.url?hero.url:undefined}
 return <main id="main" className="agm-editorial agm-article"><article><header className="agm-article-head"><div className="agm-shell"><nav aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/blog/">Insights</Link> / {post.title}</nav><div className="agm-article-cats">{categories.map(c=><span key={c.id}>{c.title}</span>)}</div><h1>{post.title}</h1>{post.meta?.description&&<p>{post.meta.description}</p>}<time dateTime={published}>{new Date(published).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'})}</time></div></header>
 {hero?.url&&<div className="agm-shell agm-article-cover"><Image src={hero.url} alt={hero.alt||post.title} fill priority sizes="(max-width:900px) 100vw,1232px" style={{objectFit:'cover'}}/></div>}
 <div className="agm-shell agm-article-layout"><div className="agm-article-reading"><RichText data={post.content} enableGutter={false} enableProse/></div><aside className="agm-article-aside"><div><h2>Explore Services</h2><Link href="/services/ai-search-seo/">SEO + AI Visibility <ArrowUpRight size={15}/></Link><Link href="/services/website-design/">Website Design <ArrowUpRight size={15}/></Link><Link href="/services/ai-automation/">AI Automation <ArrowUpRight size={15}/></Link><Link href="/services/lead-generation/">Paid Media <ArrowUpRight size={15}/></Link><Link href="/#audit" className="agm-btn agm-btn-primary">Request an Audit</Link></div></aside></div>
 <footer className="agm-shell agm-article-footer"><h2>Continue Exploring AEC Growth</h2><Link href="/blog/" className="agm-text-link">All insights <ArrowUpRight size={17}/></Link></footer></article>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/></main>
}
