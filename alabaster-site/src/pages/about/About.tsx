import PhotoCollage from '@/components/about/PhotoCollage'
import Accordion from '@/components/common/Accordion'
import Reveal from '@/components/common/Reveal'
import Section from '@/components/common/Section'
import React from 'react'

export default function About() {
  // Beliefs: keep your real items here
  const beliefs = [
    {
      id: 'scripture',
      title: 'Scripture',
      content: (
        <p>
          The Bible is the inspired Word of God, revealing His character and His good news in Jesus. It guides our faith and life together.
        </p>
      )
    },
    { id: 'triune-god', title: 'Triune God', content: <p>One God in three Persons—Father, Son, and Holy Spirit.</p> },
    { id: 'jesus', title: 'Jesus Christ', content: <p>Fully God and fully man; by His life, death, and resurrection He restores us.</p> },
    { id: 'salvation', title: 'Salvation & Discipleship', content: <p>By grace through faith; we follow Jesus as Lord in everyday life.</p> },
    { id: 'church', title: 'The Church & Mission', content: <p>A family for worship, community, and witness—joining God’s mission in our city.</p> }
  ]
  // Curated event photos (keep to ~5–6 for calmness)
  const photos = [
    '/images/events/1.jpg',
    '/images/events/2.jpg',
    '/images/events/3.jpg',
    '/images/events/4.jpg',
    '/images/events/5.jpg',
  ]

  return (
    <div className="relative">
      {/* Banner hero — smaller, always centered crop */}
      <div className="relative w-full overflow-hidden">
        <div className="h-[38vh] sm:h-[46vh]">
          <img
            src="/images/photos/about-hero.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* Logo Story */}
      <Section className="py-12">
        <div className="mx-auto grid max-w-5xl items-center gap-8 sm:grid-cols-[180px,1fr]">
          <Reveal>
            <img src="/Alabaster.svg" alt="Alabaster logo" className="mx-auto h-28 w-auto sm:mx-0" />
          </Reveal>
          <Reveal delay={80}>
            <div>
              <h1 className="font-serif text-center md:text-left text-3xl">The Meaning of Our Logo</h1>
              <p className="mt-3 text-white/80">
                Our mark reflects stained-glass light and the alabaster jar—oil poured out as worship.
                It symbolizes a people formed by Scripture, presence, and hospitality: a simple,
                luminous witness that points to Jesus.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Beliefs (kept) */}
      <Section className="py-10">
        <Reveal> <h2 className="font-serif text-3xl">Beliefs</h2>
          <p className="mt-2 max-w-3xl text-white/75">
            A brief overview of our core convictions. For the extended statement,
            <a href="#" className="underline hover:text-white"> download the full document.</a>
          </p>
        </Reveal>
        <div className="mt-6">
          <Reveal delay={60}><Accordion items={beliefs} /></Reveal>
        </div>
      </Section>

      {/* Event Photos — calm collage */}
      <Section className="py-12">
        <Reveal><h2 className="font-serif text-3xl text-center">Life Together</h2></Reveal>
        <Reveal delay={60}>
          <PhotoCollage images={photos} />
        </Reveal>
      </Section>
    </div>
  )
}
