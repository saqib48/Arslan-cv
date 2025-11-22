"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Adobe Premiere Pro", level: 100 },
    { name: "After Effects", level: 95 },
    { name: "DaVinci Resolve", level: 85 },
    { name: "Color Grading", level: 90 },
    { name: "Sound Design", level: 80 },
  ];

  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-bg-primary to-accent-secondary/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(138,43,226,0.15),transparent_60%)]"></div>
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
      <div className="relative z-20 container mx-auto px-6 max-w-5xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-heading font-bold text-center mb-16"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        {/* Skills List */}
        <div className="space-y-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-text-primary font-body text-lg md:text-xl">
                  {skill.name}
                </span>
                <span className="text-text-secondary font-body">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-4 bg-bg-secondary/40 border border-border-color rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 1.3, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
