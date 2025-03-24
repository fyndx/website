import AboutHero from "@/components/about/AboutHero"
import Mission from "@/components/about/Mission"
import Values from "@/components/about/Values"
import Team from "@/components/about/Team"
import Timeline from "@/components/about/Timeline"
import CTASection from "@/components/common/CTASection"

export const metadata = {
  title: "About Us | Fyndx - React Native Experts",
  description: "Learn about Fyndx, our mission, values, and the team behind our React Native expertise",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Values />
      {/* <Team /> */}
      {/* <Timeline /> */}
      <CTASection />
    </>
  )
}

