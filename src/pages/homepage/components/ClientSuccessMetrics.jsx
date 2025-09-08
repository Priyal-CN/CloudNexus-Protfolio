import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const ClientSuccessMetrics = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    satisfaction: 0,
    experience: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const metrics = [
    {
      key: 'projects',
      target: 250,
      label: 'Projects Delivered',
      icon: 'CheckCircle',
      suffix: '+'
    },
    {
      key: 'satisfaction',
      target: 95,
      label: 'Client Satisfaction',
      icon: 'Heart',
      suffix: '%'
    },
    {
      key: 'experience',
      target: 7,
      label: 'Years Combined Experience',
      icon: 'Award',
      suffix: '+'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    metrics?.forEach(metric => {
      let current = 0;
      const increment = metric?.target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= metric?.target) {
          current = metric?.target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [metric?.key]: Math.floor(current)
        }));
      }, 40);
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container-brand">
        {/* Metrics Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Proven Track Record
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak to our commitment to excellence and client success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {metrics?.map((metric) => (
            <div key={metric?.key} className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={metric?.icon} size={32} className="text-accent" />
              </div>
              <div className="metrics-counter text-4xl md:text-5xl font-bold text-primary mb-2">
                {counters?.[metric?.key]}{metric?.suffix}
              </div>
              <p className="text-lg text-muted-foreground font-medium">
                {metric?.label}
              </p>
            </div>
          ))}
        </div>

        {/* Partners & Certifications */}
        <div className="text-center">

          {/* Additional Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-8 border-t border-border">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Icon name="Globe" size={16} className="text-success" />
              <span className="text-sm">Global Delivery</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ClientSuccessMetrics;