"use client";

import { useEffect, useRef } from "react";

interface GradientMeshProps {
  className?: string;
}

export default function GradientMesh({ className = "" }: GradientMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Gradient blobs configuration - reduced speeds for smoother animation
    const blobs = [
      {
        x: 0.2,
        y: 0.3,
        radius: 0.4,
        color: "rgba(139, 92, 246, 0.12)",
        speedX: 0.0001,
        speedY: 0.00008,
        phaseX: 0,
        phaseY: 0,
      },
      {
        x: 0.7,
        y: 0.2,
        radius: 0.35,
        color: "rgba(59, 130, 246, 0.1)",
        speedX: 0.00008,
        speedY: 0.0001,
        phaseX: Math.PI / 3,
        phaseY: Math.PI / 4,
      },
      {
        x: 0.5,
        y: 0.7,
        radius: 0.45,
        color: "rgba(6, 182, 212, 0.08)",
        speedX: 0.00009,
        speedY: 0.00006,
        phaseX: Math.PI / 2,
        phaseY: Math.PI / 6,
      },
    ];

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((blob) => {
        const x =
          blob.x * canvas.width +
          Math.sin(time * blob.speedX + blob.phaseX) * canvas.width * 0.08;
        const y =
          blob.y * canvas.height +
          Math.cos(time * blob.speedY + blob.phaseY) * canvas.height * 0.08;
        const radius = blob.radius * Math.min(canvas.width, canvas.height);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Canvas for smooth gradient animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: "blur(80px)" }}
      />

      {/* Static top gradient overlay */}
      <div
        className="absolute w-full h-full"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
          opacity: 0.6,
        }}
      />

      {/* Static bottom gradient overlay */}
      <div
        className="absolute w-full h-full"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)",
          opacity: 0.5,
        }}
      />
    </div>
  );
}
