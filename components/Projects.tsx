'use client'

import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'IoT Monkey Deterrent System',
      description:
        'LoRa-based multi-hop communication system for monkey detection and deterrence in agriculture.',
    },
    {
      title: 'FitFusion',
      description:
        'A fitness app with meal & workout plan management. Built using Spring Boot & React.',
    },
    {
      title: 'Lingo Translator',
      description:
        'Sinhala-English translator with emoji & cultural context support. MERN Stack.',
    },
    {
      title: 'Online Vaccine Portal',
      description:
        'PHP-based vaccine registration platform with appointment management.',
    },
    {
      title: 'Portfolio Website',
      description:
        'Personal portfolio using Next.js and Tailwind CSS to showcase my skills.',
    },
  ]

  return (
    <section id="projects" className="max-w-5xl mx-auto py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-pink-600 mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
