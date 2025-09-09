import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const CompanyNarrative = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const sectionRef = useRef(null);

  const transformationSteps = [
    {
      id: 1,
      icon: 'Search',
      title: 'Challenge Discovery',
      description: 'We begin by deeply understanding your business challenges, technical constraints, and growth objectives through comprehensive analysis.',
      color: 'text-error'
    },
    {
      id: 2,
      icon: 'Lightbulb',
      title: 'Innovation Design',
      description: 'Our expert team crafts tailored technology solutions that align with your strategic goals and deliver competitive advantages.',
      color: 'text-warning'
    },
    {
      id: 3,
      icon: 'Rocket',
      title: 'Solution Implementation',
      description: 'We execute with precision, delivering robust, scalable solutions using cutting-edge technologies and industry best practices.',
      color: 'text-accent'
    },
    {
      id: 4,
      icon: 'TrendingUp',
      title: 'Measurable Outcomes',
      description: 'Track real business impact through improved efficiency, reduced costs, enhanced user experience, and accelerated growth.',
      color: 'text-success'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = parseInt(entry.target.dataset.stepId);
            setVisibleSteps(prev => [...new Set([...prev, stepId])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = sectionRef?.current?.querySelectorAll('[data-step-id]');
    stepElements?.forEach(el => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Transformation Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial challenge to measurable success, we guide you through every step of your digital transformation.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationSteps?.map((step, index) => (
              <div
                key={step?.id}
                data-step-id={step?.id}
                className={`relative bg-card rounded-xl p-6 card-elevation transition-all duration-700 ${
                  visibleSteps?.includes(step?.id) 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {step?.id}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-4 ${step?.color}`}>
                  <Icon name={step?.icon} size={24} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {step?.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step?.description}
                </p>

                {/* Connection Dot for Desktop */}
                <div className="hidden lg:block absolute top-1/2 -right-4 w-3 h-3 bg-accent rounded-full transform -translate-y-1/2 border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-accent font-medium">
            <span>Ready to start your transformation?</span>
            <Icon name="ArrowRight" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyNarrative;