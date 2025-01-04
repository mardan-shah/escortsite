'use client'

import { useState, useEffect } from "react"
import ProfileCard from "@/components/cards/ProfileCard"
import Pagination from "@/components/cards/PaginationCards"

interface Profile {
  name: string
  rating: string
  age: number
  height: string
  price: number
  image: string
}

// Function to generate dummy profiles

const generateProfiles = (count: number): Profile[] => {
  
  const characters = [
    { name: "Alexandra", height: 65, price: 120 },
    { name: "Sophia", height: 67, price: 150 },
    { name: "Isabella", height: 63, price: 100 }
  ]


  
  return Array(count).fill(null).map(() => {
    const character = characters[Math.floor(Math.random() * characters.length)]
    const age = Math.floor(Math.random() * 40) + 20
    const height = `${character.height + Math.floor(Math.random() * 5)}"`
    const price = character.price + Math.floor(Math.random() * 100)
    const rating = (Math.random() * (5 - 4) + 4).toFixed(1)
    /* */
    return {
      name: character.name,
      rating,
      age,
      height,
      price,
      image:'/8000.jpg',
    }
  })
}

const Cards = () => {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  useEffect(() => {
    setProfiles(generateProfiles(100))
  }, [])

  // Calculate total pages for pagination
  const totalPages = Math.ceil(profiles.length / itemsPerPage)

  // Determine the starting and ending index based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProfiles = profiles.slice(startIndex, endIndex)

  return (
    <main className="container py-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {currentProfiles.map((profile, i) => (
          <ProfileCard key={i} profile={profile} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  )
}

export default Cards

