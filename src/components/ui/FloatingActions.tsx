"use client";

import { useState } from "react";

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);

  // Hide on mobile to avoid overlap with content
  const actions = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      label: "View Resume",
      href: "/resume",
      color: "var(--accent-green)",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: "Book a Call",
      href: "/book-a-call",
      color: "var(--accent-red)",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      href: "https://linkedin.com/in/bodakalyansingh",
      color: "#0A66C2",
      external: true,
    },
  ];

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 z-50 hidden sm:block">
      {/* Action Buttons */}
      <div
        className={`absolute bottom-16 left-0 flex flex-col gap-3 transition-all duration-200 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {actions.map((action, index) => (
          <a
            key={action.label}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noopener noreferrer" : undefined}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-full bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] hover:border-[var(--glass-border-hover)] transition-all duration-150 group ${isOpen ? "translate-x-0" : "-translate-x-4"
              }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <span
              className="p-2 rounded-full transition-colors"
              style={{
                backgroundColor: `${action.color}20`,
                color: action.color,
              }}
            >
              {action.icon}
            </span>
            <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors whitespace-nowrap">
              {action.label}
            </span>
          </a>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-orange)] text-white shadow-lg transition-transform duration-150 hover:scale-105 active:scale-95"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
}






