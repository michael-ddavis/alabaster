import React from 'react'
import Section from '@/components/common/Section'
import Reveal from '@/components/common/Reveal'
import { Link } from 'react-router-dom'

type Post = { id: string; title: string; date: string; excerpt: string }
const posts: Post[] = [
  { id: 'light-in-the-valley', title: 'Light in the Valley', date: '2025-08-12', excerpt: 'Following Jesus through discouragement and hope.' },
  { id: 'hospitality-at-the-table', title: 'Hospitality at the Table', date: '2025-08-08', excerpt: 'The way meals reveal the heart of God.' },
  { id: 'prayer-as-breath', title: 'Prayer as Breath', date: '2025-08-01', excerpt: 'Practicing presence in everyday life.' },
]

export default function Blog() {
  return (
    <Section className="py-10">
      <h1 className="font-serif text-4xl">Blog</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {posts.map(p => (
          <Reveal key={p.id}>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 hover-glow">
              <h3 className="font-serif text-2xl">{p.title}</h3>
              <p className="text-white/60">{new Date(p.date).toLocaleDateString()}</p>
              <p className="mt-2 text-white/80">{p.excerpt}</p>
              <div className="mt-4">
                <Link to={`/blog/${p.id}`} className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/5">Read</Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}