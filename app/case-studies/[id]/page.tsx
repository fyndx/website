import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ArrowRight } from "lucide-react"
import CTASection from "@/components/CTASection"
import RelatedCaseStudies from "@/components/case-studies/RelatedCaseStudies"
import CaseStudyGallery from "@/components/case-studies/CaseStudyGallery"
import { caseStudies } from "@/lib/data"
import type { Metadata } from "next"

// Generate static parameters for all case studies
export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    id: caseStudy.id,
  }))
}

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

