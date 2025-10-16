import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 noise-bg">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-8">
            Available for freelance work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
        >
          Full Stack Developer
          <br />
          <span className="gradient-text">& UI/UX Enthusiast</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I create beautiful, functional, and user-centered digital experiences
          that make a lasting impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={handleScrollToProjects}
            className="group flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-200 font-medium"
          >
            <span>View my work</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#contact"
            className="flex items-center space-x-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium"
          >
            <Mail size={18} />
            <span>Get in touch</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center items-center space-x-6"
        >
          <a
            href="https://github.com/TirumalareddySai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/subbareddy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:subbareddy@example.com"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
