import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, CheckCircle, Lightbulb, TrendingUp } from 'lucide-react'
import { projectsData } from '../data/projects'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary-400 hover:text-primary-300">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/#projects"
              className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar size={16} />
                    <span>{project.duration}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                  {project.title}
                </h1>

                <p className="text-xl text-gray-300 mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 glass-effect text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <CheckCircle className="text-primary-400" size={24} />
                  <h2 className="text-3xl font-bold text-white">Key Features</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 glass-effect rounded-lg"
                    >
                      <CheckCircle size={16} className="text-primary-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <TrendingUp className="text-secondary-400" size={24} />
                  <h2 className="text-3xl font-bold text-white">Challenges & Solutions</h2>
                </div>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="p-4 glass-effect rounded-lg border-l-4 border-secondary-400"
                    >
                      <p className="text-gray-300">{challenge}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Learnings */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Lightbulb className="text-yellow-400" size={24} />
                  <h2 className="text-3xl font-bold text-white">Key Learnings</h2>
                </div>
                <div className="space-y-4">
                  {project.learnings.map((learning, index) => (
                    <div
                      key={index}
                      className="p-4 glass-effect rounded-lg border-l-4 border-yellow-400"
                    >
                      <p className="text-gray-300">{learning}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-effect p-6 rounded-2xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">Project Info</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Category</p>
                    <p className="text-white font-medium">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Duration</p>
                    <p className="text-white font-medium">{project.duration}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Technologies</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Screenshots */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-effect p-6 rounded-2xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">Screenshots</h3>
                <div className="space-y-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg">
                      <img
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData
                .filter(p => p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    to={`/project/${relatedProject.id}`}
                    className="project-card group block"
                  >
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-400 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {relatedProject.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {relatedProject.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="tech-badge text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail