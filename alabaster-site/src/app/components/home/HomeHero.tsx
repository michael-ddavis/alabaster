import React from 'react'
import ReactPlayer from 'react-player'

export default function HomeHero() {
    return (
        <section className="relative h-screen overflow-hidden">
            <ReactPlayer className='absolute inset-0  object-cover brightness-40' autoPlay={true} loop muted playsInline={true} src='videos/hero-video.mp4' height='100%' width='100%'></ReactPlayer>
            {/* <!-- Your hero content goes here --> */}
            <div className="relative z-10 flex items-center justify-center h-full text-white">
                {/* <!-- Content like text, buttons, etc. --> */}
                <h2 className="text-3xl md:text-4xl font-bold">Stunning Hero Video</h2>
            </div>
        </section>
    );
}
