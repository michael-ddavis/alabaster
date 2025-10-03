import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { events } from '@/data/events' // if you were already importing this, keep as-is
import EventBanner from './components/common/banner/EventBanner'
import MobileMenu from './components/common/mobile-menu/MobileMenu'
import FloatingCTAs from './components/common/FloatingCTAs'

export default function App() {
  const next = events?.[0] // keep your original logic
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <div className="min-h-dvh bg-ink text-white">
      {next && (
        <EventBanner
          id={next.id}
          title={next.title}
          date={next.date}
          time={next.time}
          location={next.location}
        />
      )}

      {/* HEADER */}
      <header className="sticky z-40 bg-black/30 backdrop-blur [top:var(--banner-h,0px)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            {/* Use your preferred logo source */}
            <img src="/Alabaster.svg" alt="Alabaster logo" className="h-10 sm:h-12 w-auto" />
            <span className="hidden sm:inline font-serif text-xl">Alabaster</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 text-white/80">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-white' : 'hover:text-white'}>About</NavLink>
            <NavLink to="/gatherings" className={({ isActive }) => isActive ? 'text-white' : 'hover:text-white'}>Gatherings</NavLink>
            <NavLink to="/podcasts" className={({ isActive }) => isActive ? 'text-white' : 'hover:text-white'}>Podcast</NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-white' : 'hover:text-white'}>Blog</NavLink>
            <NavLink to="/giving" className={({ isActive }) => isActive ? 'text-white' : 'hover:text-white'}>Giving</NavLink>
          </nav>

          {/* Mobile toggle opens the Headless UI menu */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg px-3 py-2 text-white/90"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h7 w-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu (Headless UI) */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* MAIN */}
      <main className="relative">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-white/10 py-10 text-center text-white/60">
        © {new Date().getFullYear()} Alabaster
      </footer>

      {/* To clear banner in DEV mode */}
      {/* <FloatingCTAs /> */}
    </div>
  )
}
