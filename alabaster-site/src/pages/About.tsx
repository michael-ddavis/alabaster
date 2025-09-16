import React from 'react'
import Section from '@/components/Section'
import Reveal from '@/components/Reveal'
import Accordion from '@/components/Accordion'
import GlassAccent from '@/components/GlassAccent'
import { Link } from 'react-router-dom'

export default function About() {
  const beliefs = [
    {
      id: 'scripture',
      title: 'Scripture',
      content: (
        <p>
          We believe the Bible is the inspired Word of God, revealing His character and His good news in Jesus. It is our
          authority for life and practice and is sufficient for faith and formation.
        </p>
      )
    },
    {
      id: 'triune-god',
      title: 'Triune God',
      content: (
        <p>
          We worship one God in three Persons—Father, Son, and Holy Spirit—co-equal, co-eternal, and perfectly united in love.
        </p>
      )
    },
    {
      id: 'jesus',
      title: 'Jesus Christ',
      content: (
        <p>
          Jesus is fully God and fully man. Through His life, death, and resurrection He restores us to the Father and forms
          us into a people of love.
        </p>
      )
    },
    {
      id: 'salvation',
      title: 'Salvation & Discipleship',
      content: (
        <p>
          We are saved by grace through faith, and we follow Jesus as Lord. Discipleship is everyday life in His presence,
          empowered by the Spirit.
        </p>
      )
    },
    {
      id: 'church',
      title: 'The Church & Mission',
      content: (
        <p>
          The Church is a family called to worship, community, and witness. We join God’s mission for our city and the world,
          practicing hospitality, justice, and mercy.
        </p>
      )
    }
  ]

  const leaders = [
    { name: 'Michael Davis', role: 'Pastor / Teaching', headshot: '/images/people/michael.jpg' },
    { name: 'Anna Davis', role: 'Hospitality / Prayer', headshot: '/images/people/anna.jpg' },
    { name: 'Team Alabaster', role: 'Worship / Production', headshot: '/images/people/team.jpg' }
  ]

  return (
    <div className="relative">
      {/* HERO */}
      <div className="relative isolate overflow-hidden">
        <Section className="relative flex min-h-[50vh] flex-col justify-center py-14">
          <GlassAccent className="left-[-10%] top-[-10%] h-[220px] w-[360px]" />
          <h1 className="max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">About Alabaster</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            We are a family learning to <span className="text-white">Love Jesus Well</span>—through worship, Scripture,
            prayer, and ordinary life together in our city.
          </p>
        </Section>
      </div>

      {/* STORY */}
      <Section className="py-12">
        <div className="grid items-start gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <GlassAccent className="right-[-10%] top-[-10%] h-[200px] w-[320px]" />
              <h2 className="font-serif text-3xl">Our Story</h2>
              <p className="mt-3 text-white/85">
                Alabaster began around a living room and a table—friends gathering to seek Jesus and love our neighbors.
                We’ve grown into a church family with the same heartbeat: presence over performance, formation over hype,
                hospitality over hurry.
              </p>
              <p className="mt-3 text-white/80">
                We gather weekly, share meals, pray for our city, and practice the way of Jesus together.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-serif text-2xl">What We Value</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
                <li>Scripture that forms us</li>
                <li>Worship that centers us on Jesus</li>
                <li>Hospitality that welcomes our neighbors</li>
                <li>Prayer that sustains our life together</li>
                <li>Mission that serves our city</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* BELIEFS (Accordion) */}
      <Section className="py-12">
        <h2 className="font-serif text-3xl">Beliefs</h2>
        <p className="mt-2 max-w-3xl text-white/75">
          Here’s a concise overview. If you’d like our extended statement,{' '}
          <a href="#" className="underline hover:text-white">download the full document</a>.
        </p>
        <div className="mt-6">
          <Accordion items={beliefs} defaultOpenId="scripture" />
        </div>
      </Section>

      {/* LEADERSHIP */}
      <Section className="py-12">
        <h2 className="font-serif text-3xl">Leadership</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((p) => (
            <Reveal key={p.name}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 hover-glow">
                <img
                  src={p.headshot}
                  alt=""
                  className="mb-4 h-36 w-full rounded-xl object-cover"
                />
                <div className="font-serif text-xl">{p.name}</div>
                <div className="text-white/70">{p.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SERVE + GET INVOLVED */}
      <Section className="py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <GlassAccent className="left-[-12%] bottom-[-20%] h-[220px] w-[340px]" />
              <h2 className="font-serif text-3xl">Serve with Us</h2>
              <p className="mt-3 text-white/80">
                From kids ministry to hospitality and worship, there’s room at the table for your gifts.
              </p>
              <div className="mt-5">
                <a className="rounded-2xl bg-teal px-5 py-2 font-semibold text-ink hover:brightness-110" href="#">
                  View Teams
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-serif text-3xl">Contact</h2>
              <p className="mt-3 text-white/80">
                Questions? Prayer requests? We’d love to hear from you.
              </p>
              <form className="mt-4 grid gap-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
                <input className="rounded-xl border border-white/15 bg-black/20 px-3 py-2 outline-none placeholder:text-white/40 sm:col-span-1" placeholder="Name" />
                <input className="rounded-xl border border-white/15 bg-black/20 px-3 py-2 outline-none placeholder:text-white/40 sm:col-span-1" placeholder="Email" />
                <textarea className="rounded-xl border border-white/15 bg-black/20 px-3 py-2 outline-none placeholder:text-white/40 sm:col-span-2" rows={4} placeholder="Message" />
                <button className="w-fit rounded-xl border border-white/15 px-4 py-2 hover:bg-white/5 sm:col-span-2">Send</button>
              </form>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA STRIP */}
      <Section className="py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div>
            <div className="font-serif text-2xl">Plan a Visit</div>
            <p className="text-white/75">We’d love to welcome you this Sunday.</p>
          </div>
          <Link to="/gatherings" className="rounded-2xl bg-gold px-5 py-2 font-semibold text-ink hover:brightness-110">
            Upcoming Gatherings
          </Link>
        </div>
      </Section>
    </div>
  )
}
