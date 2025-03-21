import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"

export const metadata = {
  title: "Contact Us | Fyndx - React Native Experts",
  description: "Get in touch with Fyndx for your React Native development needs",
}

export default function ContactPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

