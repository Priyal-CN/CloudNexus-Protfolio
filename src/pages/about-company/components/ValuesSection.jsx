import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const values = [
    {
      id: 1,
      title: "Innovation Excellence",
      description: "We push the boundaries of what's possible, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
      icon: "Lightbulb",
      color: "bg-yellow-500",
    },
    {
      id: 2,
      title: "Client Partnership",
      description: "We believe in building long-term relationships based on trust, transparency, and mutual success rather than transactional engagements.",
      icon: "Handshake",
      color: "bg-blue-500",
    },
    {
      id: 3,
      title: "Quality Commitment",
      description: "Every solution we deliver meets the highest standards of quality, security, and performance through rigorous testing and validation.",
      icon: "Shield",
      color: "bg-green-500",
    },
    {
      id: 4,
      title: "Continuous Learning",
      description: "We invest in our team\'s growth and stay current with emerging technologies to provide the most relevant and effective solutions.",
      icon: "BookOpen",
      color: "bg-purple-500",
    },
    {
      id: 5,
      title: "Ethical Technology",
      description: "We develop and implement technology solutions that respect privacy, promote inclusivity, and contribute positively to society.",
      icon: "Heart",
      color: "bg-red-500",
    },
    {
      id: 6,
      title: "Agile Delivery",
      description: "We embrace agile methodologies and iterative development to deliver value quickly while maintaining flexibility for changing requirements.",
      icon: "Zap",
      color: "bg-orange-500",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container-brand">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-6 py-3 mb-6">
            <Icon name="Star" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">Our Values</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Drives Us Forward
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our core values aren't just words on a wall—they're the principles that guide every decision, every project, and every client interaction.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values?.map((value) => (
            <motion.div
              key={value?.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full card-elevation hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                {/* Icon and Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-14 h-14 ${value?.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={value?.icon} size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{value?.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {value?.description}
                </p>

                
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values in Action CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;