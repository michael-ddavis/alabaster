
import React from 'react'
import Section from '@/components/common/Section'
import Reveal from '@/components/common/Reveal'
import { events } from '@/data/events'
import { Link } from 'react-router-dom'

export default function Gatherings() {
  return (
    <Section className="py-10">
      <h1 className="font-serif text-4xl">Upcoming Gatherings</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {events.map(ev => (
          <Reveal key={ev.id}>
            <div id={ev.id} className="rounded-2xl border border-white/10 bg-white/5 p-5 glass-overlay">
              <img src={ev.flyer} alt="" className="mb-4 h-40 w-full rounded-xl object-cover" />
              <h3 className="font-serif text-2xl">
                <Link to={`/gatherings/${ev.id}`} className="hover:underline">{ev.title}</Link>
              </h3>
              <p className="text-white/80">{new Date(ev.date).toLocaleDateString()} • {ev.time}</p>
              <p className="text-white/60">{ev.location}</p>
              <p className="mt-2 text-white/80">{ev.blurb}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
