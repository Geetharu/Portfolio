'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4"
      >
        Hello, I'm <span className="text-pink-500">Geeth Wickramasinghe</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl max-w-xl text-gray-700"
      >
        Aspiring Software Engineer | Web Developer | IoT Enthusiast
      </motion.p>
    </section>
  )
}
