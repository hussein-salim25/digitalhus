// components/Hero.tsx

'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight"
      >
        As a seasoned professional with seven years of experience delivering world-class service
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-6 text-lg md:text-xl max-w-xl text-gray-300"
      >
        I bring that same dedication to digital experiences – crafting seamless, elegant, and human-centered solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-10 flex gap-4"
      >
        <a href="#projects" className="bg-white text-black px-6 py-3 rounded-md text-lg font-medium hover:scale-105 transition-transform">
          See My Work
        </a>
        <a href="#contact" className="border border-white px-6 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-black transition-all">
          Let’s Connect
        </a>
      </motion.div>
    </section>
  )
}
