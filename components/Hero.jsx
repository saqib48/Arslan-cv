"use client";


import { motion } from 'framer-motion';
import { Play, ArrowDown } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-5">
      {/* Background Video/Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-bg-primary to-accent-secondary/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(138,43,226,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,255,0.2),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-primary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-secondary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 right-1/3 w-24 h-24 bg-accent-glow/30 rounded-full blur-lg"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/20 border border-accent-primary/30 text-accent-primary font-accent font-medium text-sm mb-8"
          >
            ✨ Available for freelance projects
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight"
          >
            Video Editor &{' '}
            <span className="gradient-text">Motion Designer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-text-secondary font-body mb-0 max-w-3xl mx-auto leading-relaxed"
          >
            I transform raw footage into compelling stories that captivate audiences and drive results. 
            Specializing in YouTube content, social media reels, and cinematic storytelling.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
          
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pb-10"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">500+</div>
              <div className="text-text-secondary font-body">Videos Edited</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">50M+</div>
              <div className="text-text-secondary font-body">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">100+</div>
              <div className="text-text-secondary font-body">Happy Clients</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        > */}
          {/* <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={scrollToPortfolio}
            className="p-3 rounded-full bg-bg-secondary/50 backdrop-blur-sm border border-border-color hover:bg-accent-primary hover:text-white transition-all duration-300"
          > */}
{/*             
          </motion.button> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
}