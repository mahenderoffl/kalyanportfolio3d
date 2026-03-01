"use client";

import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/sections/Footer";
import { StarField, GradientMesh } from "@/components/effects";
import { motion } from "framer-motion";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import Image from "next/image";

const blogPosts = [
  {
    id: "all-about-me",
    title: "All About Boda Kalyan Singh: My Journey from IIT Kharagpur to Building AI Systems",
    excerpt:
      "From being a student at the prestigious Indian Institute of Technology Patna to founding WaveSeed Co. — this is my story of building AI-powered solutions that matter.",
    date: "February 2026",
    readTime: "10 min read",
    category: "Personal Story",
    featured: true,
    image: "/kalyan-profile.png",
  },
  {
    id: "life-at-iit-patna",
    title: "Life at IIT Kharagpur: Campus, Culture, and Opportunities",
    excerpt:
      "An inside look at life at the Indian Institute of Technology Patna — the academic excellence, vibrant campus culture, and incredible opportunities.",
    date: "February 2026",
    readTime: "7 min read",
    category: "Campus Life",
    featured: false,
    image: "/bio3.jpg",
  },
  {
    id: "founding-waveseed-my-vision",
    title: "Founding WaveSeed: My Vision for the Future of Business Automation",
    excerpt:
      "Why I started WaveSeed Co., the problems we're solving, and where we're headed in the world of AI-powered business tools.",
    date: "February 2026",
    readTime: "8 min read",
    category: "Founder Story",
    featured: false,
    image: null,
  },
];

export default function BlogPage() {
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
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[var(--accent-orange)] bg-[var(--accent-orange)]/10 rounded-full border border-[var(--accent-orange)]/20">
              Blog
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[var(--text-primary)]">Thoughts &</span>{" "}
              <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-[var(--text-tertiary)] max-w-2xl mx-auto">
              Sharing my journey as a founder, developer, and student navigating the intersection of technology and entrepreneurship.
            </p>
          </motion.div>

          {/* Featured Post */}
          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-12"
              >
                <Link href={`/blog/${post.id}`}>
                  <GlassCard className="overflow-hidden hover:border-[var(--accent-red)]/50 transition-colors group cursor-pointer">
                    {post.image && (
                      <div className="relative w-full h-48 sm:h-64">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg-primary)]" />
                      </div>
                    )}
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-orange)] text-white">
                          Featured
                        </span>
                        <span className="text-xs text-[var(--text-muted)]">{post.category}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-red)] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[var(--text-tertiary)] mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}

          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6">All Posts</h2>
            <div className="space-y-4">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`}>
                    <GlassCard className="overflow-hidden hover:border-[var(--accent-red)]/50 transition-colors group cursor-pointer">
                      <div className="flex flex-col sm:flex-row">
                        {post.image && (
                          <div className="relative w-full sm:w-48 h-32 sm:h-auto flex-shrink-0">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover sm:object-contain bg-white/5"
                            />
                          </div>
                        )}
                        <div className="p-6 flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-[var(--text-muted)]">{post.category}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-red)] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm text-[var(--text-tertiary)] mb-3">{post.excerpt}</p>
                          <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}








