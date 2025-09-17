
import React from 'react'

export default function GlassCorners({ className='' }: { className?: string }) {
  return (
    <svg className={`pointer-events-none absolute inset-0 ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="gcA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"  stopColor="var(--royal-blue)" />
          <stop offset="100%" stopColor="var(--teal)" />
        </linearGradient>
        <linearGradient id="gcB" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="var(--gold)" />
          <stop offset="100%" stopColor="var(--purple)" />
        </linearGradient>
      </defs>
      <path d="M0,0 L28,0 L0,22 Z" fill="url(#gcA)" opacity=".9"/>
      <path d="M0,22 L22,0 L0,0 Z" fill="white" opacity=".08"/>
      <path d="M72,0 L100,0 L100,22 Z" fill="url(#gcB)" opacity=".85"/>
      <path d="M78,0 L100,0 L100,10 Z" fill="white" opacity=".06"/>
      <path d="M0,78 L28,100 L0,100 Z" fill="url(#gcB)" opacity=".85"/>
      <path d="M0,88 L18,100 L0,100 Z" fill="white" opacity=".06"/>
      <path d="M72,100 L100,78 L100,100 Z" fill="url(#gcA)" opacity=".9"/>
      <path d="M82,100 L100,88 L100,100 Z" fill="white" opacity=".06"/>
    </svg>
  )
}
