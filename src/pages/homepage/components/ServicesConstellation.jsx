import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import { motion } from "framer-motion";

const ServicesConstellation = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Cloud Architecture',
      icon: 'Cloud',
      description: 'Scalable cloud solutions that grow with your business',
      preview: 'AWS, Azure, GCP migration and optimization',
      caseStudy: '40% cost reduction for Fortune 500 client',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'AI & Machine Learning',
      icon: 'Brain',
      description: 'Intelligent systems that drive business insights',
      preview: 'Custom ML models and AI integration',
      caseStudy: '300% improvement in prediction accuracy',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      title: 'Web Development',
      icon: 'Globe',
      description: 'Modern web applications built for performance',
      preview: 'React, Next.js, and full-stack solutions',
      caseStudy: '50% faster load times achieved',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      title: 'Mobile Solutions',
      icon: 'Smartphone',
      description: 'Native and cross-platform mobile experiences',
      preview: 'iOS, Android, and React Native apps',
      caseStudy: '4.8★ average app store rating',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      title: 'DevOps & Security',
      icon: 'Shield',
      description: 'Secure, automated deployment pipelines',
      preview: 'CI/CD, monitoring, and security audits',
      caseStudy: '99.9% uptime guarantee delivered',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 6,
      title: 'Data Analytics',
      icon: 'BarChart3',
      description: 'Transform data into actionable business intelligence',
      preview: 'Big data processing and visualization',
      caseStudy: '25% revenue increase through insights',
      color: 'from-teal-500 to-teal-600'
    }
  ];

 const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // half a second between each card
      delayChildren: 0.7,     // wait 1s before starting
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" }, // smoother, longer
  },
};


return (
  <motion.section
    className="py-20 bg-surface"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="container-brand">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Our Technology Services
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
        </p>
      </div>

      {/* Grid with staggered animation */}
      <motion.div
        className="hexagon-grid"
        variants={containerVariants}
      >
        {services?.map((service) => (
          <motion.div
            key={service?.id}
            className="hexagon-card group cursor-pointer"
            variants={cardVariants}
            onMouseEnter={() => setHoveredService(service?.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            {/* Service Icon */}
            <div
              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service?.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              <Icon name={service?.icon} size={28} color="white" />
            </div>

            {/* Service Title */}
            <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
              {service?.title}
            </h3>

            {/* Service Description */}
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {service?.description}
            </p>

            {/* Hover Content */}
            <div
              className={`transition-all duration-300 ${
                hoveredService === service?.id
                  ? "opacity-100 max-h-32"
                  : "opacity-0 max-h-0 overflow-hidden"
              }`}
            >
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex items-start space-x-2">
                  <Icon
                    name="Code"
                    size={16}
                    className="text-accent mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-muted-foreground">
                    {service?.preview}
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon
                    name="TrendingUp"
                    size={16}
                    className="text-success mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm font-medium text-success">
                    {service?.caseStudy}
                  </span>
                </div>
                
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <Link to="/services-overview">
          <div className="inline-flex items-center space-x-3 bg-card px-8 py-4 rounded-xl card-elevation hover:shadow-card-hover transition-all duration-300 group">
            <span className="text-lg font-medium text-primary">
              Explore All Services
            </span>
            <Icon
              name="ArrowRight"
              size={20}
              className="text-accent group-hover:translate-x-1 transition-transform duration-300"
            />
          </div>
        </Link>
      </div>
    </div>
  </motion.section>
);
};

export default ServicesConstellation;