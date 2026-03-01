"use client";

import { useRef, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { timelineEvents, timelineTypes, TimelineEvent } from "@/data/timeline";
import GlassCard from "../ui/GlassCard";
import Icon from "../ui/Icon";

export default function JourneyTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedType, setSelectedType] = useState("all");

  const filteredEvents = useMemo(() => {
    if (selectedType === "all") return timelineEvents;
    return timelineEvents.filter((e) => e.type === selectedType);
  }, [selectedType]);

  return (
    <section
      ref={sectionRef}
      id="journey"
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
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-[var(--accent-orange)] bg-[var(--accent-orange)]/10 rounded-full border border-[var(--accent-orange)]/20">
            Timeline
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-display font-accent font-bold mb-3 sm:mb-4">
            <span className="text-[var(--text-primary)]">The</span>{" "}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-body-lg text-[var(--text-tertiary)] max-w-2xl mx-auto px-2">
            From student to founder — the milestones that shaped my path.
          </p>
        </motion.div>

        {/* Type Filter - horizontal scroll on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full overflow-x-auto pb-2 scrollbar-hide"
        >
          <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 min-w-max px-2 sm:px-0">
            {timelineTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl transition-all whitespace-nowrap ${
                  selectedType === type.id
                    ? "bg-[var(--accent-orange)] text-white"
                    : "bg-[var(--glass-bg)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] border border-[var(--glass-border)]"
                }`}
              >
                <Icon name={type.icon} size={16} />
                {type.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="container-max px-4 sm:px-6">
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-3 sm:left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-red)] via-[var(--accent-orange)] to-[var(--accent-orange)] md:-translate-x-1/2" />

          {/* Events */}
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            {filteredEvents.map((event, index) => (
              <TimelineCard
                key={event.id}
                event={event}
                index={index}
                isInView={isInView}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[var(--accent-orange)]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[var(--accent-red)]/5 rounded-full blur-[150px]" />
      </div>
    </section>
  );
}

interface TimelineCardProps {
  event: TimelineEvent;
  index: number;
  isInView: boolean;
  isLeft: boolean;
}

function TimelineCard({ event, index, isInView, isLeft }: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3, delay: Math.min(index * 0.08, 0.4) }}
      className={`relative flex items-center gap-3 sm:gap-4 md:gap-8 will-change-[opacity] ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline Node */}
      <div className="absolute left-3 sm:left-4 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 md:-translate-x-1/2 z-10">
        <div
          className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white/50"
          style={{ background: event.gradient }}
        />
      </div>

      {/* Date Badge - Desktop */}
      <div
        className={`hidden md:flex w-1/2 ${
          isLeft ? "justify-end pr-8" : "justify-start pl-8"
        }`}
      >
        <div
          className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl"
          style={{
            background: `${event.gradient.match(/#[a-fA-F0-9]{6}/)?.[0]}20`,
          }}
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: event.gradient }}>
            <Icon name={event.icon} size={18} className="text-white" />
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
              {event.year}
            </div>
            {event.month && (
              <div className="text-[10px] sm:text-xs text-[var(--text-muted)]">
                {event.month}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div
        className={`w-full md:w-1/2 pl-9 sm:pl-12 md:pl-0 ${
          isLeft ? "md:pl-8" : "md:pr-8"
        }`}
      >
        <GlassCard className="p-4 sm:p-5 md:p-6 group hover:translate-y-[-4px] transition-transform duration-300">
          {/* Mobile Date */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: event.gradient }}>
              <Icon name={event.icon} size={14} className="text-white" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[var(--text-secondary)]">
              {event.month ? `${event.month} ` : ""}
              {event.year}
            </span>
          </div>

          {/* Type Badge */}
          <span
            className="inline-block px-1.5 sm:px-2 py-0.5 mb-1.5 sm:mb-2 text-[10px] sm:text-xs font-medium rounded-full capitalize"
            style={{
              background: `${event.gradient.match(/#[a-fA-F0-9]{6}/)?.[0]}20`,
              color: event.gradient.match(/#[a-fA-F0-9]{6}/)?.[0],
            }}
          >
            {event.type}
          </span>

          {/* Title */}
          <h3
            className="text-base sm:text-lg md:text-xl font-bold mb-0.5 sm:mb-1"
            style={{
              background: event.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {event.title}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-2 sm:mb-3">
            {event.subtitle}
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[var(--text-tertiary)] mb-3 sm:mb-4">
            {event.description}
          </p>

          {/* Highlights */}
          {event.highlights && (
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {event.highlights.map((highlight, i) => (
                <span
                  key={i}
                  className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-black/40 backdrop-blur-md rounded-md sm:rounded-lg text-[var(--text-muted)]"
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}

          {/* Gradient accent */}
          <div
            className="absolute top-0 left-0 w-0.5 sm:w-1 h-full rounded-l-xl sm:rounded-l-2xl opacity-50 group-hover:opacity-100 transition-opacity"
            style={{ background: event.gradient }}
          />
        </GlassCard>
      </div>
    </motion.div>
  );
}







