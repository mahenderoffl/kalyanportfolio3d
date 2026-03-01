"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#identity", label: "About" },
  { href: "#tech", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#global", label: "Clients" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? window.scrollY / height : 0);
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (!isHomePage && href.startsWith("#")) {
      window.location.href = "/" + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--glass-border)]"
          : "bg-transparent"
          }`}
      >
        <nav className="container-max flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="relative z-50 flex items-center">
            <span className="font-accent font-bold text-xl text-[var(--text-primary)]">
              Kalyan Singh
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-3 lg:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeSection === link.href.replace("#", "")
                  ? "text-[var(--text-primary)] bg-[var(--glass-bg)] border border-[var(--glass-border)]"
                  : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* <Link href="/resume" className="btn-ghost text-sm px-4 py-2">
              Resume
            </Link> */}
            <Link href="/book-a-call" className="btn-primary text-sm px-4 py-2">
              Let&apos;s Talk
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 md:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-[var(--text-primary)] rounded-full origin-left transition-transform duration-200 ${isOpen ? "rotate-45 translate-y-[1px]" : ""}`} />
              <span className={`w-full h-0.5 bg-[var(--text-primary)] rounded-full transition-all duration-200 ${isOpen ? "opacity-0 translate-x-4" : ""}`} />
              <span className={`w-full h-0.5 bg-[var(--text-primary)] rounded-full origin-left transition-transform duration-200 ${isOpen ? "-rotate-45 -translate-y-[1px]" : ""}`} />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-md" onClick={() => setIsOpen(false)} />
        <nav className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[var(--bg-secondary)] border-l border-[var(--glass-border)] flex flex-col pt-24 px-8 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-4 py-3 text-lg font-medium rounded-xl transition-all duration-150 ${activeSection === link.href.replace("#", "")
                  ? "bg-[var(--glass-bg)] text-[var(--text-primary)]"
                  : "text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg)]"
                  }`}
                style={{ transitionDelay: isOpen ? `${index * 30}ms` : "0ms" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {/* <Link href="/resume" className="btn-ghost text-center py-3" onClick={() => setIsOpen(false)}>
              View Resume
            </Link> */}
            <Link href="/book-a-call" className="btn-primary text-center py-3" onClick={() => setIsOpen(false)}>
              Let&apos;s Talk
            </Link>
          </div>

          <div className="mt-auto pb-8 flex items-center justify-center gap-4">
            <a href="https://github.com/bodakalyansingh" target="_blank" rel="noopener noreferrer" className="btn-icon">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/bodakalyansingh" target="_blank" rel="noopener noreferrer" className="btn-icon">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="mailto:bodakalyansingh@gmail.com" className="btn-icon">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>

      <div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--accent-red)] via-[var(--accent-red)] to-[var(--accent-orange)] origin-left z-[60]"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </>
  );
}





