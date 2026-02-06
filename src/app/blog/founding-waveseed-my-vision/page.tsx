"use client";

import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/sections/Footer";
import { StarField, GradientMesh } from "@/components/effects";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";

export default function FoundingWaveSeedPost() {
  return (
    <main className="min-h-screen relative">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <GradientMesh />
        <StarField starCount={80} />
      </div>

      <Navigation />

      <article className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            {/* WaveSeed Logo */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 relative">
                <Image
                  src="/waveseed-logo-white.png"
                  alt="WaveSeed Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] text-white">
                Founder Story
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
              Founding WaveSeed: My Vision for the Future of Business Automation
            </h1>

            <div className="flex items-center gap-4 text-sm text-[var(--text-muted)] mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative rounded-full overflow-hidden border-2 border-[var(--accent-purple)]/50">
                  <Image
                    src="/mahender-banoth.png"
                    alt="Mahender Banoth"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="text-[var(--text-primary)] font-medium">Mahender Banoth</div>
                  <div className="text-xs">Founder @ WaveSeed Co.</div>
                </div>
              </div>
              <span>•</span>
              <span>February 2026</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
              {/* Launch Video */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--accent-pink)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                  WaveSeed Launch Video
                </h3>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[var(--glass-border)] shadow-[0_0_40px_rgba(139,92,246,0.2)]">
                  <iframe
                    src="https://www.youtube.com/embed/iY6jOSFuCyI?rel=0&modestbranding=1"
                    title="WaveSeed Launch Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>

              <p className="text-xl text-[var(--text-primary)] font-medium">
                Every successful company starts with a simple observation: something in the world isn&apos;t working as well as it could. For me, that observation came while working with small businesses who were drowning in manual tasks while larger competitors moved faster with automation.
              </p>

              <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-10 mb-4">The Problem I Saw</h2>
              
              <p>
                As a BBA student at IIT Patna with hands-on experience building products for startups and SMBs, I&apos;ve seen both sides of the business technology divide. Fortune 500 companies have entire departments dedicated to automation, AI integration, and digital transformation. Small and medium businesses? They&apos;re often stuck with spreadsheets, manual processes, and expensive tools they don&apos;t know how to use effectively.
              </p>

              <p>
                The gap isn&apos;t just about money—it&apos;s about access to expertise. A local business owner shouldn&apos;t need to hire a team of developers to automate their email marketing or set up intelligent customer follow-ups. The technology exists. The barrier is implementation.
              </p>

              <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-10 mb-4">Why WaveSeed?</h2>

              <p>
                WaveSeed was born from a simple belief: <strong className="text-[var(--text-primary)]">every business deserves access to enterprise-grade automation, regardless of their technical expertise or budget.</strong>
              </p>

              <p>
                The name &quot;WaveSeed&quot; represents what we&apos;re trying to create—planting seeds of innovation that ripple outward, creating waves of positive change for businesses everywhere. We&apos;re not just building software; we&apos;re democratizing the tools that help businesses grow.
              </p>

              <div className="p-6 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] my-8">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-6">Our Core Products</h3>
                
                {/* WaveSeed Growth Logo */}
                <div className="mb-6 p-4 rounded-xl bg-white/5 border border-[var(--accent-purple)]/30">
                  <div className="relative w-full h-16 mb-4">
                    <Image
                      src="/waveseed-growth-logo.png"
                      alt="WaveSeed Growth"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <p className="text-sm text-[var(--text-tertiary)]">
                    AI-powered marketing automation that learns your business and optimizes campaigns automatically.
                    <a href="https://waveseed.app" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-purple)] hover:underline ml-1">
                      Visit waveseed.app →
                    </a>
                  </p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-[var(--accent-cyan)]/30">
                    <span className="w-3 h-3 mt-1.5 rounded-full bg-[var(--accent-cyan)]" />
                    <div>
                      <strong className="text-[var(--text-primary)]">WaveBase</strong>
                      <p className="text-sm text-[var(--text-tertiary)]">
                        An intelligent AI website builder that helps you create stunning websites.
                        <a href="https://wavebase.waveseed.app" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-cyan)] hover:underline ml-1">
                          Try wavebase.waveseed.app →
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-[var(--accent-pink)]/30">
                    <span className="w-3 h-3 mt-1.5 rounded-full bg-[var(--accent-pink)]" />
                    <div>
                      <strong className="text-[var(--text-primary)]">WaveSignals</strong>
                      <p className="text-sm text-[var(--text-tertiary)]">Real-time market insights and AI blog automation that keeps you informed without information overload.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Photo Section */}
              <div className="my-8 grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-xl overflow-hidden border border-[var(--glass-border)]">
                  <Image
                    src="/IMG_20230921_084941.jpg"
                    alt="Mahender Banoth working"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden border border-[var(--glass-border)]">
                  <Image
                    src="/IMG_20231223_133945.jpg"
                    alt="Building WaveSeed"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-10 mb-4">My Vision for the Future</h2>

              <p>
                In five years, I see WaveSeed as the go-to platform for SMB automation across India and beyond. But more than market share, I care about impact. I want to see:
              </p>

              <ul className="space-y-2 my-6">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent-green)]">✓</span>
                  <span>Thousands of small businesses saving hours every week on tasks that should be automated</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent-green)]">✓</span>
                  <span>Entrepreneurs focusing on strategy and customer relationships instead of repetitive admin work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent-green)]">✓</span>
                  <span>A new generation of business owners who see AI as a partner, not a threat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent-green)]">✓</span>
                  <span>India emerging as a leader in accessible business technology innovation</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-10 mb-4">What Drives Me</h2>

              <p>
                I&apos;m 21, a student, and a first-generation entrepreneur. I don&apos;t have a playbook handed down from successful founders in my family. What I have is an insatiable curiosity, a willingness to learn in public, and a deep belief that the best solutions come from understanding problems firsthand.
              </p>

              <p>
                Every line of code I write, every product decision I make, every conversation with a potential customer—it all comes back to one question: <em className="text-[var(--accent-purple)]">&quot;Does this make someone&apos;s work life better?&quot;</em>
              </p>

              <p>
                Building WaveSeed isn&apos;t just about creating a successful company. It&apos;s about proving that meaningful innovation can come from anywhere—from a student in Patna with a laptop and a vision, from late nights balancing coursework and code, from the conviction that technology should empower everyone, not just those who can afford expensive consultants.
              </p>

              <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-10 mb-4">Join the Journey</h2>

              <p>
                We&apos;re just getting started. If you&apos;re a small business owner frustrated with manual processes, a developer interested in building with AI, or an investor looking at the future of SMB technology—I&apos;d love to connect.
              </p>

              <p>
                The future of business automation is being built right now. Let&apos;s build it together.
              </p>

              <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[var(--accent-purple)]/10 to-[var(--accent-pink)]/10 border border-[var(--accent-purple)]/20">
                <p className="text-[var(--text-primary)] font-medium mb-4">
                  Want to learn more about WaveSeed or discuss potential collaborations?
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/book-a-call"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)]"
                  >
                    Book a Call
                  </Link>
                  <a
                    href="https://waveseed.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[var(--text-primary)] border border-[var(--glass-border)] bg-[var(--glass-bg)]"
                  >
                    Visit waveseed.app
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Author Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 p-6 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)]"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-[var(--accent-purple)]/50 flex-shrink-0">
                <Image
                  src="/mahender-banoth.png"
                  alt="Mahender Banoth"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Mahender Banoth</h3>
                <p className="text-sm text-[var(--text-muted)] mb-2">Founder @ WaveSeed Co. | Graduate @ IIT Patna</p>
                <p className="text-sm text-[var(--text-tertiary)]">
                  Tech entrepreneur building AI-powered automation tools for SMBs. Full-stack developer, data scientist, and lifelong learner passionate about making technology accessible to everyone.
                </p>
                <div className="flex gap-3 mt-3">
                  <a href="https://linkedin.com/in/mahendercreates" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--accent-purple)] hover:underline">
                    LinkedIn
                  </a>
                  <a href="https://github.com/mahenderoffl" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--accent-purple)] hover:underline">
                    GitHub
                  </a>
                  <a href="mailto:mahender@waveseed.app" className="text-xs text-[var(--accent-purple)] hover:underline">
                    Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
