import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import { Typewriter } from "react-simple-typewriter";

const text = "Digital Reality";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-gray-900 to-accent min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/20 rounded-full"></div>
      </div>
      <div className="container-brand relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Icon name="Building2" size={20} className="text-accent" />
              <span className="text-sm font-medium">About CloudNexus</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transforming Ideas Into
              <span className="block font-bold text-6xl">
                <Typewriter
                  words={["Digital Reality"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={120}
                  deleteSpeed={60}
                  delaySpeed={1500}
                />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We are visionary technology partners who don't just deliver
              services—we transform businesses through thoughtful innovation and
              strategic excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2 text-accent">
              <Icon name="Calendar" size={20} />
              <span className="font-semibold">Founded 2021</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-2 text-accent">
              <Icon name="Users" size={20} />
              <span className="font-semibold">240+ Team Size</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-2 text-accent">
              <Icon name="Globe" size={20} />
              <span className="font-semibold">Global Reach</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2">Discover Our Story</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Icon name="ChevronDown" size={24} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
