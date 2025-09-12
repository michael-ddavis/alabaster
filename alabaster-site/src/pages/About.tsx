import React from 'react'
import Section from '@/components/Section'
import Reveal from '@/components/Reveal'

export default function About() {
  return (
    <Section className="py-10">
      <h1 className="font-serif text-4xl">About Alabaster</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 glass-overlay">
            <h3 className="font-serif text-2xl">Our Heart</h3>
            <p className="mt-2 text-white/80">We exist to love Jesus well—together. We gather to worship, to hear the Word, and to become a family shaped by the presence of God.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-serif text-2xl">What We Value</h3>
            <ul className="mt-3 list-disc pl-5 text-white/80">
              <li>Scripture that forms us</li>
              <li>Worship that centers us on Jesus</li>
              <li>Hospitality that welcomes our neighbors</li>
              <li>Discipleship as everyday life</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}