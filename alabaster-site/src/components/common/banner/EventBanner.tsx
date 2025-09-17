
import React from 'react'
import { Link } from 'react-router-dom'
import useCountdown from '@/components/common/banner/useCountdown'
import { toISO } from '@/components/common/banner/datetimeUtil'

export default function EventBanner({
  id, title, date, time, location
}: { id: string; title: string; date: string; time: string; location: string }) {
  const key = `bannerDismissed:${id}`
  const [open, setOpen] = React.useState(() => {
    try { return !localStorage.getItem(key) } catch { return true }
  })
  const left = useCountdown(toISO(date, time))
  const ref = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const root = document.documentElement
    const setVar = () => {
      const h = open && ref.current ? ref.current.offsetHeight : 0
      root.style.setProperty('--banner-h', `${h}px`)
    }
    setVar()

    const ro = new ResizeObserver(setVar)
    if (ref.current) ro.observe(ref.current)
    window.addEventListener('resize', setVar)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', setVar)
      if (!open) document.documentElement.style.setProperty('--banner-h', '0px')
    }
  }, [open])

  if (!open) return null

  return (
    <div ref={ref} className="sticky top-0 z-50 w-full bg-gold/90 text-white/90 ring-1 ring-gold/30 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8 py-2 flex-wrap sm:flex-nowrap">
        <span className="rounded-full bg-teal px-2.5 py-0.5 text-[11px] font-bold text-ink">UPCOMING</span>
        <div className="min-w-0 flex-1 truncate text-sm sm:text-base">
          <span className="font-serif">{title}</span>
          <span className="mx-2 text-white/70">• {new Date(date).toLocaleDateString()} {time} @ {location}</span>
          {!left.over && (
            <span className="rounded-md border border-gold/40 bg-gold/10 px-2 py-0.5 text-xs whitespace-nowrap">
              {left.days}d {left.hours}h {left.minutes}m {left.seconds}s
            </span>
          )}
        </div>
        <Link to={`/gatherings#${id}`} className="rounded-md bg-gold px-3 py-1.5 text-sm font-semibold text-ink hover:brightness-110">See details</Link>
        <button
          onClick={() => { try { localStorage.setItem(key, '0') } catch {} ; setOpen(false) ; document.documentElement.style.setProperty('--banner-h','0px') }}
          aria-label="Close banner"
          className="ml-2 rounded-md border border-white/20 px-2 py-1 text-xs text-white/70 hover:bg-white/10"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
