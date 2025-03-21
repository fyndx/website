"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Case studies data
const caseStudies = [
  {
    id: "e-commerce-app-redesign",
    title: "E-commerce App Redesign",
    shortDescription:
      "Increased conversions by 40% through UX improvements and performance optimization for a leading online retailer.",
    category: "e-commerce",
    image: "/placeholder.svg?height=600&width=800",
    client: "Global Retail Inc.",
    year: "2023",
    featured: true,
  },
  {
    id: "social-media-integration",
    title: "Social Media Integration",
    shortDescription:
      "Boosted user engagement by 75% with seamless sharing features and real-time notifications for a community platform.",
    category: "social",
    image: "/placeholder.svg?height=600&width=800",
    client: "ConnectHub",
    year: "2022",
    featured: true,
  },
  {
    id: "healthcare-mobile-app",
    title: "Healthcare Mobile App",
    shortDescription:
      "Developed a HIPAA-compliant telehealth solution that improved patient satisfaction scores by 60%.",
    category: "healthcare",
    image: "/placeholder.svg?height=600&width=800",
    client: "MediCare Solutions",
    year: "2023",
    featured: true,
  },
  {
    id: "fintech-wallet-app",
    title: "Fintech Wallet App",
    shortDescription:
      "Created a secure and user-friendly mobile wallet that processed over $10M in transactions within the first quarter.",
    category: "fintech",
    image: "/placeholder.svg?height=600&width=800",
    client: "PayEase",
    year: "2022",
    featured: false,
  },
  {
    id: "enterprise-inventory-system",
    title: "Enterprise Inventory System",
    shortDescription:
      "Developed a cross-platform inventory management system that reduced processing time by 65% for a manufacturing company.",
    category: "enterprise",
    image: "/placeholder.svg?height=600&width=800",
    client: "Industrial Innovations",
    year: "2021",
    featured: false,
  },
  {
    id: "food-delivery-app",
    title: "Food Delivery App",
    shortDescription:
      "Built a feature-rich food delivery app that increased order volume by 120% and improved driver efficiency.",
    category: "e-commerce",
    image: "/placeholder.svg?height=600&width=800",
    client: "QuickBite",
    year: "2022",
    featured: false,
  },
  {
    id: "fitness-tracking-app",
    title: "Fitness Tracking App",
    shortDescription:
      "Created a comprehensive fitness tracking app with wearable integration that achieved 500K downloads in 6 months.",
    category: "healthcare",
    image: "/placeholder.svg?height=600&width=800",
    client: "FitLife",
    year: "2021",
    featured: false,
  },
  {
    id: "real-estate-marketplace",
    title: "Real Estate Marketplace",
    shortDescription:
      "Developed a real estate marketplace app with AR features that increased property viewings by 85%.",
    category: "e-commerce",
    image: "/placeholder.svg?height=600&width=800",
    client: "HomeVision",
    year: "2023",
    featured: false,
  },
  {
    id: "banking-app-redesign",
    title: "Banking App Redesign",
    shortDescription:
      "Redesigned a banking app with enhanced security features that improved user satisfaction by 45%.",
    category: "fintech",
    image: "/placeholder.svg?height=600&width=800",
    client: "SecureBank",
    year: "2022",
    featured: false,
  },
]

export default function CaseStudiesList() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Featured case studies */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Featured Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies
              .filter((study) => study.featured)
              .map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Link href={`/case-studies/${study.id}`} className="block h-full">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                      <div className="relative h-48">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {study.category}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col h-full">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{study.title}</h3>
                        <p className="text-gray-600 mb-4 flex-grow">{study.shortDescription}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span>{study.client}</span>
                          <span>{study.year}</span>
                        </div>
                        <Button className="bg-primary text-white hover:bg-primary-dark w-full">View Case Study</Button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>

        {/* All case studies */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">All Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link href={`/case-studies/${study.id}`} className="block h-full">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="relative h-48">
                      <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {study.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{study.title}</h3>
                      <p className="text-gray-600 mb-4">{study.shortDescription}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{study.client}</span>
                        <span>{study.year}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

