import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const MissionVisionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-20 bg-background">
      <div className="container-brand">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-6 py-3 mb-6">
              <Icon name="Target" size={20} className="text-accent" />
              <span className="text-sm font-medium text-accent">
                Our Purpose
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Mission & Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Driving the future of technology through innovation, partnership,
              and unwavering commitment to excellence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Icon name="Compass" size={32} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    What drives us every day
                  </p>
                </div>
              </div>

              <div
                className="relative rounded-2xl p-[3px] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6, #3412cc47, #facc15, #22d3ee, #3b82f6)",
                  backgroundSize: "400% 400%",
                  boxShadow: "0 0 10px rgba(5,13,24,0.7)",
                  borderRadius: "1rem",
                }}
              >
                {/* Inner Card */}
                <div className="bg-card rounded-2xl p-8 relative z-10 card-elevation">
                  <p className="text-lg text-foreground leading-relaxed mb-6 text-justify">
                    To be the global leader in IT solutions and digital product
                    innovation, shaping a future where businesses thrive through
                    seamless technology and transformative DevOps practices.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="CheckCircle"
                        size={20}
                        className="text-accent mt-1 flex-shrink-0"
                      />
                      <p className="text-muted-foreground">
                        Empower organizations worldwide to innovate, iterate,
                        and scale in the digital era.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="CheckCircle"
                        size={20}
                        className="text-accent mt-1 flex-shrink-0"
                      />
                      <p className="text-muted-foreground">
                        Seamlessly merge software development and operations for
                        smarter workflows.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="CheckCircle"
                        size={20}
                        className="text-accent mt-1 flex-shrink-0"
                      />
                      <p className="text-muted-foreground">
                        Pioneer cutting-edge DevOps solutions that redefine how
                        businesses build, deploy, and manage software.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Inline keyframes */}
                <style>
                  {`
      @keyframes neonGlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}
                </style>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Icon name="Eye" size={32} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">Where we're heading</p>
                </div>
              </div>

              <div
                className="relative rounded-2xl p-[3px] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6, #3412cc47, #facc15, #22d3ee, #3b82f6)",
                  backgroundSize: "400% 400%",
                  boxShadow: "0 0 10px rgba(5,13,24,0.7)",
                  borderRadius: "1rem",
                }}
              >
                {/* Inner Card */}
                <div className="bg-card rounded-2xl p-8 relative z-10 card-elevation">
                  <p className="text-lg text-foreground leading-relaxed mb-6 text-justify">
                    To deliver intelligent, future-ready IT solutions that
                    empower businesses to operate efficiently, automate
                    workflows, and drive long-term growth in a rapidly evolving
                    digital world.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="Zap"
                        size={20}
                        className="text-accent mt-1 flex-shrink-0"
                      />
                      <p className="text-muted-foreground">
                        Replace outdated methodologies with modern, scalable,
                        and tailored solutions.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="Globe"
                        size={20}
                        className="text-accent mt-1 flex-shrink-0"
                      />
                      <p className="text-muted-foreground">
                        Drive digital innovation through AI, cloud computing,
                        and automation.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="Award"
                        size={20}
                        className="text-accent mt-1 flex-shrink-0"
                      />
                      <p className="text-muted-foreground">
                        Build secure and accessible IT infrastructure that
                        fosters productivity and success.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Inline keyframes */}
                <style>
                  {`
      @keyframes neonGlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}
                </style>
              </div>
            </motion.div>
          </div>

          {/* Core Philosophy */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-gradient-to-r from-accent/5 to-blue-50 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <Icon
                  name="Heart"
                  size={48}
                  className="text-accent mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Philosophy
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Technology with purpose. Innovation with impact. Partnership
                  with integrity.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Lightbulb" size={24} className="text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Innovation First
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Pushing boundaries to create tomorrow's solutions today
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={24} className="text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    People Centered
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Technology that serves humanity and enhances lives
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" size={24} className="text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Trust Built
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Reliability and transparency in every interaction
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
