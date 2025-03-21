"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

type CaseStudyGalleryProps = {
  images: string[]
  title: string
}

export default function CaseStudyGallery({ images, title }: CaseStudyGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setCurrentImageIndex(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (currentImageIndex === null) return

    if (direction === "next") {
      setCurrentImageIndex((currentImageIndex + 1) % images.length)
    } else {
      setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeLightbox()
    } else if (e.key === "ArrowRight") {
      navigateImage("next")
    } else if (e.key === "ArrowLeft") {
      navigateImage("prev")
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Project Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${title} - Image ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {currentImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("prev")
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <div className="relative max-w-4xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={`${title} - Image ${currentImageIndex + 1}`}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("next")
              }}
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              {currentImageIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

