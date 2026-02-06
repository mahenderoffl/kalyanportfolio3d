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
    id: "founder",
    icon: "rocket",
    title: "FOUNDER & CEO",
    subtitle: "WaveSeed Co.",
    description: "Building AI systems that automate complexity away",
    highlights: [
      "WaveSeed Growth (AI Marketing Agency)",
      "WaveBase (AI Website Builder)",
      "WaveSignals (AI Blog Automation)",
      "LifeWeeks (Productivity Tracker)",
      "Business Automation (10K+ daily events)",
    ],
    stats: [
      { label: "Manual Work Reduction", value: "85%" },
      { label: "AI Response Time", value: "200ms" },
      { label: "Products Launched", value: "5+" },
    ],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    glowColor: "rgba(139, 92, 246, 0.4)",
  },
  {
    id: "architect",
    icon: "code",
    title: "BUILDER & CHIEF DEVELOPER",
    subtitle: "Full-Stack AI Development @ WaveSeed Co.",
    description: "Building scalable, intelligent systems",
    highlights: [
      "Multi-agent orchestration (LangChain, CrewAI)",
      "Vector databases & RAG pipelines",
      "Kubernetes + AWS/GCP infrastructure",
      "Real-time processing (10K+ events/day)",
      "MLOps & DevOps pipelines",
    ],
    stats: [
      { label: "Technologies", value: "150+" },
      { label: "Daily Events", value: "10K+" },
      { label: "Uptime", value: "99.9%" },
    ],
    gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    glowColor: "rgba(59, 130, 246, 0.4)",
  },
  {
    id: "data-scientist",
    icon: "chart",
    title: "DATA SCIENCE & ANALYTICS",
    subtitle: "Turning data into insights",
    description: "ML models, BI dashboards, predictive analytics",
    highlights: [
      "Predictive Analytics & ML (scikit-learn)",
      "BI Dashboards (Power BI, Tableau)",
      "Statistical Analysis & Hypothesis Testing",
      "Python (Pandas, NumPy, Matplotlib)",
      "A/B Testing & Conversion Analytics",
    ],
    stats: [
      { label: "Prediction Accuracy", value: "85%" },
      { label: "Dashboards Built", value: "8+" },
      { label: "Records Analyzed", value: "500K+" },
    ],
    gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    glowColor: "rgba(16, 185, 129, 0.4)",
  },
  {
    id: "student",
    icon: "graduation",
    title: "GRADUATE @ IIT PATNA",
    subtitle: "Indian Institute of Technology Patna",
    description: "Academic excellence with practical impact",
    highlights: [
      "CGPA: 8.18/10.0",
      "Tata Foundation Scholar (2023-2026)",
      "Internship & Placement Coordinator",
      "Co-founded CampusBuzz (5K+ students)",
      "Coordinated 15+ placement drives",
    ],
    stats: [
      { label: "CGPA", value: "8.18" },
      { label: "Students Impacted", value: "5K+" },
      { label: "Placement Success", value: "+25%" },
    ],
    gradient: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)",
    glowColor: "rgba(249, 115, 22, 0.4)",
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
      delay: index * 0.1, // Faster stagger
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

  // Removed parallax transforms for better performance

  return (
    <section
      ref={sectionRef}
      id="identity"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* IIT Patna Background Image */}
      <div 
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: 'url(/iitp-logo.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]" />
      {/* Section Header */}
      <div className="container-max mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-[var(--accent-purple)] bg-[var(--accent-purple)]/10 rounded-full border border-[var(--accent-purple)]/20">
            Who I Am
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-display font-accent font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Multiple Hats,</span>{" "}
            <span className="text-[var(--text-primary)]">One Vision</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-body-lg text-[var(--text-tertiary)] max-w-2xl mx-auto px-2">
            Founder, developer, data scientist, and student — building the future
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

        {/* WaveSeed Launch Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-12 md:mt-16"
        >
          <GlassCard className="p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
              {/* Video */}
              <div className="w-full lg:w-2/3">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[var(--glass-border)] shadow-[0_0_40px_rgba(139,92,246,0.2)]">
                  <iframe
                    src="https://www.youtube.com/embed/iY6jOSFuCyI?rel=0&modestbranding=1"
                    title="WaveSeed Launch Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
              {/* Info */}
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-[var(--accent-pink)] bg-[var(--accent-pink)]/10 rounded-full border border-[var(--accent-pink)]/20">
                  🚀 Watch the Launch
                </span>
                <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3">
                  WaveSeed Co. Launch
                </h3>
                <p className="text-sm text-[var(--text-tertiary)] mb-4">
                  Watch how we&apos;re building the future of AI-powered business automation. From concept to product, see the vision behind WaveSeed.
                </p>
                <a
                  href="https://waveseed.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-purple)] hover:gap-3 transition-all"
                >
                  Visit waveseed.app
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--accent-purple)]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--accent-cyan)]/5 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}
