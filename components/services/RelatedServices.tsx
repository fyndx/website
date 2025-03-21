"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Service data (simplified version)
const services = [
  {
    id: "custom-app-development",
    title: "Custom App Development",
    shortDescription: "Tailored React Native solutions for your unique business needs.",
    icon: "📱",
  },
  {
    id: "app-optimization",
    title: "App Optimization",
    shortDescription: "Enhance performance and user experience of your existing apps.",
    icon: "🚀",
  },
  {
    id: "consulting-strategy",
    title: "Consulting & Strategy",
    shortDescription: "Expert advice on React Native implementation and best practices.",
    icon: "💡",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Create beautiful, intuitive interfaces that users love.",
    icon: "🎨",
  },
  {
    id: "cross-platform-development",
    title: "Cross-Platform Development",
    shortDescription: "Build once, deploy everywhere with React Native.",
    icon: "🔄",
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    shortDescription: "Ongoing support to keep your app running smoothly.",
    icon: "🛠️",
  },
]

type RelatedServicesProps = {
  currentServiceId: string
}

export default function RelatedServices({ currentServiceId }: RelatedServicesProps) {
  // Get 3 related services (excluding the current one)
  const relatedServices = services.filter((service) => service.id !== currentServiceId).slice(0, 3)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/services/${service.id}`} className="block h-full">
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                    <Button className="bg-primary text-white hover:bg-primary-dark">Learn More</Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

