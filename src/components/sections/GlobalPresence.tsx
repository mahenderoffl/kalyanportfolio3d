"use client";

import { useRef, useMemo, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import GlassCard from "../ui/GlassCard";

// Dynamically import Earth3D to avoid SSR issues
const Earth3D = dynamic(() => import("../three/Earth3D"), { ssr: false });

interface City {
  name: string;
  country: string;
  lat: number;
  lng: number;
  region: string;
}

const globalPresence: City[] = [
  // USA
  { name: "New York", country: "USA", lat: 40.7128, lng: -74.006, region: "North America" },
  { name: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194, region: "North America" },
  { name: "Austin", country: "USA", lat: 30.2672, lng: -97.7431, region: "North America" },
  { name: "Los Angeles", country: "USA", lat: 34.0522, lng: -118.2437, region: "North America" },
  { name: "Chicago", country: "USA", lat: 41.8781, lng: -87.6298, region: "North America" },
  // Canada
  { name: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832, region: "North America" },
  { name: "Vancouver", country: "Canada", lat: 49.2827, lng: -123.1207, region: "North America" },
  // UK
  { name: "London", country: "UK", lat: 51.5074, lng: -0.1278, region: "Europe" },
  { name: "Manchester", country: "UK", lat: 53.4808, lng: -2.2426, region: "Europe" },
  // Germany
  { name: "Berlin", country: "Germany", lat: 52.52, lng: 13.405, region: "Europe" },
  { name: "Munich", country: "Germany", lat: 48.1351, lng: 11.582, region: "Europe" },
  // France & Netherlands
  { name: "Paris", country: "France", lat: 48.8566, lng: 2.3522, region: "Europe" },
  { name: "Amsterdam", country: "Netherlands", lat: 52.3676, lng: 4.9041, region: "Europe" },
  // India
  { name: "Bengaluru", country: "India", lat: 12.9716, lng: 77.5946, region: "Asia Pacific" },
  { name: "Mumbai", country: "India", lat: 19.076, lng: 72.8777, region: "Asia Pacific" },
  { name: "Delhi", country: "India", lat: 28.6139, lng: 77.209, region: "Asia Pacific" },
  { name: "Hyderabad", country: "India", lat: 17.385, lng: 78.4867, region: "Asia Pacific" },
  { name: "Chennai", country: "India", lat: 13.0827, lng: 80.2707, region: "Asia Pacific" },
  // Middle East
  { name: "Dubai", country: "UAE", lat: 25.2048, lng: 55.2708, region: "Middle East" },
  { name: "Abu Dhabi", country: "UAE", lat: 24.4539, lng: 54.3773, region: "Middle East" },
  // Asia Pacific
  { name: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, region: "Asia Pacific" },
  { name: "Sydney", country: "Australia", lat: -33.8688, lng: 151.2093, region: "Asia Pacific" },
  { name: "Melbourne", country: "Australia", lat: -37.8136, lng: 144.9631, region: "Asia Pacific" },
];

const regions = [
  { name: "All Regions", id: "all", color: "#8B5CF6" },
  { name: "North America", id: "North America", color: "#3B82F6" },
  { name: "Europe", id: "Europe", color: "#10B981" },
  { name: "Asia Pacific", id: "Asia Pacific", color: "#F59E0B" },
  { name: "Middle East", id: "Middle East", color: "#EC4899" },
];

export default function GlobalPresence() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);

  const filteredCities = useMemo(() => {
    if (selectedRegion === "all") return globalPresence;
    return globalPresence.filter((city) => city.region === selectedRegion);
  }, [selectedRegion]);

  const stats = useMemo(() => {
    const countries = new Set(globalPresence.map((c) => c.country)).size;
    const cities = globalPresence.length;
    const regions = new Set(globalPresence.map((c) => c.region)).size;
    return { countries, cities, regions };
  }, []);

  // Pre-computed fixed positions for cities to avoid hydration mismatch
  const cityPositions: { [key: string]: { x: number; y: number } } = {
    "New York": { x: 94, y: 50 },
    "San Francisco": { x: 91, y: 59 },
    "Austin": { x: 84, y: 66 },
    "Los Angeles": { x: 75, y: 71 },
    "Chicago": { x: 64, y: 74 },
    "Toronto": { x: 52, y: 75 },
    "Vancouver": { x: 40, y: 74 },
    "London": { x: 29, y: 71 },
    "Manchester": { x: 19, y: 66 },
    "Berlin": { x: 12, y: 59 },
    "Munich": { x: 6, y: 50 },
    "Paris": { x: 6, y: 41 },
    "Amsterdam": { x: 12, y: 34 },
    "Bengaluru": { x: 19, y: 28 },
    "Mumbai": { x: 29, y: 24 },
    "Delhi": { x: 40, y: 21 },
    "Hyderabad": { x: 52, y: 20 },
    "Chennai": { x: 64, y: 21 },
    "Dubai": { x: 75, y: 24 },
    "Abu Dhabi": { x: 84, y: 28 },
    "Singapore": { x: 91, y: 34 },
    "Sydney": { x: 94, y: 41 },
    "Melbourne": { x: 94, y: 46 },
  };

  // Get position for a city - uses pre-computed positions
  const getCityPosition = (cityName: string) => {
    return cityPositions[cityName] || { x: 50, y: 50 };
  };

  return (
    <section
      ref={sectionRef}
      id="global"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container-max px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/10 rounded-full border border-[var(--accent-cyan)]/20">
            Worldwide Clients
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-display font-accent font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Global</span>{" "}
            <span className="text-[var(--text-primary)]">Presence</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--text-tertiary)] max-w-2xl mx-auto">
            Trusted by clients across continents. Building digital solutions for businesses worldwide.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-lg mx-auto mb-8 sm:mb-10"
        >
          <GlassCard className="p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
              {stats.cities}+
            </div>
            <div className="text-xs sm:text-sm text-[var(--text-tertiary)]">Cities</div>
          </GlassCard>
          <GlassCard className="p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
              {stats.countries}+
            </div>
            <div className="text-xs sm:text-sm text-[var(--text-tertiary)]">Countries</div>
          </GlassCard>
          <GlassCard className="p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
              {stats.regions}
            </div>
            <div className="text-xs sm:text-sm text-[var(--text-tertiary)]">Continents</div>
          </GlassCard>
        </motion.div>

        {/* Region Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10"
        >
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                selectedRegion === region.id
                  ? "text-white"
                  : "bg-[var(--glass-bg)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] border border-[var(--glass-border)]"
              }`}
              style={
                selectedRegion === region.id
                  ? { backgroundColor: region.color }
                  : {}
              }
            >
              {region.name}
            </button>
          ))}
        </motion.div>

        {/* Globe Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-3xl mx-auto"
        >
          <GlassCard className="p-4 sm:p-6 md:p-8 overflow-hidden">
            {/* Globe container */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* 3D Earth Background */}
              <Earth3D />
              
              {/* Rotating globe background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full"
                >
                  {/* Globe circles */}
                  {[1, 2, 3, 4].map((ring) => (
                    <div
                      key={ring}
                      className="absolute rounded-full border border-[var(--accent-purple)]/20"
                      style={{
                        width: `${ring * 25}%`,
                        height: `${ring * 25}%`,
                        top: `${50 - ring * 12.5}%`,
                        left: `${50 - ring * 12.5}%`,
                      }}
                    />
                  ))}
                  {/* Meridian lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[0, 45, 90, 135].map((angle) => (
                      <div
                        key={angle}
                        className="absolute w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)]/20 to-transparent"
                        style={{ transform: `rotate(${angle}deg)` }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* City dots */}
              {filteredCities.map((city, index) => {
                const pos = getCityPosition(city.name);
                const regionColor =
                  regions.find((r) => r.id === city.region)?.color || "#8B5CF6";
                return (
                  <motion.button
                    key={`${city.name}-${city.country}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    onMouseEnter={() => setHoveredCity(city)}
                    onMouseLeave={() => setHoveredCity(null)}
                    className="absolute z-10 group"
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Pulse effect */}
                    <span
                      className="absolute inset-0 rounded-full animate-ping opacity-30"
                      style={{ backgroundColor: regionColor }}
                    />
                    {/* Dot */}
                    <span
                      className="relative block w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-transform group-hover:scale-150"
                      style={{ backgroundColor: regionColor }}
                    />
                  </motion.button>
                );
              })}

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                    🌍
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--text-tertiary)] mt-1">
                    {filteredCities.length} locations
                  </div>
                </div>
              </div>
            </div>

            {/* Hovered city info */}
            <AnimatePresence>
              {hoveredCity && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6"
                >
                  <div className="bg-[var(--bg-secondary)] border border-[var(--glass-border)] rounded-lg p-3 sm:p-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor:
                            regions.find((r) => r.id === hoveredCity.region)?.color ||
                            "#8B5CF6",
                        }}
                      />
                      <div>
                        <div className="font-semibold text-[var(--text-primary)] text-sm sm:text-base">
                          {hoveredCity.name}, {hoveredCity.country}
                        </div>
                        <div className="text-xs text-[var(--text-tertiary)]">
                          {hoveredCity.region}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        </motion.div>

        {/* Cities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8 sm:mt-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
            {filteredCities.map((city, index) => {
              const regionColor =
                regions.find((r) => r.id === city.region)?.color || "#8B5CF6";
              return (
                <motion.div
                  key={`${city.name}-${city.country}-grid`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  className="p-2 sm:p-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg hover:border-[var(--accent-purple)]/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: regionColor }}
                    />
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-medium text-[var(--text-primary)] truncate">
                        {city.name}
                      </div>
                      <div className="text-[10px] sm:text-xs text-[var(--text-muted)] truncate">
                        {city.country}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[var(--accent-purple)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[var(--accent-cyan)]/5 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
