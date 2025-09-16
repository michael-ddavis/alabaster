import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Section from '@/components/Section'
import VersePanel from '@/components/VersePanel'
import { posts } from '@/data/posts'

export default function BlogDetail() {
  const { id } = useParams()
  const post = posts.find(p => p.id === id) || posts[0]

  return (
    <div className="relative">
      {/* Hero with framed corners */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={post.cover} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <Section className="relative z-10 flex h-full flex-col justify-end pb-10">
          <Link to="/blog" className="text-white/80 hover:text-white">← Back</Link>
          <h1 className="mt-3 max-w-4xl font-serif text-5xl leading-tight">{post.title}</h1>
          <p className="mt-2 text-white/80">{new Date(post.date).toLocaleDateString()} • {post.author}</p>
        </Section>
      </div>

      {/* Article */}
      <Section className="pb-16 pt-10">
        <article className="prose-invert max-w-3xl">
          {post.blocks.map((b, i) => {
            if (b.type === 'p')   return <p key={i} className="mt-4 text-white/85">{b.text}</p>
            if (b.type === 'h2')  return <h2 key={i} className="mt-10 font-serif text-2xl">{b.text}</h2>
            if (b.type === 'quote') return <blockquote key={i} className="mt-6 border-l-4 border-white/20 pl-4 text-white/80 italic">{b.text}</blockquote>
            if (b.type === 'verse') return <VersePanel key={i} refText={b.ref}>{b.text}</VersePanel>
            return null
          })}
        </article>
      </Section>
    </div>
  )
}
