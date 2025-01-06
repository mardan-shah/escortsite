'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'

interface FormData {
  name: string
  email: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

const MemberAccount = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="min-h-scree flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold text-primarypink">
            Member account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Create your account
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                type="text"
                required
                className="mt-1"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                type="email"
                required
                placeholder="myemail@domain.com"
                className="mt-1"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password <span className="text-red-500">*</span>
                </label>
                <span className="text-xs text-gray-500">Password strength: neutral</span>
              </div>
              <Input
                id="password"
                type="password"
                required
                className="mt-1"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm password <span className="text-red-500">*</span>
              </label>
              <Input
                id="confirmPassword"
                type="password"
                required
                className="mt-1"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>

            <div className="flex items-center">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, agreeToTerms: checked as boolean })}
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                You agree to our{' '}
                <Link href="/terms" className="text-primaryPink hover:text-primaryPink/90">
                  Terms & Conditions
                </Link>
                {' '}and to our{' '}
                <Link href="/agreement" className="text-primaryPink hover:text-primaryPink/90">
                  Advertisement Agreement
                </Link>
                {' '}<span className="text-red-500">*</span>
              </label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-primarypink hover:bg-secondarypink text-white"
          >
            Create an account
          </Button>
        </form>
      </div>
    </div>
  )
}

export default MemberAccount