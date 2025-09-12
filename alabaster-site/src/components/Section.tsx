
import React from 'react'
export default function Section({ children, className='' }: { children: React.ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</section>
}
