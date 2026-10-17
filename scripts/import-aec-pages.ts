import 'dotenv/config'
import { getPayload } from 'payload'
import type { ContentBlock, Page } from '@/payload-types'
import { landingPages } from '@/lib/marketing/page-data'

// Prevent Payload's development-time schema push when this importer starts.
process.env.PAYLOAD_MIGRATING = 'true'
const { default: config } = await import('@payload-config')

type RichText = NonNullable<Page['hero']['richText']>
type RichTextNode = RichText['root']['children'][number]

const text = (value: string): RichTextNode => ({
  type: 'text',
  detail: 0,
  format: 0,
  mode: 'normal',
  style: '',
  text: value,
  version: 1,
})

const paragraph = (value: string): RichTextNode => ({
  type: 'paragraph',
  children: [text(value)],
  direction: 'ltr',
  format: '',
  indent: 0,
  version: 1,
})

const heading = (value: string, tag: 'h1' | 'h2' | 'h3' = 'h2'): RichTextNode => ({
  type: 'heading',
  children: [text(value)],
  direction: 'ltr',
  format: '',
  indent: 0,
  tag,
  version: 1,
})

const richText = (children: RichTextNode[]): RichText => ({
  root: {
    type: 'root',
    children,
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  },
})

const home = {
  title: 'AEC Growth Media',
  slug: 'home',
  description:
    'AI search, SEO, website design and digital growth for architecture, engineering, construction and permit firms.',
  sections: [],
  points: [],
  metaTitle: 'AEC Digital Marketing Agency | AEC Growth Media',
}

const candidates = [
  home,
  ...Object.entries(landingPages).map(([slug, page]) => ({
    title: page.title,
    slug,
    description: page.description,
    sections: page.sections,
    points: page.points,
    metaTitle: page.title,
  })),
]

const toData = (page: (typeof candidates)[number]) => {
  const content: RichTextNode[] = [paragraph(page.description)]
  for (const section of page.sections) {
    content.push(heading(section.title), paragraph(section.body))
  }
  if (page.points.length) {
    content.push(
      heading('Key focus areas', 'h3'),
      ...page.points.map((point) => paragraph(`• ${point}`)),
    )
  }

  const layout: ContentBlock[] = [
    {
      blockType: 'content',
      columns: [
        {
          size: 'full',
          richText: richText(content),
          enableLink: false,
        },
      ],
    },
  ]

  return {
    title: page.title,
    slug: page.slug,
    _status: 'draft' as const,
    hero: {
      type: 'lowImpact' as const,
      richText: richText([heading(page.title, 'h1'), paragraph(page.description)]),
    },
    layout,
    meta: {
      title: page.metaTitle,
      description: page.description.slice(0, 155),
    },
  }
}

const payload = await getPayload({ config })
const existing = await payload.find({
  collection: 'pages',
  limit: candidates.length + 100,
  pagination: false,
  overrideAccess: true,
  select: { slug: true },
})
const existingSlugs = new Set(existing.docs.map((doc) => doc.slug).filter(Boolean))

for (const page of candidates) {
  // Payload's default slugField normalizes nested paths by removing `/`.
  // Match both forms so a rerun cannot create a duplicate or throw a unique error.
  const normalizedSlug = page.slug.replaceAll('/', '')
  if (existingSlugs.has(page.slug) || existingSlugs.has(normalizedSlug)) {
    console.log(`SKIP ${page.slug} (already exists)`)
    continue
  }

  await payload.create({
    collection: 'pages',
    data: toData(page),
    draft: true,
    overrideAccess: true,
  })
  console.log(`CREATE ${page.slug} (draft)`)
}
