"use client";

import { useEffect, useRef, useState, useMemo } from "react";

interface StarFieldProps {
  starCount?: number;
  className?: string;
}

// Seeded random for consistent values
function seededRandom(seed: number): () => number {
  return function () {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

export default function StarField({
  starCount = 100, // Reduced default
  className = "",
}: StarFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate stars once with useMemo
  const stars = useMemo(() => {
    const random = seededRandom(42);
    // Reduce star count for performance
    const actualCount = Math.min(starCount, 80);
    return Array.from({ length: actualCount }, (_, i) => ({
      id: i,
      x: random() * 100,
      y: random() * 100,
      size: random() * 1.5 + 0.5, // 0.5 - 2px
      opacity: random() * 0.4 + 0.2, // 0.2 - 0.6
      delay: random() * 4, // CSS animation delay
    }));
  }, [starCount]);

  // Don't render until mounted
  if (!isMounted) {
    return (
      <div
        ref={containerRef}
        className={`absolute inset-0 overflow-hidden ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Static stars with CSS animation - much more performant */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Static nebula clouds - no animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            left: "10%",
            top: "20%",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] rounded-full"
          style={{
            right: "15%",
            top: "40%",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full"
          style={{
            left: "50%",
            bottom: "10%",
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>
    </div>
  );
}
