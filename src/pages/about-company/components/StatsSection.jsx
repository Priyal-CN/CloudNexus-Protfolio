import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    satisfaction: 0,
    team: 0,
    countries: 0
  });

  const finalStats = {
    years: 5,
    projects: 250,
    clients: 270,
    satisfaction: 95,
    team: 240,
    countries: 5
  };

  const statsData = [
    {
      key: 'years',
      value: finalStats?.years,
      label: 'Years of Excellence',
      suffix: '+',
      icon: 'Calendar',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      key: 'projects',
      value: finalStats?.projects,
      label: 'Projects Delivered',
      suffix: '+',
      icon: 'CheckCircle',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      key: 'clients',
      value: finalStats?.clients,
      label: 'Happy Clients',
      suffix: '+',
      icon: 'Users',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      key: 'satisfaction',
      value: finalStats?.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      icon: 'Star',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      key: 'team',
      value: finalStats?.team,
      label: 'Team Members',
      suffix: '+',
      icon: 'UserCheck',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      key: 'countries',
      value: finalStats?.countries,
      label: 'Countries Served',
      suffix: '+',
      icon: 'Globe',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          years: Math.floor(finalStats?.years * progress),
          projects: Math.floor(finalStats?.projects * progress),
          clients: Math.floor(finalStats?.clients * progress),
          satisfaction: Math.floor(finalStats?.satisfaction * progress),
          team: Math.floor(finalStats?.team * progress),
          countries: Math.floor(finalStats?.countries * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(finalStats);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer?.observe(element);
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-20 bg-background">
      <div className="container-brand">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-6 py-3 mb-6">
            <Icon name="BarChart3" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">Our Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Numbers That Tell Our Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five years of consistent growth, innovation, and client success. These metrics reflect our commitment to excellence and the trust our clients place in us.
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {statsData?.map((stat, index) => (
            <motion.div
              key={stat?.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 text-center card-elevation hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${stat?.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <Icon name={stat?.icon} size={32} className={stat?.color} />
              </div>
              
              <div className="mb-4">
                <div className={`text-4xl md:text-5xl font-bold ${stat?.color} metrics-counter`}>
                  {counters?.[stat?.key]}{stat?.suffix}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">{stat?.label}</h3>
              
            </motion.div>
          ))}
        </div>

      

        {/* Key Metrics Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-accent/5 to-blue-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <Icon name="TrendingUp" size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Consistent Growth & Excellence
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for itself—sustained growth, exceptional client satisfaction, and continuous innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">300%</div>
              <div className="text-sm text-muted-foreground">Year-over-Year Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Global Support Coverage</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;