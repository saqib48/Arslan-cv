"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-bg-primary to-accent-secondary/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(138,43,226,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,255,255,0.15),transparent_60%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-28 h-28 bg-accent-primary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent-secondary/20 rounded-full blur-xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 max-w-6xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-heading font-bold text-center mb-12"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="w-full flex justify-center"
          >
            <div className="w-68 h-70 rounded-3xl bg-bg-secondary/40 border border-border-color shadow-xl overflow-hidden">
              {/* Replace this with your image */}
              <img 
                src="/images/Usman.jpg" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-text-secondary font-body leading-relaxed text-lg md:text-xl"
          >
            <p className="mb-6">
              Hi, I'm <span className="gradient-text font-semibold">Usman Khizer</span>, 
              a passionate Video Editor and Motion Designer with a mission to turn raw footage 
              into powerful, engaging visual stories.
            </p>

            <p className="mb-6">
              I specialize in YouTube editing, cinematic videos, short-form content, 
              b-roll heavy edits, color grading, and creative storytelling that captures 
              attention and builds audience connection.
            </p>

            <p>
              With hundreds of videos crafted for creators, brands, and agencies, 
              my goal is simple:  
              <span className="gradient-text font-semibold">make your content unforgettable.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
