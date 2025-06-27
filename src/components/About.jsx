import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Zap, Users } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, description: 'React, Vue, Angular, TypeScript' },
    { name: 'UI/UX Design', icon: Palette, description: 'Figma, Adobe XD, Responsive Design' },
    { name: 'Backend Development', icon: Zap, description: 'Node.js, Python, MongoDB, PostgreSQL' },
    { name: 'Team Collaboration', icon: Users, description: 'Git, Agile, Code Reviews' },
  ]

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with 3+ years of experience creating
            beautiful, functional, and user-centered digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <skill.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About