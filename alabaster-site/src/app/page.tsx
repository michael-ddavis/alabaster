'use client'

import React from 'react'
import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import HomeHero from "./components/home/HomeHero"
import HomeSections from "./components/home/HomeSections"

export default function Home() {
  return (
    <div className="bg-gray-900">
      <main>
        <HomeHero />
        {/* Colored Polygon */}
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(0 0, 100% 1%, 35% 19%, 0 49%, 63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#5521D9] to-[#53ADED] opacity-30"
            />
          </div>
        </div>
        <HomeSections />
      </main>
    </div>
  )
}
