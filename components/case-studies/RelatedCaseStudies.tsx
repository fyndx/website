"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { caseStudies } from "@/lib/data"

type RelatedCaseStudiesProps = {
  currentCaseStudyId: string
}

export default function RelatedCaseStudies({ currentCaseStudyId }: RelatedCaseStudiesProps) {
  // Get 3 related case studies (excluding the current one)
  const relatedCaseStudies = caseStudies.filter((study) => study.id !== currentCaseStudyId).slice(0, 3)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Related Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Link href={`/case-studies/${study.id}`} className="block h-full">
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {study.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.shortDescription}</p>
                    <Button className="bg-primary text-white hover:bg-primary-dark">View Case Study</Button>
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

