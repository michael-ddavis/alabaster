import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Episode, EPISODES } from "@/data/podcasts";
import PlatformButton from "@/components/common/PlatformButton";
import AudioSignalBackground from "@/components/common/AudioSignalBackground";
import { SpeakerWaveIcon } from "@heroicons/react/20/solid";

export default function HomePodcastSection() {
    return (
        <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/80 via-zinc-900 to-[#0a0a0a] py-20 sm:py-28">
            {/* Subtle audio signal background */}
            <AudioSignalBackground />

            <div className="relative mx-auto max-w-6xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className=" rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.35)]"
                >
                    <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-sm uppercase tracking-wider text-white/60">The Alabaster Podcast</p>
                            <h2 className="mt-2 font-serif text-3xl leading-tight text-white sm:text-4xl">
                                Conversations on loving Jesus well — theology, presence, and practice
                            </h2>
                            <p className="mt-3 text-white/70">
                                New episodes every other week. Listen on your favorite platform or watch on YouTube.
                            </p>
                        </div>


                        <div className="flex w-full flex-col gap-3 sm:w-auto">
                            <PlatformButton type="apple" href="https://podcasts.apple.com/" />
                            <PlatformButton type="youtube" href="https://youtube.com/" />
                            <PlatformButton type="rss" href="/podcast" label="All Episodes" />
                        </div>
                    </div>


                    {/* Quick peek of the latest episode */}
                    <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                        <LatestEpisodeCard episode={EPISODES[0]} />
                        <Link
                            to="/podcast"
                            className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/15"
                        >
                            Browse all episodes →
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function LatestEpisodeCard({ episode }: { episode: Episode }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <div className="flex items-center gap-3 text-white/70">
                <SpeakerWaveIcon className="h-5 w-5" />
                <span className="text-xs uppercase tracking-wider">Latest Episode</span>
            </div>
            <h3 className="mt-2 font-serif text-2xl text-white">{episode.title}</h3>
            <p className="mt-1 text-sm text-white/60">
                {new Date(episode.date).toLocaleDateString()} • {episode.duration}
            </p>
            <p className="mt-3 text-white/70">{episode.excerpt}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
                {episode.audioUrl && (
                    <audio controls className="w-full sm:w-auto">
                        <source src={episode.audioUrl} type="audio/mpeg" />
                    </audio>
                )}
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
    );
}