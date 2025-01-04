'use client'

import { SlidersHorizontal, ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Filter from "@/components/filter/Filter"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const cities = [
  { name: "Amsterdam", icon: "/amseterdam.png" },
  { name: "Rotterdam", icon: "/amseterdam.png" },
  { name: "The Hague", icon: "/amseterdam.png" },
  { name: "Utrecht", icon: "/amseterdam.png" },
  { name: "Eindhoven", icon: "/amseterdam.png" },
  { name: "Groningen", icon: "/amseterdam.png" },
  { name: "Tilburg", icon: "/amseterdam.png" },
  { name: "Almere", icon: "/amseterdam.png" },
]

const countries = [
  { name: "Netherlands", flag: "/amseterdam.png" },
  { name: "Germany", flag: "/amseterdam.png" },
  { name: "France", flag: "/amseterdam.png" },
  { name: "Spain", flag: "/amseterdam.png" },
]

const LowerNav = () => {
  const [filterModalOpen, setFilterModalOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    let scrollPosition = 0
    const scroll = () => {
      scrollPosition += 1
      if (scrollPosition > scrollWidth - clientWidth) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 30)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="min-h-auto bg-[#e6e6e6]">
      <div className="container flex h-16 items-center gap-4 px-4 md:px-8 lg:px-28">
        {/* Filter and Country Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-white hover:bg-gray-50"
            onClick={() => setFilterModalOpen(true)}
            aria-label="Open Filters"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filter
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-white hover:bg-gray-50"
                aria-label="Select Country"
              >
                <span className="mr-1">Country</span>
                <ChevronDown className="h-4 w-4" />
                <Image
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  width={28}
                  height={20}
                  className="rounded"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              {countries.map((country) => (
                <DropdownMenuItem 
                  key={country.name}
                  onClick={() => setSelectedCountry(country)}
                >
                  <Image
                    src={country.flag}
                    alt={country.name}
                    width={28}
                    height={20}
                    className="rounded mr-2"
                  />
                  {country.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* City Scroll */}
        <div className="relative flex-1 overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex items-center gap-2 whitespace-nowrap"
            style={{ width: "max-content" }}
          >
            {[...cities, ...cities].map((city, i) => (
              <Button
                key={i}
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 whitespace-nowrap hover:bg-gray-100"
                aria-label={`Select ${city.name}`}
              >
                <Image
                  src={city.icon}
                  alt={city.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                {city.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      {/* Filter Modal */}
      {filterModalOpen && <Filter open={filterModalOpen} onOpenChange={setFilterModalOpen} />}
    </div>
  )
}

export default LowerNav

