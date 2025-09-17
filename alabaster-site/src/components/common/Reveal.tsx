import React from 'react'

type RevealProps = {
  as?: React.ElementType
  className?: string
  children: React.ReactNode
  delay?: number
  threshold?: number
  rootMargin?: string
}

export default function Reveal({
  as: Tag = 'div',
  className = '',
  children,
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -10% 0px',
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null)
  const [shown, setShown] = React.useState(false)

  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          obs.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, rootMargin])

  const classes = [
    className,
    'transition-all duration-700 will-change-transform',
    shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
  ].join(' ')

  const style = delay ? ({ transitionDelay: `${delay}ms` } as React.CSSProperties) : undefined

  // Use createElement to avoid TS mega-union explosion
  return React.createElement(Tag as any, { ref, className: classes, style }, children)
}
