import React, { useEffect } from "react";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import CompanyNarrative from "./components/CompanyNarrative";
import ServicesConstellation from "./components/ServicesConstellation";
import ClientSuccessMetrics from "./components/ClientSuccessMetrics";
import ContextualCTA from "./components/ContextualCTA";
import Footer from "../../components/ui/Footer";


const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Set page title
    document.title = "CloudNexus Portfolio";

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute(
        "content",
        "Transform your business with cutting-edge technology solutions. We partner with forward-thinking companies to deliver innovation that drives measurable results."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Transform your business with cutting-edge technology solutions. We partner with forward-thinking companies to deliver innovation that drives measurable results.";
      document.getElementsByTagName("head")?.[0]?.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section with Animated Typing */}
        <HeroSection />

        {/* Interactive Company Narrative */}
        <CompanyNarrative />

        {/* Services Constellation */}
        <ServicesConstellation />

        {/* Client Success Metrics */}
        <ClientSuccessMetrics />

        {/* Contextual CTA */}
        <ContextualCTA />
      </main>

      {/* Footer */}
       <Footer />

    </div>
  );
};

export default Homepage;
