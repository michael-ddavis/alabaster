import React, { ReactNode, useMemo } from "react";

/**
 * StainedGlassHero — CSS-only with hue cycling, grain, and glow.
 * Adds a bottom glow overlay to give the hero a radiant base.
 */
export default function StainedGlassHero({
  imageUrl = "/stained-glass.png",
  className = "",
  children,
  hueCycle = false,
  hueCycleDeg = 28,
  grain = true,
  grainOpacity = 0.5,
  glow = true,
  glowStrength = 10,
  glowOpacity = 0.4,
  bottomGlow = true,
  // New: chroma-aware bottom glow cloned from the image
  bottomChromaGlow = true,
  bottomChromaOpacity = 0.5,
  bottomChromaStrength = 14,    // px blur
  bottomChromaHeight = 0.42     // portion of height (0..1)
}: {
  imageUrl?: string;
  className?: string;
  children?: ReactNode;
  hueCycle?: boolean;
  hueCycleDeg?: number;
  grain?: boolean;
  grainOpacity?: number;
  glow?: boolean;
  glowStrength?: number;
  glowOpacity?: number;
  bottomGlow?: boolean;
  bottomChromaGlow?: boolean;
  bottomChromaOpacity?: number;
  bottomChromaStrength?: number;
  bottomChromaHeight?: number;
}) {
  const hueDuration = useMemo(() => {
    const d = Math.max(6, Math.min(40, Math.round(hueCycleDeg / 2) + 10));
    return `${d}s`;
  }, [hueCycleDeg]);

  return (
    <div className={"relative min-h-[70vh] backdrop-brightness-70" + className}>
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          animation: hueCycle ? `huecycle ${hueDuration} linear infinite` : undefined,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center [filter:saturate(110%)_contrast(102%)]"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        {glow && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "102% 102%",
              backgroundPosition: "center",
              opacity: glowOpacity,
              filter: `blur(${glowStrength}px)`,
            }}
          />
        )}
      </div>

      {grain && <GrainOverlay opacity={grainOpacity} />}

      {/* Bottom glow overlay */}
      {bottomGlow && (
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{
            background:
              "radial-gradient(80% 100% at 50% 100%, rgba(255,255,255,0.35), rgba(255,255,255,0) 70%)",
            mixBlendMode: "screen",
          }}
        />
      )}

      {/* Chroma bottom glow: samples colors from the same image */}
      {bottomChromaGlow && (
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: `${Math.round(bottomChromaHeight * 100)}%`,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            filter: `blur(${bottomChromaStrength}px) saturate(120%)` ,
            opacity: bottomChromaOpacity,
            mixBlendMode: "screen",
            // mask the blur so it only shows near the bottom
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.0))",
            maskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.0))",
          }}
        />
      )}

      <div className="relative z-10 w-full">{children}</div>

      <style>{`
        @keyframes huecycle { 0%{ filter:hue-rotate(0deg);} 50%{ filter:hue-rotate(${hueCycleDeg}deg);} 100%{ filter:hue-rotate(0deg);} }
        @media (prefers-reduced-motion: reduce){ * { animation: none !important; } }
      `}</style>
    </div>
  );
}

function GrainOverlay({ opacity }: { opacity: number }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none mix-blend-overlay"
      style={{
        opacity,
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.75\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.10\"/></svg>')",
        backgroundSize: "auto",
      }}
    />
  );
}
