import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demo Page | AEC Growth Media',
  description: 'A local demo page for AEC Growth Media.',
}

const services = [
  {
    number: '01',
    title: 'Brand strategy',
    description: 'Build a clear, confident story that makes the right people pay attention.',
  },
  {
    number: '02',
    title: 'Content creation',
    description: 'Turn your expertise into useful, memorable content made for real people.',
  },
  {
    number: '03',
    title: 'Growth campaigns',
    description: 'Connect creative ideas to practical campaigns and measurable outcomes.',
  },
]

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ed] text-[#17251f]">
      <header className="container flex items-center justify-between py-7">
        <a aria-label="AEC Growth Media home" className="text-lg font-bold tracking-tight" href="#home">
          AEC <span className="text-[#bd593d]">/</span> GROWTH MEDIA
        </a>
        <a className="rounded-full border border-[#17251f]/20 px-5 py-2 text-sm font-medium hover:bg-[#17251f] hover:text-white" href="#contact">
          Let&apos;s talk
        </a>
      </header>

      <section className="container grid gap-12 pb-24 pt-16 sm:pb-32 sm:pt-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end" id="home">
        <div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#bd593d]">
            Independent creative studio
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            Make your next chapter <span className="text-[#bd593d]">count.</span>
          </h1>
        </div>
        <div className="max-w-md lg:justify-self-end">
          <p className="text-lg leading-8 text-[#526159]">
            We help ambitious businesses turn big ideas into brands, content, and growth that move
            people forward.
          </p>
          <a
            className="mt-8 inline-flex rounded-full bg-[#17251f] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#bd593d]"
            href="#services"
          >
            Explore what we do <span aria-hidden="true" className="ml-3">↘</span>
          </a>
        </div>
      </section>

      <section className="bg-[#17251f] py-20 text-[#f5f3ed] sm:py-24" id="services">
        <div className="container">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#e79a7e]">
                How we help
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Good thinking. Real momentum.
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-white/65">
              The right mix of clarity, creativity, and action for your next stage.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-white/15 md:grid-cols-3">
            {services.map((service) => (
              <article className="bg-[#17251f] p-7 sm:p-9" key={service.number}>
                <p className="mb-12 text-sm text-[#e79a7e]">{service.number}</p>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="leading-7 text-white/65">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container flex flex-col gap-6 py-20 sm:flex-row sm:items-center sm:justify-between sm:py-24" id="contact">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#bd593d]">
            Your move
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to grow?</h2>
        </div>
        <a
          className="inline-flex w-fit rounded-full bg-[#bd593d] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#17251f]"
          href="mailto:hello@aecgrowthmedia.com"
        >
          Start a conversation <span aria-hidden="true" className="ml-3">↗</span>
        </a>
      </section>

      <footer className="container border-t border-[#17251f]/10 py-6 text-sm text-[#526159]">
        Demo page · AEC Growth Media
      </footer>
    </main>
  )
}
