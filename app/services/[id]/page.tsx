import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Check } from "lucide-react"
import CTASection from "@/components/common/CTASection"
import RelatedServices from "@/components/services/RelatedServices"
import { services } from "@/lib/data"
import type { Metadata } from "next"

// Generate static parameters for all services
export async function generateStaticParams() {
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

          {/* <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Pricing Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(service?.pricing || {}).map(([key, value]) => (
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
          </div> */}
        </div>
      </section>

      <RelatedServices currentServiceId={service.id} />
      <CTASection />
    </>
  )
}

