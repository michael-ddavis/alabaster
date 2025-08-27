"use client"

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface navigationPieces {
  name: string;
  href: string;
  current: boolean;
}

let navigation: navigationPieces[] = [
  { name: "About", href: "/about", current: false },
  { name: "Pour Nights", href: "/pournights", current: false },
  { name: "Contact", href: "/contact", current: false },
];

export default function Navbar() {
  return (
    <>
      {/* Web menu */}
      <nav
        className=" hidden md:block bg-black backdrop-blur-lg top-0 sticky relative flex w-full flex-wrap items-center justify-between md:py-2">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <Image
            className="block h-24 w-auto"
            src="/logo.svg"
            height="800"
            width="800"
            alt="logo"
          />
          <ul className="flex space-x-4 me-5 text-xl">
            <li><a>Link</a></li>
            <li><a>Link</a></li>
            <li><a>Link</a></li>
          </ul>
        </div>
      </nav>
     
      {/* mobile menu */}
      <div className=' md:hidden top-0 z-50 backdrop-blur-md sticky flex flex-row justify-between px-2'>
        <Image
          className="block h-20 w-auto"
          src="/logo.svg"
          height="800"
          width="800"
          alt="logo"
        />
        <Popover>
          {({ open }) => (
            <>
              <PopoverButton className="inline-flex items-center justify-center p-3 pt-6 text-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-10 w-10 text-red-700" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-10 w-10" aria-hidden="true" />
                )}
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className=" w-full h-lvh bg-stone-900/60 backdrop-blur-lg text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
              >
                <div className="p-3">
                  <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                    <p className="font-semibold text-white">Insights</p>
                    <p className="text-white/50">Measure actions your users take</p>
                  </a>
                  <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                    <p className="font-semibold text-white">Automations</p>
                    <p className="text-white/50">Create your own targeted content</p>
                  </a>
                  <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                    <p className="font-semibold text-white">Reports</p>
                    <p className="text-white/50">Keep track of your growth</p>
                  </a>
                </div>
                <div className="p-3">
                  <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                    <p className="font-semibold text-white">Documentation</p>
                    <p className="text-white/50">Start integrating products and tools</p>
                  </a>
                </div>
              </PopoverPanel>
            </>
          )}
        </Popover>
      </div>
    </>
  )
}