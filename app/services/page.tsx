import ServicesHero from "@/components/services/ServicesHero"
import ServicesList from "@/components/services/ServicesList"
import ServicesFAQ from "@/components/services/ServicesFAQ"
import CTASection from "@/components/common/CTASection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Fyndx - React Native Experts",
  description: "Explore our comprehensive React Native development services for your business needs",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesFAQ />
      <CTASection />
    </>
  )
}

