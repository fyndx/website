"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

// Service data
const services = [
  {
    id: "custom-app-development",
    title: "Custom App Development",
    shortDescription: "Tailored React Native solutions for your unique business needs.",
    description:
      "Our custom app development service delivers tailor-made React Native applications designed specifically for your business requirements. We follow a collaborative approach, working closely with you from concept to deployment to ensure your vision becomes reality.",
    icon: "📱",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "Fully customized solutions that align with your business goals",
      "Scalable architecture that grows with your business",
      "Cross-platform compatibility for iOS and Android",
      "Optimized performance and user experience",
    ],
    pricing: {
      starter: {
        price: "$10,000+",
        description: "Basic app with essential features",
      },
      professional: {
        price: "$25,000+",
        description: "Advanced app with custom features and integrations",
      },
      enterprise: {
        price: "Custom",
        description: "Complex enterprise solutions with advanced requirements",
      },
    },
    featured: true,
  },
  {
    id: "app-optimization",
    title: "App Optimization",
    shortDescription: "Enhance performance and user experience of your existing apps.",
    description:
      "Our app optimization service focuses on improving the performance, stability, and user experience of your existing React Native applications. We conduct thorough audits to identify bottlenecks and implement targeted optimizations to enhance your app's overall quality.",
    icon: "🚀",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "Improved app performance and faster load times",
      "Enhanced stability and reduced crash rates",
      "Optimized battery and memory usage",
      "Better user experience leading to higher retention",
    ],
    pricing: {
      audit: {
        price: "$3,000+",
        description: "Comprehensive performance audit with recommendations",
      },
      optimization: {
        price: "$8,000+",
        description: "Implementation of optimization recommendations",
      },
      maintenance: {
        price: "$2,500+/month",
        description: "Ongoing optimization and performance monitoring",
      },
    },
    featured: true,
  },
  {
    id: "consulting-strategy",
    title: "Consulting & Strategy",
    shortDescription: "Expert advice on React Native implementation and best practices.",
    description:
      "Our consulting and strategy service provides expert guidance on React Native implementation, architecture decisions, and development best practices. We help you make informed decisions that align with your business goals and technical requirements.",
    icon: "💡",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "Strategic guidance from experienced React Native experts",
      "Tailored recommendations for your specific business context",
      "Risk mitigation and problem-solving support",
      "Knowledge transfer to your internal team",
    ],
    pricing: {
      hourly: {
        price: "$150-$250/hour",
        description: "Ad-hoc consulting on specific issues",
      },
      project: {
        price: "$5,000+",
        description: "Comprehensive project assessment and recommendations",
      },
      retainer: {
        price: "$8,000+/month",
        description: "Ongoing strategic support and advisory services",
      },
    },
    featured: false,
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Create beautiful, intuitive interfaces that users love.",
    description:
      "Our UI/UX design service focuses on creating visually appealing and intuitive user interfaces that enhance the overall user experience of your React Native application. We combine aesthetic design with functional usability to create interfaces that users love.",
    icon: "🎨",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "User-centered design that prioritizes usability",
      "Consistent visual language across your application",
      "Intuitive navigation and information architecture",
      "Accessibility considerations for all users",
    ],
    pricing: {
      basic: {
        price: "$5,000+",
        description: "Essential UI/UX design for simple applications",
      },
      standard: {
        price: "$12,000+",
        description: "Comprehensive design for medium-complexity applications",
      },
      premium: {
        price: "$20,000+",
        description: "Advanced design for complex applications with multiple user flows",
      },
    },
    featured: false,
  },
  {
    id: "cross-platform-development",
    title: "Cross-Platform Development",
    shortDescription: "Build once, deploy everywhere with React Native.",
    description:
      "Our cross-platform development service leverages React Native to build applications that run seamlessly on both iOS and Android platforms from a single codebase. This approach reduces development time and costs while maintaining a consistent user experience across platforms.",
    icon: "🔄",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "Single codebase for iOS and Android platforms",
      "Faster development and time-to-market",
      "Consistent user experience across platforms",
      "Easier maintenance and updates",
    ],
    pricing: {
      basic: {
        price: "$15,000+",
        description: "Essential cross-platform app with core features",
      },
      advanced: {
        price: "$30,000+",
        description: "Feature-rich cross-platform application",
      },
      enterprise: {
        price: "Custom",
        description: "Complex enterprise cross-platform solutions",
      },
    },
    featured: true,
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    shortDescription: "Ongoing support to keep your app running smoothly.",
    description:
      "Our maintenance and support service ensures your React Native application continues to run smoothly after launch. We provide regular updates, bug fixes, and performance optimizations to keep your app functioning at its best and adapting to changing platform requirements.",
    icon: "🛠️",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "Regular updates to maintain compatibility with latest OS versions",
      "Proactive monitoring and issue resolution",
      "Performance optimization and bug fixes",
      "Technical support and guidance",
    ],
    pricing: {
      basic: {
        price: "$1,500+/month",
        description: "Essential maintenance for simple applications",
      },
      standard: {
        price: "$3,000+/month",
        description: "Comprehensive support for medium-complexity applications",
      },
      premium: {
        price: "$5,000+/month",
        description: "Priority support for complex, business-critical applications",
      },
    },
    featured: false,
  },
]

export default function ServicesList() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredServices = services.filter((service) => service.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Featured services */}
        {searchQuery === "" && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Featured Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services
                .filter((service) => service.featured)
                .map((service, index) => (
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
        )}

        {/* All services */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
            {searchQuery === "" ? "All Services" : "Search Results"}
          </h2>
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No services found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
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
                        <Button className="bg-primary text-white hover:bg-primary-dark">View Details</Button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

