"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "YouTube Creator",
      company: "TechReview Channel",
      country: "USA",
      content:
        "Alex transformed my raw footage into viral content that increased my subscriber count by 300%. His editing style perfectly captures the energy I want to convey.",
      rating: 5,
      project: "YouTube Channel Editing",
      results: "+300% subscribers",
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Marketing Director",
      company: "StartupCo",
      country: "Singapore",
      content:
        "The commercial Alex created for our product launch exceeded all expectations. The video generated 2M+ views and significantly boosted our conversion rates.",
      rating: 5,
      project: "Product Launch Video",
      results: "2M+ views",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Content Creator",
      company: "Fashion Influencer",
      country: "Spain",
      content:
        "Working with Alex was a game-changer for my Instagram presence. His reels consistently go viral and have helped me land major brand partnerships.",
      rating: 5,
      project: "Instagram Reels",
      results: "Viral content",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Film Director",
      company: "Independent Films",
      country: "South Korea",
      content:
        "Alex's cinematic editing brought our documentary to life. His attention to detail and storytelling ability is exceptional. Highly recommended!",
      rating: 5,
      project: "Documentary Editing",
      results: "Award winner",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Brand Manager",
      company: "Fashion Brand",
      country: "UK",
      content:
        "The brand video Alex created perfectly captured our aesthetic and values. It has been our most successful marketing asset to date.",
      rating: 5,
      project: "Brand Video",
      results: "Best performing asset",
    },
  ];

  // Auto-slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () =>
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  const prev = () =>
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Background Effects - SAME AS SKILLS SECTION */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-bg-primary to-accent-secondary/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(138,43,226,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,255,255,0.15),transparent_60%)]"></div>
      </div>

      {/* Floating blobs */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-28 h-28 bg-accent-primary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent-secondary/20 rounded-full blur-xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            What <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-14"
        >
          <div className="card p-10 md:p-14 text-center relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-accent-primary/20">
              <Quote size={48} />
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-yellow-400 fill-current"
                />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl font-body text-text-primary mb-10 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="mb-6 text-center">
              <div className="font-heading font-semibold text-text-primary text-xl">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-text-secondary">
                {testimonials[currentIndex].role} — {testimonials[currentIndex].country}
              </div>
              <div className="text-accent-primary font-body text-sm">
                {testimonials[currentIndex].company}
              </div>
            </div>

            {/* Project tags */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <div className="bg-accent-primary/10 text-accent-primary px-4 py-2 rounded-full">
                {testimonials[currentIndex].project}
              </div>
              <div className="bg-accent-secondary/10 text-accent-secondary px-4 py-2 rounded-full">
                {testimonials[currentIndex].results}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Arrows + Dots */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-bg-secondary border border-border-color hover:bg-accent-primary hover:text-white transition"
          >
            ←
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === currentIndex
                    ? "bg-accent-primary w-8"
                    : "bg-border-color hover:bg-accent-primary/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-bg-secondary border border-border-color hover:bg-accent-primary hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
