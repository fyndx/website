"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Mission() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/images/about-us.jpg"
                alt="Our mission"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-primary bg-opacity-20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-8" />
            <p className="text-lg text-gray-700 mb-6">
              At Fyndx, our mission is to empower businesses with cutting-edge React Native solutions that bridge the
              gap between vision and reality. We believe that exceptional mobile experiences should be accessible to
              businesses of all sizes.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We're committed to delivering high-quality, scalable applications that not only meet but exceed our
              clients' expectations. Our approach combines technical excellence with a deep understanding of user
              experience design to create applications that users love.
            </p>
            <p className="text-lg text-gray-700">
              By staying at the forefront of React Native development, we ensure that our clients benefit from the
              latest advancements in mobile technology, giving them a competitive edge in their respective industries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
