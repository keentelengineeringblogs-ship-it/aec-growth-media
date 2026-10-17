import type { Metadata } from 'next'
import AboutPage from '@/components/marketing/AboutPage'

export const metadata: Metadata = {
  title: 'About AEC Growth Media | Digital Growth for the Built World',
  description: 'Learn how AEC Growth Media brings AI search, websites, targeted media and practical digital growth strategy to architecture, engineering, construction and permitting companies.',
  alternates: { canonical: '/about/' },
}

export default function About() {
  return <AboutPage />
}
