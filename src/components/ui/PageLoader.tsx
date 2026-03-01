"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 1: CampusBuzz logo
    const p1 = setTimeout(() => setPhase(1), 200);

    // Phase 2: Secondary pic
    const p2 = setTimeout(() => setPhase(2), 1000);

    // Phase 3: Profile image
    const p3 = setTimeout(() => setPhase(3), 1800);

    // Phase 4: BOOM - Final reveal
    const p4 = setTimeout(() => setPhase(4), 2600);

    // Start fade out
    const fadeTimer = setTimeout(() => setFadeOut(true), 3400);

    // Remove from DOM
    const removeTimer = setTimeout(() => setIsLoading(false), 3900);

    return () => {
      clearTimeout(p1);
      clearTimeout(p2);
      clearTimeout(p3);
      clearTimeout(p4);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-primary)] transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"
        }`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: phase >= 4 ? 0.5 : 0.2,
            background: `radial-gradient(circle at 50% 50%, var(--accent-red) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, var(--accent-orange) 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* Explosion rings on BOOM */}
      {phase >= 4 && (
        <>
          <div className="absolute w-32 h-32 rounded-full border-2 border-[var(--accent-red)]/60 animate-explosion-ring" />
          <div className="absolute w-32 h-32 rounded-full border-2 border-[var(--accent-orange)]/60 animate-explosion-ring-delayed" />
          <div className="absolute w-32 h-32 rounded-full border-2 border-[var(--accent-orange)]/60 animate-explosion-ring-delayed-2" />
        </>
      )}

      <div className="relative flex flex-col items-center">
        {/* Central morphing container */}
        <div className="relative w-[120px] h-[120px] flex items-center justify-center">

          {/* Rotating gradient ring */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-500 ${phase >= 1 ? "opacity-100" : "opacity-0"
              } ${phase >= 4 ? "scale-125" : "scale-100"}`}
            style={{
              background: "conic-gradient(from 0deg, var(--accent-red), var(--accent-orange), var(--accent-orange), var(--accent-red))",
              padding: "3px",
              animation: phase >= 1 ? "spin 2s linear infinite" : "none",
            }}
          >
            <div className="w-full h-full rounded-full bg-[var(--bg-primary)]" />
          </div>

          {/* Phase 1: CampusBuzz Logo */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${phase === 1 ? "opacity-100 scale-100" : phase < 1 ? "opacity-0 scale-50" : "opacity-0 scale-150"
              }`}
          >
            <div className="relative w-[70px] h-[70px]">
              <Image
                src="/campusbuzz-icon.png"
                alt="CampusBuzz"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Phase 2: Secondary pic */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${phase === 2 ? "opacity-100 scale-100" : phase < 2 ? "opacity-0 scale-50" : "opacity-0 scale-150"
              }`}
          >
            <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden">
              <Image
                src="/kalyan-pic.png"
                alt="Kalyan Singh"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Phase 3 & 4: Profile Image */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${phase >= 3 ? "opacity-100" : "opacity-0 scale-50"
              } ${phase >= 4 ? "scale-110" : "scale-100"}`}
          >
            <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
              <Image
                src="/kalyan-profile.png"
                alt="Boda Kalyan Singh"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Glow pulse effect */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-300 ${phase >= 4 ? "animate-glow-pulse" : ""
              }`}
            style={{
              boxShadow: phase >= 4
                ? "0 0 60px 20px rgba(139, 92, 246, 0.4), 0 0 100px 40px rgba(236, 72, 153, 0.2)"
                : "none",
            }}
          />
        </div>

        {/* Text labels */}
        <div className="mt-8 h-16 flex flex-col items-center justify-center overflow-hidden">
          {/* CampusBuzz text */}
          <span
            className={`text-base font-medium text-[var(--text-secondary)] transition-all duration-400 absolute ${phase === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            CampusBuzz
          </span>

          {/* IIT KGP text */}
          <span
            className={`text-base font-medium text-[var(--text-secondary)] transition-all duration-400 absolute ${phase === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            IIT Kharagpur
          </span>

          {/* Preparing text */}
          <span
            className={`text-base font-medium text-[var(--text-secondary)] transition-all duration-400 absolute ${phase === 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Get Ready...
          </span>

          {/* BOOM - Final reveal */}
          <div
            className={`flex flex-col items-center transition-all duration-500 ${phase >= 4 ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
          >
            <span className="text-2xl font-accent font-bold gradient-text animate-text-glow">
              Boda Kalyan Singh
            </span>
            <span className="text-sm text-[var(--text-tertiary)] mt-2 flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-transparent via-[var(--accent-red)] to-transparent" />
              IIT KGP × Xenspire
              <span className="w-8 h-px bg-gradient-to-r from-transparent via-[var(--accent-orange)] to-transparent" />
            </span>
          </div>
        </div>

        {/* Progress dots */}
        <div className="mt-8 flex items-center gap-3">
          {[1, 2, 3, 4].map((dot) => (
            <div
              key={dot}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${phase >= dot
                  ? "bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-orange)] scale-100"
                  : "bg-black/40 backdrop-blur-md scale-75"
                } ${phase === dot ? "animate-pulse scale-125" : ""}`}
            />
          ))}
        </div>
      </div>

      {/* Particle burst on BOOM */}
      {phase >= 4 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full"
              style={{
                background: i % 3 === 0
                  ? "var(--accent-red)"
                  : i % 3 === 1
                    ? "var(--accent-orange)"
                    : "var(--accent-orange)",
                animation: `particle-burst 0.8s ease-out forwards`,
                animationDelay: `${i * 0.02}s`,
                transform: `rotate(${i * 30}deg) translateY(-20px)`,
              }}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes explosion-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(4); opacity: 0; }
        }
        
        @keyframes explosion-ring-delayed {
          0% { transform: scale(1); opacity: 0; }
          10% { opacity: 0.6; }
          100% { transform: scale(5); opacity: 0; }
        }
        
        @keyframes explosion-ring-delayed-2 {
          0% { transform: scale(1); opacity: 0; }
          20% { opacity: 0.4; }
          100% { transform: scale(6); opacity: 0; }
        }
        
        @keyframes particle-burst {
          0% { transform: rotate(var(--rotation)) translateY(0) scale(1); opacity: 1; }
          100% { transform: rotate(var(--rotation)) translateY(-150px) scale(0); opacity: 0; }
        }
        
        @keyframes glow-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(236, 72, 153, 0.3); }
          50% { text-shadow: 0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(236, 72, 153, 0.5); }
        }
        
        .animate-explosion-ring { animation: explosion-ring 0.8s ease-out forwards; }
        .animate-explosion-ring-delayed { animation: explosion-ring-delayed 0.9s ease-out forwards; }
        .animate-explosion-ring-delayed-2 { animation: explosion-ring-delayed-2 1s ease-out forwards; }
        .animate-glow-pulse { animation: glow-pulse 1s ease-in-out infinite; }
        .animate-text-glow { animation: text-glow 1.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
}







