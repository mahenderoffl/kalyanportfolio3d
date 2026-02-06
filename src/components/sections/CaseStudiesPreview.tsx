"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import GlassCard from "../ui/GlassCard";

const caseStudies = [
  {
    id: "waveseed-growth",
    title: "WaveSeed Growth Launch",
    category: "Product Launch",
    description: "How I built and launched an AI-powered marketing agency from concept to live product.",
    metrics: [
      { label: "Development Time", value: "3 months" },
      { label: "Features Shipped", value: "15+" },
    ],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accentColor: "var(--accent-pink)",
  },
  {
    id: "wavebase-builder",
    title: "WaveBase AI Website Builder",
    category: "Technical Deep-Dive",
    description: "Building a multi-agent AI system that converts natural language to production-ready React code.",
    metrics: [
      { label: "Response Time", value: "<200ms" },
      { label: "Accuracy", value: "95%" },
    ],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accentColor: "var(--accent-purple)",
  },
  {
    id: "campusbuzz-platform",
    title: "CampusBuzz: 5K+ Students",
    category: "Startup Story",
    description: "Co-founding a campus platform that connected thousands of students at IIT Patna.",
    metrics: [
      { label: "Active Users", value: "5K+" },
      { label: "Engagement", value: "+40%" },
    ],
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    accentColor: "var(--accent-green)",
  },
];

export default function CaseStudiesPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="case-studies"
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
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-[var(--accent-orange)] bg-[var(--accent-orange)]/10 rounded-full border border-[var(--accent-orange)]/20">
            Case Studies
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-display font-accent font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Real Projects,</span>{" "}
            <span className="text-[var(--text-primary)]">Real Impact</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-body-lg text-[var(--text-tertiary)] max-w-2xl mx-auto">
            Deep dives into my most impactful projects — the challenges, solutions, and lessons learned.
          </p>
        </motion.div>
      </div>

      {/* Case Studies Grid */}
      <div className="container-max px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full p-4 sm:p-5 md:p-6 hover:scale-[1.02] transition-transform duration-200">
                {/* Category Badge */}
                <span
                  className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full mb-3 sm:mb-4"
                  style={{
                    background: `${study.accentColor}20`,
                    color: study.accentColor,
                    border: `1px solid ${study.accentColor}40`,
                  }}
                >
                  {study.category}
                </span>

                {/* Title */}
                <h3
                  className="text-lg sm:text-xl font-bold mb-2 sm:mb-3"
                  style={{
                    background: study.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-tertiary)] mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-2 sm:p-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--glass-border)]"
                    >
                      <div
                        className="text-base sm:text-lg font-bold"
                        style={{ color: study.accentColor }}
                      >
                        {metric.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-[var(--text-muted)]">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Read More Link */}
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium transition-colors hover:gap-2 sm:hover:gap-3"
                  style={{ color: study.accentColor }}
                >
                  Read Case Study
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8 sm:mt-10"
        >
          <Link
            href="/case-studies"
            className="btn-primary px-6 sm:px-8 py-2.5 sm:py-3 inline-flex items-center gap-2 text-sm sm:text-base"
          >
            View All Case Studies
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
