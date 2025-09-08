import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const timelineData = [
    {
      id: 1,
      year: "2021",
      title: "Company Founded",
      subtitle: "The Beginning of Innovation",
      description: " CloudNexus was founded with a mission to redefine IT consulting and digital transformation. A small, passionate team began focusing on cloud automation and enterprise IT solutions.",
      icon: "Rocket",
      color: "bg-accent"
    },
    
    {
      id: 2,
      year: "2022",
      title: "Scaling Up",
      subtitle: "Expanding Services",
      description: "Introduced cloud & DevOps services, enhanced web and mobile development capabilities, and successfully delivered AI/ML-driven projects to global clients.",
      icon: "Wifi",
      color: "bg-blue-500"
    },

    {
      id: 3,
      year: "2023",
      title: "First Major Client Win",
      subtitle: "Breakthrough to Success",
      description: "Secured our first Fortune 500 client, delivering a comprehensive digital transformation project that set new industry standards.",
      icon: "Trophy",
      color: "bg-green-500"
    },
    {
      id: 4,
      year: "2023",
      title: "AI & Machine Learning Focus",
      subtitle: "Embracing Next-Gen Technologies",
      description: "Established our AI/ML practice area, helping clients harness the power of artificial intelligence for competitive advantage.",
      icon: "Brain",
      color: "bg-purple-500"
    },
    {
      id: 5,
      year: "2024",
      title: "Global Expansion",
      subtitle: "Global Reach, Local Expertise",
      description: "Achieved 200% year-over-year growth and expanded the client base across Asia, Europe, and North America. Recognized as a fast-rising IT powerhouse in digital transformation.",
      icon: "Globe",
      color: "bg-orange-500"
    },
    {
      id: 6,
      year: "2025",
      title: "Sustainability Initiative",
      subtitle: "Technology for Good",
      description: "Launched our Green Tech initiative, helping clients reduce their environmental impact through sustainable technology solutions.",
      icon: "Leaf",
      color: "bg-green-600"
    },
   
  ];

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className="py-20 bg-surface">
      <div className="container-brand">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-6 py-3 mb-6">
            <Icon name="Clock" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">Our Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Company Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From startup to global technology partner—discover the milestones that shaped our journey and continue to drive our innovation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

            {timelineData?.map((item, index) => (
              <motion.div
                key={item?.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-background border-4 border-accent rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-card rounded-2xl p-6 card-elevation hover:shadow-card-hover transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 ${item?.color} rounded-xl flex items-center justify-center`}>
                        <Icon name={item?.icon} size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">{item?.year}</div>
                        <div className="text-sm text-muted-foreground">{item?.subtitle}</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">{item?.title}</h3>
                    <p className="text-muted-foreground mb-4">{item?.description}</p>


                    {/* Expanded Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedItem === item?.id ? 'auto' : 0,
                        opacity: expandedItem === item?.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border mt-4">
                        <div className="text-sm text-muted-foreground whitespace-pre-line">
                          {item?.details}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;