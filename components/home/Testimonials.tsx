"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Innovators Inc.",
    quote:
      "Fyndx helped us build a world-class React Native app in record time. Their expertise and attention to detail exceeded our expectations.",
    image: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Jane Smith",
    company: "StartUp Solutions",
    quote:
      "The expertise and professionalism of Fyndx consultants are unmatched. They delivered our project on time and within budget.",
    image: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Robert Johnson",
    company: "Global Mobile",
    quote:
      "Working with Fyndx transformed our business. Their React Native expertise helped us launch a successful app that our users love.",
    image: "/placeholder.svg",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 z-0">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern
              id="pattern-circles"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
            >
              <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#2563eb" />
            </pattern>
            <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
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
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col relative">
                {/* Quote mark */}
                <div className="absolute top-4 right-4 text-6xl text-blue-100 font-serif">"</div>

                <div className="mb-6 z-10">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 italic mb-6 flex-grow z-10">"{testimonial.quote}"</p>

                <div className="flex items-center mt-auto z-10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

