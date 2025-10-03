import { RssIcon } from "@heroicons/react/20/solid";

export default function PlatformButton({
    type,
    href,
    label,
}: {
    type: "apple" | "youtube" | "rss";
    href: string;
    label?: string;
}) {
    const base =
        "group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-zinc-900/60 px-5 py-3 text-white/90 hover:bg-zinc-800/60 transition";
    if (type === "apple") {
        return (
            <a href={href} className={base} target="_blank" rel="noreferrer">
                {/* Apple glyph */}
                <img src="brand-icons/apple-podcasts.svg" className="h-5 w-5 opacity-90" />
                <span className="text-sm font-medium">Listen on Apple Podcasts</span>
            </a>
        );
    }
    if (type === "youtube") {
        return (
            <a href={href} className={base} target="_blank" rel="noreferrer">
                <img className="h-5 w-5 opacity-90" src="/brand-icons/youtube.svg" />
                <span className="text-sm font-medium">Watch on YouTube</span>
            </a>
        );
    }
    return (
        <a href={href} className={base}>
            <RssIcon className="h-5 w-5 opacity-90" />
            <span className="text-sm font-medium">{label ?? "RSS / All Episodes"}</span>
        </a>
    );
}