import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ArrowRight } from "lucide-react"
import CTASection from "@/components/CTASection"
import RelatedCaseStudies from "@/components/case-studies/RelatedCaseStudies"
import CaseStudyGallery from "@/components/case-studies/CaseStudyGallery"
import type { Metadata } from "next"

// Case study data (in a real app, this would come from a database or API)
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
    overview:
      "Global Retail Inc., a leading online retailer with over 5 million customers worldwide, approached us to redesign their existing mobile app which was suffering from poor performance, outdated UI, and declining user engagement. The goal was to create a modern, high-performing app that would improve the shopping experience and increase conversions.",
    challenge:
      "The existing app was built with an outdated technology stack, resulting in slow load times, frequent crashes, and a user interface that didn't meet modern design standards. The client was losing customers to competitors with more user-friendly mobile experiences, and conversion rates had declined by 15% over the previous year.",
    solution:
      "We rebuilt the app from the ground up using React Native, focusing on performance, usability, and a clean, modern design. Our approach included:\n\n- Conducting extensive user research to understand pain points and preferences\n- Developing a streamlined information architecture and user flow\n- Creating a modern UI with intuitive navigation and clear product presentation\n- Implementing performance optimizations for fast loading and smooth interactions\n- Adding personalized recommendations based on user behavior\n- Streamlining the checkout process to reduce abandonment",
    results: [
      "40% increase in conversion rate within 3 months of launch",
      "65% improvement in app loading speed",
      "35% increase in average session duration",
      "50% reduction in cart abandonment rate",
      "4.8/5 star rating on app stores (up from 3.2)",
      "28% increase in repeat purchases",
    ],
    testimonial: {
      quote:
        "The Fyndx team transformed our outdated app into a modern, high-performing shopping experience that our customers love. The results have exceeded our expectations, with significant improvements in engagement, conversion, and customer satisfaction.",
      author: "Sarah Johnson",
      role: "Director of Digital, Global Retail Inc.",
    },
    technologies: ["React Native", "Redux", "Node.js", "Firebase", "Stripe API", "Algolia Search"],
    services: ["Custom App Development", "UI/UX Design", "App Optimization"],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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
    overview:
      "ConnectHub, a growing community platform with 2 million users, wanted to enhance their mobile app with advanced social media integration features to increase user engagement and retention. They needed a solution that would make content sharing seamless while implementing real-time notifications to keep users connected.",
    challenge:
      "The existing app had limited social features and suffered from delayed notifications, causing users to miss important interactions. User engagement metrics were declining, and the app was losing ground to competitors with more robust social capabilities.",
    solution:
      "We implemented a comprehensive social media integration strategy using React Native, focusing on real-time features and seamless sharing capabilities. Our approach included:\n\n- Developing a unified social sharing system that worked across multiple platforms\n- Implementing real-time notifications using WebSockets\n- Creating an activity feed with rich media support\n- Building interactive comment and reaction systems\n- Optimizing media uploads for speed and reliability\n- Implementing deep linking for improved content discovery",
    results: [
      "75% increase in overall user engagement",
      "120% increase in content sharing",
      "50% improvement in user retention rates",
      "90% faster notification delivery",
      "35% increase in daily active users",
      "60% more user-generated content",
    ],
    testimonial: {
      quote:
        "Fyndx delivered exactly what we needed - a seamless social experience that keeps our users engaged and connected. The real-time features have transformed how our community interacts, and the metrics speak for themselves.",
      author: "Michael Chen",
      role: "CTO, ConnectHub",
    },
    technologies: ["React Native", "Socket.io", "Firebase", "Redux", "Content Delivery Network", "OAuth 2.0"],
    services: ["Custom App Development", "App Optimization", "UI/UX Design"],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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
    overview:
      "MediCare Solutions, a healthcare provider serving over 100,000 patients, needed a secure, HIPAA-compliant telehealth application to expand their services and improve patient care accessibility. They required a solution that would integrate with their existing systems while providing an intuitive experience for both patients and healthcare providers.",
    challenge:
      "The client needed to rapidly deploy a telehealth solution during the pandemic that would meet strict security and compliance requirements while being accessible to patients of all technical abilities. They also needed seamless integration with their existing electronic health record (EHR) system and appointment scheduling software.",
    solution:
      "We developed a comprehensive telehealth platform using React Native with a focus on security, compliance, and usability. Our solution included:\n\n- End-to-end encrypted video consultations\n- Secure messaging between patients and providers\n- Digital prescription management\n- Appointment scheduling and reminders\n- Integration with existing EHR systems\n- Accessible interface design for users of all abilities\n- Offline mode for reviewing medical information",
    results: [
      "60% improvement in patient satisfaction scores",
      "40% reduction in appointment no-shows",
      "35% decrease in administrative workload",
      "25% increase in appointment capacity",
      "100% HIPAA compliance with zero security incidents",
      "45% of patients preferred telehealth for follow-up appointments",
    ],
    testimonial: {
      quote:
        "The telehealth app developed by Fyndx has revolutionized how we deliver care. Our patients appreciate the convenience and security, while our providers value the reliability and integration with our existing systems. It's been a game-changer for our practice.",
      author: "Dr. Emily Rodriguez",
      role: "Medical Director, MediCare Solutions",
    },
    technologies: [
      "React Native",
      "HIPAA-compliant Cloud Infrastructure",
      "WebRTC",
      "Node.js",
      "OAuth 2.0",
      "HL7 FHIR",
    ],
    services: ["Custom App Development", "UI/UX Design", "Consulting & Strategy"],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = caseStudies.find((s) => s.id === params.id)

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Fyndx",
    }
  }

  return {
    title: `${caseStudy.title} | Fyndx - React Native Experts`,
    description: caseStudy.shortDescription,
  }
}

export default function CaseStudyPage({ params }: Props) {
  const caseStudy = caseStudies.find((s) => s.id === params.id)

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary-dark">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Case Studies
            </Link>
          </div>

          <div className="mb-12">
            <div className="inline-block px-3 py-1 bg-primary bg-opacity-10 text-primary text-sm font-medium rounded-full mb-4">
              {caseStudy.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">{caseStudy.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl">{caseStudy.shortDescription}</p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-16">
            <Image
              src={caseStudy.image || "/placeholder.svg"}
              alt={caseStudy.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Overview</h2>
                <p className="text-gray-700 whitespace-pre-line">{caseStudy.overview}</p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Challenge</h2>
                <p className="text-gray-700 whitespace-pre-line">{caseStudy.challenge}</p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Solution</h2>
                <p className="text-gray-700 whitespace-pre-line">{caseStudy.solution}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Results</h2>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-2" />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-medium text-gray-900">{caseStudy.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-medium text-gray-900">{caseStudy.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Services</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {caseStudy.services.map((service, index) => (
                        <span
                          key={index}
                          className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Technologies</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {caseStudy.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary bg-opacity-5 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Testimonial</h3>
                <blockquote className="italic text-gray-700 mb-4">"{caseStudy.testimonial.quote}"</blockquote>
                <div>
                  <p className="font-medium text-gray-900">{caseStudy.testimonial.author}</p>
                  <p className="text-sm text-gray-500">{caseStudy.testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          <CaseStudyGallery images={caseStudy.gallery} title={caseStudy.title} />

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-primary text-white hover:bg-primary-dark">
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>

      <RelatedCaseStudies currentCaseStudyId={caseStudy.id} />
      <CTASection />
    </>
  )
}

