import Link from 'next/link';
import React from 'react'
import ReactPlayer from 'react-player'

export default function HomeHero() {
    return (
         <section className="p-4">
        <div
          className="w-full h-96 mt-8 rounded-md overflow-hidden  bg-center md:mt-0"
          style={{
            backgroundImage: `homeImages/about_tile_12.jpeg)`,
          }}
        >
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">
                Encounters
              </h2>
              <p className="mt-2 text-gray-400">
                These aren&apos;t concerts, there are as their name suggests
                encounters with Jesus through worship.
              </p>
              <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                <Link href="/encounters">See when the next is</Link>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}