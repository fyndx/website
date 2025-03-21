"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

type FilterProps = {
  onFilterChange: (category: string) => void
  onSearchChange: (query: string) => void
}

export default function CaseStudiesFilter() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // This would be connected to a parent component in a real implementation
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    // onFilterChange(category)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    // onSearchChange(e.target.value)
  }

  const categories = [
    { id: "all", name: "All" },
    { id: "e-commerce", name: "E-commerce" },
    { id: "healthcare", name: "Healthcare" },
    { id: "fintech", name: "Fintech" },
    { id: "social", name: "Social" },
    { id: "enterprise", name: "Enterprise" },
  ]

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="w-full md:w-64">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

