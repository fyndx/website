"use client"

import { useRef } from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
  {
    title: "Custom App Development",
    description: "Tailored React Native solutions for your unique business needs.",
    icon: "📱",
  },
  {
    title: "App Optimization",
    description: "Enhance performance and user experience of your existing apps.",
    icon: "🚀",
  },
  {
    title: "Consulting & Strategy",
    description: "Expert advice on React Native implementation and best practices.",
    icon: "💡",
  },
  {
    title: "UI/UX Design",
    description: "Create beautiful, intuitive interfaces that users love.",
    icon: "🎨",
  },
  {
    title: "Cross-Platform Development",
    description: "Build once, deploy everywhere with React Native.",
    icon: "🔄",
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing support to keep your app running smoothly.",
    icon: "🛠️",
  },
]

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="services" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="opacity-10">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer a comprehensive range of React Native development services to help you build exceptional mobile
            experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white bg-opacity-80 backdrop-blur-sm">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl sm:text-2xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

