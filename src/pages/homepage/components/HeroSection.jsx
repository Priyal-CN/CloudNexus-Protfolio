import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Particles from "./ParticlesAnimation";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const valuePropositions = [
    "Technology that transforms",
    "Partnership that delivers",
    "Innovation with purpose",
  ];

  useEffect(() => {
    const text = valuePropositions?.[currentText];
    let index = 0;

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (index <= text?.length) {
          setDisplayText(text?.slice(0, index));
          index++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(false);
            setTimeout(() => {
              setCurrentText((prev) => (prev + 1) % valuePropositions?.length);
              setDisplayText("");
              setIsTyping(true);
            }, 1000);
          }, 2000);
          clearInterval(typingInterval);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [currentText, isTyping]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-trust">
      {/* Particle Animation Background */}
      <div className="absolute inset-0 z-0 bg-black/95">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={300}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="container-brand relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6 leading-tight">
            Transforming Business Through
            <span className="block text-accent mt-2 min-h-[1.2em]">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            We partner with forward-thinking companies to deliver cutting-edge
            technology solutions that drive measurable business outcomes and
            sustainable growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/contact-consultation">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
                className="bg-cta hover:bg-cta/90 cta-shadow text-lg px-8 py-4"
              >
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/portfolio-projects">
              <Button
                variant="outline"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={20}
                className="text-lg text-secondary px-8 py-4 hover:bg-accent hover:text-accent-foreground hover:border-accent"
              >
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-success" />
              <span className="text-sm font-medium text-muted">
                Enterprise Security
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} className="text-primary" />
              <span className="text-sm font-medium text-muted">
                200+ Clients
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
