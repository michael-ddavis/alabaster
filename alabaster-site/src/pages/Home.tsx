
import React from 'react'
import { Link } from 'react-router-dom'
import Section from '@/components/Section'
import Badge from '@/components/Badge'
import GlassBG_LightRays from '@/components/GlassBG_LightRays'
import Reveal from '@/components/Reveal'
import HeroUpcoming from '@/components/HeroUpcoming'
import { events } from '@/data/events'

export default function Home() {
  const [reduce, setReduce] = React.useState(false)
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = () => setReduce(mq.matches)
    handler()
    mq.addEventListener?.('change', handler)
    return () => mq.removeEventListener?.('change', handler)
  }, [])

  const next = events[0]
  const nextDate = new Date(next.date)
  const today = new Date()
  const showUpcoming = nextDate.getTime() >= new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime()

  return (
    <div className="relative overflow-hidden">
      <div className="relative isolate">
        <GlassBG_LightRays reduceMotion={reduce} speed={1.8} blur={12} />
        <Section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
          <Badge tone="teal">A welcoming family in Jesus</Badge>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">Love Jesus Well</h1>
          <p className="mt-4 max-w-2xl text-balance font-sans text-lg text-white/80">
            Learning to love Jesus and one another through the Word, worship, and everyday discipleship.
          </p>
          {showUpcoming && (
            <HeroUpcoming
              id={next.id}
              title={next.title}
              when={`${new Date(next.date).toLocaleDateString()} • ${next.time}`}
              where={next.location}
              date={next.date}
              time={next.time}
            />
          )}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/gatherings" className="rounded-2xl bg-teal px-6 py-3 font-sans font-semibold text-ink shadow hover:brightness-110">Upcoming Gatherings</Link>
            <a href="#" className="rounded-2xl border border-white/15 px-6 py-3 font-sans font-semibold hover:bg-white/5">Learn More</a>
          </div>
        </Section>
      </div>

      <Section className="py-16 sm:py-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-serif text-3xl sm:text-4xl">Welcome</h2>
          <Badge tone="purple">This Month</Badge>
        </div>
        <div className="grid items-stretch gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 glass-overlay">
              <p className="text-sm text-white/70">Next</p>
              <h3 className="mt-1 font-serif text-2xl">{next.title} — {new Date(next.date).toLocaleDateString()} {next.time}</h3>
              <p className="mt-2 text-white/80">{next.location}</p>
              <p className="mt-3 text-white/70">{next.blurb}</p>
              <div className="mt-5"><Link to="/gatherings" className="rounded-2xl bg-gold px-5 py-2 font-semibold text-ink hover:brightness-110">Get Directions</Link></div>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="font-serif text-xl">What to Expect</h4>
              <p className="mt-2 text-white/80">Scripture, prayer, songs, and time together. If you’re new, we’d love to meet you.</p>
              <div className="mt-4"><a href="#" className="rounded-xl border border-white/15 px-4 py-2 hover:bg-white/5">Plan a visit</a></div>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  )
}
