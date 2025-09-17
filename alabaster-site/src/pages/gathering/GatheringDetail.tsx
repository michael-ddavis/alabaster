import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Section from '@/components/common/Section'
import { events } from '@/data/events'

export default function GatheringDetail() {
  const { id } = useParams()
  const ev = events.find(e => e.id === id) || events[0]

  return (
    <div className="relative">
      {/* Flyer hero */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <img src={ev.flyer} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <Section className="relative z-10 pt-6">
          <Link to="/gatherings" className="text-white/80 hover:text-white">← Back to Gatherings</Link>
          <h1 className="mt-3 font-serif text-4xl">{ev.title}</h1>
          <p className="text-white/80">{new Date(ev.date).toLocaleDateString()} • {ev.time}</p>
        </Section>
      </div>

      <Section className="py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Logistics */}
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 glass-overlay lg:col-span-1">
            <h2 className="font-serif text-2xl">Details</h2>
            <dl className="mt-4 space-y-3 text-white/80">
              <div><dt className="text-white/60">When</dt><dd>{new Date(ev.date).toLocaleDateString()} at {ev.time}</dd></div>
              <div><dt className="text-white/60">Where</dt><dd>{ev.location}</dd></div>
            </dl>
            <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
              <iframe
                src={ev.mapEmbed}
                title="Map"
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4">
              <a href="#" className="rounded-xl border border-white/15 px-4 py-2 hover:bg白/5">Add to Calendar</a>
            </div>
          </aside>

          {/* Description */}
          <article className="prose-invert max-w-none lg:col-span-2">
            <h2 className="font-serif text-2xl">About this gathering</h2>
            <p className="mt-3 text-white/85">{ev.description}</p>
            <p className="mt-3 text-white/80">We’d love to meet you. Greeters can help with seating, accessibility needs, or children’s check-in.</p>
          </article>
        </div>
      </Section>
    </div>
  )
}
