export default function AudioSignalBackground() {
    return (
        <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-10 mx-auto h-[220px] w-[120%] -translate-x-10 opacity-[0.17] blur-[1px]">
                {/* Stylized audio waveform */}
                <svg viewBox="0 0 1200 200" className="h-full w-full">
                    <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
                            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.9" />
                        </linearGradient>
                    </defs>
                    {Array.from({ length: 120 }).map((_, i) => {
                        const x = i * 10;
                        const h = 10 + Math.sin(i / 3) * 6 + Math.sin(i / 7) * 24 + Math.sin(i / 17) * 14;
                        return (
                            <rect
                                key={i}
                                x={x}
                                y={100 - h}
                                width={6}
                                height={h * 2}
                                rx={3}
                                fill="url(#grad)"
                            />
                        );
                    })}
                </svg>
            </div>


            {/* soft vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>
    );
}