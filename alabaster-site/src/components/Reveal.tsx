
import React from 'react'
export default function Reveal({ children, className='' }: { children: React.ReactNode; className?: string }) {
  const ref = React.useRef<HTMLDivElement|null>(null)
  React.useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('reveal-in'); obs.disconnect() }
    }, { threshold: 0.12 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}
