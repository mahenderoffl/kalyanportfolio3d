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
      {/* Background Effects */}
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
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-[var(--accent-purple)] bg-[var(--accent-purple)]/10 rounded-full border border-[var(--accent-purple)]/20">
              About Me
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-display font-accent font-bold mb-4 sm:mb-6">
              <span className="gradient-text">Mahender</span>{" "}
              <span className="text-[var(--text-primary)]">Banoth</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-tertiary)] max-w-3xl mx-auto leading-relaxed">
              Tech entrepreneur building the future of business automation. From 
              data science to product architecture, I bridge the gap between 
              technical innovation and real-world impact.
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
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--accent-purple)] to-[var(--accent-pink)] p-1 overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/mahender-banoth.png"
                        alt="Mahender Banoth"
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
                    Mahender Banoth
                  </h2>
                  <p className="text-[var(--text-tertiary)] mb-2">
                    Founder @ WaveSeed Co.
                  </p>
                  <p className="text-sm text-[var(--text-muted)] mb-4">
                    BBA Student @ IIT Patna
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
                    { label: "Countries Reached", value: "10+", icon: "globe" },
                    { label: "Products Shipped", value: "10+", icon: "rocket" },
                    { label: "Technologies Used", value: "60+", icon: "code" },
                    { label: "Users Reached", value: "5K+", icon: "users" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-purple)] to-[var(--accent-pink)] flex items-center justify-center">
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
                    href="mailto:mahender@waveseed.app"
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
                      href="https://linkedin.com/in/mahendercreates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/mahenderoffl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://instagram.com/waveseedco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      Instagram
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
                    From the bustling tech corridors of Hyderabad to the prestigious 
                    halls of IIM Bangalore, my journey has been driven by one 
                    constant: the desire to build products that matter.
                  </p>
                  <p>
                    It started with a simple question during my B.Tech days at 
                    KITSW Warangal: &ldquo;How can technology solve real problems for 
                    real people?&rdquo; This question led me down the rabbit hole of 
                    data science, AI, and eventually, entrepreneurship.
                  </p>
                  <p>
                    Today, as Co-Founder of WaveTech Founders Lab, I&apos;m building 
                    AI-powered tools that help SMBs automate their growth. Our 
                    flagship product, WaveSeed Growth, already serves 500+ daily 
                    users — and we&apos;re just getting started.
                  </p>
                  <p>
                    But building isn&apos;t just about code. Through consulting 
                    for various clients, I translate complex data into actionable 
                    business strategies. This perspective — as a founder serving 
                    diverse businesses — gives me unique insights into what 
                    enterprises need and how startups can deliver it.
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
                      title: "Build to Ship",
                      description: "I believe in launching fast, learning faster. Every line of code should move toward a deployable product.",
                      icon: "rocket",
                    },
                    {
                      title: "Data as a Compass",
                      description: "Decisions backed by data, intuitions validated by metrics. Let the numbers guide the path.",
                      icon: "chart",
                    },
                    {
                      title: "User Obsession",
                      description: "Products exist for people. Every feature should answer a real user need, not just a technical curiosity.",
                      icon: "users",
                    },
                    {
                      title: "Continuous Learning",
                      description: "From LLM fine-tuning to product strategy at IIM-B, I'm always a student first.",
                      icon: "book",
                    },
                  ].map((value) => (
                    <div key={value.title} className="flex gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[var(--accent-purple)] to-[var(--accent-pink)] flex items-center justify-center flex-shrink-0">
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
              <GlassCard className="p-4 sm:p-6 md:p-8 border-[var(--accent-purple)]/30">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">
                  Currently Working On
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      title: "WaveTech Founders Lab",
                      role: "Co-Founder & Product Architect",
                      description: "Building AI automation tools for SMBs",
                      period: "Present",
                    },
                    {
                      title: "IIM Bangalore",
                      role: "Executive Program in Product Management",
                      description: "Sharpening product strategy & GTM skills",
                      period: "Present",
                    },
                    {
                      title: "IIT Patna",
                      role: "BBA (Data Science & AI)",
                      description: "Dual specialization in business & technology",
                      period: "2023-2026",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--glass-border)]"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-[var(--text-primary)]">
                            {item.title}
                          </h4>
                          <p className="text-sm text-[var(--accent-purple)]">
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
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                focusable="false"
              >
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

