"use client";

import { useState, useEffect } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    // Remove from DOM
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-primary)] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Simple animated logo with CSS */}
        <div className="relative w-[100px] h-[100px]">
          {/* Outer Ring - CSS animation */}
          <div
            className="absolute inset-0 rounded-full border-2 border-[var(--accent-purple)]/30 animate-spin"
            style={{ animationDuration: "3s" }}
          />
          
          {/* Middle Ring */}
          <div
            className="absolute inset-2 rounded-full border-2 border-[var(--accent-pink)]/50 animate-spin"
            style={{ animationDuration: "2s", animationDirection: "reverse" }}
          />
          
          {/* Inner Ring */}
          <div
            className="absolute inset-4 rounded-full border-2 border-[var(--accent-cyan)]/70 animate-spin"
            style={{ animationDuration: "1.5s" }}
          />
          
          {/* Center Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-accent font-bold gradient-text">
              MB
            </span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-8 flex items-center gap-1">
          <span className="text-sm text-[var(--text-tertiary)]">Loading</span>
          <span className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[var(--accent-purple)] animate-bounce"
                style={{ animationDelay: `${i * 0.1}s`, animationDuration: "0.6s" }}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
