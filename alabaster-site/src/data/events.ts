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
    id: 'sun-service',
    title: 'Sunday Gathering',
    date: '2025-09-21',
    time: '10:00 AM',
    location: '1919 West Ave',
    blurb: 'Worship, Word, and fellowship.',
    flyer: '/hero_image.png',
    description: 'Join us for worship, teaching, and prayer. Kids ministry available. Stay after for coffee and conversation.',
    mapEmbed: 'https://www.google.com/maps?q=1919+West+Ave&output=embed'
  }
]
