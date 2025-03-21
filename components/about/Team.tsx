"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Github } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in mobile development, Sarah founded Fyndx to help businesses create exceptional mobile experiences with React Native.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Michael leads our technical team, bringing 12 years of experience in cross-platform development and a passion for optimizing performance in React Native apps.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Priya Patel",
    role: "Lead Designer",
    bio: "Priya combines her expertise in UX/UI design with a deep understanding of React Native to create beautiful, intuitive interfaces that users love.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "David Rodriguez",
    role: "Senior Developer",
    bio: "David specializes in complex React Native implementations, with particular expertise in integrating native modules and optimizing app performance.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Emma Wilson",
    role: "Project Manager",
    bio: "Emma ensures our projects run smoothly, leveraging her background in agile methodologies and her experience managing complex mobile app developments.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "James Lee",
    role: "DevOps Engineer",
    bio: "James manages our CI/CD pipelines and deployment processes, ensuring smooth delivery of React Native apps across iOS and Android platforms.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
]

export default function Team() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
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
            Our talented team of experts brings together diverse skills and experiences to deliver exceptional React
            Native solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden group">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={member.social.linkedin}
                        className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5 text-primary" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="w-5 h-5 text-primary" />
                      </a>
                      <a
                        href={member.social.github}
                        className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="w-5 h-5 text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

