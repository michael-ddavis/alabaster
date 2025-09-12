
import React from 'react'
export default function Badge({ tone='teal', children }: { tone?: 'teal'|'gold'|'purple'|'royal'; children: React.ReactNode }) {
  const bg = tone==='teal' ? 'bg-teal' : tone==='gold' ? 'bg-gold' : tone==='purple' ? 'bg-purple' : 'bg-royal-blue'
  return <span className={`inline-flex items-center rounded-full ${bg} px-3 py-1 text-sm font-semibold text-ink`}>{children}</span>
}
