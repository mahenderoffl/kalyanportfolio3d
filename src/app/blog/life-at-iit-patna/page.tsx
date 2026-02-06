"use client";

import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/sections/Footer";
import { StarField, GradientMesh } from "@/components/effects";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";

export default function LifeAtIITPatnaPage() {
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
              Campus Life
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[var(--text-primary)]">Life at</span>{" "}
              <span className="text-[var(--accent-orange)]">IIT Patna</span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-sm text-[var(--text-muted)] mb-8">
              <span>February 2026</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/iitp-logo.png"
                alt="IIT Patna Campus"
                fill
                className="object-contain bg-white"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="p-8 md:p-12 mb-8">
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--accent-orange)] mb-6">
                  Indian Institute of Technology Patna
                </h2>
                
                <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                  <strong className="text-[var(--accent-orange)]">IIT Patna</strong> is one of the eight new IITs 
                  established by the Government of India in 2008. Located in Bihar, it has quickly risen to become 
                  one of the premier technical institutes in India, known for its excellent faculty, cutting-edge 
                  research, and vibrant campus life.
                </p>

                <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                  Being part of this prestigious institution has been a privilege. The campus, spread across 
                  500+ acres in Bihta, offers a perfect blend of academic rigor and extracurricular activities.
                </p>
              </section>

              {/* Academic Excellence */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
                  Academic Excellence
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-5 bg-[var(--bg-tertiary)] rounded-xl border border-[var(--glass-border)]">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-3">World-Class Faculty</h4>
                    <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">
                      Our professors are alumni of top global universities including MIT, Stanford, IISc, 
                      and other prestigious institutions, bringing world-class knowledge to the classroom.
                    </p>
                  </div>
                  <div className="p-5 bg-[var(--bg-tertiary)] rounded-xl border border-[var(--glass-border)]">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-3">Research Focus</h4>
                    <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">
                      Strong emphasis on research with multiple centers of excellence in AI, 
                      renewable energy, and advanced materials.
                    </p>
                  </div>
                  <div className="p-5 bg-[var(--bg-tertiary)] rounded-xl border border-[var(--glass-border)]">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-3">Industry Connections</h4>
                    <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">
                      Strong ties with leading companies ensuring excellent placement opportunities 
                      and industry exposure.
                    </p>
                  </div>
                  <div className="p-5 bg-[var(--bg-tertiary)] rounded-xl border border-[var(--glass-border)]">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-3">State-of-art Labs</h4>
                    <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">
                      Modern laboratories equipped with the latest technology for hands-on learning 
                      and research activities.
                    </p>
                  </div>
                </div>
              </section>

              {/* My Experience */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
                  My Experience at IIT Patna
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                    Joining IIT Patna for my BBA has been one of the best decisions of my life. 
                    The unique combination of business education at an engineering-focused institute 
                    has given me a competitive edge in understanding both technology and business.
                  </p>

                  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
                    <Image
                      src="/IMG_20230921_084941.jpg"
                      alt="Mahender at IIT Patna"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6 bg-gradient-to-r from-[var(--accent-orange)]/10 to-[var(--accent-purple)]/10 rounded-xl border border-[var(--accent-orange)]/30">
                    <h4 className="font-semibold text-[var(--accent-orange)] mb-3">🎓 Tata Foundation Scholar (2023-2026)</h4>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      I&apos;m honored to be a Tata Foundation Scholar, which recognizes academic excellence 
                      and leadership potential. This scholarship has supported my education and motivated 
                      me to give back to the community.
                    </p>
                  </div>
                </div>
              </section>

              {/* Roles & Responsibilities */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
                  Campus Roles & Responsibilities
                </h2>
                
                <div className="space-y-4">
                  <div className="p-5 bg-[var(--bg-tertiary)] rounded-xl border border-[var(--accent-cyan)]/30">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">👔</span>
                      <h4 className="font-semibold text-[var(--text-primary)]">Internship & Placement Coordinator</h4>
                    </div>
                    <p className="text-[var(--text-tertiary)]">
                      Coordinated 15+ placement drives and improved placement success rate by 25%. 
                      Connected students with top recruiters and mentored juniors in interview preparation.
                    </p>
                  </div>
                  
                  <div className="p-5 bg-[var(--bg-tertiary)] rounded-xl border border-[var(--accent-purple)]/30">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🚀</span>
                      <h4 className="font-semibold text-[var(--text-primary)]">Co-Founder, CampusBuzz</h4>
                    </div>
                    <p className="text-[var(--text-tertiary)]">
                      Built a campus engagement platform that reached 5K+ students across multiple colleges. 
                      Organized events, managed communications, and created a vibrant student community.
                    </p>
                  </div>
                </div>
              </section>

              {/* Photos */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
                  Glimpses of Campus Life
                </h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="/IMG_20231223_133945.jpg"
                      alt="Campus Life at IIT Patna"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-[var(--bg-tertiary)] flex items-center justify-center">
                    <Image
                      src="/iitp-logo.png"
                      alt="IIT Patna Logo"
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
                  Want to Know More?
                </h2>
                
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                  If you&apos;re a prospective student or just curious about life at IIT Patna, feel free 
                  to reach out. I&apos;m always happy to share my experiences and help fellow students.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:mahender_2311res32@iitp.ac.in"
                    className="btn-primary px-6 py-3"
                  >
                    Email Me (Institute)
                  </a>
                  <Link 
                    href="/blog/all-about-me"
                    className="btn-ghost px-6 py-3"
                  >
                    Read My Full Story
                  </Link>
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
