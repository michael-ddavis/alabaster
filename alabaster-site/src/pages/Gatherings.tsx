
import React from 'react'
import Section from '@/components/Section'
import Reveal from '@/components/Reveal'
import { events } from '@/data/events'

export default function Gatherings() {
  return (
    <Section className="py-10">
      <h1 className="font-serif text-4xl">Upcoming Gatherings</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {events.map(ev => (
          <Reveal key={ev.id}>
            <div id={ev.id} className="rounded-2xl border border-white/10 bg-white/5 p-5 glass-overlay">
              <h3 className="font-serif text-2xl">{ev.title}</h3>
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
