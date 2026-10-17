'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'

const nav = [
  {
    label: 'Services',
    href: '/services/',
    submenu: [
      ['SEO + AI Search', '/services/ai-search-seo/'],
      ['Website Design', '/services/website-design/'],
      ['AI Automation', '/services/ai-automation/'],
      ['Lead Generation', '/services/lead-generation/'],
    ],
  },
  {
    label: 'Industries',
    href: '/industries/',
    submenu: [
      ['Engineering Firms', '/industries/engineering-firms/'],
      ['Construction Companies', '/industries/construction-companies/'],
      ['Architecture Firms', '/industries/architecture-firms/'],
      ['Permit & Drafting', '/industries/permit-drafting-companies/'],
    ],
  },
  { label: 'Locations', href: '/locations/florida/' },
  { label: 'Our Work', href: '/projects/' },
  { label: 'Insights', href: '/blog/' },
  { label: 'About', href: '/about/' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 780) setOpen(false)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header ref={headerRef} className={'agm-header' + (scrolled ? ' is-scrolled' : '')}>
      <div className="agm-header-accent" aria-hidden="true" />
      <div className="agm-shell agm-header-inner">
        <Link className="agm-brand" href="/" aria-label="AEC Growth Media home" onClick={close}>
          <Image src="/brand/logo.svg" alt="AEC Growth Media" width={1000} height={205} priority />
        </Link>

        <nav className={'agm-nav ' + (open ? 'is-open' : '')} aria-label="Main navigation">
          <Link className="agm-mobile-home" href="/" onClick={close}>
            Home
          </Link>
          {nav.map((item) => (
            <div key={item.label} className="agm-nav-entry">
              {item.submenu ? (
                <details>
                  <summary>
                    {item.label}
                    <ChevronDown size={14} />
                  </summary>
                  <div className="agm-nav-popover">
                    <Link className="agm-nav-all" href={item.href} onClick={close}>
                      View all {item.label.toLowerCase()} <ArrowUpRight size={15} />
                    </Link>
                    {item.submenu.map((sub) => (
                      <Link key={sub[1]} href={sub[1]} onClick={close}>
                        {sub[0]}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link href={item.href} onClick={close}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link className="agm-mobile-cta" href="/#audit" onClick={close}>
            Get an AEC Growth Audit <ArrowUpRight size={16} />
          </Link>
        </nav>

        <Link href="/#audit" className="agm-btn agm-btn-primary agm-header-cta">
          Get an AEC Growth Audit <ArrowUpRight size={16} />
        </Link>
        <button
          type="button"
          className="agm-menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
