export type Event = {
  id: string
  title: string
  date: string
  time: string
  location: string
  blurb: string
  flyer: string
  description: string
  mapEmbed: string
}

export const events: Event[] = [
  {
    id: 'fri-worship-service',
    title: 'Worship Night',
    date: '2025-10-08',
    time: '7:00 PM',
    location: '6421 Rigsby Rd',
    blurb: 'Worship, Word, and fellowship.',
    flyer: '/hero_image.png',
    description: 'Join us for worship, teaching, and prayer. Kids ministry available.',
    mapEmbed: 'https://www.google.com/maps?q=1919+West+Ave&output=embed'
  }
]
