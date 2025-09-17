
import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '@/components/common/Badge'
import useCountdown from '@/components/common/banner/useCountdown'
import { toISO } from '@/components/common/banner/datetimeUtil'

export default function HeroUpcoming({ id, when, where, title, date, time }: { id: string; when: string; where: string; title: string; date: string; time: string }) {
  const left = useCountdown(toISO(date, time))
  return (
    <div className="mt-8 inline-flex max-w-full items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 glass-overlay">
      <Badge tone="gold">Upcoming</Badge>
      <div className="min-w-0">
        <div className="truncate font-serif text-xl">{title}</div>
        <div className="truncate text-sm text-white/75">{when} • {where}</div>
        {!left.over && <div className="text-xs text-white/75">Starts in {left.days}d {left.hours}h {left.minutes}m {left.seconds}s</div>}
      </div>
      <Link to={`/gatherings#${id}`} className="ml-auto rounded-xl bg-teal px-4 py-2 font-sans font-semibold text-ink hover:brightness-110">See details</Link>
    </div>
  )
}
