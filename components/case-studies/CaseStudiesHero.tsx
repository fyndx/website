"use client"

import { motion } from "framer-motion"

export default function CaseStudiesHero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 z-0">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern
              id="case-studies-hero-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1" fill="#2563eb" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#case-studies-hero-pattern)" />
          </svg>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Our <span className="text-primary">Case Studies</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore how we've helped businesses achieve their goals with React Native solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-1 bg-primary mx-auto rounded-full mb-12"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Our case studies showcase real-world examples of how our React Native expertise has helped businesses solve
            complex challenges, improve user experiences, and achieve measurable results.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

