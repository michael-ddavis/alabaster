// Put this next to your hero component file
export function HeroBottomBleed({
  imageUrl,
  className = "",
  bleed = 200,          // height of the glow that bleeds into next section (px)
  blur = 18,            // blur strength (px)
  opacity = 0.55,       // 0..1
}: {
  imageUrl: string;
  className?: string;
  bleed?: number;
  blur?: number;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={
        // -mt-* pulls this glow up to overlap the bottom of the hero
        // pointer-events-none ensures it never blocks clicks
        "relative pointer-events-none " + className
      }
      style={{ height: bleed }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          filter: `blur(${blur}px) saturate(120%)`,
          opacity,
          mixBlendMode: "screen",
          // fade out as we go down so it disappears seamlessly
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.0))",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.0))",
        }}
      />
    </div>
  );
}
