// Gradient background version of Portfolio section

"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("short");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = [
    { id: "short", name: "Short Form" },
    { id: "beforeAfter", name: "Before / After" },
    { id: "podcast", name: "Podcasts" },
    { id: "realestate", name: "Real Estate" }
  ];

const getYouTube = (url) => {
  if (!url) return {};
  
  // Match normal watch URL
  let match = url.match(/v=([a-zA-Z0-9_-]+)/);
  
  // If not match, check for shorts URL
  if (!match) {
    match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
  }

  if (!match) return {};
  const id = match[1];
  return {
    embed: `https://www.youtube.com/embed/${id}`,
    thumb: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
  };
};


  const projects = [
    { id: 1, category: "short", ...getYouTube("https://youtube.com/shorts/bVQsk679cWI?si=8Z9nMHMB0cxwQMdY") },
    { id: 2, category: "short", ...getYouTube("https://youtube.com/shorts/AzFejY1IXyo?si=DXXWmMPt6kQcC3pT") },
    { id: 3, category: "short", ...getYouTube("https://youtube.com/shorts/DoEh95bBNbA?si=Y9e-sR_TzPXrp3B5") },
    { id: 4, category: "short", ...getYouTube("https://youtube.com/shorts/-626esvR5KQ?si=XsrNxpCMbNmfVaWw") },
    { id: 5, category: "short", ...getYouTube("https://youtube.com/shorts/a_4Owr6O7b4?si=lGQ_50cxc3bbneig") },
    { id: 6, category: "short", ...getYouTube("https://youtube.com/shorts/uk3s0fos7AY?si=3_aBQ9rGrleOMMKs") },
    { id: 7, category: "long", ...getYouTube("https://www.youtube.com/watch?v=rUWxSEwctFU") },
    { id: 8, category: "beforeAfter", ...getYouTube("https://youtube.com/shorts/Js8qULZ_qDw?si=pwmFuXbEZHtX6TKO") },
    { id: 9, category: "beforeAfter", ...getYouTube("https://youtube.com/shorts/dgTDb85DYuA?si=TXt2m_31KYltr3b0") },
    { id: 10, category: "beforeAfter", ...getYouTube("https://youtube.com/shorts/jleAkvRIuDA?si=SJOgAWtomZUH95qn") },
    { id: 11, category: "beforeAfter", ...getYouTube("https://youtube.com/shorts/A5-cSzsMIAg?si=mqcB9jQ_nF8OuAmS") },
    { id: 12, category: "beforeAfter", ...getYouTube("https://youtube.com/shorts/P2gZGHesXis?si=lv9jWe1rWewYmslj") },
    { id: 13, category: "beforeAfter", ...getYouTube("https://youtube.com/shorts/3hgoaMP9kXE?si=CfqQ0JzjaO9uwVR7") },
    { id: 14, category: "podcast", ...getYouTube("https://youtube.com/shorts/W2JUZOs4pKQ?si=gHOsJJTV0KoUWrQE") },
    { id: 15, category: "podcast", ...getYouTube("https://youtube.com/shorts/UeXDtx-nm58?si=DJo4__Lue5aIA7u2") },
    { id: 16, category: "podcast", ...getYouTube("https://youtube.com/shorts/RgAJ8BaRyc8?si=xi876F7EpDsIv5sK") },
    { id: 17, category: "realestate", ...getYouTube("https://youtube.com/shorts/AJIPIrAqqEs?si=NSkbQScL0DFkMEWF") },
    { id: 18, category: "realestate", ...getYouTube("https://youtube.com/shorts/YIMLmrhagJc?si=y-asYkDjQ750lq1r") },
  ];

  const filtered = projects.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
  id="portfolio"
  className="section-padding relative overflow-hidden"
>
  {/* 🔥 Same Background as Hero Section */}
  <div className="absolute inset-0 -z-10">
    {/* Base Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-bg-primary to-accent-secondary/20"></div>

    {/* Purple Glow (Top Left) */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(138,43,226,0.30),transparent_55%)]"></div>

    {/* Cyan Glow (Bottom Right) */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_85%,rgba(0,255,255,0.25),transparent_60%)]"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
        Portfolio
      </h2>
      <p className="text-xl text-text-secondary max-w-2xl mx-auto">
        Category-wise editing portfolio including short form, long form, podcasts, before/after and real estate.
      </p>
    </motion.div>

    {/* Categories */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setSelectedCategory(cat.id)}
          className={`px-6 py-3 rounded-full transition font-medium
            ${
              selectedCategory === cat.id
                ? "bg-accent-primary text-white shadow-lg"
                : "bg-card text-text-primary shadow border border-border hover:bg-accent-primary hover:text-white"
            }`}
        >
          {cat.name}
        </button>
      ))}
    </div>

    {/* Videos */}
    <motion.div
      key={selectedCategory}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {filtered.map((video) => (
        <motion.div
          key={video.id}
          variants={itemVariants}
          className="card cursor-pointer overflow-hidden rounded-xl shadow-card bg-card group"
          onClick={() => setSelectedVideo(video)}
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={video.thumb}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <Play size={48} className="text-white" />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>

  {/* Video Popup */}
  {selectedVideo && (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
      onClick={() => setSelectedVideo(null)}
    >
      <div
        className="bg-card rounded-xl max-w-4xl w-1000 overflow-hidden relative shadow-xl border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedVideo(null)}
          className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition"
        >
          ✕
        </button>

        <div className="aspect-video">
          <iframe
            src={`${selectedVideo.embed}?autoplay=1&mute=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-1000 h-full"
          ></iframe>
        </div>
      </div>
    </div>
  )}
</section>
  );
}
