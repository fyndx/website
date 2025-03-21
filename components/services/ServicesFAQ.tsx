"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is React Native and why should I use it for my mobile app?",
    answer:
      "React Native is a framework developed by Facebook that allows you to build mobile applications using JavaScript and React. It enables you to create apps for both iOS and Android platforms from a single codebase, which can significantly reduce development time and costs. React Native apps offer near-native performance and a native look and feel, making it an excellent choice for businesses looking to reach users on multiple platforms efficiently.",
  },
  {
    question: "How long does it typically take to develop a React Native app?",
    answer:
      "The development timeline for a React Native app varies depending on the complexity, features, and scope of the project. A simple app with basic functionality might take 2-3 months, while a more complex application with custom features, integrations, and advanced functionality could take 4-6 months or more. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.",
  },
  {
    question: "Do you provide ongoing maintenance and support after the app is launched?",
    answer:
      "Yes, we offer comprehensive maintenance and support services to ensure your app continues to function optimally after launch. Our maintenance packages include regular updates, bug fixes, performance optimizations, and compatibility updates for new OS versions. We also provide technical support to address any issues that may arise and help you plan for future enhancements.",
  },
  {
    question: "Can you help with publishing my app to the App Store and Google Play?",
    answer:
      "We provide full assistance with the app submission process for both the Apple App Store and Google Play Store. This includes preparing all necessary assets (screenshots, descriptions, icons), setting up developer accounts if needed, ensuring compliance with store guidelines, and handling the submission process. We'll work with you to navigate any feedback or requirements from the app stores to ensure a successful launch.",
  },
  {
    question: "How do you ensure the quality and performance of the apps you develop?",
    answer:
      "Quality assurance is integrated throughout our development process. We implement automated testing, manual testing, and performance testing at various stages. Our QA process includes unit testing, integration testing, UI testing, and device-specific testing across multiple screen sizes and OS versions. We also conduct thorough performance optimization to ensure fast loading times, smooth animations, and efficient resource usage.",
  },
  {
    question: "What is your pricing model for React Native development?",
    answer:
      "We offer flexible pricing models to accommodate different project needs. For most projects, we provide fixed-price quotes based on detailed requirements. For ongoing development or projects with evolving scope, we offer time and materials pricing. We also provide retainer-based models for long-term partnerships. Each service has different pricing tiers based on complexity and requirements, and we're happy to provide a detailed quote after understanding your specific needs.",
  },
]

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
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
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"
          ></motion.div>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have questions about our services? Find answers to commonly asked questions below.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                )}
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className="p-5 bg-white rounded-b-lg border-t border-gray-100">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

