"use client";

import { StarField, GradientMesh } from "@/components/effects";
import HeroSection from "@/components/sections/HeroSection";
import IdentityCards from "@/components/sections/IdentityCards";
import TechUniverse from "@/components/sections/TechUniverse";
import ProjectsGalaxy from "@/components/sections/ProjectsGalaxy";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import GlobalPresence from "@/components/sections/GlobalPresence";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import BlogPreview from "@/components/sections/BlogPreview";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import Navigation from "@/components/navigation/Navigation";
import ScrollToTop from "@/components/ui/ScrollToTop";
import PageLoader from "@/components/ui/PageLoader";
import FloatingActions from "@/components/ui/FloatingActions";

export default function Home() {
  return (
    <>
      <PageLoader />
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Effects Layer */}
        <div className="fixed inset-0 -z-10">
          <GradientMesh />
          <StarField starCount={150} />
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Content Sections */}
        <HeroSection />
        <IdentityCards />
        <TechUniverse />
        <ProjectsGalaxy />
        <JourneyTimeline />
        <GlobalPresence />
        <CaseStudiesPreview />
        <BlogPreview />
        <ContactSection />
        <Footer />

        {/* Floating UI */}
        <ScrollToTop />
        <FloatingActions />
      </div>
    </>
  );
}
