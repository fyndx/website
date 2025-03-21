"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { services } from "@/lib/data"

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

