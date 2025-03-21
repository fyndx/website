"use client"

import { motion } from "framer-motion"
import { Code, Users, Zap, Shield, Lightbulb, Heart } from "lucide-react"

const values = [
  {
    title: "Technical Excellence",
    description: "We maintain the highest standards of code quality and technical implementation.",
    icon: <Code className="w-10 h-10 text-primary" />,
  },
  {
    title: "Client Partnership",
    description: "We build lasting relationships based on trust, transparency, and mutual success.",
    icon: <Users className="w-10 h-10 text-primary" />,
  },
  {
    title: "Innovation",
    description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
  },
  {
    title: "Performance",
    description: "We optimize every aspect of our applications for speed, reliability, and efficiency.",
    icon: <Zap className="w-10 h-10 text-primary" />,
  },
  {
    title: "Security",
    description: "We implement robust security measures to protect user data and application integrity.",
    icon: <Shield className="w-10 h-10 text-primary" />,
  },
  {
    title: "User-Centered",
    description: "We design with users in mind, creating intuitive and enjoyable experiences.",
    icon: <Heart className="w-10 h-10 text-primary" />,
  },
]

export default function Values() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"
          ></motion.div>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            These core principles guide everything we do and shape how we work with our clients and each other.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl shadow-md p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

