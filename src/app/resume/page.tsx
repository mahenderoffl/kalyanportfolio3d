"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { StarField, GradientMesh } from "@/components/effects";
import Navigation from "@/components/navigation/Navigation";
import Icon from "@/components/ui/Icon";

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true);
  const pdfUrl = "/Mahender_Tech_CV.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Mahender_Banoth_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <GradientMesh />
        <StarField starCount={80} />
      </div>

      <Navigation />

      <main className="pt-24 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6"
          >
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors mb-2"
              >
                <Icon name="code" size={16} />
                <span>Back to Portfolio</span>
              </Link>
              <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Resume
              </h1>
              <p className="text-[var(--text-tertiary)] mt-1">
                Mahender Banoth - Tech Entrepreneur & Product Architect
              </p>
            </div>

            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] text-white font-medium shadow-lg shadow-[var(--accent-purple)]/20 hover:shadow-[var(--accent-purple)]/40 transition-shadow"
            >
              <Icon name="file" size={18} />
              <span>Download PDF</span>
            </motion.button>
          </motion.div>

          {/* PDF Viewer Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl shadow-2xl"
          >
            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-secondary)]">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 border-3 border-[var(--accent-purple)] border-t-transparent rounded-full animate-spin" />
                  <span className="text-[var(--text-tertiary)] text-sm">
                    Loading resume...
                  </span>
                </div>
              </div>
            )}

            {/* PDF Embed */}
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              className="w-full bg-white"
              style={{ height: "calc(100vh - 180px)", minHeight: "400px" }}
              onLoad={() => setIsLoading(false)}
              title="Mahender Banoth Resume"
            />
          </motion.div>

          {/* Mobile Download CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-sm sm:hidden"
          >
            <p className="text-sm text-[var(--text-tertiary)] mb-3 text-center">
              For the best viewing experience, download the PDF
            </p>
            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] text-white font-medium"
            >
              <Icon name="file" size={18} />
              <span>Download Resume</span>
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Icon name="users" size={16} />
              <span>Contact Me</span>
            </Link>
            <Link
              href="/#projects"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Icon name="layers" size={16} />
              <span>View Projects</span>
            </Link>
            <a
              href="https://linkedin.com/in/mahenderbanoth"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Icon name="globe" size={16} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
