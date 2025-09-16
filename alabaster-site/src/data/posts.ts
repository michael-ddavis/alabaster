
export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'verse'; ref: string; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string }

export type Post = {
  id: string
  title: string
  date: string
  author: string
  cover: string
  excerpt: string
  blocks: PostBlock[]
  tags?: string[]
}

export const posts: Post[] = [
  {
    id: 'light-in-the-valley',
    title: 'Light in the Valley',
    date: '2025-08-12',
    author: 'Team Alabaster',
    cover: '/hero_image.png',
    excerpt: 'Following Jesus through discouragement and hope.',
    tags: ['discipleship','hope'],
    blocks: [
      { type: 'p', text: 'There are seasons when the valley feels long, and the light seems distant. Yet Jesus walks with us in the shadows.' },
      { type: 'verse', ref: 'Psalm 23:4', text: 'Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.' },
      { type: 'p', text: 'The point is not to deny the valley, but to recognize the companion who never leaves.' },
      { type: 'h2', text: 'Practices for dim places' },
      { type: 'p', text: 'In dim seasons, keep Scripture near, keep community close, and keep asking for daily bread.' },
      { type: 'quote', text: 'His mercies are new every morning.' },
    ]
  },
  {
    id: 'hospitality-at-the-table',
    title: 'Hospitality at the Table',
    date: '2025-08-08',
    author: 'Team Alabaster',
    cover: '/hero_image.png',
    excerpt: 'The way meals reveal the heart of God.',
    tags: ['community','hospitality'],
    blocks: [
      { type: 'p', text: 'Hospitality is not performance; it is presence. It is the welcome of God embodied around a table.' },
      { type: 'verse', ref: 'Romans 12:13', text: 'Contribute to the needs of the saints and seek to show hospitality.' },
      { type: 'p', text: 'Small tables can host large grace.' },
    ]
  },
  {
    id: 'prayer-as-breath',
    title: 'Prayer as Breath',
    date: '2025-08-01',
    author: 'Team Alabaster',
    cover: '/hero_image.png',
    excerpt: 'Practicing presence in everyday life.',
    tags: ['prayer','formation'],
    blocks: [
      { type: 'p', text: 'Prayer is both exhale and inhale — confession and receiving love.' },
      { type: 'verse', ref: '1 Thessalonians 5:17', text: 'Pray without ceasing.' },
      { type: 'p', text: 'It is not a quota but a way of being with Jesus throughout an ordinary day.' },
    ]
  }
]
