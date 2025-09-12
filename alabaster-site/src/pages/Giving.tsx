import React from 'react'
import Section from '@/components/Section'
import Reveal from '@/components/Reveal'

export default function Giving() {
  return (
    <Section className="py-10">
      <h1 className="font-serif text-4xl">Giving</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 glass-overlay">
            <h3 className="font-serif text-2xl">Why We Give</h3>
            <p className="mt-2 text-white/80">Giving is worship. It fuels gospel ministry, care for neighbors, and the ongoing life of our community.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-serif text-2xl">Ways to Give</h3>
            <ul className="mt-3 space-y-3 text-white/80">
              <li><a className="rounded-xl border border-white/15 px-4 py-2 hover:bg-white/5" href="#">Give Online</a></li>
              <li><a className="rounded-xl border border-white/15 px-4 py-2 hover:bg-white/5" href="#">Text to Give</a></li>
              <li><a className="rounded-xl border border-white/15 px-4 py-2 hover:bg-white/5" href="#">In Person</a></li>
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}