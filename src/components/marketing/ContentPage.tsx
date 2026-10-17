import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from '@/components/marketing/Image'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import InquiryForm from '@/components/marketing/InquiryForm'
import { landingPages } from '@/lib/marketing/page-data'
import { services, industries, articles } from '@/lib/marketing/site-data'
type Params = { params: Promise<{ slug: string[] }> }
export function generateStaticParams() {
  return Object.keys(landingPages).map((s) => ({ slug: s.split('/') }))
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const key = slug.join('/')
  const p = landingPages[key]
  if (!p) return { title: 'Page not found', robots: { index: false, follow: false } }
  const desc = p.description.slice(0, 155)
  return {
    title: p.title,
    description: desc,
    alternates: { canonical: `/${key}/` },
    openGraph: { title: p.title, description: desc },
  }
}
export default async function ContentPage({ params }: Params) {
  const { slug } = await params
  const key = slug.join('/')
  const p = landingPages[key]
  if (!p) notFound()
  const showForm = ['contact', 'book-consultation'].includes(key)
  const showServiceList = key === 'services'
  const showIndustryList = key === 'industries'
  const showBlog = key === 'blog'
  const isLegal = ['privacy-policy', 'terms', 'accessibility'].includes(key)
  return (
    <main id="main" className="agm-site">
      <div className="agm-subpage-hero">
        <div className="agm-shell agm-subpage-grid">
          <div className="agm-subpage-head">
            <span className="agm-eyebrow">{p.eyebrow}</span>
            <nav aria-label="Breadcrumb" className="agm-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>{slug.map((s) => s.replaceAll('-', ' ')).join(' / ')}</span>
            </nav>
            <h1>{p.title}</h1>
            <p>{p.description}</p>
            <Link href={showForm ? '#inquire' : '/#audit'} className="agm-btn agm-btn-primary">
              {p.cta} <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="agm-subpage-photo">
            <Image
              src={p.image}
              alt={`AEC-focused photography illustrating ${p.eyebrow.toLowerCase()}`}
              fill
              sizes="(max-width:880px) 100vw, 46vw"
              className="agm-img-cover"
              priority
            />
          </div>
        </div>
      </div>
      <section className="agm-section agm-subpage-content">
        <div className="agm-shell agm-subpage-content-grid">
          <div>
            <span className="agm-eyebrow">INSIDE THE APPROACH</span>
            {p.sections.map((s) => (
              <div className="agm-subpage-block" key={s.title}>
                <h2>{s.title}</h2>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <aside className="agm-subpage-aside">
            <h2>{p.listTitle}</h2>
            <ul>
              {p.points.map((s) => (
                <li key={s}>
                  <CheckCircle2 size={17} />
                  {s}
                </li>
              ))}
            </ul>
            <Link href="/#audit" className="agm-text-link">
              Start with an audit <ArrowUpRight size={16} />
            </Link>
          </aside>
        </div>
      </section>
      {showServiceList && (
        <section className="agm-section agm-linked-section">
          <div className="agm-shell">
            <div className="agm-section-heading">
              <span className="agm-eyebrow">SERVICE PILLARS</span>
              <h2>Choose the right starting point.</h2>
            </div>
            <div className="agm-related-grid">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="agm-related-card">
                  <s.icon size={27} />
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <span>
                    View this service <ArrowUpRight size={15} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {showIndustryList && (
        <section className="agm-section agm-linked-section">
          <div className="agm-shell">
            <div className="agm-section-heading">
              <span className="agm-eyebrow">SECTOR EXPERIENCE</span>
              <h2>Built around your buyer.</h2>
            </div>
            <div className="agm-related-grid">
              {industries.map((i) => (
                <Link key={i.href} href={i.href} className="agm-related-card">
                  <i.icon size={27} />
                  <h3>{i.title}</h3>
                  <p>{i.buyer}</p>
                  <span>
                    View this industry <ArrowUpRight size={15} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {showBlog && (
        <section className="agm-section agm-linked-section">
          <div className="agm-shell">
            <div className="agm-section-heading">
              <span className="agm-eyebrow">EDITORIAL ROADMAP</span>
              <h2>Upcoming research topics</h2>
              <p>
                These are planned topics, not already-published articles. Verify original evidence
                before publishing.
              </p>
            </div>
            <div className="agm-related-grid agm-related-grid-three">
              {articles.map((a) => (
                <article key={a.title} className="agm-related-card">
                  <span className="agm-eyebrow">{a.kicker}</span>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <span>Planned · research phase</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {showForm && (
        <section className="agm-section agm-audit-section agm-subpage-form" id="inquire">
          <div className="agm-shell agm-audit-grid">
            <div className="agm-audit-copy">
              <span className="agm-eyebrow agm-eyebrow-light">START THE CONVERSATION</span>
              <h2>A clearer plan begins here.</h2>
              <p>
                Complete the inquiry form to share your business and priorities. We’ll review your
                inquiry and follow up about the next steps.
              </p>
            </div>
            <div className="agm-audit-form-wrap">
              <InquiryForm />
            </div>
          </div>
        </section>
      )}
      {!showForm && !isLegal && (
        <section className="agm-end-cta">
          <div className="agm-shell agm-end-inner">
            <div>
              <span>MAKE THE NEXT STEP COUNT</span>
              <h2>Ready to clarify your digital growth priorities?</h2>
            </div>
            <Link href="/#audit" className="agm-btn agm-btn-primary">
              Request an audit <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      )}
    </main>
  )
}
