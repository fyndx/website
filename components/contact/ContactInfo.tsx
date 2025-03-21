import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Get In Touch</h2>
      <p className="text-gray-600 mb-8">
        Have a question or want to discuss your project? Reach out to us using any of the methods below.
      </p>

      <div className="space-y-6">
        <div className="flex items-start">
          <Mail className="w-5 h-5 text-primary mt-1 mr-3" />
          <div>
            <h3 className="font-medium text-gray-900">Email</h3>
            <p className="text-gray-600">hello@fyndx.io</p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="w-5 h-5 text-primary mt-1 mr-3" />
          <div>
            <h3 className="font-medium text-gray-900">Phone</h3>
            <p className="text-gray-600">
              <a href="tel:+918341366388" className="hover:underline">8341 366 388</a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
          <div>
            <h3 className="font-medium text-gray-900">Address</h3>
            <p className="text-gray-600">7/47, Main Road, Duvvur,</p>
            <p className="text-gray-600">Kadapa District,</p>
            <p className="text-gray-600">Andhra Pradesh, India</p>
            <p className="text-gray-600">Pin: 516175</p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
          <div>
            <h3 className="font-medium text-gray-900">Business Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
            <p className="text-gray-600">Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

