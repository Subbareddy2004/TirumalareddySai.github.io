import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Database, Rocket } from 'lucide-react'

const About = () => {
  const skills = [
    { 
      name: 'Frontend', 
      icon: Code2, 
      description: 'React, Vue, TypeScript, Tailwind CSS',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Design', 
      icon: Palette, 
      description: 'Figma, UI/UX, Responsive Design',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Backend', 
      icon: Database, 
      description: 'Node.js, Python, MongoDB, PostgreSQL',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Tools', 
      icon: Rocket, 
      description: 'Git, Docker, CI/CD, Agile',
      color: 'from-orange-500 to-red-500'
    },
  ]

  return (
    <section id="about" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-4 font-medium">
            About
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-4xl">
            I'm a passionate developer with <span className="gradient-text">3+ years</span> of experience 
            creating digital products that users love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10 mb-6`}>
                <skill.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
              <p className="text-gray-400 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
