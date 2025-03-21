import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Fyndx</h3>
            <p className="text-gray-300">Empowering businesses with React Native expertise.</p>
            {/* <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div> */}
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              {/* <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li> */}
              <li>
                <a
                  href="https://notes.fyndx.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors group inline-flex items-center"
                >
                  Blog
                  <ArrowUpRight
                    className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-300">
              <p>7/47, Main Road, Duvvur,</p>
              <p>Kadapa, Andhra Pradesh,</p>
              <p>India - 516175</p>
              <p>Phone: <a href="tel:+918341366388" className="hover:underline">8341 366 388</a></p>
              <p>Email: hello@fyndx.io</p>
            </address>
          </div>
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-2">Stay updated with our latest news</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fyndx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
