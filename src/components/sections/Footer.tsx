"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = 2026;

  const footerLinks = {
    navigation: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#identity" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Journey", href: "#journey" },
      { name: "Contact", href: "#contact" },
    ],
    products: [
      { name: "CampusBuzz", href: "#" },
      { name: "Olive Orange", href: "#" },
    ],
    social: [
      { name: "LinkedIn", href: "https://linkedin.com/in/bodakalyansingh" },
      { name: "GitHub", href: "https://github.com/bodakalyansingh" },
    ],
  };

  return (
    <footer className="relative py-8 sm:py-10 md:py-12 border-t border-[var(--glass-border)]">
      <div className="container-max px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-1"
          >
            <Link href="/" className="inline-block mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-accent font-bold gradient-text">
                Kalyan Singh
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[var(--text-tertiary)] max-w-xs">
              Building the future with AI-powered solutions. Software Engineer,
              AI Developer, and lifelong learner from IIT Kharagpur.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3 sm:mb-4">
              Navigation
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3 sm:mb-4">
              Startups
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[var(--accent-red)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1.5"
                  >
                    {link.name}
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3 sm:mb-4">
              Connect
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1.5 sm:gap-2"
                  >
                    {link.name}
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 sm:mt-4">
              <a
                href="mailto:bodakalyansingh@gmail.com"
                className="text-xs sm:text-sm text-[var(--accent-red)] hover:text-[var(--accent-orange)] transition-colors break-all"
              >
                bodakalyansingh@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6 sm:pt-8 border-t border-[var(--glass-border)] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4"
        >
          <p className="text-[10px] sm:text-xs md:text-sm text-[var(--text-muted)] text-center sm:text-left">
            © {currentYear} Boda Kalyan Singh. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm text-[var(--text-muted)] text-center sm:text-right">
            Built with{" "}
            <span className="text-[var(--accent-orange)] inline-flex items-center">passion</span> using Next.js,
            Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-red)] to-transparent opacity-50" />
    </footer>
  );
}






