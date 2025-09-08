import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import Footer from "../../components/ui/Footer";
import ConsultationWidget from './components/ConsultationWidget';



const ServicesOverview = () => {
  const [currentService, setCurrentService] = useState(null);

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: 'Globe',
      description: 'We do not just build websites, we create user experiences that engage and convert. Our designers and developers will collaborate to bring your vision to life with a stunning, functional website.',
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      icon: 'Smartphone',
      description: 'Transform your ideas into seamless app experiences with our expert app development services and ensure innovation and quality.We craft intuitive, user-friendly designs that elevate customer engagement.', 
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Infrastructure',
      icon: 'Cloud',
      description: 'We help IT industries leverage Cloud and DevOps for seamless automation, scalable infrastructure, continuous integration, enhanced security, and faster deployments to drive innovation.',
    },
    {
      id: 'big data',
      title: 'Big Data',
      icon: 'Brain',
      description: 'We help IT industries leverage Big Data for real-time analytics, predictive insights, AI-driven automation, cybersecurity, and scalable cloud integration to drive innovation.',
    },
    {
      id: 'data science',
      title: 'Data Science',
      icon: 'TrendingUp',
      description: 'We help businesses harness the power of data to make smarter decisions, optimize operations, and drive innovation. Our Data Science services blend cutting-edge analytics and machine learning.',
      },
    {
      id: 'Iot & Automation',
      title: 'IoT & Automation',
      icon: 'Network',
      description: 'At CloudNexus, we help businesses harness the power of IoT and automation to streamline operations, improve productivity, and drive innovation, routine processes become faster.',
    },
    {
      id: 'system design',
      title: 'System Design',
      icon: 'Server',
      description: 'We specialize in end-to-end system design solutions that ensure scalability, efficiency, and security for your business.',
    },
    {
      id: 'UI/UX',
      title: 'UI/UX Design',
      icon: 'Palette',
      description: 'We are experts in crafting intuitive user interfaces and engaging user experiences to elevate your brand and captivate your audience.',
    },
    {
      id: 'cyber security',
      title: 'Cyber Security',
      icon: 'Fingerprint',
      description: 'Infuse cybersecurity into your strategy and ecosystem to protect value, help prevent threats and build trust as you grow.',
    },
    
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container-brand">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 mt-20 text-balance">
              Technology Services That
              <span className="gradient-text block">Transform Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From web development to AI solutions, we deliver cutting-edge technology services that drive growth, efficiency, and innovation for forward-thinking organizations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/contact-consultation">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
                className="bg-cta hover:bg-cta/90 cta-shadow"
              >
                Schedule Free Consultation
              </Button>
            </Link>
            <Link to="/portfolio-projects">
              <Button
                variant="outline"
                size="lg"
                iconName="Eye"
                iconPosition="left"
                iconSize={20}
                className="hover:bg-accent hover:text-accent-foreground hover:border-accent"
              >
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-brand">
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between mb-8"
          >
           
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {services?.map((service, index) => (
              <motion.div
                key={service?.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ServiceCard
                  service={service}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="container-brand">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our technology services can drive your business forward. Schedule a free consultation to explore the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact-consultation">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageSquare"
                  iconPosition="left"
                  iconSize={20}
                  className="bg-cta hover:bg-cta/90 cta-shadow"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link to="/portfolio-projects">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Briefcase"
                  iconPosition="left"
                  iconSize={20}
                  className="hover:bg-accent hover:text-accent-foreground hover:border-accent"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
        <Footer/>
        
      {/* Consultation Widget */}
      <ConsultationWidget currentService={currentService} />
    </div>
  );
};

export default ServicesOverview;