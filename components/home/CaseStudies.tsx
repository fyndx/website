"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const caseStudies = [
  {
    title: "E-commerce App Redesign",
    description:
      "Increased conversions by 40% through UX improvements and performance optimization for a leading online retailer.",
    image: "/placeholder.svg",
  },
  {
    title: "Social Media Integration",
    description:
      "Boosted user engagement by 75% with seamless sharing features and real-time notifications for a community platform.",
    image: "/placeholder.svg",
  },
  {
    title: "Healthcare Mobile App",
    description: "Developed a HIPAA-compliant telehealth solution that improved patient satisfaction scores by 60%.",
    image: "/placeholder.svg",
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-blue-50 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="50" fill="url(#radialGradient)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0,100 C30,50 70,50 100,100"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="0.5"
              className="opacity-20"
            />
            <path d="M0,90 C40,60 60,60 100,90" fill="none" stroke="#3b82f6" strokeWidth="0.5" className="opacity-20" />
            <path d="M0,80 C50,70 50,70 100,80" fill="none" stroke="#3b82f6" strokeWidth="0.5" className="opacity-20" />
          </svg>
        </div>
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
            Case Studies
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore how we've helped businesses achieve their goals with React Native solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="h-full"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{study.title}</h3>
                  <p className="text-gray-600 mb-5 flex-grow">{study.description}</p>
                  <Button className="bg-primary text-white hover:bg-primary-dark mt-auto self-start">
                    Read Case Study
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

