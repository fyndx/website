"use client"

import { motion } from "framer-motion"

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description:
      "Fyndx was established with a mission to provide expert React Native development services to businesses of all sizes.",
  },
  {
    year: "2019",
    title: "First Major Client",
    description:
      "Secured our first enterprise client and successfully delivered a complex e-commerce application that increased their mobile sales by 45%.",
  },
  {
    year: "2020",
    title: "Team Expansion",
    description:
      "Grew our team to 15 React Native specialists and expanded our service offerings to include UI/UX design and consulting.",
  },
  {
    year: "2021",
    title: "International Reach",
    description:
      "Expanded our client base to include companies from Europe and Asia, establishing Fyndx as a global React Native consultancy.",
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description:
      "Received multiple industry awards for our innovative approach to mobile app development and client satisfaction.",
  },
  {
    year: "2023",
    title: "New Headquarters",
    description:
      "Moved to a larger office space to accommodate our growing team and established a dedicated R&D department to explore emerging technologies.",
  },
]

export default function Timeline() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 z-0">
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
            Our Journey
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
            From our humble beginnings to becoming a leading React Native consultancy, here are the key milestones in
            our company's history.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary bg-opacity-20 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className={`md:flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse md:text-right"
                  }`}
                >
                  {/* Year bubble - visible on mobile and desktop */}
                  <div className="md:w-1/2 flex items-center mb-4 md:mb-0">
                    <div
                      className={`${
                        index % 2 === 0 ? "md:ml-auto md:mr-8" : "md:mr-auto md:ml-8"
                      } bg-primary text-white text-xl font-bold rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-10`}
                    >
                      {milestone.year}
                    </div>
                    {/* Content for mobile view */}
                    <div className="ml-4 md:hidden">
                      <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                      <p className="text-gray-600 mt-2">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Content for desktop view */}
                  <div className="hidden md:block md:w-1/2">
                    <div className={`bg-white p-6 rounded-xl shadow-md ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

