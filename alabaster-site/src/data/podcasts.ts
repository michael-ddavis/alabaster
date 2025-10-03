// ---------- Mock data (replace with your CMS/JSON) ----------
export type Episode = {
id: string;
title: string;
date: string; // ISO string
duration: string; // e.g., "42:17"
excerpt: string;
audioUrl?: string;
youtubeUrl?: string;
notesSlug: string; // your blog slug that holds the notes
};


export const EPISODES: Episode[] = [
{
id: "alabaster-001",
title: "Loving Jesus Well (Pilot)",
date: "2025-09-15",
duration: "38:22",
excerpt:
"We unpack the heart of Alabaster: loving Jesus deeply, and how that flows into community and mission.",
audioUrl: "https://cdn.example.com/audio/alabaster-001.mp3",
youtubeUrl: "https://youtu.be/xxxxxxxx",
notesSlug: "loving-jesus-well-pilot",
},
{
id: "alabaster-002",
title: "Apostolic Priesthood: Becoming a People of His Presence",
date: "2025-09-29",
duration: "44:05",
excerpt:
"What do we mean by an apostolic priesthood? We talk about identity, formation, and presence.",
audioUrl: "https://cdn.example.com/audio/alabaster-002.mp3",
youtubeUrl: "https://youtu.be/yyyyyyyy",
notesSlug: "apostolic-priesthood",
},
];