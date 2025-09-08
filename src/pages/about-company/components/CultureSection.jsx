import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CultureSection = () => {
  const cultureHighlights = [
    {
      id: 1,
      title: "Remote-First Excellence",
      description: "We've mastered the art of distributed collaboration, creating a culture where talent thrives regardless of location.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      stats: ["50+ team members", "15 countries", "24/7 coverage"]
    },
    {
      id: 2,
      title: "Innovation Time",
      description: "Every team member dedicates 20% of their time to learning, experimentation, and personal projects that drive innovation.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      stats: ["20% innovation time", "12 patents filed", "50+ experiments"]
    },
    {
      id: 3,
      title: "Continuous Learning",
      description: "We invest heavily in our team's growth with unlimited learning budgets, conference attendance, and certification programs.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
      stats: ["$5K learning budget", "100+ certifications", "24 conferences"]
    },
    {
      id: 4,
      title: "Work-Life Harmony",
      description: "Flexible schedules, unlimited PTO, and wellness programs ensure our team maintains peak performance and personal fulfillment.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      stats: ["Unlimited PTO", "Flexible hours", "Wellness programs"]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Full-Stack Developer",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "CloudNexus isn\'t just a workplace—it\'s a community of innovators who genuinely care about each other\'s growth and success. The learning opportunities are endless.",
      tenure: "3 years"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "DevOps Engineer",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "The remote-first culture here is incredible. I can work from anywhere while collaborating with brilliant minds from around the world. It's the future of work.",
      tenure: "2 years"
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "AI/ML Specialist",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      quote: "The innovation time policy allowed me to develop a machine learning framework that\'s now used across multiple client projects. This place truly values creativity.",
      tenure: "4 years"
    }
  ];

  const perks = [
    { icon: "Laptop", title: "Latest Tech", description: "Top-tier equipment and tools" },
    { icon: "GraduationCap", title: "Learning Budget", description: "$5,000 annual learning allowance" },
    { icon: "Plane", title: "Travel Opportunities", description: "Client visits and conferences worldwide" },
    { icon: "Heart", title: "Health & Wellness", description: "Comprehensive health and mental wellness" },
    { icon: "Coffee", title: "Flexible Schedule", description: "Work when you\'re most productive" },
    { icon: "Users", title: "Team Retreats", description: "Annual company-wide gatherings" }
  ];

  return (
    <section className="py-20 bg-surface">
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
            <Icon name="Users" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">Our Culture</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Where Innovation Meets Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our culture is built on trust, creativity, and shared success. We've created an environment where exceptional people do their best work.
          </p>
        </motion.div>

        {/* Culture Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {cultureHighlights?.map((highlight, index) => (
            <motion.div
              key={highlight?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden card-elevation hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={highlight?.image}
                  alt={highlight?.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{highlight?.title}</h3>
                <p className="text-muted-foreground mb-4">{highlight?.description}</p>
                
                <div className="flex items-center space-x-6">
                  {highlight?.stats?.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-sm font-semibold text-accent">{stat}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Employee Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Our Team Says
            </h3>
            <p className="text-lg text-muted-foreground">
              Authentic voices from the people who make CloudNexus exceptional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <motion.div
                key={testimonial?.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 card-elevation"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial?.role}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                      {testimonial?.tenure}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <Icon name="Quote" size={24} className="text-accent/30 mb-2" />
                  <p className="text-muted-foreground italic">"{testimonial?.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Perks and Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Perks & Benefits
            </h3>
            <p className="text-lg text-muted-foreground">
              We invest in our team's success, growth, and well-being
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks?.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 text-center card-elevation hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={perk?.icon} size={24} className="text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{perk?.title}</h4>
                <p className="text-sm text-muted-foreground">{perk?.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-accent/5 to-blue-50 rounded-3xl p-8 md:p-12">
            <Icon name="Rocket" size={48} className="text-accent mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Join Our Journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent to join our growing team. Explore opportunities to make an impact in the world of technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-accent">
                <Icon name="MapPin" size={20} />
                <span className="font-semibold">Remote-First</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-border"></div>
              <div className="flex items-center space-x-2 text-accent">
                <Icon name="TrendingUp" size={20} />
                <span className="font-semibold">Growth Opportunities</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-border"></div>
              <div className="flex items-center space-x-2 text-accent">
                <Icon name="Heart" size={20} />
                <span className="font-semibold">Great Culture</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CultureSection;