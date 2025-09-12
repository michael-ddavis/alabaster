
import React from 'react'
import { Link } from 'react-router-dom'
export default function FloatingCTAs() {
  const clearLocalStorage = localStorage.clear();
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Link to="/gatherings" className="hover-glow rounded-full bg-teal px-5 py-3 font-sans font-semibold text-ink shadow-lg ring-1 ring-black/20">Upcoming Gatherings</Link>
      <a href="#" onClick={() => { clearLocalStorage }} className="hover-glow rounded-full bg-gold px-5 py-3 font-sans font-semibold text-ink shadow-lg ring-1 ring-black/20">Clear</a>
    </div>
  )
}
