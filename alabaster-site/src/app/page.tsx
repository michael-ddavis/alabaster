'use client'

import React from 'react'
import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Home() {

  const tileOneImages = [
    "homeImages/about_tile_1.jpg",
    "homeImages/home_tile_1.jpg",
    "homeImages/about_tile_3.jpg",
    "homeImages/about_tile_14.jpg",
  ];

  const tileTwoImages = [
    "homeImages/about_tile_7.jpg",
    "homeImages/home_tile_2.jpg",
    "homeImages/about_tile_9.jpg",
    "homeImages/about_tile_13.jpg",
  ];

  const tileThreeImages = [
    "homeImages/about_tile_2.jpg",
    "homeImages/home_tile_3.jpg",
    "homeImages/about_tile_4.jpg",
    "homeImages/about_tile_15.jpg",
    "homeImages/about_tile_11.jpg",
  ];

  const tileFourImages = [
    "homeImages/about_tile_6.jpg",
    "homeImages/home_tile_4.jpg",
    "homeImages/about_tile_8.jpg",
    "homeImages/about_tile_16.jpg",
  ];

  const tileFiveImages = [
    "homeImages/about_tile_12.jpeg",
    "homeImages/home_tile_5.jpg",
    "homeImages/about_tile_10.jpg",
    "homeImages/about_tile_5.jpg",
  ];

  return (
    <div className="bg-gray-900">
      <main>
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-white/10"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl">
                    We’re changing the way people connect
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-white">
                      Live demo <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                    <div className="relative">
                      <Fade autoplay={true} arrows={false} duration={11000} transitionDuration={1000}>
                        <img
                          alt=""
                          src={tileOneImages[3]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                        <img
                          alt=""
                          src={tileOneImages[1]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                        <img
                          alt=""
                          src={tileOneImages[0]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                        <img
                          alt=""
                          src={tileOneImages[2]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                      </Fade>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Fade autoplay={true} arrows={false} duration={6800} transitionDuration={1000}>
                        <img
                          alt=""
                          src={tileTwoImages[1]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                        <img
                          alt=""
                          src={tileTwoImages[2]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                        <img
                          alt=""
                          src={tileTwoImages[0]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                        <img
                          alt=""
                          src={tileTwoImages[3]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                      </Fade>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <Fade autoplay={true} arrows={false} duration={9000} transitionDuration={1000}>
                        <img
                          alt=""
                          src={tileThreeImages[1]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                        <img
                          alt=""
                          src={tileThreeImages[3]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                        <img
                          alt=""
                          src={tileThreeImages[0]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                        <img
                          alt=""
                          src={tileThreeImages[2]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                      </Fade>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Fade autoplay={true} arrows={false} duration={4800} transitionDuration={1000}>
                        <img
                          alt=""
                          src={tileFourImages[3]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                        <img
                          alt=""
                          src={tileFourImages[1]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                        <img
                          alt=""
                          src={tileFourImages[2]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                        <img
                          alt=""
                          src={tileFourImages[0]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                      </Fade>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <Fade autoplay={true} arrows={false} duration={5500} transitionDuration={1000}>
                        <img
                          alt=""
                          src={tileFiveImages[0]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                        <img
                          alt=""
                          src={tileFiveImages[2]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                        <img
                          alt=""
                          src={tileFiveImages[1]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                        <img
                          alt=""
                          src={tileFiveImages[3]}
                          className="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
                        />
                      </Fade>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
