
import React from 'react'
import Section from '@/components/Section'
import Reveal from '@/components/Reveal'
import Accordion from '@/components/Accordion'
import { Link } from 'react-router-dom'
import GlassCorners from '@/components/GlassCorners'

export default function About() {
  // Beliefs accordion content — replace with your real copy
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

  const rhythm = [
    { key: 'Sundays', blurb: 'Worship, Word, prayer, and communion.' },
    { key: 'Groups', blurb: 'Meals, Scripture, and care across the city.' },
    { key: 'Prayer', blurb: 'Weekly rhythms of intercession and healing.' },
    { key: 'Serve', blurb: 'Hospitality, kids, worship, tech — your gifts matter.' }
  ]

  const leaders = [
    { name: 'Michael Davis', role: 'Pastor / Teaching', headshot: '/images/people/michael.jpg' },
    { name: 'Anna Davis', role: 'Hospitality / Prayer', headshot: '/images/people/anna.jpg' },
    { name: 'Team Alabaster', role: 'Worship / Production', headshot: '/images/people/team.jpg' }
  ]

  return (
    <div className="relative">
      {/* 1) PHOTO HERO with Glass Corners */}
      <div className="relative h-[56vh] overflow-hidden">
        <img src="/hero_image.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
        <Section className="relative z-10 flex h-full flex-col justify-end pb-10">
          <h1 className="max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">About Alabaster</h1>
          <p className="mt-3 max-w-2xl text-white/85">
            We are a family learning to <span className="text-white">Love Jesus Well</span> — around tables, in living rooms, and on Sundays.
          </p>
        </Section>
      </div>

      {/* 2) ABOUT IN 60 SECONDS (stats) */}
      <Section className="py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Years" value="3" />
          <Stat label="Communities" value="4" />
          <Stat label="Volunteers" value="35+" />
          <Stat label="Meals Shared" value="500+" />
        </div>
      </Section>

      {/* 3) WHO WE ARE (three house rules) */}
      <Section className="py-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <HouseRule icon="📖" title="Scripture" body="We apprentice ourselves to Jesus by hearing and doing His Word." />
          <HouseRule icon="🍞" title="Hospitality" body="We share tables and make room for neighbors and friends." />
          <HouseRule icon="🌱" title="Formation" body="We grow steadily in prayer, community, and mission." />
        </div>
      </Section>

      {/* 4) BELIEFS (Accordion) */}
      <Section className="py-12">
        <h2 className="font-serif text-3xl">Beliefs</h2>
        <p className="mt-2 max-w-3xl text-white/75">
          A brief overview of our core convictions. For the extended statement,
          <a href="#" className="underline hover:text-white"> download the full document.</a>
        </p>
        <div className="mt-6">
          <Accordion items={beliefs} defaultOpenId="scripture" />
        </div>
      </Section>

      {/* 6) LEADERSHIP (carousel) */}
      <Section className="py-12">
        <h2 className="font-serif text-3xl">Leadership</h2>
        <div className="mt-6 overflow-x-auto">
          <div className="flex snap-x gap-5">
            {leaders.map(p => (
              <div key={p.name} className="hover-glow snap-start shrink-0 basis-72 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img className="h-44 w-full object-cover" src={p.headshot} alt="" />
                <div className="p-5">
                  <div className="font-serif text-xl">{p.name}</div>
                  <div className="text-white/70">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7) CONTACT & PRAYER */}
      <Section className="py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-serif text-2xl">Contact</h3>
              <form className="mt-4 grid gap-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
                <input className="rounded-xl border border-white/15 bg-black/20 px-3 py-2 outline-none placeholder:text-white/40" placeholder="Name" />
                <input className="rounded-xl border border-white/15 bg-black/20 px-3 py-2 outline-none placeholder:text-white/40" placeholder="Email" />
                <textarea className="rounded-xl border border-white/15 bg-black/20 px-3 py-2 outline-none placeholder:text-white/40 sm:col-span-2" rows={4} placeholder="Message" />
                <button className="w-fit rounded-xl border border-white/15 px-4 py-2 hover:bg-white/5 sm:col-span-2">Send</button>
              </form>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-serif text-2xl">Prayer</h3>
              <p className="mt-2 text-white/80">Let us know how we can pray with you this week.</p>
              <a className="mt-4 inline-block rounded-2xl bg-gold px-5 py-2 font-semibold text-ink hover:brightness-110" href="#">
                Submit a request
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 8) VERSE BAND */}
      <Section className="py-12">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <svg className="pointer-events-none absolute -left-10 -top-10 h-48 w-80 opacity-25" viewBox="0 0 200 120" aria-hidden>
            <defs>
              <linearGradient id="vb" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--royal-blue)" />
                <stop offset="100%" stopColor="var(--teal)" />
              </linearGradient>
            </defs>
            <path d="M0,0 L180,0 L120,120 L0,120 Z" fill="url(#vb)" />
          </svg>
          <blockquote className="mx-auto max-w-3xl font-serif text-xl text-white/90">
            “You shall love the Lord your God with all your heart…” — Matthew 22:37
          </blockquote>
        </div>
      </Section>

      {/* 9) VISIT & GIVE CTAs */}
      <Section className="py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div>
            <div className="font-serif text-2xl">Plan a Visit</div>
            <p className="text-white/75">We’d love to welcome you this Sunday.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/gatherings" className="rounded-2xl bg-teal px-5 py-2 font-semibold text-ink hover:brightness-110">Upcoming Gatherings</Link>
            <a href="#" className="rounded-2xl border border-white/15 px-5 py-2 font-semibold hover:bg-white/5">Give</a>
          </div>
        </div>
      </Section>
    </div>
  )
}

/* helpers */
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
      <div className="font-serif text-2xl">{value}</div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  )
}

function HouseRule({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-3xl">{icon}</div>
      <div className="mt-2 font-serif text-2xl">{title}</div>
      <p className="mt-2 text-white/80">{body}</p>
    </div>
  )
}

function ExpandChip({ label, text }: { label: string; text: string }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
      <button className="font-semibold" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        {label}
      </button>
      {open && <div className="mt-2 text-white/75">{text}</div>}
    </div>
  )
}
