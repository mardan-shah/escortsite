'use client'
/* eslint-disable */

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import PasswordInput from '@/components/passwordchecks/PasswordInput'
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

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (!formData.agreeToTerms) {
      setErrorMessage("You must agree to the terms and conditions");
      return;
    }

    // Handle successful form submission
    setErrorMessage(null);
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="min-h-scree flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold text-primarypink">
            Member Account
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

            <PasswordInput
              value={formData.password}
              onChange={(value) => setFormData({ ...formData, password: value })}
              label="Password"
              required
            />

            <PasswordInput
              value={formData.confirmPassword}
              onChange={(value) => setFormData({ ...formData, confirmPassword: value })}
              label="Confirm Password"
              required
              showRequirements={false}
            />

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