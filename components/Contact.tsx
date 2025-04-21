'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto text-center py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-4"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-lg text-gray-700"
      >
        Email: <a href="mailto:geetharunodaya@gmail.com" className="text-pink-600 underline">geetharunodaya@gmail.com</a>
      </motion.p>
    </section>
  )
}
