import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContextualCTA = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [ctaVariant, setCTAVariant] = useState('primary');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      
      // Change CTA based on scroll position
      if (position > 2000) {
        setCTAVariant('secondary');
      } else if (position > 1000) {
        setCTAVariant('services');
      } else {
        setCTAVariant('primary');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ctaContent = {
    primary: {
      title: 'Ready to Transform Your Business?',
      subtitle: 'Schedule a free consultation to discuss your technology needs',
      buttonText: 'Get Started Today',
      buttonIcon: 'Calendar',
      link: '/contact-consultation'
    },
    services: {
      title: 'Explore Our Technology Services',
      subtitle: 'Discover how our expertise can accelerate your growth',
      buttonText: 'View All Services',
      buttonIcon: 'ArrowRight',
      link: '/services-overview'
    },
    secondary: {
      title: 'See Our Work in Action',
      subtitle: 'Browse our portfolio of successful client transformations',
      buttonText: 'View Portfolio',
      buttonIcon: 'Eye',
      link: '/portfolio-projects'
    }
  };

  const currentCTA = ctaContent[ctaVariant];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-cta text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container-brand relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Dynamic Content */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-sm">
            {currentCTA.title}
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
            {currentCTA.subtitle}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to={currentCTA.link}>
              <Button 
                variant="secondary"
                size="lg"
                iconName={currentCTA.buttonIcon}
                iconPosition="left"
                iconSize={20}
                className="bg-white text-primary hover:bg-surface text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {currentCTA.buttonText}
              </Button>
            </Link>
            
            {ctaVariant === 'primary' && (
              <Link to="/portfolio-projects">
                <Button 
                  variant="ghost"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  iconSize={20}
                  className="text-white border-white hover:bg-white/10 text-lg px-8 py-4"
                >
                  Watch Demo
                </Button>
              </Link>
            )}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} />
              <span>+91 8793890447</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={16} />
              <span>work@cloudnexus.in</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span>Response within 24 hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-8 w-6 h-6 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
    </section>
  );
};

export default ContextualCTA;