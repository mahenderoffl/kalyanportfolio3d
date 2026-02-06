"use client";

import { useRef, useState, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects, projectCategories, Project } from "@/data/projects";
import GlassCard from "../ui/GlassCard";
import Icon from "../ui/Icon";

export default function ProjectsGalaxy() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Section Header */}
      <div className="container-max mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-[var(--accent-pink)] bg-[var(--accent-pink)]/10 rounded-full border border-[var(--accent-pink)]/20">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-display font-accent font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Projects</span>{" "}
            <span className="text-[var(--text-primary)]">Galaxy</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-body-lg text-[var(--text-tertiary)] max-w-2xl mx-auto px-2">
            From AI-powered products to data analytics solutions — explore what
            I&apos;ve built.
          </p>
        </motion.div>

        {/* Category Filter - horizontal scroll on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full overflow-x-auto pb-2 scrollbar-hide"
        >
          <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 min-w-max px-2 sm:px-0">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-[var(--accent-purple)] text-white"
                    : "bg-[var(--glass-bg)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] border border-[var(--glass-border)]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="container-max px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
                isExpanded={expandedProject === project.id}
                onToggle={() =>
                  setExpandedProject(
                    expandedProject === project.id ? null : project.id
                  )
                }
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[var(--accent-pink)]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-[var(--accent-purple)]/5 rounded-full blur-[150px]" />
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

function ProjectCard({
  project,
  index,
  isInView,
  isExpanded,
  onToggle,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
      className={`will-change-[opacity] ${isExpanded ? "sm:col-span-2 lg:col-span-2" : ""}`}
    >
      <GlassCard
        className="h-full p-4 sm:p-5 md:p-6 cursor-pointer group hover:scale-[1.01] transition-transform duration-200"
        onClick={onToggle}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 flex-wrap">
              {project.isUpcoming && (
                <span className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full animate-pulse">
                  🚀 UPCOMING
                </span>
              )}
              {project.isNew && !project.isUpcoming && (
                <span className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-semibold bg-[var(--accent-green)] text-white rounded-full">
                  NEW
                </span>
              )}
              <span
                className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-medium rounded-full capitalize"
                style={{
                  background: `${project.gradient.match(/#[a-fA-F0-9]{6}/)?.[0]}20`,
                  color: project.gradient.match(/#[a-fA-F0-9]{6}/)?.[0],
                }}
              >
                {project.category === "cofounded"
                  ? "Co-Founded"
                  : project.category === "analytics"
                  ? "Analytics"
                  : project.category === "upcoming"
                  ? "Coming Soon"
                  : "Product"}
              </span>
            </div>
            <h3
              className="text-base sm:text-lg md:text-xl font-bold mb-0.5 sm:mb-1 truncate"
              style={{
                background: project.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] truncate">
              {project.subtitle}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="p-1.5 sm:p-2 rounded-lg bg-[var(--glass-bg)] flex-shrink-0 ml-2"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-muted)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[var(--text-tertiary)] mb-3 sm:mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-1.5 sm:p-2 rounded-lg bg-[var(--bg-tertiary)]/50"
            >
              <div className="flex justify-center mb-0.5">
                <Icon name={stat.icon} size={16} className="text-[var(--text-secondary)]" />
              </div>
              <div
                className="text-xs sm:text-sm font-bold"
                style={{
                  background: project.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-[8px] sm:text-[10px] text-[var(--text-muted)] leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Features */}
              <div className="mb-3 sm:mb-4 pt-3 sm:pt-4 border-t border-[var(--glass-border)]">
                <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2 sm:mb-3">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[var(--text-secondary)]"
                    >
                      <div
                        className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full flex-shrink-0"
                        style={{ background: project.gradient }}
                      />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-3 sm:mb-4">
                <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2 sm:mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-md sm:rounded-lg text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {project.links && (
                <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-[var(--glass-border)]">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Live
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gradient line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-50 group-hover:opacity-100 transition-opacity"
          style={{ background: project.gradient }}
        />
      </GlassCard>
    </motion.div>
  );
}
