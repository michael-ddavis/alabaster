
import React from 'react'
import { Link } from 'react-router-dom'
import useCountdown from '@/components/useCountdown'
import { toISO } from '@/components/datetimeUtil'

export default function EventBanner({ id, title, date, time, location }: { id: string; title: string; date: string; time: string; location: string }) {
  const key = `bannerDismissed:${id}`
  const [open, setOpen] = React.useState(() => !localStorage.getItem(key))
  const left = useCountdown(toISO(date, time))
  if (!open) return null
  return (
    <div className="sticky top-0 z-50 w-full bg-gold/30 text-white/90 ring-1 ring-gold/30 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-2">
        <span className="rounded-full bg-teal px-2.5 py-0.5 text-xs font-bold text-ink">UPCOMING</span>
        <div className="min-w-0 flex-1 truncate">
          <span className="font-serif">{title}</span>
          <span className="mx-2 text-white/70">• {new Date(date).toLocaleDateString()} {time} @ {location}</span>
          {!left.over && <span className="rounded-md border border-gold/40 bg-gold/10 px-2 py-0.7 text-xs">{left.days}d {left.hours}h {left.minutes}m {left.seconds}s</span>}
        </div>
        <Link to={`/gatherings#${id}`} className="rounded-md bg-gold px-3 py-1.5 text-sm font-semibold text-ink hover:brightness-110">See details</Link>
        <button onClick={() => { localStorage.setItem(key, '0'); setOpen(false) }} aria-label="Close banner" className="ml-2 rounded-md border border-white/20 px-2 py-1 text-xs text-white/70 hover:bg-white/10">✕</button>
      </div>
    </div>
  )
}
