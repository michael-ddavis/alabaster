import { Link } from "react-router-dom";
import PlatformButton from "@/components/common/PlatformButton";
import { Episode, EPISODES } from "@/data/podcasts";

// ---------- 2) Podcast Page ----------
export function PodcastPage({ episodes = EPISODES }: { episodes?: Episode[] }) {
    return (
        <main className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-black via-zinc-950 to-zinc-900">
            <section className="mx-auto max-w-6xl px-4 py-16">
                <header className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <h1 className="font-serif text-4xl text-white">The Alabaster Podcast</h1>
                        <p className="mt-2 max-w-2xl text-white/70">
                            Listen, watch, and read along. Each episode includes written notes with scripture references and prompts for your group.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <PlatformButton type="apple" href="https://podcasts.apple.com/" />
                        <PlatformButton type="youtube" href="https://youtube.com/" />
                    </div>
                </header>


                <ul className="grid gap-6 sm:grid-cols-2">
                    {episodes.map((e) => (
                        <li key={e.id}>
                            <EpisodeCard episode={e} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

function EpisodeCard({ episode }: { episode: Episode }) {
    return (
        <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_60px_rgba(0,0,0,0.35)]">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-violet-500/20 via-cyan-400/10 to-amber-400/20 blur-2xl transition-all group-hover:scale-110" />


            <h3 className="font-serif text-2xl text-white group-hover:opacity-90">{episode.title}</h3>
            <p className="mt-1 text-sm text-white/60">
                {new Date(episode.date).toLocaleDateString()} • {episode.duration}
            </p>
            <p className="mt-3 line-clamp-3 text-white/70">{episode.excerpt}</p>


            <div className="mt-5 flex flex-wrap items-center gap-3">
                {episode.audioUrl && (
                    <audio controls className="w-full">
                        <source src={episode.audioUrl} type="audio/mpeg" />
                    </audio>
                )}
                <div className="mt-2 flex flex-wrap gap-3">
                    {episode.youtubeUrl && (
                        <a
                            href={episode.youtubeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15"
                        >
                            <img className="mr-2 h-4 w-4" src="/brand-icons/youtube.svg" /> Watch
                        </a>
                    )}
                    <Link
                        to={`/blog/${episode.notesSlug}`}
                        className="inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15"
                    >
                        Read Notes →
                    </Link>
                </div>
            </div>
        </article>
    );
}