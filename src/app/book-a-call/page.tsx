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
              href="https://koalendar.com/e/meet-with-boda-kalyan-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-orange)] shadow-lg shadow-[var(--accent-red)]/25 hover:shadow-[var(--accent-red)]/40 transition-shadow"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Call
            </a>
            <a
              href="mailto:bodakalyansingh@gmail.com?subject=Let%27s%20Talk"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[var(--text-primary)] border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-black/40 backdrop-blur-md transition-colors"
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
              "50+ AI Agents Built",
              "IIT KGP Dept Topper",
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
              src="https://koalendar.com/e/meet-with-boda-kalyan-singh"
              title="Book a call with Boda Kalyan Singh"
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
              href="mailto:bodakalyansingh@gmail.com"
              className="p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-red)]/50 transition-colors group"
            >
              <div className="text-xs text-[var(--text-muted)] mb-1">Email</div>
              <div className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-red)] transition-colors truncate">
                bodakalyansingh@gmail.com
              </div>
            </a>
            <a
              href="https://linkedin.com/in/bodakalyansingh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-red)]/50 transition-colors group"
            >
              <div className="text-xs text-[var(--text-muted)] mb-1">LinkedIn</div>
              <div className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-red)] transition-colors truncate">
                bodakalyansingh
              </div>
            </a>
            <a
              href="https://github.com/bodakalyansingh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-red)]/50 transition-colors group"
            >
              <div className="text-xs text-[var(--text-muted)] mb-1">GitHub</div>
              <div className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-red)] transition-colors truncate">
                bodakalyansingh
              </div>
            </a>
            <a
              href="tel:+919885358212"
              className="p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-red)]/50 transition-colors group"
            >
              <div className="text-xs text-[var(--text-muted)] mb-1">Phone</div>
              <div className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-red)] transition-colors">
                +91 9885358212
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}







