import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Check } from "lucide-react"
import CTASection from "@/components/CTASection"
import RelatedServices from "@/components/services/RelatedServices"
import type { Metadata } from "next"

// Service data (in a real app, this would come from a database or API)
const services = [
  {
    id: "custom-app-development",
    title: "Custom App Development",
    shortDescription: "Tailored React Native solutions for your unique business needs.",
    description:
      "Our custom app development service delivers tailor-made React Native applications designed specifically for your business requirements. We follow a collaborative approach, working closely with you from concept to deployment to ensure your vision becomes reality.",
    icon: "📱",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "Fully customized solutions that align with your business goals",
      "Scalable architecture that grows with your business",
      "Cross-platform compatibility for iOS and Android",
      "Optimized performance and user experience",
    ],
    pricing: {
      starter: {
        price: "$10,000+",
        description: "Basic app with essential features",
      },
      professional: {
        price: "$25,000+",
        description: "Advanced app with custom features and integrations",
      },
      enterprise: {
        price: "Custom",
        description: "Complex enterprise solutions with advanced requirements",
      },
    },
    featured: true,
    process: [
      {
        title: "Discovery & Planning",
        description:
          "We begin by understanding your business goals, target audience, and specific requirements to create a detailed project plan.",
      },
      {
        title: "Design & Prototyping",
        description:
          "Our designers create wireframes and interactive prototypes to visualize the app's user interface and experience.",
      },
      {
        title: "Development",
        description:
          "Our experienced React Native developers build your application with clean, maintainable code and regular progress updates.",
      },
      {
        title: "Testing & QA",
        description:
          "Rigorous testing across multiple devices and platforms ensures your app is bug-free and performs optimally.",
      },
      {
        title: "Deployment",
        description: "We handle the submission process to app stores and ensure a smooth launch of your application.",
      },
      {
        title: "Post-Launch Support",
        description: "We provide ongoing maintenance and support to keep your app running smoothly and up-to-date.",
      },
    ],
  },
  {
    id: "app-optimization",
    title: "App Optimization",
    shortDescription: "Enhance performance and user experience of your existing apps.",
    description:
      "Our app optimization service focuses on improving the performance, stability, and user experience of your existing React Native applications. We conduct thorough audits to identify bottlenecks and implement targeted optimizations to enhance your app's overall quality.",
    icon: "🚀",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "Improved app performance and faster load times",
      "Enhanced stability and reduced crash rates",
      "Optimized battery and memory usage",
      "Better user experience leading to higher retention",
    ],
    pricing: {
      audit: {
        price: "$3,000+",
        description: "Comprehensive performance audit with recommendations",
      },
      optimization: {
        price: "$8,000+",
        description: "Implementation of optimization recommendations",
      },
      maintenance: {
        price: "$2,500+/month",
        description: "Ongoing optimization and performance monitoring",
      },
    },
    featured: true,
    process: [
      {
        title: "Performance Audit",
        description: "We analyze your application to identify performance bottlenecks, memory leaks, and other issues.",
      },
      {
        title: "Optimization Strategy",
        description:
          "Based on the audit findings, we develop a comprehensive optimization strategy with prioritized improvements.",
      },
      {
        title: "Implementation",
        description:
          "Our developers implement the recommended optimizations, focusing on the most impactful improvements first.",
      },
      {
        title: "Testing & Validation",
        description:
          "We conduct thorough testing to ensure the optimizations have achieved the desired performance improvements.",
      },
      {
        title: "Monitoring & Refinement",
        description:
          "We set up performance monitoring tools and continue to refine optimizations based on real-world usage data.",
      },
    ],
  },
  {
    id: "consulting-strategy",
    title: "Consulting & Strategy",
    shortDescription: "Expert advice on React Native implementation and best practices.",
    description:
      "Our consulting and strategy service provides expert guidance on React Native implementation, architecture decisions, and development best practices. We help you make informed decisions that align with your business goals and technical requirements.",
    icon: "💡",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "Strategic guidance from experienced React Native experts",
      "Tailored recommendations for your specific business context",
      "Risk mitigation and problem-solving support",
      "Knowledge transfer to your internal team",
    ],
    pricing: {
      hourly: {
        price: "$150-$250/hour",
        description: "Ad-hoc consulting on specific issues",
      },
      project: {
        price: "$5,000+",
        description: "Comprehensive project assessment and recommendations",
      },
      retainer: {
        price: "$8,000+/month",
        description: "Ongoing strategic support and advisory services",
      },
    },
    featured: false,
    process: [
      {
        title: "Initial Assessment",
        description: "We evaluate your current situation, challenges, and goals to understand your specific needs.",
      },
      {
        title: "Strategy Development",
        description:
          "We develop a tailored strategy that addresses your challenges and aligns with your business objectives.",
      },
      {
        title: "Recommendations & Roadmap",
        description: "We provide detailed recommendations and a clear roadmap for implementation.",
      },
      {
        title: "Implementation Support",
        description: "We offer guidance and support during the implementation of our recommendations.",
      },
      {
        title: "Knowledge Transfer",
        description:
          "We ensure your team understands the rationale behind our recommendations and has the knowledge to maintain and build upon them.",
      },
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Create beautiful, intuitive interfaces that users love.",
    description:
      "Our UI/UX design service focuses on creating visually appealing and intuitive user interfaces that enhance the overall user experience of your React Native application. We combine aesthetic design with functional usability to create interfaces that users love.",
    icon: "🎨",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "User-centered design that prioritizes usability",
      "Consistent visual language across your application",
      "Intuitive navigation and information architecture",
      "Accessibility considerations for all users",
    ],
    pricing: {
      basic: {
        price: "$5,000+",
        description: "Essential UI/UX design for simple applications",
      },
      standard: {
        price: "$12,000+",
        description: "Comprehensive design for medium-complexity applications",
      },
      premium: {
        price: "$20,000+",
        description: "Advanced design for complex applications with multiple user flows",
      },
    },
    featured: false,
    process: [
      {
        title: "User Research",
        description: "We conduct research to understand your target users, their needs, behaviors, and preferences.",
      },
      {
        title: "Information Architecture",
        description: "We organize and structure your app's content and functionality in a logical and intuitive way.",
      },
      {
        title: "Wireframing",
        description: "We create low-fidelity wireframes to establish the basic structure and layout of your app.",
      },
      {
        title: "Visual Design",
        description:
          "We develop a visual language and apply it to create high-fidelity designs that align with your brand.",
      },
      {
        title: "Prototyping",
        description: "We build interactive prototypes to simulate the user experience and gather feedback.",
      },
      {
        title: "Usability Testing",
        description: "We test the designs with real users to identify and address any usability issues.",
      },
    ],
  },
  {
    id: "cross-platform-development",
    title: "Cross-Platform Development",
    shortDescription: "Build once, deploy everywhere with React Native.",
    description:
      "Our cross-platform development service leverages React Native to build applications that run seamlessly on both iOS and Android platforms from a single codebase. This approach reduces development time and costs while maintaining a consistent user experience across platforms.",
    icon: "🔄",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "Single codebase for iOS and Android platforms",
      "Faster development and time-to-market",
      "Consistent user experience across platforms",
      "Easier maintenance and updates",
    ],
    pricing: {
      basic: {
        price: "$15,000+",
        description: "Essential cross-platform app with core features",
      },
      advanced: {
        price: "$30,000+",
        description: "Feature-rich cross-platform application",
      },
      enterprise: {
        price: "Custom",
        description: "Complex enterprise cross-platform solutions",
      },
    },
    featured: true,
    process: [
      {
        title: "Requirements Analysis",
        description: "We gather and analyze your requirements to understand the scope and functionality of your app.",
      },
      {
        title: "Architecture Planning",
        description: "We design a robust architecture that ensures optimal performance across platforms.",
      },
      {
        title: "UI/UX Design",
        description:
          "We create designs that respect platform conventions while maintaining a consistent brand experience.",
      },
      {
        title: "Development",
        description:
          "We build your app using React Native, focusing on code reusability and platform-specific optimizations.",
      },
      {
        title: "Testing",
        description:
          "We test your app thoroughly on both iOS and Android devices to ensure consistent functionality and performance.",
      },
      {
        title: "Deployment & Support",
        description: "We handle the deployment to both app stores and provide ongoing support and maintenance.",
      },
    ],
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    shortDescription: "Ongoing support to keep your app running smoothly.",
    description:
      "Our maintenance and support service ensures your React Native application continues to run smoothly after launch. We provide regular updates, bug fixes, and performance optimizations to keep your app functioning at its best and adapting to changing platform requirements.",
    icon: "🛠️",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "Regular updates to maintain compatibility with latest OS versions",
      "Proactive monitoring and issue resolution",
      "Performance optimization and bug fixes",
      "Technical support and guidance",
    ],
    pricing: {
      basic: {
        price: "$1,500+/month",
        description: "Essential maintenance for simple applications",
      },
      standard: {
        price: "$3,000+/month",
        description: "Comprehensive support for medium-complexity applications",
      },
      premium: {
        price: "$5,000+/month",
        description: "Priority support for complex, business-critical applications",
      },
    },
    featured: false,
    process: [
      {
        title: "Regular Monitoring",
        description: "We continuously monitor your app's performance and stability to identify potential issues.",
      },
      {
        title: "Preventive Maintenance",
        description: "We perform regular updates and optimizations to prevent issues before they occur.",
      },
      {
        title: "Issue Resolution",
        description: "We quickly address and resolve any bugs or issues that arise in your application.",
      },
      {
        title: "Platform Updates",
        description: "We ensure your app remains compatible with the latest OS versions and device specifications.",
      },
      {
        title: "Feature Enhancements",
        description: "We implement new features and improvements based on user feedback and changing requirements.",
      },
      {
        title: "Performance Optimization",
        description: "We continuously optimize your app's performance to ensure the best possible user experience.",
      },
    ],
  },
]

// Add this function to generate static parameters for all services
export async function generateStaticParams() {
  // In a real application, you might fetch this data from an API or CMS
  // For this example, we're using the hardcoded services array

  return services.map((service) => ({
    id: service.id,
  }))
}

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    return {
      title: "Service Not Found | Fyndx",
    }
  }

  return {
    title: `${service.title} | Fyndx - React Native Experts`,
    description: service.shortDescription,
  }
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    notFound()
  }

  return (
    <>
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center text-primary hover:text-primary-dark">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Services
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">{service.title}</h1>
              <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
              <p className="text-lg text-gray-700 mb-8">{service.description}</p>
              <Button size="lg" className="bg-primary text-white hover:bg-primary-dark">
                Request a Quote
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Process</h2>
              <div className="space-y-8">
                {service.process.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Key Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Pricing Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(service.pricing).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 capitalize">{key}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">{value.price}</p>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentServiceId={service.id} />
      <CTASection />
    </>
  )
}

