'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'youtube', name: 'YouTube' },
    { id: 'commercial', name: 'Commercials' },
    { id: 'cinematic', name: 'Cinematic' },
  ];

  // Get Google Drive preview + fast thumbnail
  const getDriveIds = (url) => {
    if (!url) return {};
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (!match) return {};
    const id = match[1];
    return {
      preview: `https://drive.google.com/file/d/${id}/preview`,
      thumb: `https://drive.google.com/thumbnail?id=${id}&sz=w1000`,
    };
  };

  const projects = [
    {
      id: 1,
      title: 'Tech Review Channel Intro',
      category: 'youtube',
      ...getDriveIds('https://drive.google.com/file/d/194JQWgLTT-B0jBIRwSmz67OH0o01bfFx/view?usp=sharing'),
      duration: '0:15',
      description: 'Dynamic intro sequence for a popular tech review channel.',
    },
    {
      id: 2,
      title: 'Fashion Brand Commercial',
      category: 'commercial',
      ...getDriveIds('https://drive.google.com/file/d/194JQWgLTT-B0jBIRwSmz67OH0o01bfFx/view?usp=sharing'),
      duration: '1:30',
      description: 'Cinematic commercial for a luxury fashion brand.',
    },
    {
      id: 3,
      title: 'Instagram Reel Series',
      category: 'cinematic',
      ...getDriveIds('https://drive.google.com/file/d/194JQWgLTT-B0jBIRwSmz67OH0o01bfFx/view?usp=sharing'),
      duration: '0:30',
      description: 'Viral Instagram reel series with trending transitions and effects.',
    },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="portfolio" className="section-padding bg-bg-accent">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            A showcase of my latest video editing and motion design projects.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full transition ${
                selectedCategory === cat.id
                  ? 'bg-accent-primary text-white shadow'
                  : 'bg-gray-200 text-gray-700 hover:bg-accent-primary hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card cursor-pointer overflow-hidden group"
                onClick={() => setSelectedVideo(project)}
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={project.thumb}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 blur-sm"
                    onLoad={(e) => e.currentTarget.classList.remove('blur-sm')}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                    <Play size={40} className="text-white" />
                  </div>
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {project.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-center">No videos found.</p>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition"
            >
              ✕
            </button>

            <div className="aspect-video">
              {selectedVideo && (
                <iframe
                  src={`${selectedVideo.preview}?autoplay=1&mute=1`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  loading="eager"
                  className="w-full h-full"
                ></iframe>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">{selectedVideo.title}</h3>
              <p className="text-gray-600">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
