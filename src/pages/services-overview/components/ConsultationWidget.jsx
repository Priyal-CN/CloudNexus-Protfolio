import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationWidget = ({ currentService }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isClosed, setIsClosed] = useState(false);
  const scrollHandlerRef = useRef(null);

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

  // Scroll handler
  useEffect(() => {
    if (isClosed) return; // don't show again if already closed this session

    scrollHandlerRef.current = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };

    // run immediately if already scrolled
    scrollHandlerRef.current();

    window.addEventListener('scroll', scrollHandlerRef.current, { passive: true });
    return () => {
      if (scrollHandlerRef.current) {
        window.removeEventListener('scroll', scrollHandlerRef.current);
      }
    };
  }, [isClosed]);

  // Rotate messages
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true); // prevent popup from showing again in this session
  };

  if (isClosed) return null;

  const message = messages[currentMessage];

  return (
    isVisible && (
      <div className="fixed right-6 bottom-6 z-40 transition-all duration-500 translate-y-0 opacity-100">
        <div className="bg-card border border-border rounded-xl shadow-card-hover p-6 max-w-sm relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="MessageSquare" size={16} color="white" />
              </div>
              <span className="text-sm font-medium text-foreground">
                CloudNexus Consultation
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-xs text-success font-medium">Online</span>
              </div>

              <button
                onClick={handleClose}
                className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/90 transition-colors duration-400"
                aria-label="Close"
              >
                <Icon name="X" size={16} color="white" />
              </button>
            </div>
          </div>

          {/* Message */}
          <div className="mb-4">
            <h4 className="text-lg font-bold text-foreground mb-2">
              {message?.title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {message?.subtitle}
            </p>
          </div>

          {/* Trust */}
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

          {/* CTA */}
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
