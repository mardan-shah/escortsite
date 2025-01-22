'use client'

import { useState } from 'react'
import Image from 'next/image'
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
  profilePicture: File | null
  agreeToTerms: boolean
}

const CreateAccount = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePicture: null,
    agreeToTerms: false
  })

  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, profilePicture: file })
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match")
      return
    }

    if (!formData.agreeToTerms) {
      setErrorMessage("You must agree to the terms and conditions")
      return
    }

    setErrorMessage(null)
    console.log("Form data submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
        <div>
          <h2 className="text-center text-3xl font-bold text-primarypink">
            Independent Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Create your account
          </p>
        </div>
        
        {errorMessage && (
          <div className="text-red-500 text-sm text-center">{errorMessage}</div>
        )}
        
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mx-auto">
                Profile Picture
              </label>
              <div className="mt-1 flex flex-col items-center justify-center p-6 border-2 h-56 w-56 border-dashed rounded-full border-secondarypink mx-auto">
                {imagePreview ? (
                  <div className="relative w-32 h-32">
                    <Image
                      src={imagePreview}
                      alt="Profile preview"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Drag photo to upload</p>
                  </div>
                )}
                <Button
                  type="button"
                  variant="secondary"
                  className="mt-4 bg-primarypink text-white hover:bg-secondarypink"
                  onClick={() => document.getElementById('photo-upload')?.click()}
                >
                  Choose photo
                </Button>
                <input
                  id="photo-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, agreeToTerms: checked as boolean })}
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <Link href="/terms" className="text-gold">
                  Terms & Conditions
                </Link>
                {' '}and{' '}
                <Link href="/agreement" className="text-gold">
                  Agreement
                </Link>
              </label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full mt-4 bg-primarypink hover:bg-primarypink/90 text-white"
          >
            Create an account
          </Button>
        </form>
      </div>
    </div>
  )
}

export default CreateAccount
