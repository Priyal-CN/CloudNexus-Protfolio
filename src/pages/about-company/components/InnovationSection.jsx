import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const InnovationSection = () => {
 

  const researchProjects = [
    {
      title: "AI-Powered Code Generation",
      description: "Developing tools that automatically generate high-quality code from natural language descriptions.",
      status: "In Progress",
    },
    {
      title: "Sustainable Computing Initiative",
      description: "Creating energy-efficient algorithms and green computing practices to reduce environmental impact.",
      status: "Beta Testing",
    },
    {
      title: "Quantum-Safe Cryptography",
      description: "Developing encryption methods that remain secure against quantum computing attacks.",
      status: "Research Phase",
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container-brand">
        {/* Section Header */}

        {/* Research Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Current Research Projects
            </h3>
            <p className="text-lg text-muted-foreground">
              Ongoing research initiatives that will define the next generation of technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {researchProjects?.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 card-elevation"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project?.status === 'In Progress' ? 'bg-blue-100 text-blue-600' :
                    project?.status === 'Beta Testing'? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                  }`}>
                    {project?.status}
                  </span>
                  <Icon name="Beaker" size={20} className="text-accent" />
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">{project?.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{project?.description}</p>
                
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Innovation Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* Innovation CTA */}
          <div className="bg-gradient-to-r from-accent/5 to-blue-50 rounded-3xl p-8 md:p-12 text-center">
            <Icon name="Rocket" size={48} className="text-accent mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Partner with Innovation
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in shaping the future of technology. Our innovation lab is always exploring new possibilities and partnerships.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-accent">
                <Icon name="Lightbulb" size={20} />
                <span className="font-semibold">Research Collaboration</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-border"></div>
              <div className="flex items-center space-x-2 text-accent">
                <Icon name="Code" size={20} />
                <span className="font-semibold">Open Source Projects</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-border"></div>
              <div className="flex items-center space-x-2 text-accent">
                <Icon name="BookOpen" size={20} />
                <span className="font-semibold">Knowledge Sharing</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationSection;