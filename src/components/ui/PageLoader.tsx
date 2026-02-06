"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Phase 1: Show IIT Patna logo
    const phase1 = setTimeout(() => setAnimationPhase(1), 300);
    
    // Phase 2: Show Waveseed logo
    const phase2 = setTimeout(() => setAnimationPhase(2), 1200);
    
    // Phase 3: Merge animation
    const phase3 = setTimeout(() => setAnimationPhase(3), 2100);

    // Start fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Remove from DOM
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearTimeout(phase1);
      clearTimeout(phase2);
      clearTimeout(phase3);
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
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 30% 40%, var(--accent-purple) 0%, transparent 50%),
                        radial-gradient(circle at 70% 60%, var(--accent-pink) 0%, transparent 50%)`,
            animation: "pulse 3s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Profile Image - appears first */}
        <div
          className={`relative mb-6 transition-all duration-700 ease-out ${
            animationPhase >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden border-3 border-[var(--accent-purple)]/50">
            <Image
              src="/mahender-banoth.png"
              alt="Mahender Banoth"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Animated ring around profile */}
          <div 
            className={`absolute -inset-1 rounded-full border-2 border-transparent ${
              animationPhase >= 1 ? "animate-spin" : ""
            }`}
            style={{ 
              animationDuration: "3s",
              background: "linear-gradient(90deg, var(--accent-purple), var(--accent-pink), var(--accent-cyan), var(--accent-purple))",
              backgroundSize: "300% 100%",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "2px",
              animation: animationPhase >= 1 ? "spin 3s linear infinite, gradient-shift 2s ease infinite" : "none",
            }}
          />
        </div>

        {/* Logo Container */}
        <div className="relative h-[80px] flex items-center justify-center">
          
          {/* IIT Patna Logo */}
          <div
            className={`absolute transition-all duration-700 ease-out ${
              animationPhase >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-50"
            } ${
              animationPhase >= 3 ? "-translate-x-12 scale-90" : "translate-x-0"
            }`}
            style={{
              filter: animationPhase >= 1 ? "drop-shadow(0 0 15px rgba(139, 92, 246, 0.4))" : "none",
            }}
          >
            <div className="relative w-[60px] h-[60px]">
              <Image
                src="/iitp-logo.png"
                alt="IIT Patna"
                fill
                className="object-contain"
                priority
              />
              {/* Glow ring animation */}
              <div 
                className={`absolute inset-0 rounded-full border-2 border-[var(--accent-purple)]/50 ${
                  animationPhase >= 1 && animationPhase < 3 ? "animate-ping" : "opacity-0"
                }`}
                style={{ animationDuration: "1.5s" }}
              />
            </div>
          </div>

          {/* Waveseed Logo */}
          <div
            className={`absolute transition-all duration-700 ease-out ${
              animationPhase >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-50"
            } ${
              animationPhase >= 3 ? "translate-x-12 scale-90" : "translate-x-0"
            }`}
            style={{
              filter: animationPhase >= 2 ? "drop-shadow(0 0 15px rgba(236, 72, 153, 0.4))" : "none",
            }}
          >
            <div className="relative w-[60px] h-[60px]">
              <Image
                src="/waveseed-logo-white.png"
                alt="Waveseed"
                fill
                className="object-contain"
                priority
              />
              {/* Glow ring animation */}
              <div 
                className={`absolute inset-0 rounded-full border-2 border-[var(--accent-pink)]/50 ${
                  animationPhase >= 2 && animationPhase < 3 ? "animate-ping" : "opacity-0"
                }`}
                style={{ animationDuration: "1.5s" }}
              />
            </div>
          </div>

          {/* Center connector line when merged */}
          <div
            className={`absolute w-20 h-0.5 bg-gradient-to-r from-[var(--accent-purple)] via-[var(--accent-cyan)] to-[var(--accent-pink)] transition-all duration-500 ${
              animationPhase >= 3 ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
        </div>

        {/* Text animations */}
        <div className="mt-8 flex flex-col items-center gap-2 overflow-hidden">
          {/* IIT Patna text */}
          <span
            className={`text-sm font-medium text-[var(--text-tertiary)] transition-all duration-500 ${
              animationPhase >= 1 && animationPhase < 3
                ? "opacity-100 translate-y-0"
                : animationPhase >= 3
                ? "opacity-0 -translate-y-4 absolute"
                : "opacity-0 translate-y-4"
            }`}
          >
            IIT Patna
          </span>

          {/* Waveseed text */}
          <span
            className={`text-sm font-medium text-[var(--text-tertiary)] transition-all duration-500 ${
              animationPhase >= 2 && animationPhase < 3
                ? "opacity-100 translate-y-0"
                : animationPhase >= 3
                ? "opacity-0 -translate-y-4 absolute"
                : "opacity-0 translate-y-4"
            }`}
          >
            Waveseed Co.
          </span>

          {/* Final merged text */}
          <div
            className={`flex flex-col items-center transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-lg font-accent font-bold gradient-text">
              Mahender Banoth
            </span>
            <span className="text-xs text-[var(--text-tertiary)] mt-1">
              IIT Patna × Waveseed
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 w-48 h-1 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--accent-purple)] via-[var(--accent-cyan)] to-[var(--accent-pink)] rounded-full transition-all duration-500 ease-out"
            style={{
              width: animationPhase === 0 ? "0%" : 
                     animationPhase === 1 ? "33%" : 
                     animationPhase === 2 ? "66%" : "100%",
            }}
          />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[var(--accent-purple)]/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.6;
          }
        }
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
