import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { projectsData } from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-4 font-medium">
            Selected Work
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-4xl mb-6">
            Projects that showcase my <span className="gradient-text">passion</span> for creating great experiences.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/project/${project.id}`}>
                <div className="group relative bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-10">
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                            {project.category}
                          </span>
                          <span className="text-xs text-gray-600">•</span>
                          <span className="text-xs text-gray-500">{project.duration}</span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed mb-6">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-lg text-gray-400"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-lg text-gray-400">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          <Github size={16} />
                          <span>Source</span>
                        </a>
                      </div>
                    </div>

                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/TirumalareddySai"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>View all projects on GitHub</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
