import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { NavLink, Link } from 'react-router-dom'

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[60] md:hidden" onClose={onClose}>
        {/* Fade backdrop */}
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur" />
        </Transition.Child>

        {/* Right-side slide panel */}
        <div className="fixed inset-0 flex justify-end">
          <Transition.Child
            as={Fragment}
            enter="transform transition duration-300 ease-out"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transform transition duration-200 ease-in"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
          >
            <Dialog.Panel className="relative h-dvh w-dvw bg-black/30 backdrop-blur text-white shadow-xl">
              {/* Top bar with logo + close (sticky optional) */}
              <div className="sticky top-0 z-10 flex items-center justify-between bg-ink/95 px-4 py-3 backdrop-blur">
                <Link to="/" onClick={onClose} className="flex items-center gap-2">
                  <img src="/Alabaster.svg" alt="Alabaster logo" className="h-14 w-auto" />
                  <span className="font-serif text-2xl">Alabaster</span>
                </Link>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-3 py-2 text-white/90 hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable menu body */}
              <nav className="px-4 pb-8">
                <div className="grid gap-3 text-2xl font-bold">
                  <NavLink to="/about" onClick={onClose} className="py-2 hover:text-white">About</NavLink>
                  <NavLink to="/gatherings" onClick={onClose} className="py-2 hover:text-white">Gatherings</NavLink>
                  <NavLink to="/giving" onClick={onClose} className="py-2 hover:text-white">Giving</NavLink>
                  <NavLink to="/blog" onClick={onClose} className="py-2 hover:text-white">Blog</NavLink>
                </div>
              </nav>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
