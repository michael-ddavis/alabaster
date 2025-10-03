
import React from 'react'
import { Link } from 'react-router-dom'
import Section from '@/components/common/Section'
import Badge from '@/components/common/Badge'
import Reveal from '@/components/common/Reveal'
import HeroUpcoming from '@/components/Home/Hero/HeroUpcoming'
import { events } from '@/data/events'
import StainedGlassHero from '@/components/Home/Hero/StainedGlassHero'
import { HeroBottomBleed } from '@/components/Home/Hero/HeroBottomBleed'
import HomePodcastSection from '@/components/Home/Hero/PodcastSection'
import { motion } from "framer-motion";
import { CalendarDaysIcon, MapPinIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export type NextEvent = {
title: string;
date: string; // ISO
time: string;
location: string;
blurb?: string;
href?: string; // details page
};

export default function Home() {
  const [reduce, setReduce] = React.useState(false)
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = () => setReduce(mq.matches)
    handler()
    mq.addEventListener?.('change', handler)
    return () => mq.removeEventListener?.('change', handler)
  }, [])

  const next = events[0]
  const nextDate = new Date(next.date)
  const today = new Date()
  const showUpcoming = nextDate.getTime() >= new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime()

  const SAMPLE_NEXT: NextEvent = {
    title: "City House Gathering",
    date: "2025-10-12",
    time: "6:30 PM",
    location: "Downtown Richmond",
    blurb: "Family-style worship, teaching, and prayer as we practice loving Jesus well together.",
    href: "/gatherings",
  };


  const SAMPLE_HIGHLIGHTS = [
    { label: "Prayer Night", detail: "Weds 7:00 PM", href: "/gatherings#prayer" },
    { label: "Serve Day", detail: "Oct 26", href: "/serve" },
    { label: "Fasting Rhythm", detail: "First Mondays", href: "/rhythms" },
  ];

  const STEPS = [
    {
      title: "Visit a Gathering",
      text: "Meet the family and experience worship and teaching in a simple, presence-focused way.",
      href: "/gatherings",
    },
    {
      title: "Say Hello",
      text: "Fill out a connect card so we can follow up and help you get plugged in.",
      href: "/connect",
    },
    {
      title: "Join a House Church",
      text: "Practice the way of Jesus in community—shared meals, prayer, Scripture, mission.",
      href: "/gatherings#houses",
    },
  ];


  const FAQ = [
    {
      q: "What does \"loving Jesus well\" look like?",
      a: "A lifestyle of worship formed by Scripture, prayer, and obedience in community.",
    },
    {
      q: "Is Alabaster a church or a network?",
      a: "We're a growing church family meeting in homes and larger gatherings across the city.",
    },
    {
      q: "How can I serve?",
      a: "Start with Serve Day or talk to us after a gathering—we'll help you find a fit.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <Reveal>
        <div className="relative isolate">
          <StainedGlassHero imageUrl="/alabaster_stained_glass.png"
            hueCycle
            hueCycleDeg={25}
            grain
            grainOpacity={0.45}
            glow
            glowStrength={22}
            glowOpacity={0.25}
          >
            <Section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
              <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">
                Love Jesus Well
              </h1>
              <p className="mt-4 max-w-2xl text-balance font-sans text-lg text-white/80">
                Learning to love Jesus and one another through the Word, worship, and everyday discipleship.
              </p>
              {showUpcoming && (
                <HeroUpcoming
                  id={next.id}
                  title={next.title}
                  when={`${new Date(next.date).toLocaleDateString()} • ${next.time}`}
                  where={next.location}
                  date={next.date}
                  time={next.time}
                />
              )}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-sans font-semibold hover:bg-white/5"
                >
                  Learn More
                </a>
              </div>
            </Section>
          </StainedGlassHero>
          {/* Bleed glow BETWEEN the hero and the next section */}
          <HeroBottomBleed
            imageUrl="/hero_image.png"
            bleed={100}             // how tall the overlap is
            blur={50}
            opacity={0.65}
            className="-mt-24 sm:-mt-0 xl:block"  // pull it up to overlap the hero bottom
          />
        </div>
      </Reveal>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4">
          <header className="mb-8 flex items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/70">This Month</span>
            <h2 className="font-serif text-3xl text-white">Welcome</h2>
          </header>
          <div className="grid gap-6 sm:grid-cols-5">
            {/* Next event spotlight */}
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative sm:col-span-3 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_60px_rgba(0,0,0,0.35)]"
            >
              <GradientGlow />
              <div className="flex items-center gap-2 text-white/70">
                <CalendarDaysIcon className="h-5 w-5" />
                <span className="text-xs uppercase tracking-wider">Next</span>
              </div>
              <h3 className="mt-2 font-serif text-2xl text-white">{SAMPLE_NEXT.title}</h3>
              <p className="mt-1 text-sm text-white/60">
                {new Date(SAMPLE_NEXT.date).toLocaleDateString()} • {SAMPLE_NEXT.time}
              </p>
              <p className="mt-1 flex items-center gap-2 text-white/70">
                <MapPinIcon className="h-4 w-4" /> {SAMPLE_NEXT.location}
              </p>
              {next.blurb && <p className="mt-3 text-white/75">{SAMPLE_NEXT.blurb}</p>}
              <div className="mt-5 flex flex-wrap gap-3">
                <Link to={SAMPLE_NEXT.href ?? "/gatherings"} className="inline-flex items-center rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15">
                  Details <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/gatherings" className="inline-flex items-center rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15">
                  All gatherings
                </Link>
              </div>
            </motion.article>


            {/* Side highlights */}
            <div className="sm:col-span-2 grid gap-4">
              {SAMPLE_HIGHLIGHTS.map((h, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  key={i}
                  href={h.href ?? "#"}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-white/85 hover:bg-white/10"
                >
                  <GradientGlow />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/60">{h.label}</p>
                      {h.detail && <p className="text-white">{h.detail}</p>}
                    </div>
                    <ChevronRightIcon className="h-5 w-5 opacity-70 transition group-hover:translate-x-0.5" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <HomePodcastSection />
    </div>
  )
}

function GradientGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-violet-500/20 via-cyan-400/10 to-amber-400/20 blur-2xl" />
  );
}
