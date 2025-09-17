
import React from 'react'

export default function Section({
  className = '',
  children,
}: { className?: string; children: React.ReactNode }) {
  return (
    <section className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  )
}
