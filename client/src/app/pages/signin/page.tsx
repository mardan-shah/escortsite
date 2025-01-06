'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'

interface LoginFormData {
  email: string
  password: string
  agreeToTerms: boolean
}

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    agreeToTerms: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login submission
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold text-primarypink">
            Log-in
          </h2>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                type="email"
                required
                className="mt-1"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <Input
                id="password"
                type="password"
                required
                className="mt-1"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <div className="mt-1">
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, agreeToTerms: checked as boolean })}
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-  ">
                You agree to our{' '}
                <Link href="/pages/terms" className="text-gold hover:text-gold/90">
                  Terms & Conditions
                </Link>
                {' '}<span className="text-red-500">*</span>
              </label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-primarypink hover:bg-primarypink/90 text-white"
          >
            Continue
          </Button>

          <div className="text-center text-sm">
            <span className="text-gray-600">I Don't have an account </span>
            <Link 
              href="/pages/signup" 
              className="text-primarypink hover:text-primarypink/90 font-medium"
            >
              Create Account here
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login