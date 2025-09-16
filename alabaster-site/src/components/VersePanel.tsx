import React from 'react'
export default function VersePanel({ refText, children }: { refText: string; children: React.ReactNode }) {
  return (
    <div className="relative my-6 overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-5">
      {/* angled glass background */}
      <svg className="absolute left-0 top-0 -z-10 h-full w-full" viewBox="0 0 100 60" preserveAspectRatio="none">
        <defs>
          <linearGradient id="vp" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--purple)" stopOpacity=".6"/>
            <stop offset="100%" stopColor="var(--seafoam)" stopOpacity=".35"/>
          </linearGradient>
        </defs>
        <path d="M-10,0 L70,0 L40,60 L-10,60 Z" fill="url(#vp)" />
      </svg>
      <blockquote className="font-serif text-lg leading-relaxed">{children}</blockquote>
      <div className="mt-2 text-sm text-white/70">— {refText}</div>
    </div>
  )
}
