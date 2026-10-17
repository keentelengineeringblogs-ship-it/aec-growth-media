import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import Home from '@/components/marketing/Home'
import PageTemplate from './[slug]/page'

export const metadata: Metadata = {
  title: 'AEC Digital Marketing Agency | AEC Growth Media',
  description: 'AI search, SEO, website design and digital growth for architecture, engineering, construction and permit firms.',
  alternates: { canonical: '/' },
}

export default async function HomePage() {
  const { isEnabled } = await draftMode()
  if (isEnabled) return <PageTemplate params={Promise.resolve({ slug: 'home' })} />
  return <Home />
}
