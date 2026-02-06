"use client";

import Navigation from "@/components/navigation/Navigation";
import { StarField, GradientMesh } from "@/components/effects";
import { motion } from "framer-motion";

export default function BookACall() {
  return (
    <main className="min-h-screen relative">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <GradientMesh />
        <StarField starCount={100} />
      </div>

      <Navigation />
      
      <div className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Book a Call
            </h1>
            <p className="text-[var(--text-tertiary)] max-w-xl mx-auto">
              Choose a time that works for you or reach out directly. I&apos;ll get back quickly.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-3 justify-center mb-8"
          >
            <a
              href="https://koalendar.com/e/meet-with-great-talent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] shadow-lg shadow-[var(--accent-purple)]/25 hover:shadow-[var(--accent-purple)]/40 transition-shadow"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Call
            </a>
            <a
              href="mailto:mahender@waveseed.app?subject=Let%27s%20Talk"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[var(--text-primary)] border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-[var(--bg-tertiary)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Let&apos;s Talk
            </a>
          </motion.div>

          {/* Stats Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center mb-10"
          >
            {[
              "2+ Startups Founded",
              "10+ Countries Served",
              "10+ Products Shipped",
            ].map((stat) => (
              <span
                key={stat}
                className="px-4 py-2 rounded-full text-sm text-[var(--text-secondary)] bg-[var(--glass-bg)] border border-[var(--glass-border)]"
              >
                {stat}
              </span>
            ))}
          </motion.div>

          {/* Calendar Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl overflow-hidden border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl"
          >
            <iframe
              src="https://koalendar.com/e/meet-with-great-talent"
              title="Book a call with Mahender Banoth"
              width="100%"
              className="min-h-[500px] sm:min-h-[600px] md:min-h-[700px]"
              style={{ border: "none", height: "calc(100vh - 350px)" }}
              allowFullScreen
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <a
              href="mailto:mahender@waveseed.app"
              className="p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-purple)]/50 transition-colors group"
            >
              <div className="text-xs text-[var(--text-muted)] mb-1">Work Email</div>
              <div className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-purple)] transition-colors truncate">
                mahender@waveseed.app
              </div>
            </a>
            <a
              href="mailto:mahendercreates@gmail.com"
              className="p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-purple)]/50 transition-colors group"
            >
              <div className="text-xs text-[var(--text-muted)] mb-1">Personal Email</div>
              <div className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-purple)] transition-colors truncate">
                mahendercreates@gmail.com
              </div>
            </a>
            <a
              href="mailto:mahender_2311res32@iitp.ac.in"
              className="p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-purple)]/50 transition-colors group"
            >
              <div className="text-xs text-[var(--text-muted)] mb-1">Institute Email</div>
              <div className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-purple)] transition-colors truncate">
                mahender_2311res32@iitp.ac.in
              </div>
            </a>
            <a
              href="tel:+919391076809"
              className="p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-purple)]/50 transition-colors group"
            >
              <div className="text-xs text-[var(--text-muted)] mb-1">Phone</div>
              <div className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-purple)] transition-colors">
                +91 9391076809
              </div>
            </a>
            <a
              href="https://waveseed.app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-purple)]/50 transition-colors group"
            >
              <div className="text-xs text-[var(--text-muted)] mb-1">Company</div>
              <div className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-purple)] transition-colors">
                waveseed.app
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
