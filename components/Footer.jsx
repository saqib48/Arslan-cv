'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0 
        }}
        onClick={scrollToTop}
        className="back-to-top"
      >
        <ArrowUp size={20} />
      </motion.button>

      {/* Footer */}
      <footer className="bg-bg-secondary border-t border-border-color">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-heading font-bold gradient-text mb-4">
                  Usman Khizer
                </h3>
                <p className="text-text-secondary font-body mb-6 max-w-md">
                  Professional video editor and motion designer creating compelling content 
                  that tells your story and drives results. Let's bring your vision to life.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-text-secondary">
                    <Mail size={16} className="text-accent-primary" />
                    <span className="font-body text-sm">usmankhizer05@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <Phone size={16} className="text-accent-primary" />
                    <span className="font-body text-sm">+92 (320) 016-7000</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <MapPin size={16} className="text-accent-primary" />
                    <span className="font-body text-sm">LAHORE, PAK</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-lg font-heading font-semibold text-text-primary mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: 'Home', href: '#home' },
                    { name: 'About', href: '#about' },
                    { name: 'Skills', href: '#skills' },
                    { name: 'Portfolio', href: '#portfolio' },
                    { name: 'Testimonials', href: '#testimonials' },
                  ].map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-text-secondary hover:text-accent-primary transition-colors duration-300 font-body text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg font-heading font-semibold text-text-primary mb-4">
                  Services
                </h4>
                <ul className="space-y-3">
                  {[
                    'YouTube Editing',
                    'Social Media Content',
                    'Commercial Videos',
                    'Motion Graphics',
                    'Color Grading',
                    'Cinematic Editing',
                  ].map((service) => (
                    <li key={service}>
                      <span className="text-text-secondary font-body text-sm">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-border-color mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-text-muted font-body text-sm">
                © {currentYear} Usman Khizer. All rights reserved.
              </p>
              
              <div className="flex items-center gap-6">
                <button className="text-text-muted hover:text-accent-primary transition-colors duration-300 font-body text-sm">
                  Privacy Policy
                </button>
                <button className="text-text-muted hover:text-accent-primary transition-colors duration-300 font-body text-sm">
                  Terms of Service
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}