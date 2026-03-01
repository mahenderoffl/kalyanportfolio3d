"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import GlassCard from "../ui/GlassCard";

const blogPosts = [
  {
    id: "founding-waveseed-my-vision",
    title: "Founding CampusBuzz: My Vision for the Future",
    excerpt: "Every successful platform starts with a simple observation. Here's how CampusBuzz came to be.",
    category: "Founder Story",
    date: "Feb 2026",
    readTime: "8 min",
    image: "/bio1.jpg",
    gradient: "linear-gradient(135deg, #0284c7 0%, #2dd4bf 100%)",
    accentColor: "var(--accent-orange)",
  },
  {
    id: "all-about-me",
    title: "All About Boda Kalyan Singh",
    excerpt: "My journey from IIT Kharagpur to founding multiple startups and building AI-powered solutions.",
    category: "Personal Story",
    date: "Feb 2026",
    readTime: "10 min",
    image: "/bio3.jpg",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accentColor: "var(--accent-red)",
  },
  {
    id: "life-at-iit-patna",
    title: "Life at IIT Kharagpur",
    excerpt: "Campus experiences, academics, and the journey of growth at one of India's premier institutes.",
    category: "Campus Life",
    date: "Feb 2026",
    readTime: "6 min",
    image: "/kgp.png",
    gradient: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)",
    accentColor: "var(--accent-orange)",
  },
];

export default function BlogPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Section Header */}
      <div className="container-max mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-[var(--accent-orange)] bg-[var(--accent-orange)]/10 rounded-full border border-[var(--accent-orange)]/20">
            Blog
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-display font-accent font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Thoughts &</span>{" "}
            <span className="text-[var(--text-primary)]">Stories</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-body-lg text-[var(--text-tertiary)] max-w-2xl mx-auto">
            Personal insights, technical deep-dives, and stories from my journey.
          </p>
        </motion.div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container-max px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`}>
                <GlassCard className="h-full overflow-hidden hover:scale-[1.02] transition-transform duration-200 group">
                  {/* Image */}
                  <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden bg-black/40 backdrop-blur-md">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{ background: `linear-gradient(to top, ${post.accentColor}40, transparent)` }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 md:p-6">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between mb-2 sm:mb-3 flex-wrap gap-1">
                      <span
                        className="text-[10px] sm:text-xs font-medium px-2 py-0.5 sm:py-1 rounded-full"
                        style={{
                          background: `${post.accentColor}20`,
                          color: post.accentColor,
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="text-[10px] sm:text-xs text-[var(--text-muted)]">
                        {post.date} • {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mb-1.5 sm:mb-2 group-hover:text-[var(--accent-red)] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-[var(--text-tertiary)] leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div
                      className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium group-hover:gap-2 sm:group-hover:gap-3 transition-all"
                      style={{ color: post.accentColor }}
                    >
                      Read More
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8 sm:mt-10"
        >
          <Link
            href="/blog"
            className="btn-ghost px-6 sm:px-8 py-2.5 sm:py-3 inline-flex items-center gap-2 text-sm sm:text-base"
          >
            View All Posts
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}







