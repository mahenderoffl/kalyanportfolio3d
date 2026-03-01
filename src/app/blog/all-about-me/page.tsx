"use client";

import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/sections/Footer";
import { StarField, GradientMesh } from "@/components/effects";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";

export default function AllAboutMePage() {
  return (
    <main className="min-h-screen relative">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <GradientMesh />
        <StarField starCount={100} />
      </div>

      <Navigation />

      <article className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[var(--accent-orange)] bg-[var(--accent-orange)]/10 rounded-full border border-[var(--accent-orange)]/20">
              Personal Story
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[var(--text-primary)]">All About</span>{" "}
              <span className="gradient-text">Boda Kalyan Singh</span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-sm text-[var(--text-muted)] mb-8">
              <span>February 2026</span>
              <span>•</span>
              <span>10 min read</span>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[var(--accent-red)]/50 shadow-[0_0_40px_rgba(139,92,246,0.4)]">
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

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="p-8 md:p-12 mb-8">
              {/* IIT Kharagpur Section */}
              <section className="mb-12">
                <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                  {/* IIT Kharagpur Logo */}
                  <div className="w-24 h-24 md:w-32 md:h-32 relative flex-shrink-0 bg-white rounded-2xl p-2 mx-auto md:mx-0">
                    <Image
                      src="/bio3.jpg"
                      alt="IIT Kharagpur Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--accent-orange)] mb-2">
                      Graduate from Indian Institute of Technology Patna
                    </h2>
                    <p className="text-lg text-[var(--text-tertiary)]">BBA (2023-2026) | CGPA: 8.18/10.0</p>
                    <p className="text-sm text-[var(--text-muted)] mt-2">Tata Foundation Scholar</p>
                  </div>
                </div>
                
                <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                  My journey at <strong className="text-[var(--accent-orange)]">IIT Kharagpur</strong> has been nothing short of transformative. 
                  Being at one of India&apos;s premier institutes of national importance, I&apos;ve had the privilege of learning from 
                  world-class faculty, collaborating with brilliant minds, and building solutions that matter.
                </p>

                {/* Photos Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[var(--glass-border)]">
                    <Image
                      src="/bio1.jpg"
                      alt="Kalyan at IIT Kharagpur"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[var(--glass-border)]">
                    <Image
                      src="/bio2.png"
                      alt="Campus Life"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-5 bg-black/40 backdrop-blur-md rounded-xl border border-[var(--glass-border)]">
                    <h4 className="font-semibold text-[var(--accent-orange)] mb-3">🎓 Tata Foundation Scholar</h4>
                    <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">Awarded the prestigious Tata Foundation Scholarship (2023-2026) for academic excellence and leadership potential.</p>
                  </div>
                  <div className="p-4 bg-black/40 backdrop-blur-md rounded-xl border border-[var(--glass-border)]">
                    <h4 className="font-semibold text-[var(--accent-orange)] mb-2">👔 Internship & Placement Coordinator</h4>
                    <p className="text-sm text-[var(--text-tertiary)]">Coordinated 15+ placement drives, improving placement success rate by 25%.</p>
                  </div>
                </div>
              </section>

              {/* Personal Journey */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
                  My Journey: From Student to Founder
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                    I&apos;m <strong className="text-[var(--text-primary)]">Boda Kalyan Singh</strong>, a founder, full-stack AI architect, 
                    and data scientist based in Hyderabad, India. My passion lies at the intersection of technology and business, 
                    where I build AI-powered solutions that automate complexity away.
                  </p>

                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
                    <Image
                      src="/bio2.png"
                      alt="Boda Kalyan Singh"
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                    While pursuing my BBA at <strong className="text-[var(--accent-orange)]">IIT Kharagpur</strong>, I founded 
                    <a href="https://waveseed.app" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-red)] hover:underline font-semibold"> WaveSeed Co.</a>, 
                    a company focused on building intelligent automation tools. What started as a side project has evolved into 
                    a suite of products that help businesses reduce manual work by 85%.
                  </p>
                </div>
              </section>

              {/* What I Build */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
                  What I Build
                </h2>
                
                {/* WaveSeed Logo and Growth */}
                <div className="mb-6 p-6 bg-black/40 backdrop-blur-md rounded-xl border border-[var(--accent-red)]/30">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image
                        src="/waveseed-logo-white.png"
                        alt="WaveSeed Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="relative h-12 w-64 mb-3">
                        <Image
                          src="/waveseed-growth-logo.png"
                          alt="WaveSeed Growth"
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                      <p className="text-[var(--text-tertiary)]">
                        AI Marketing Agency - Automating digital marketing with intelligent systems.
                        <a href="https://waveseed.app" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-red)] hover:underline ml-2">
                          Visit waveseed.app →
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* WaveSeed Launch Video */}
                <div className="mb-6 p-6 bg-black/40 backdrop-blur-md rounded-xl border border-[var(--accent-orange)]/30">
                  <h4 className="font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--accent-orange)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                    WaveSeed Launch Video
                  </h4>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[var(--glass-border)]">
                    <iframe
                      src="https://www.youtube.com/embed/iY6jOSFuCyI?rel=0&modestbranding=1"
                      title="WaveSeed Launch Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
                
                <div className="grid gap-4">
                  <div className="p-5 bg-black/40 backdrop-blur-md rounded-xl border border-[var(--accent-orange)]/30">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🌐</span>
                      <h4 className="font-semibold text-[var(--text-primary)] text-lg">
                        <a href="https://wavebase.waveseed.app" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-orange)] transition-colors">
                          WaveBase
                        </a>
                      </h4>
                    </div>
                    <p className="text-[var(--text-tertiary)]">
                      AI Website Builder - Create stunning websites with AI assistance.
                      <a href="https://wavebase.waveseed.app" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-orange)] hover:underline ml-2">
                        Try it →
                      </a>
                    </p>
                  </div>
                  
                  <div className="p-5 bg-black/40 backdrop-blur-md rounded-xl border border-[var(--accent-orange)]/30">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">📝</span>
                      <h4 className="font-semibold text-[var(--text-primary)]">WaveSignals</h4>
                    </div>
                    <p className="text-[var(--text-tertiary)]">AI Blog Automation - Automated content creation and SEO optimization.</p>
                  </div>
                </div>
              </section>

              {/* Stats */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
                  Impact Numbers
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: "2+", label: "Startups Founded" },
                    { value: "10+", label: "Products Shipped" },
                    { value: "10+", label: "Global Clients" },
                    { value: "5K+", label: "Users Impacted" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 bg-black/40 backdrop-blur-md rounded-xl">
                      <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                      <div className="text-xs text-[var(--text-muted)]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Photos */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
                  Glimpses of My Journey
                </h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="/bio1.jpg"
                      alt="Boda Kalyan Singh"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="/bio2.png"
                      alt="Boda Kalyan Singh"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </section>

              {/* Connect */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
                  Let&apos;s Connect
                </h2>
                
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                  I&apos;m always excited to connect with fellow builders, entrepreneurs, and anyone passionate about technology. 
                  Whether you want to collaborate, discuss ideas, or just say hi – my inbox is always open.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:bodakalyansingh@gmail.com"
                    className="btn-primary px-6 py-3"
                  >
                    Get in Touch
                  </a>
                  <a 
                    href="https://linkedin.com/in/bodakalyansingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost px-6 py-3"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </section>
            </GlassCard>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
}









