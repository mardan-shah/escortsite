'use client'

import Image from "next/image"
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Filter from "@/components/filter/Filter"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import useEmblaCarousel from 'embla-carousel-react'
import { City, Country } from '@/types/Navigation'

const cities: City[] = [
  { name: "Amsterdam", icon: "/amseterdam.png" },
  { name: "Rotterdam", icon: "/amseterdam.png" },
  { name: "The Hague", icon: "/amseterdam.png" },
  { name: "Utrecht", icon: "/amseterdam.png" },
  { name: "Eindhoven", icon: "/amseterdam.png" },
  { name: "Groningen", icon: "/amseterdam.png" },
]

const countries: Country[] = [
  { name: "Netherlands", flag: "/amseterdam.png" },
  { name: "Germany", flag: "/amseterdam.png" },
  { name: "France", flag: "/amseterdam.png" },
  { name: "Spain", flag: "/amseterdam.png" },
]

const LowerNav = () => {
  const [filterModalOpen, setFilterModalOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [selectedCity, setSelectedCity] = useState(cities[0])
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'keepSnaps',
    dragFree: true
  })

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext()
      }, 3000)

      return () => clearInterval(autoplay)
    }
  }, [emblaApi])

  // Function to handle country selection
  const handleCountrySelect = (value: string) => {
    const country = countries.find((country) => country.name === value)
    setSelectedCountry(country || countries[0]) // Fallback to the first country if not found
  }

  // Function to handle city selection
  const handleCitySelect = (value: string) => {
    const city = cities.find((city) => city.name === value)
    setSelectedCity(city || cities[0]) // Fallback to the first city if not found
  }

  return (
    <div className="min-h-auto bg-[#e6e6e6] w-full flex justify-center items-center">
      <div className="container flex h-16 items-center gap-4 px-4 md:px-8 lg:px-28 mx-auto">
        {/* Filter Button */}
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 bg-white hover:bg-gray-50"
          onClick={() => setFilterModalOpen(true)}
          aria-label="Open filters"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filter
        </Button>

        {/* Country Select */}
        <div className="hidden md:block w-40">
          <Select onValueChange={handleCountrySelect}>
            <SelectTrigger className="flex items-center gap-2 bg-white">
              <SelectValue placeholder="Select a country">
                <div className="flex items-center gap-2">
                  <Image
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    width={28}
                    height={20}
                    className="rounded"
                  />
                  {selectedCountry.name}
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.name} value={country.name}>
                  <div className="flex items-center gap-2">
                    <Image
                      src={country.flag}
                      alt={country.name}
                      width={28}
                      height={20}
                      className="rounded mr-2"
                    />
                    {country.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Mobile Country Select */}
        <div className="md:hidden w-40">
          <Select onValueChange={handleCountrySelect}>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select a country">
                <div className="flex items-center gap-2">
                  <Image
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    width={28}
                    height={20}
                    className="rounded"
                  />
                  {selectedCountry.name}
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.name} value={country.name}>
                  <div className="flex items-center gap-2">
                    <Image
                      src={country.flag}
                      alt={country.name}
                      width={28}
                      height={20}
                      className="rounded mr-2"
                    />
                    {country.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* City Select */}
        <div className="md:hidden flex-1 w-40">
          <Select onValueChange={handleCitySelect}>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select a city">
                <div className="flex items-center gap-2">
                  <Image
                    src={selectedCity.icon}
                    alt={selectedCity.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  {selectedCity.name}
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city.name} value={city.name}>
                  <div className="flex items-center gap-2">
                    <Image
                      src={city.icon}
                      alt={city.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    {city.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop Carousel */}
        <div className="relative flex-1 w-1/2 hidden md:block">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {[...cities, ...cities].map((city, index) => (
                <div
                  key={index}
                  className="flex-none w-[200px] pl-4"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 whitespace-nowrap hover:bg-gray-100 w-full"
                    aria-label={`Select ${city.name}`}
                  >
                    <Image
                      src={city.icon}
                      alt={city.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="text-sm font-medium">{city.name}</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            className="absolute left-0 top-1/2 -translate-y-1/2  rounded-full bg-white/80 hover:bg-white"
            size="icon"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            className="absolute right-0 top-1/2 -translate-y-1/2  rounded-full bg-white/80 hover:bg-white"
            size="icon"
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Filter Modal */}
      {filterModalOpen && <Filter open={filterModalOpen} onOpenChange={setFilterModalOpen} />}
    </div>
  )
}

export default LowerNav
