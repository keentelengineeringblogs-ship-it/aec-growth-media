import Page, { generateMetadata as pageMetadata } from '../page'

type Args = { params: Promise<{ slug: string; segments: string[] }> }

export default async function NestedPage({ params }: Args) {
  const { slug, segments } = await params
  return Page({ params: Promise.resolve({ slug: [slug, ...segments].join('/') }) })
}

export async function generateMetadata({ params }: Args) {
  const { slug, segments } = await params
  return pageMetadata({ params: Promise.resolve({ slug: [slug, ...segments].join('/') }) })
}
