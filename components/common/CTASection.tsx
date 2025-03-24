"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 z-0">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-xl border border-white border-opacity-20">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Ready to Elevate Your React Native Project?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-white text-opacity-90">
              Get in touch with our experts and start building amazing apps today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://cal.com/fyndx/free-consultation" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 hover:text-primary-dark font-medium">
                  Get a Free Consultation
                </Button>
              </Link>
              {/* <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-medium"
              >
                View Our Portfolio
              </Button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

