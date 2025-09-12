
import React from 'react'
type Props = { className?: string; reduceMotion?: boolean; speed?: number; blur?: number }
export default function GlassBG_LightRays({ className='', reduceMotion=false, speed=1.8, blur=12 }: Props) {
  return (
    <svg className={`pointer-events-none absolute inset-0 z-0 h-full w-full ${className}`} viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="rayA" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--purple)" stopOpacity="0.0" />
          <stop offset="40%" stopColor="var(--purple)" stopOpacity="0.65" />
          <stop offset="100%" stopColor="var(--seafoam)" stopOpacity="0.0" />
        </linearGradient>
        <linearGradient id="rayB" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--royal-blue)" stopOpacity="0" />
          <stop offset="40%" stopColor="var(--royal-blue)" stopOpacity="0.65" />
          <stop offset="100%" stopColor="var(--teal)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="rayC" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0" />
          <stop offset="35%" stopColor="var(--gold)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--teal)" stopOpacity="0" />
        </linearGradient>
        <filter id="rayBlur"><feGaussianBlur stdDeviation={blur} /></filter>
        <radialGradient id="centerDimRays" cx="50%" cy="45%" r="42%"><stop offset="0%" stopColor="black" stopOpacity="0.55" /><stop offset="100%" stopColor="black" stopOpacity="0" /></radialGradient>
        <radialGradient id="vignetteRays" cx="50%" cy="50%" r="75%"><stop offset="0%" stopColor="black" stopOpacity="0"/><stop offset="100%" stopColor="black" stopOpacity="0.6"/></radialGradient>
      </defs>
      <rect width="1200" height="800" fill="var(--stone)" />
      <g filter="url(#rayBlur)" opacity="0.95">
        <rect x="-400" y="0" width="800" height="800" fill="url(#rayA)" transform="rotate(-20 0 0)">
          {!reduceMotion && <animate attributeName="x" values="-400;200;-400" dur={`${24 / speed}s`} repeatCount="indefinite" />}
        </rect>
        <rect x="200" y="0" width="800" height="800" fill="url(#rayB)" transform="rotate(10 0 0)">
          {!reduceMotion && <animate attributeName="x" values="200;-200;200" dur={`${28 / speed}s`} repeatCount="indefinite" />}
        </rect>
        <rect x="600" y="0" width="800" height="800" fill="url(#rayC)" transform="rotate(30 0 0)">
          {!reduceMotion && <animate attributeName="x" values="600;200;600" dur={`${26 / speed}s`} repeatCount="indefinite" />}
        </rect>
      </g>
      <rect width="1200" height="800" fill="url(#centerDimRays)" />
      <rect width="1200" height="800" fill="url(#vignetteRays)" />
    </svg>
  )
}
