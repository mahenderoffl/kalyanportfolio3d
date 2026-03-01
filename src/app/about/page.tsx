"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { StarField, GradientMesh } from "@/components/effects";
import Navigation from "@/components/navigation/Navigation";
import GlassCard from "@/components/ui/GlassCard";
import Footer from "@/components/sections/Footer";
import Icon from "@/components/ui/Icon";

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <GradientMesh />
        <StarField starCount={100} />
      </div>

      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container-max">
          {/* Header */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6"
          >
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-[var(--accent-red)] bg-[var(--accent-red)]/10 rounded-full border border-[var(--accent-red)]/20">
              About Me
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-display font-accent font-bold mb-4 sm:mb-6">
              <span className="gradient-text">Boda Kalyan</span>{" "}
              <span className="text-[var(--text-primary)]">Singh</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-tertiary)] max-w-3xl mx-auto leading-relaxed">
              AI Developer and Full-Stack Engineer building intelligent automation systems.
              From 50+ AI agents to end-to-end SaaS platforms, I bridge the gap between
              cutting-edge AI and real-world products.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
            {/* Left Column - Personal Info */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 space-y-4 sm:space-y-6">
              {/* Profile Card */}
              <GlassCard className="p-4 sm:p-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--accent-red)] to-[var(--accent-orange)] p-1 overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/kalyan-profile.png"
                        alt="Boda Kalyan Singh"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover object-top select-none pointer-events-none"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        priority
                      />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                    Boda Kalyan Singh
                  </h2>
                  <p className="text-[var(--text-tertiary)] mb-2">
                    Software Engineer @ Xenspire Group
                  </p>
                  <p className="text-sm text-[var(--text-muted)] mb-4">
                    M.Tech @ IIT Kharagpur - Dept Topper
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
                    <span className="text-[var(--accent-green)]">
                      Open to Opportunities
                    </span>
                  </div>
                </div>
              </GlassCard>

              {/* Quick Stats */}
              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "AI Agents Built", value: "50+", icon: "cpu" },
                    { label: "Startups Founded", value: "2", icon: "rocket" },
                    { label: "CGPA @ IIT KGP", value: "8.84", icon: "graduation" },
                    { label: "Users Impacted", value: "550+", icon: "users" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-red)] to-[var(--accent-orange)] flex items-center justify-center">
                          <Icon name={stat.icon} size={16} className="text-white" />
                        </div>
                        <span className="text-[var(--text-secondary)]">{stat.label}</span>
                      </div>
                      <span className="font-bold gradient-text">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Contact CTA */}
              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                  Let&apos;s Connect
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:bodakalyansingh@gmail.com"
                    className="btn-primary w-full text-center block"
                  >
                    Send Email
                  </a>
                  <Link
                    href="/book-a-call"
                    className="btn-ghost w-full text-center block"
                  >
                    Book a Call
                  </Link>
                </div>
                <div className="mt-4 pt-4 border-t border-[var(--glass-border)]">
                  <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                    <a
                      href="https://linkedin.com/in/bodakalyansingh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/bodakalyansingh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Right Column - Detailed Info */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 space-y-4 sm:space-y-6"
            >
              {/* Story Section */}
              <GlassCard className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">
                  My Story
                </h3>
                <div className="prose prose-invert max-w-none text-[var(--text-secondary)] space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <p>
                    From building my first chatbot to deploying 50+ AI agents in production,
                    my journey has been driven by one constant: the passion to build intelligent
                    systems that solve real problems.
                  </p>
                  <p>
                    During my M.Tech at IIT Kharagpur, I graduated as the department topper with
                    a CGPA of 8.84 and won the Best Performance in Technology Award. But academics
                    were just the start - I founded CampusBuzz, a platform that reached 550+ users
                    organically and was recognized among the Top 100 startups by Inflection Point Ventures.
                  </p>
                  <p>
                    At NagentAI, I built 50+ AI agents using GPT-4, Claude 3, Llama3, Gemini, and more,
                    mastering advanced RAG pipelines, multimodal AI, and autonomous agent architectures.
                    At ISRO, I developed CNN models for satellite-based environmental monitoring.
                  </p>
                  <p>
                    Today at Xenspire Group, I&apos;m building a complete SaaS platform as a solo
                    developer - from email automation and campaign management to AI-powered candidate
                    sourcing. I handle everything: React frontend, FastAPI backend, AI agents, and
                    third-party integrations like Brightdata, Apollo, and ByteMine.
                  </p>
                </div>
              </GlassCard>

              {/* Values Section */}
              <GlassCard className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">
                  What Drives Me
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      title: "Build End-to-End",
                      description: "From frontend to AI agents to deployment - I own the full stack and ship complete products.",
                      icon: "rocket",
                    },
                    {
                      title: "AI-First Approach",
                      description: "Every system I build leverages AI to automate, optimize, and make intelligent decisions.",
                      icon: "cpu",
                    },
                    {
                      title: "Impact at Scale",
                      description: "From CampusBuzz to SaaS platforms - building products that serve hundreds of users.",
                      icon: "users",
                    },
                    {
                      title: "Continuous Learning",
                      description: "From IIT KGP to ISRO to NagentAI - always pushing boundaries across AI, ML, and engineering.",
                      icon: "book",
                    },
                  ].map((value) => (
                    <div key={value.title} className="flex gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[var(--accent-red)] to-[var(--accent-orange)] flex items-center justify-center flex-shrink-0">
                        <Icon name={value.icon} size={20} className="text-white sm:hidden" />
                        <Icon name={value.icon} size={24} className="text-white hidden sm:block" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                          {value.title}
                        </h4>
                        <p className="text-sm text-[var(--text-tertiary)]">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Current Focus */}
              <GlassCard className="p-4 sm:p-6 md:p-8 border-[var(--accent-red)]/30">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">
                  Currently Working On
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      title: "Xenspire Group",
                      role: "Software Engineer (AI Developer)",
                      description: "Building end-to-end SaaS platform with email automation, AI agents, and candidate sourcing",
                      period: "Aug 2025 - Present",
                    },
                    {
                      title: "CampusBuzz",
                      role: "Founder & Chief Developer",
                      description: "Campus networking platform - 550+ downloads, Top 100 startup",
                      period: "Aug 2024 - Present",
                    },
                    {
                      title: "IIT Kharagpur",
                      role: "M.Tech (Earth System Science & Tech)",
                      description: "Department Topper - CGPA 8.84, Best Performance in Technology Award",
                      period: "2023 - 2025",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-4 rounded-xl bg-black/40 backdrop-blur-md border border-[var(--glass-border)]"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-[var(--text-primary)]">
                            {item.title}
                          </h4>
                          <p className="text-sm text-[var(--accent-red)]">
                            {item.role}
                          </p>
                        </div>
                        <span className="text-xs text-[var(--text-tertiary)]">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-[var(--text-tertiary)]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Back Link */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}







