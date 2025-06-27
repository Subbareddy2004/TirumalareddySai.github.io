import React from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-bg pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary-400 animate-glow">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Subbareddy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse"></div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm <span className="gradient-text">Subbareddy</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Full Stack Developer & UI/UX Enthusiast crafting digital experiences
            that make a difference
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="/assets/Subbareddy-Resume.pdf"
              download
              className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-primary-500/25"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="flex items-center space-x-2 glass-effect text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12"
          >
            <a
              href="https://github.com/TirumalareddySai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/subbareddy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={28} />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="animate-bounce"
          >
            <ArrowDown size={32} className="text-primary-400 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero