"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, Variants } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import AnimatedCounter from "../ui/AnimatedCounter";
import Icon from "../ui/Icon";

interface IdentityCard {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stats?: { label: string; value: string }[];
  gradient: string;
  glowColor: string;
}

const identityCards: IdentityCard[] = [
  {
    id: "ai-developer",
    icon: "cpu",
    title: "SOFTWARE ENGINEER (AI DEVELOPER)",
    subtitle: "Xenspire Group",
    description: "Building end-to-end SaaS platforms with AI-powered automation",
    highlights: [
      "Email & SMS Automation Systems",
      "Campaign Management Platform",
      "Job Posting Extraction (Brightdata)",
      "Contact Sourcing (Apollo, ByteMine)",
      "LinkedIn Candidate Search",
      "AI Agents for Automation",
    ],
    stats: [
      { label: "Platform Type", value: "SaaS" },
      { label: "Dev Approach", value: "Solo" },
      { label: "Stack", value: "React+FastAPI" },
    ],
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)",
    glowColor: "rgba(139, 92, 246, 0.4)",
  },
  {
    id: "fullstack",
    icon: "code",
    title: "FULL-STACK AI DEVELOPER",
    subtitle: "50+ AI Agents • React • FastAPI • LangChain",
    description: "Building intelligent systems from frontend to deployment",
    highlights: [
      "50+ AI Agents (GPT-4, Claude, Llama3, Gemini)",
      "Advanced RAG Pipelines & Vector DBs",
      "ReAct-style & Agentic Architecture",
      "React, Next.js, NestJS, FastAPI",
      "n8n Automation Workflows",
    ],
    stats: [
      { label: "AI Agents", value: "50+" },
      { label: "LLMs Used", value: "8+" },
      { label: "Frameworks", value: "10+" },
    ],
    gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    glowColor: "rgba(59, 130, 246, 0.4)",
  },
  {
    id: "founder",
    icon: "rocket",
    title: "FOUNDER & ENTREPRENEUR",
    subtitle: "WaveSeed • CampusBuzz • Olive Orange",
    description: "Building products that impact businesses and student communities",
    highlights: [
      "WaveSeed: Modern digital products & AI scaling",
      "CampusBuzz: 550+ downloads, Top 100 Startup",
      "Recognized by Inflection Point Ventures",
      "Acknowledged by E-Cell IIT KGP",
      "Olive Orange: AI-Powered EdTech",
      "Led 30+ interns across dev & design",
    ],
    stats: [
      { label: "Startups", value: "3" },
      { label: "Downloads", value: "550+" },
      { label: "Interns Led", value: "30+" },
    ],
    gradient: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)",
    glowColor: "rgba(249, 115, 22, 0.4)",
  },
  {
    id: "student",
    icon: "graduation",
    title: "M.TECH @ IIT KHARAGPUR",
    subtitle: "Indian Institute of Technology Kharagpur",
    description: "Department Topper • Best Performance in Technology Award",
    highlights: [
      "CGPA: 8.84/10.0 — Department Topper",
      "Best Performance in Technology Award (2024-25)",
      "AI Research Intern at ISRO NRSC",
      "Led events at MMM Hall (2100+ students)",
      "Gold Medal - JNTU Football Tournament",
    ],
    stats: [
      { label: "CGPA", value: "8.84" },
      { label: "Students Led", value: "2100+" },
      { label: "Award", value: "Best Tech" },
    ],
    gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    glowColor: "rgba(16, 185, 129, 0.4)",
  },
];

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function IdentityCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: mounted ? sectionRef : undefined,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      id="identity"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Section Header */}
      <div className="container-max mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-[var(--accent-red)] bg-[var(--accent-red)]/10 rounded-full border border-[var(--accent-red)]/20">
            Who I Am
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-display font-accent font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Multiple Hats,</span>{" "}
            <span className="text-[var(--text-primary)]">One Vision</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-body-lg text-[var(--text-tertiary)] max-w-2xl mx-auto px-2">
            AI Developer, Full-Stack Engineer, Founder, and IIT KGP Topper — building the future
            of intelligent automation.
          </p>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <div className="container-max px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
          {identityCards.map((card, index) => (
            <motion.div
              key={card.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="will-change-transform"
            >
              <GlassCard
                className="h-full p-4 sm:p-5 md:p-6 lg:p-8 hover:scale-[1.02] transition-transform duration-200"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6">
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-2 sm:mb-3" style={{ background: card.gradient }}>
                      <Icon name={card.icon} className="text-white" size={24} />
                    </div>
                    <h3
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-0.5 sm:mb-1"
                      style={{
                        background: card.gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] font-medium">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base text-[var(--text-tertiary)] mb-4 sm:mb-5 md:mb-6">
                  {card.description}
                </p>

                {/* Highlights */}
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2 sm:mb-3">
                    Highlights
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {card.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-[var(--text-secondary)]"
                      >
                        <span
                          className="mt-1 sm:mt-1.5 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full flex-shrink-0"
                          style={{ background: card.gradient }}
                        />
                        <span className="leading-tight">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                {card.stats && (
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-5 md:pt-6 border-t border-[var(--glass-border)]">
                    {card.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div
                          className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-0.5 sm:mb-1"
                          style={{
                            background: card.gradient,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          <AnimatedCounter value={stat.value} duration={1.5} />
                        </div>
                        <div className="text-[10px] sm:text-xs text-[var(--text-muted)] leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Decorative gradient line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                  style={{ background: card.gradient }}
                />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--accent-red)]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--accent-orange)]/5 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}





