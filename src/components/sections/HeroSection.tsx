"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

// Animated typing text for rotating taglines
const taglines = [
  "Software Engineer (AI Developer) @ Xenspire Group",
  "Full-Stack AI Developer × Automation Builder",
  "Founder of CampusBuzz • Top 100 Startup",
  "M.Tech from IIT Kharagpur • Dept Topper",
];

// Letter animation variants - optimized for performance
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.02,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

// Container variants - optimized
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.1,
    },
  },
};

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = "" }: HeroSectionProps) {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll-based animations - only use when mounted
  const { scrollYProgress } = useScroll({
    target: mounted ? containerRef : undefined,
    offset: ["start start", "end start"],
  });

  // Simplified scroll transforms
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Cycle through taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Split text into letters for animation
  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <motion.span
        key={`${char}-${i}`}
        custom={i}
        variants={letterVariants}
        className="inline-block"
        style={{ whiteSpace: char === " " ? "pre" : "normal" }}
      >
        {char}
      </motion.span>
    ));
  };

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="h-24 bg-[var(--glass-bg)] rounded animate-pulse w-96 mx-auto mb-6" />
          <div className="h-8 bg-[var(--glass-bg)] rounded animate-pulse w-64 mx-auto" />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className={`relative min-h-screen flex items-center overflow-hidden ${className}`}
    >
      {/* Profile Image - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute right-4 sm:right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 z-20 hidden md:block"
      >
        {/* Glow effects behind image */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-[var(--accent-red)]/30 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] bg-[var(--accent-orange)]/20 rounded-full blur-[60px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-[var(--accent-orange)]/15 rounded-full blur-[50px]" />
        </div>

        {/* Circular border effect */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full border-2 border-[var(--accent-red)]/50 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-2 rounded-full border border-[var(--accent-orange)]/30" />
          <div className="absolute inset-4 rounded-full border border-[var(--accent-orange)]/20" />

          {/* Profile Image */}
          <div className="relative w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-[var(--accent-red)]/60 shadow-[0_0_60px_rgba(139,92,246,0.5)]">
            <Image
              src="/kalyan-profile.png"
              alt="Boda Kalyan Singh"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Logo Showcase - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-4 sm:left-8 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 z-20 hidden md:block"
      >
        {/* Glow effects behind logos */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] bg-[var(--accent-orange)]/20 rounded-full blur-[60px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] lg:w-[220px] lg:h-[220px] bg-[var(--accent-red)]/15 rounded-full blur-[50px]" />
        </div>

        {/* Logo Box */}
        <div className="relative w-40 h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 rounded-2xl overflow-hidden border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md shadow-[0_0_40px_rgba(6,182,212,0.3)] flex items-center justify-center">
          {/* Animated logos */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTagline}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={["/campusbuzz-icon.png", "/kalyan-pic.png", "/campusbuzz-icon.png", "/kalyan-pic.png"][currentTagline]}
                alt={["CampusBuzz", "Kalyan Singh", "CampusBuzz", "At IIT KGP"][currentTagline]}
                fill
                className={currentTagline === 1 || currentTagline === 3 ? "object-cover object-top" : "object-contain p-4"}
              />
            </motion.div>
          </AnimatePresence>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--accent-orange)]/50 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--accent-red)]/50 rounded-br-2xl" />
        </div>
      </motion.div>

      {/* Main content - Centered */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 px-4 sm:px-6 max-w-5xl mx-auto w-full will-change-[opacity] text-center"
      >
        {/* Mobile Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 sm:mb-8 md:hidden"
        >
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-2 border-[var(--accent-red)]/50 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            <Image
              src="/kalyan-profile.png"
              alt="Boda Kalyan Singh"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter font-bold mb-3 sm:mb-4 tracking-tight"
        >
          <span className="gradient-text">{splitText("BUILDING AI SYSTEMS")}</span>
        </motion.h1>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-4 sm:mb-6"
        >
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-accent text-[var(--text-primary)]">
            Boda Kalyan Singh
          </span>
        </motion.div>

        {/* Animated tagline rotation */}
        <div className="h-8 sm:h-10 md:h-12 mb-6 sm:mb-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTagline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-base sm:text-lg md:text-xl lg:text-heading-3 text-[var(--text-secondary)] font-medium px-2"
            >
              {taglines[currentTagline]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm sm:text-base md:text-lg lg:text-body-lg text-[var(--text-tertiary)] max-w-2xl md:max-w-none mb-8 sm:mb-12 px-2 md:px-0"
        >
          Building the future with AI-Powered Solutions & Intelligent Automation.
          <br className="hidden sm:block" />
          <span className="text-[var(--text-secondary)]">
            {" "}From 50+ AI agents to end-to-end SaaS platforms.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 group w-full sm:w-auto"
          >
            <span>View My Work</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="btn-ghost text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
          >
            Get in Touch
          </a>

          {/* Available for Opportunity badge */}
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-secondary)] text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-green)]" />
            </span>
            Available for Opportunity
          </span>
        </motion.div>

        {/* Stats preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {[
            { value: "50+", label: "AI Agents Built" },
            { value: "2+", label: "Startups Founded" },
            { value: "8.84", label: "CGPA @ IIT KGP" },
            { value: "550+", label: "Users Impacted" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[var(--text-muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block animate-bounce-slow">
        <div className="flex flex-col items-center gap-2 text-[var(--text-muted)]">
          <span className="text-sm">Scroll to Enter</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        <div
          className="absolute w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, var(--accent-red) 0%, transparent 70%)",
            left: "10%",
            top: "20%",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, var(--accent-orange) 0%, transparent 70%)",
            right: "15%",
            bottom: "30%",
            filter: "blur(40px)",
          }}
        />
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[var(--accent-red)]/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[var(--accent-orange)]/5 to-transparent" />
      </div>
    </section>
  );
}






