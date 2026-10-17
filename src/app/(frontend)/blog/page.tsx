import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ArrowUpRight, Search } from 'lucide-react'

export const metadata:Metadata={title:'AEC Marketing Insights & Resources | AEC Growth Media',description:'Practical perspectives on SEO, AI search, website development and digital growth for architecture, engineering and construction firms.',alternates:{canonical:'/blog/'}}
type Args={searchParams:Promise<{category?:string;q?:string;page?:string}>}
export default async function Blog({searchParams}:Args){
 const {category='',q='',page='1'}=await searchParams
 const payload=await getPayload({config:configPromise})
 const categories=await payload.find({collection:'categories',limit:100,depth:0,overrideAccess:false})
 const currentCategory=categories.docs.find(c=>c.slug===category)
 const filters:any[]=[{_status:{equals:'published'}}]
 if(currentCategory)filters.push({categories:{in:[currentCategory.id]}})
 if(q.trim())filters.push({or:[{title:{like:q.trim()}},{'meta.description':{like:q.trim()}}]})
 const posts=await payload.find({collection:'posts',where:{and:filters},sort:'-publishedAt',page:Math.max(1,Number(page)||1),limit:9,depth:1,overrideAccess:false})
 const base=(nextPage:number,c=category,query=q)=>'/blog/?'+new URLSearchParams({...(c?{category:c}:{}),...(query?{q:query}:{}),page:String(nextPage)}).toString()
 const feature=posts.page===1&&!q&&!category?posts.docs[0]:null
 const listing=feature?posts.docs.slice(1):posts.docs
 const imageOf=(post:typeof posts.docs[number])=> typeof post.heroImage==='object'&&post.heroImage?.url?post.heroImage.url:null
 const desc=(post:typeof posts.docs[number])=>post.meta?.description||'Read practical AEC marketing insights and implementation guidance.'
 return <main id="main" className="agm-editorial"><section className="agm-editorial-hero"><div className="agm-shell"><nav aria-label="Breadcrumb"><Link href="/">Home</Link> / Insights</nav><span className="agm-eyebrow">INSIGHTS &amp; RESOURCES</span><h1>Insights for the Companies Building What&apos;s Next.</h1><p>Practical perspectives on SEO, AI search, digital marketing, website development, and business growth for architecture, engineering, construction, and permitting companies.</p></div></section>
 {feature&&<section className="agm-shell agm-blog-feature"><div className="agm-blog-feature-img">{imageOf(feature)&&<Image src={imageOf(feature)!} alt={typeof feature.heroImage==='object'?feature.heroImage?.alt||'AEC industry article': 'AEC industry article'} fill sizes="(max-width:850px) 100vw,55vw" style={{objectFit:'cover'}}/>}</div><div><span className="agm-eyebrow">FEATURED INSIGHT</span><time dateTime={feature.publishedAt||feature.createdAt}>{new Date(feature.publishedAt||feature.createdAt).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'})}</time><h2>{feature.title}</h2><p>{desc(feature)}</p><Link className="agm-text-link" href={'/blog/'+feature.slug+'/'}>Read Article <ArrowUpRight size={18}/></Link></div></section>}
 <section className="agm-shell agm-blog-main"><div className="agm-blog-head"><h2>Explore All Insights</h2><form action="/blog/" method="get" role="search"><label className="agm-sr-only" htmlFor="agm-blog-query">Search articles</label><input id="agm-blog-query" name="q" defaultValue={q} placeholder="Search articles"/>{category&&<input type="hidden" name="category" value={category}/>}<button type="submit" aria-label="Search"><Search size={19}/></button></form></div>
 <nav className="agm-blog-categories" aria-label="Article categories"><Link className={!category?'active':''} href="/blog/">All Articles</Link>{categories.docs.map(c=><Link key={c.id} className={category===c.slug?'active':''} href={base(1,c.slug||'',q)}>{c.title}</Link>)}</nav>
 {posts.docs.length===0?<div className="agm-blog-empty"><h3>No articles found</h3><p>Try another search or explore all published insights.</p><Link href="/blog/" className="agm-text-link">View all articles <ArrowUpRight size={16}/></Link></div>:<div className="agm-blog-grid">{listing.map(post=><article key={post.id} className="agm-blog-card"><Link href={'/blog/'+post.slug+'/'} className="agm-blog-card-image">{imageOf(post)&&<Image src={imageOf(post)!} alt={typeof post.heroImage==='object'?post.heroImage?.alt||'AEC editorial photo':'AEC editorial photo'} fill sizes="(max-width:650px) 100vw,(max-width:1024px) 50vw,33vw" style={{objectFit:'cover'}}/>}</Link><div className="agm-blog-card-body"><time dateTime={post.publishedAt||post.createdAt}>{new Date(post.publishedAt||post.createdAt).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}</time><h3><Link href={'/blog/'+post.slug+'/'}>{post.title}</Link></h3><p>{desc(post)}</p><Link href={'/blog/'+post.slug+'/'} className="agm-text-link">Read Article <ArrowUpRight size={17}/></Link></div></article>)}</div>}
 {posts.totalPages>1&&<nav className="agm-blog-pages" aria-label="Pagination">{posts.hasPrevPage&&<Link href={base(posts.page!-1)}>Previous</Link>}<span>Page {posts.page} of {posts.totalPages}</span>{posts.hasNextPage&&<Link href={base(posts.page!+1)}>Next</Link>}</nav>}</section>
 <section className="agm-editorial-cta"><div className="agm-shell"><h2>Turn Better Insights Into Better Growth Decisions.</h2><p>Explore opportunities to improve your search visibility, website experience, and lead generation strategy.</p><Link href="/#audit" className="agm-btn agm-btn-primary">Request an AEC Growth Audit <ArrowUpRight size={17}/></Link></div></section></main>
}
