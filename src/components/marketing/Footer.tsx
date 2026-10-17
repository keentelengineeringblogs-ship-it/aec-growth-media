import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

const groups = [
  {
    title: 'Services',
    links: [
      ['AI Search & SEO', '/services/ai-search-seo/'],
      ['Website Design', '/services/website-design/'],
      ['AI Automation', '/services/ai-automation/'],
      ['Lead Generation', '/services/lead-generation/'],
    ],
  },
  {
    title: 'Industries',
    links: [
      ['Engineering Firms', '/industries/engineering-firms/'],
      ['Construction Companies', '/industries/construction-companies/'],
      ['Architecture Firms', '/industries/architecture-firms/'],
      ['Permit & Drafting', '/industries/permit-drafting-companies/'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About', '/about/'],
      ['Our Work', '/projects/'],
      ['Florida Focus', '/locations/florida/'],
      ['Insights', '/blog/'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="agm-footer">
      <div className="agm-footer-accent" aria-hidden="true" />
      <div className="agm-shell">
        <div className="agm-footer-intro">
          <div>
            <span className="agm-footer-kicker">AEC DIGITAL GROWTH PARTNER</span>
            <h2>Build a digital presence as credible as the work you deliver.</h2>
          </div>
          <Link className="agm-footer-audit" href="/#audit">
            Request an AEC Growth Audit <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="agm-footer-top">
          <div className="agm-footer-brand">
            <Link href="/" aria-label="AEC Growth Media home">
              <Image src="/brand/logo-on-dark.svg" alt="AEC Growth Media" width={1000} height={205} />
            </Link>
            <p>
              AI search, websites and digital growth for architecture, engineering, construction,
              permit and drafting firms.
            </p>
            <div className="agm-footer-meta">
              <span><MapPin size={15} /> US-focused · Florida-first</span>
              <Link href="/contact/"><Mail size={15} /> Contact our team</Link>
            </div>
          </div>

          {groups.map((group) => (
            <div className="agm-footer-col" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <Link key={link[1]} href={link[1]}>
                  {link[0]}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="agm-footer-bottom">
          <span>© {new Date().getFullYear()} AEC Growth Media. All rights reserved.</span>
          <div>
            <Link href="/privacy-policy/">Privacy</Link>
            <Link href="/terms/">Terms</Link>
            <Link href="/accessibility/">Accessibility</Link>
          </div>
          <span>Built for the businesses shaping the built environment.</span>
        </div>
      </div>
    </footer>
  )
}
