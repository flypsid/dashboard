import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import dynamique des composants pour le chargement optimisé
const HeroSectionClient = dynamic(
  () => import("@/components/HeroSectionClient")
);
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const ProjectSection = dynamic(() => import("@/components/ProjectSection"));
const TestimonialsSection = dynamic(
  () => import("@/components/TestimonialsSection")
);
const CtaSection = dynamic(() => import("@/components/CtaSection"));

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth">
        {/* Hero Section */}
        <HeroSectionClient />

        {/* Services Section */}
        <ServicesSection />

        {/* Project Section */}
        <ProjectSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CtaSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Homepage;
