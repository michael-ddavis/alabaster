import React from 'react'

export default function GlassAccent({ className='' }: { className?: string }) {
  return (
    <svg className={`pointer-events-none absolute -z-10 opacity-25 ${className}`} viewBox="0 0 200 120" aria-hidden>
      <defs>
        <linearGradient id="gaA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--royal-blue)" />
          <stop offset="100%" stopColor="var(--teal)" />
        </linearGradient>
        <linearGradient id="gaB" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--gold)" />
          <stop offset="100%" stopColor="var(--purple)" />
        </linearGradient>
      </defs>
      <path d="M0,0 L160,0 L120,120 L0,120 Z" fill="url(#gaA)" />
      <path d="M130,0 L200,0 L200,70 Z" fill="url(#gaB)" opacity=".8" />
    </svg>
  )
}
