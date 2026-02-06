"use client";

import { useRef, useState, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { techStack, categories, ringLabels, TechSkill } from "@/data/skills";

export default function TechUniverse() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredTech, setHoveredTech] = useState<TechSkill | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter technologies based on category and search
  const filteredTech = useMemo(() => {
    return techStack.filter((tech) => {
      const matchesCategory =
        selectedCategory === "all" || tech.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        tech.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Group by ring for display
  const techByRing = useMemo(() => {
    const grouped: { [key: number]: TechSkill[] } = {};
    filteredTech.forEach((tech) => {
      if (!grouped[tech.ring]) grouped[tech.ring] = [];
      grouped[tech.ring].push(tech);
    });
    return grouped;
  }, [filteredTech]);

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Section Header */}
      <div className="container-max mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/10 rounded-full border border-[var(--accent-cyan)]/20">
            Tech Stack
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-display font-accent font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Technology</span>{" "}
            <span className="text-[var(--text-primary)]">Universe</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-body-lg text-[var(--text-tertiary)] max-w-2xl mx-auto px-2">
            {techStack.length}+ technologies mastered across AI, cloud, data
            science, and full-stack development.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          {/* Search */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:w-64">
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 pl-9 sm:pl-10 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl text-sm sm:text-base text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-purple)] transition-colors"
            />
            <svg
              className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-muted)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Category filters - horizontal scroll on mobile */}
          <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 min-w-max px-4 sm:px-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? "bg-[var(--accent-purple)] text-white"
                      : "bg-[var(--glass-bg)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] border border-[var(--glass-border)]"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech Rings Visualization */}
      <div className="container-max px-4 sm:px-6">
        <div className="relative">
          {/* Orbital rings visual - static for performance */}
          <div className="absolute inset-0 items-center justify-center pointer-events-none hidden md:flex">
            {[1, 2, 3, 4, 5, 6].map((ring) => (
              <div
                key={ring}
                className="absolute rounded-full border border-[var(--glass-border)] opacity-10"
                style={{
                  width: `${ring * 120 + 100}px`,
                  height: `${ring * 120 + 100}px`,
                }}
              />
            ))}
          </div>

          {/* Tech items by ring */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            {ringLabels.map(({ ring, label }) => {
              const techs = techByRing[ring] || [];
              if (techs.length === 0) return null;

              return (
                <motion.div
                  key={ring}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: ring * 0.05 }}
                  className="relative"
                >
                  {/* Ring label */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold"
                      style={{
                        background: `linear-gradient(135deg, var(--accent-purple), var(--accent-cyan))`,
                      }}
                    >
                      {ring}
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[var(--text-primary)]">
                      {label}
                    </h3>
                    <span className="text-xs sm:text-sm text-[var(--text-muted)]">
                      ({techs.length})
                    </span>
                  </div>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {techs.map((tech) => (
                      <button
                        key={tech.id}
                        onMouseEnter={() => setHoveredTech(tech)}
                        onMouseLeave={() => setHoveredTech(null)}
                        className="group relative px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-purple)]/50 transition-colors duration-200 hover:scale-105 active:scale-95"
                      >
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <div
                            className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full"
                            style={{ backgroundColor: tech.color }}
                          />
                          <span className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
                            {tech.name}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hovered tech detail tooltip - shown at bottom, positioned better on mobile */}
      <AnimatePresence>
        {hoveredTech && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-4 sm:bottom-8 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-50 px-4 sm:px-6 py-3 sm:py-4 bg-[var(--bg-secondary)] border border-[var(--glass-border)] rounded-xl sm:rounded-2xl shadow-2xl"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${hoveredTech.color}20` }}
              >
                <div
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
                  style={{ backgroundColor: hoveredTech.color }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm sm:text-base text-[var(--text-primary)] truncate">
                  {hoveredTech.name}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-tertiary)] capitalize truncate">
                  {hoveredTech.category}
                </p>
              </div>
              <div className="flex-shrink-0">
                <span 
                  className="px-2 py-1 text-xs rounded-full"
                  style={{ 
                    backgroundColor: `${hoveredTech.color}20`,
                    color: hoveredTech.color 
                  }}
                >
                  Ring {hoveredTech.ring}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[var(--accent-cyan)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[var(--accent-purple)]/5 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
