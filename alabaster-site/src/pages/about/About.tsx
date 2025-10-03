import PhotoCollage from '@/components/about/PhotoCollage'
import Accordion from '@/components/common/Accordion'
import AudioSignalBackground from '@/components/common/AudioSignalBackground'
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

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-serif text-4xl text-white">Why Alabaster Exists</h2>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-wider text-white/70">
              Vision & Values
            </span>
          </div>


          <div className="grid gap-6 sm:grid-cols-3">
            <StackCard
              kicker="Center"
              title="Love Jesus Well"
              points={[
                "Everything flows from His worth",
                "Worship as lifestyle",
                "Word + Presence",
              ]}
            />
            <StackCard
              kicker="Community"
              title="Family & Accountability"
              points={[
                "We grow together",
                "Calling each other up",
                "No one left behind",
              ]}
            />
            <StackCard
              kicker="Mission"
              title="Welcome & Send"
              points={[
                "Safe place for the misfit",
                "Healing & formation",
                "Sent to love and serve",
              ]}
            />
          </div>
        </div>
      </section>

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

function ValueCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card-dew">
      <div className="p-6">
        <h3 className="font-serif text-xl text-white">{title}</h3>
        <p className="mt-2 text-white/70">{children}</p>
      </div>
    </div>
  );
}


function StackCard({
  kicker,
  title,
  points,
}: {
  kicker: string;
  title: string;
  points: string[];
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-gradient-to-br from-violet-500/20 via-cyan-400/10 to-amber-400/20 blur-xl transition-all group-hover:scale-110" />
      <p className="text-xs uppercase tracking-wider text-white/60">{kicker}</p>
      <h3 className="mt-1 font-serif text-2xl text-white">{title}</h3>
      <ul className="mt-3 space-y-2 text-white/80">
        {points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>
    </article>
  );
}