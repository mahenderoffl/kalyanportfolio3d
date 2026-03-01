"use client";

import Navigation from "@/components/navigation/Navigation";
import { StarField, GradientMesh } from "@/components/effects";
import { motion } from "framer-motion";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import Icon from "@/components/ui/Icon";

const caseStudies = [
  {
    id: "wavetrack",
    title: "WaveTrack",
    subtitle: "Job Search Management Platform — Upcoming",
    description:
      "A personal job search command center that brings structure, clarity, and speed to the job-hunting process. Track applications, discover fresh opportunities early, and manage the entire journey from a single dashboard.",
    challenge:
      "Job seekers rely on scattered spreadsheets, notes, and multiple platforms, leading to missed follow-ups, late applications, and lack of visibility into progress. Most job portals focus on listings, not on helping candidates manage the process effectively.",
    solution:
      "Built a mobile-first platform with Kanban-style application tracking (Wishlist → Applied → Interviewed → Rejected), fresh job alerts for roles posted less than 24 hours ago, company & contact management, interview scheduling, and goal-driven job search tracking. Designed with calm, focused UI to reduce job search anxiety.",
    results: [
      { metric: "5+", label: "Pipeline Stages" },
      { metric: "24h", label: "Fresh Job Alerts" },
      { metric: "ATS", label: "Resume Intelligence" },
      { metric: "Beta", label: "Status" },
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "GPT-4", "Expo"],
    gradient: "from-emerald-500 to-orange-500",
    image: "/projects/wavetrack.png",
    isUpcoming: true,
  },
  {
    id: "waveseed-growth",
    title: "WaveSeed Growth Platform",
    subtitle: "AI-Powered Business Automation for SMBs",
    description:
      "Built a comprehensive growth platform that helps small businesses automate their marketing, sales, and customer engagement using AI-driven workflows.",
    challenge:
      "SMBs struggle with limited resources and expertise to implement effective digital marketing and automation strategies, leading to inconsistent growth.",
    solution:
      "Developed an all-in-one platform featuring AI content generation, automated email sequences, social media scheduling, and intelligent lead scoring—all accessible through a simple, intuitive interface.",
    results: [
      { metric: "500+", label: "Daily Active Users" },
      { metric: "85%", label: "Task Automation" },
      { metric: "3x", label: "Growth Rate" },
      { metric: "60%", label: "Time Saved" },
    ],
    technologies: ["Next.js", "Python", "LangChain", "OpenAI", "PostgreSQL", "Redis"],
    gradient: "from-red-500 to-orange-500",
    image: "/projects/waveseed.png",
  },
  {
    id: "campusbuzz",
    title: "CampusBuzz",
    subtitle: "Student Community Platform",
    description:
      "Co-founded and built a platform connecting 500+ students across campuses for academic collaboration, event discovery, and peer learning.",
    challenge:
      "Students lack a centralized platform to discover campus events, find study groups, and connect with peers who share similar academic interests.",
    solution:
      "Created a mobile-first platform with real-time event feeds, smart matching for study groups, and gamified engagement features to encourage active participation.",
    results: [
      { metric: "500+", label: "Active Users" },
      { metric: "50+", label: "Campus Events" },
      { metric: "200+", label: "Study Groups" },
      { metric: "4.8", label: "User Rating" },
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Socket.io"],
    gradient: "from-orange-500 to-red-500",
    image: "/projects/campusbuzz.png",
  },
  {
    id: "enterprise-analytics",
    title: "Enterprise Analytics Dashboard",
    subtitle: "Fortune 500 Data Transformation",
    description:
      "Led the development of a real-time analytics dashboard for a Fortune 500 client, processing millions of data points daily for actionable business insights.",
    challenge:
      "The client's existing reporting system was fragmented across multiple tools, causing delays in decision-making and inconsistent data interpretation.",
    solution:
      "Architected a unified analytics platform with real-time data pipelines, interactive visualizations, and AI-powered anomaly detection to surface critical insights automatically.",
    results: [
      { metric: "10M+", label: "Events/Day" },
      { metric: "200ms", label: "Query Response" },
      { metric: "40%", label: "Faster Decisions" },
      { metric: "$2M", label: "Cost Savings" },
    ],
    technologies: ["Python", "Apache Spark", "Power BI", "Azure", "SQL Server", "Databricks"],
    gradient: "from-orange-500 to-red-500",
    image: "/projects/analytics.png",
  },
  {
    id: "ai-resume-analyzer",
    title: "ATS Resume Analyzer",
    subtitle: "NLP-Powered Career Tool",
    description:
      "Built an intelligent resume analysis tool using GPT-4 that helps job seekers optimize their resumes for ATS compatibility and keyword matching.",
    challenge:
      "Job seekers often get rejected by ATS systems before human review, not understanding why their qualified applications fail to pass initial screening.",
    solution:
      "Developed an AI tool that analyzes resumes against job descriptions, provides ATS compatibility scores, suggests keyword improvements, and offers actionable formatting advice.",
    results: [
      { metric: "200+", label: "Resumes Analyzed" },
      { metric: "95%", label: "Accuracy Rate" },
      { metric: "2x", label: "Interview Rate" },
      { metric: "4.9", label: "User Satisfaction" },
    ],
    technologies: ["Python", "GPT-4", "FastAPI", "React", "spaCy", "Tailwind CSS"],
    gradient: "from-green-500 to-emerald-500",
    image: "/projects/resume.png",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen relative">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <GradientMesh />
        <StarField starCount={100} />
      </div>

      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[var(--accent-red)] bg-[var(--accent-red)]/10 rounded-full border border-[var(--accent-red)]/20">
              Case Studies
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Deep Dive</span>{" "}
              <span className="text-[var(--text-primary)]">Into My Work</span>
            </h1>
            <p className="text-[var(--text-tertiary)] max-w-2xl mx-auto">
              Explore detailed breakdowns of my most impactful projects—the challenges, solutions, and measurable results that define my approach to building products.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className={`p-6 sm:p-8 overflow-hidden ${study.isUpcoming ? 'border-[var(--accent-orange)]/30' : ''}`}>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${study.gradient} text-white`}
                        >
                          {study.subtitle}
                        </div>
                        {study.isUpcoming && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-[var(--accent-orange)]/20 text-[var(--accent-orange)] border border-[var(--accent-orange)]/30 animate-pulse">
                            🚀 Coming Soon
                          </span>
                        )}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
                        {study.title}
                      </h2>
                      <p className="text-[var(--text-tertiary)] mb-6">
                        {study.description}
                      </p>

                      {/* Challenge & Solution */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <h3 className="text-sm font-semibold text-[var(--accent-orange)] mb-2 flex items-center gap-2">
                            <Icon name="target" size={16} />
                            The Challenge
                          </h3>
                          <p className="text-sm text-[var(--text-secondary)]">
                            {study.challenge}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-[var(--accent-green)] mb-2 flex items-center gap-2">
                            <Icon name="zap" size={16} />
                            The Solution
                          </h3>
                          <p className="text-sm text-[var(--text-secondary)]">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full bg-black/40 backdrop-blur-md text-[var(--text-secondary)] border border-[var(--glass-border)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-4">
                        Key Results
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result) => (
                          <div
                            key={result.label}
                            className="p-4 rounded-xl bg-black/40 backdrop-blur-md border border-[var(--glass-border)]"
                          >
                            <div
                              className={`text-2xl sm:text-3xl font-bold mb-1 bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}
                            >
                              {result.metric}
                            </div>
                            <div className="text-xs text-[var(--text-muted)]">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <GlassCard className="p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-[var(--text-tertiary)] max-w-xl mx-auto mb-6">
                Let&apos;s discuss how I can help bring your vision to life with the same dedication and expertise showcased in these projects.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/book-a-call"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-orange)] shadow-lg shadow-[var(--accent-red)]/25 hover:shadow-[var(--accent-red)]/40 transition-shadow"
                >
                  Book a Call
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[var(--text-primary)] border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-black/40 backdrop-blur-md transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </main>
  );
}








