'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    'HTML / CSS / JavaScript',
    'React / Next.js',
    'Tailwind CSS',
    'Node.js / Express',
    'Spring Boot / Java',
    'IoT Systems (LoRa, ESP32)',
    'Git / GitHub',
    'Arduino / Raspberry Pi',
  ]

  return (
    <section id="skills" className="max-w-4xl mx-auto py-20 px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6"
      >
        Skills
      </motion.h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-100 rounded-lg py-2 px-4 shadow-sm"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
