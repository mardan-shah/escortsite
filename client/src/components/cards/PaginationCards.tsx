'use client'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const getPageNumbers = () => {
    const pageNumbers = []

    if (totalPages <= 5) {
      // Show all pages if total pages are 5 or less
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      // Always show the first page
      pageNumbers.push(1)

      // Show the previous range of pages when the current page is not near the start
      if (currentPage > 3) {
        pageNumbers.push('...')
      }

      // Show current page and adjacent pages
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i)
      }

      // Show the next range of pages when the current page is not near the end
      if (currentPage < totalPages - 2) {
        pageNumbers.push('...')
      }

      // Always show the last page
      if (totalPages > 1) {
        pageNumbers.push(totalPages)
      }
    }

    return pageNumbers
  }

  return (
    <div className="mt-8 flex items-center justify-center gap-2 w-3/4 mx-auto">
      <Button
        variant="outline"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="text-white bg-secondarygray/70 border-secondarygray hover:bg-secondarygray/10"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>
      
      {/* Center the pagination number buttons */}
      <div className="flex w-1/4 items-center space-x-1 justify-evenly">
        {getPageNumbers().map((pageNum, index) => (
          pageNum === '...' ? (
            <span key={index} className="px-2 text-secondarygray">...</span>
          ) : (
            <Button
              key={index}
              variant={currentPage === pageNum ? "default" : "outline"}
              size="icon"
              onClick={() => onPageChange(pageNum as number)}
              className={`w-10 ${currentPage === pageNum ? 'bg-primarypink text-white' : 'text-secondarygray'}`}
            >
              {pageNum}
            </Button>
          )
        ))}
      </div>
      
      <Button
        variant="outline"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="text-white border-secondarygray bg-primarypink"
      >
        Next <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default Pagination
