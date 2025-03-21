import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero"
import CaseStudiesList from "@/components/case-studies/CaseStudiesList"
import CaseStudiesFilter from "@/components/case-studies/CaseStudiesFilter"
import CTASection from "@/components/CTASection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies | Fyndx - React Native Experts",
  description: "Explore our successful React Native projects and client success stories",
}

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesFilter />
      <CaseStudiesList />
      <CTASection />
    </>
  )
}

