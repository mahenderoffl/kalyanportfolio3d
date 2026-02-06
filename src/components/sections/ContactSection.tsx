"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import GlassCard from "../ui/GlassCard";

// Contact info items with copy functionality
const contactInfo = [
  {
    label: "Work Email",
    value: "mahender@waveseed.app",
    copyValue: "mahender@waveseed.app",
    color: "#8B5CF6",
  },
  {
    label: "Personal Email",
    value: "mahendercreates@gmail.com",
    copyValue: "mahendercreates@gmail.com",
    color: "#EA4335",
  },
  {
    label: "Institute Email",
    value: "mahender_2311res32@iitp.ac.in",
    copyValue: "mahender_2311res32@iitp.ac.in",
    color: "#FFD700",
  },
  {
    label: "Phone",
    value: "+91 9391076809",
    copyValue: "+919391076809",
    color: "#10b981",
  },
  {
    label: "Company",
    value: "waveseed.app",
    copyValue: "https://waveseed.app",
    color: "#3b82f6",
  },
];

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-1.5 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--accent-purple)]/20 transition-colors opacity-0 group-hover:opacity-100"
      title={`Copy ${label}`}
    >
      {copied ? (
        <svg className="w-4 h-4 text-[var(--accent-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
      )}
    </button>
  );
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact from ${formState.name}`);
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\nCompany: ${formState.company || 'N/A'}\n\nMessage:\n${formState.message}`
      );
      
      // Open email client
      window.location.href = `mailto:mahender@waveseed.app?subject=${subject}&body=${body}`;
      
      setIsSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: "", email: "", company: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try emailing directly at mahender@waveseed.app');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mahendercreates",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "#0A66C2",
    },
    {
      name: "GitHub",
      url: "https://github.com/mahenderoffl",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "#ffffff",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/waveseedco",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: "#E4405F",
    },
    {
      name: "Work Email",
      url: "mailto:mahender@waveseed.app",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "#8B5CF6",
    },
    {
      name: "Personal",
      url: "mailto:mahendercreates@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "#EA4335",
    },
    {
      name: "IIT Patna",
      url: "mailto:mahender_2311res32@iitp.ac.in",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      color: "#FFD700",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container-max px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-[var(--accent-green)] bg-[var(--accent-green)]/10 rounded-full border border-[var(--accent-green)]/20">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-display font-accent font-bold mb-3 sm:mb-4">
            <span className="text-[var(--text-primary)]">Let&apos;s</span>{" "}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-body-lg text-[var(--text-tertiary)] max-w-2xl mx-auto px-2 mb-2">
            Have a project in mind? Want to collaborate? Or just say hi? I&apos;d love to hear from you.
          </p>
          <p className="text-sm sm:text-base text-[var(--accent-purple)] font-medium">
            Want to hire me? Let&apos;s discuss how I can help your business grow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <GlassCard className="p-3 sm:p-4 md:p-5">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-[var(--accent-purple)]/20 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[var(--accent-purple)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs md:text-sm text-[var(--text-muted)]">Location</div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-[var(--text-primary)] truncate">Hyderabad, India</div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-3 sm:p-4 md:p-5">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-[var(--accent-cyan)]/20 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[var(--accent-cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs md:text-sm text-[var(--text-muted)]">Availability</div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-[var(--accent-green)]">Open to Work</div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Contact Info with Copy */}
            <GlassCard className="p-4 sm:p-5 md:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-4">
                Contact Information
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-3">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="relative group p-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--glass-border)] hover:border-[var(--accent-purple)]/50 transition-all"
                  >
                    <CopyButton text={info.copyValue} label={info.label} />
                    <div className="text-[10px] sm:text-xs text-[var(--text-muted)] mb-1">{info.label}</div>
                    <div 
                      className="text-xs sm:text-sm font-medium truncate pr-8"
                      style={{ color: info.color }}
                    >
                      {info.value}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Social Links */}
            <GlassCard className="p-4 sm:p-5 md:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-3 sm:mb-4">
                Connect with me
              </h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[var(--bg-tertiary)] hover:bg-[var(--glass-bg)] border border-transparent hover:border-[var(--glass-border)] transition-all group"
                  >
                    <span
                      className="p-1.5 sm:p-2 rounded-md sm:rounded-lg transition-colors flex-shrink-0"
                      style={{
                        backgroundColor: `${social.color}20`,
                        color: social.color,
                      }}
                    >
                      {social.icon}
                    </span>
                    <span className="text-xs sm:text-sm md:text-base font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors truncate">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </GlassCard>

            {/* CTA Card */}
            <GlassCard className="p-4 sm:p-5 md:p-6 border-[var(--accent-purple)]/30">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-[var(--accent-purple)] to-[var(--accent-pink)] flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-0.5 sm:mb-1">
                    Book a Call
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-tertiary)] mb-2 sm:mb-3">
                    Schedule a 30-minute discovery call to discuss your project.
                  </p>
                  <a
                    href="/book-a-call"
                    className="btn-primary inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
                  >
                    Schedule Now
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassCard className="p-4 sm:p-5 md:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-4 sm:mb-5 md:mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 text-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 rounded-full bg-[var(--accent-green)]/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[var(--accent-green)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-1 sm:mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-sm sm:text-base text-[var(--text-tertiary)]">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form 
                onSubmit={handleSubmit} 
                className="space-y-4 sm:space-y-5"
              >
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1.5 sm:mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-sm sm:text-base text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-purple)] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1.5 sm:mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-sm sm:text-base text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-purple)] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1.5 sm:mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-sm sm:text-base text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-purple)] transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1.5 sm:mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-sm sm:text-base text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-purple)] transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-2.5 sm:py-3 flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="w-5 h-5 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[var(--accent-purple)]/10 to-transparent rounded-full blur-[100px]" />
      </div>
    </section>
  );
}
