
import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import FloatingCTAs from '@/components/FloatingCTAs'
import EventBanner from '@/components/EventBanner'
import { events } from '@/data/events'

export default function App() {
  const next = events[0]
  return (
    <div className="min-h-dvh bg-ink text-white">
      {next && <EventBanner id={next.id} title={next.title} date={next.date} time={next.time} location={next.location} />}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl">Alabaster</Link>
          <nav className="flex gap-6 text-white/80">
            <NavLink to="/" className={({isActive})=> isActive ? 'text-white' : 'hover:text-white'}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive ? 'text-white' : 'hover:text-white'}>About</NavLink>
            <NavLink to="/gatherings" className={({isActive})=> isActive ? 'text-white' : 'hover:text-white'}>Gatherings</NavLink>
            <NavLink to="/giving" className={({isActive})=> isActive ? 'text-white' : 'hover:text-white'}>Giving</NavLink>
            <NavLink to="/blog" className={({isActive})=> isActive ? 'text-white' : 'hover:text-white'}>Blog</NavLink>
          </nav>
        </div>
      </header>
      <main className="relative">
        <Outlet />
      </main>
      <FloatingCTAs />
      <footer className="mt-16 border-t border-white/10 py-10 text-center text-white/60">© {new Date().getFullYear()} Alabaster</footer>
    </div>
  )
}
