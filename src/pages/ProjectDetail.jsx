import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, Calendar, CheckCircle2, Lightbulb, Target } from 'lucide-react'
import { projectsData } from '../data/projects'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/#projects"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white mb-12 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </Link>

          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                {project.category}
              </span>
              <span className="text-xs text-gray-600">•</span>
              <span className="text-xs text-gray-500">{project.duration}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              {project.title}
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white text-black px-5 py-2.5 rounded-lg hover:bg-gray-200 transition-all font-medium"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-lg hover:bg-white/10 transition-all font-medium"
              >
                <Github size={18} />
                <span>View Code</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-lg text-gray-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-16 bg-white/5 border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <CheckCircle2 className="text-blue-400" size={20} />
                  <h2 className="text-2xl font-semibold">Key Features</h2>
                </div>
                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] hover:border-white/10 transition-all"
                    >
                      <CheckCircle2 size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="text-purple-400" size={20} />
                  <h2 className="text-2xl font-semibold">Challenges & Solutions</h2>
                </div>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/[0.02] border-l-2 border-purple-400 rounded-lg"
                    >
                      <p className="text-gray-300">{challenge}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Lightbulb className="text-yellow-400" size={20} />
                  <h2 className="text-2xl font-semibold">Key Learnings</h2>
                </div>
                <div className="space-y-4">
                  {project.learnings.map((learning, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/[0.02] border-l-2 border-yellow-400 rounded-lg"
                    >
                      <p className="text-gray-300">{learning}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl"
              >
                <h3 className="text-lg font-semibold mb-6">Screenshots</h3>
                <div className="space-y-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg bg-white/5 border border-white/10">
                      <img
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-24 pt-16 border-t border-white/5"
          >
            <h2 className="text-2xl font-semibold mb-8">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectsData
                .filter(p => p.id !== project.id)
                .slice(0, 2)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    to={`/project/${relatedProject.id}`}
                    className="group bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:bg-white/[0.04] hover:border-white/10 transition-all"
                  >
                    <div className="relative aspect-video overflow-hidden bg-white/5">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {relatedProject.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {relatedProject.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2.5 py-1 text-xs bg-white/5 border border-white/10 rounded-lg text-gray-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetail
