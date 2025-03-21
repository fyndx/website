"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)

    if (isHomePage) {
      // If we're on the homepage, scroll to the section
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      window.location.href = `/#${id}`
    }
  }

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed w-full z-50 bg-white bg-opacity-95 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Fyndx
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" className="text-gray-800 font-medium hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-800 font-medium hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="text-gray-800 font-medium hover:text-primary transition-colors">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-800 font-medium hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-800 font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-primary text-white hover:bg-primary-dark">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/about"
                  className="block py-2 text-gray-800 font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 text-gray-800 font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="block py-2 text-gray-800 font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block py-2 text-gray-800 font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 text-gray-800 font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <Button className="w-full bg-primary text-white hover:bg-primary-dark">Get Started</Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

