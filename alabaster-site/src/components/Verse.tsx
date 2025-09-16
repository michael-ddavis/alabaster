
import React from 'react'

export default function Verse({ refText, children }: { refText: string; children: React.ReactNode }) {
  return (
    <figure className="my-6 rounded-2xl border border-white/15 bg-white/5 p-4 pl-5 ring-1 ring-white/5 relative overflow-hidden">
      <svg className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 opacity-30" viewBox="0 0 100 100" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--royal-blue)" />
            <stop offset="100%" stopColor="var(--teal)" />
          </linearGradient>
        </defs>
        <g>
          <path d="M0,0 L100,0 L100,40 L0,100 Z" fill="url(#g1)" />
          <path d="M60,0 L100,0 L100,60 Z" fill="var(--gold)" opacity="0.5" />
        </g>
      </svg>
      <blockquote className="relative z-10 font-serif text-lg leading-relaxed">{children}</blockquote>
      <figcaption className="mt-2 text-sm text-white/70">— {refText}</figcaption>
    </figure>
  )
}
