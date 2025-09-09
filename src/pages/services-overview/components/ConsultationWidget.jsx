import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationWidget = ({ currentService }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    {
      title: "Ready to Transform Your Business?",
      subtitle: "Schedule a free consultation to discuss your project needs",
      cta: "Book Free Consultation"
    },
    {
      title: "Get Expert Technical Guidance",
      subtitle: "Our specialists are ready to help you choose the right solution",
      cta: "Talk to an Expert"
    },
    {
      title: "Start Your Digital Journey",
      subtitle: "Let's explore how we can accelerate your business growth",
      cta: "Schedule Discovery Call"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages?.length]);

  const getCurrentMessage = () => {
    if (currentService && serviceSpecificMessages?.[currentService]) {
      return serviceSpecificMessages?.[currentService];
    }
    return messages?.[currentMessage];
  };

  const message = getCurrentMessage();

  return (
    isVisible && (
      <div
        className={`fixed right-6 bottom-6 z-40 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="bg-card border border-border rounded-xl shadow-card-hover p-6 max-w-sm relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            {/* Left Icon + Title */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="MessageSquare" size={16} color="white" />
              </div>
              <span className="text-sm font-medium text-foreground">
                CloudNexus Consultation
              </span>
            </div>

            {/* Right: Status + Close */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-xs text-success font-medium">Online</span>
              </div>

              {/* Close Icon */}
              <button
                onClick={() => setIsVisible(false)}
                className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center 
                           hover:bg-accent/90 transition-colors duration-200"
                aria-label="Close"
              >
                <Icon name="X" size={16} color="white" />
              </button>
            </div>
          </div>

          {/* Message Content */}
          <div className="mb-4">
            <h4 className="text-lg font-bold text-foreground mb-2">
              {message?.title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {message?.subtitle}
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="Shield" size={12} />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={12} />
              <span>200+ projects</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-2">
            <Link to="/contact-consultation">
              <Button
                variant="default"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                iconSize={16}
                className="bg-cta hover:bg-cta/90 cta-shadow"
              >
                {message?.cta}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default ConsultationWidget;
