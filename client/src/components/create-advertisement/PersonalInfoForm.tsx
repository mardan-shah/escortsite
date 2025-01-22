'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ImagePlus, X } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

interface PersonalInfoFormProps {
  setActiveComponent: (value: number) => void;
}

export default function PersonalInfoForm({ setActiveComponent }: PersonalInfoFormProps) {
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>()
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const imageUrls = files.map(file => URL.createObjectURL(file))
    setSelectedImages(prev => [...prev, ...imageUrls].slice(0, 9))
  }

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index))
  }

  const submitForm = () => {
    setActiveComponent(2);
  }

  return (
    <form className="w-full max-w-2xl mx-auto p-6 space-y-8">
      <div className="space-y-6">
        <h2 className="text-lg font-medium text-[#A94CA6]">Personal Information</h2>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name/Pseudonym</Label>
            <Input id="name" placeholder="e.g. John Doe" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="gender">Gender</Label>
              <Select>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" placeholder="e.g. 25" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="height">Height</Label>
              <Input id="height" placeholder="e.g. 175cm" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="weight">Weight</Label>
              <Input id="weight" placeholder="e.g. 65kg" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="hairColour">Hair Colour</Label>
              <Input id="Hair-Colour" placeholder="Any" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="eyeColor">Eye Colour</Label>
              <Input id="eyeColor" placeholder="Any" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="ethnicity">Ethnicity</Label>
              <Input id="ethnicity" placeholder="Any" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="Tattos">Tattos/Piercings</Label>
              <Input id="Tatto" placeholder="Any" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="bust-size">Bust Size</Label>
              <Input id="bust-size" placeholder="e.g. 34" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bust-type">Bust Size</Label>
              <Select>
                <SelectTrigger id="bust-type">
                  <SelectValue placeholder="Select cup" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">A</SelectItem>
                  <SelectItem value="b">B</SelectItem>
                  <SelectItem value="c">C</SelectItem>
                  <SelectItem value="d">D</SelectItem>
                  <SelectItem value="dd">DD</SelectItem>
                  <SelectItem value="e">E</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="pubic">Pubic Hair</Label>
              <Select>
                <SelectTrigger id="pubic">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="natural">Natural</SelectItem>
                  <SelectItem value="trimmed">Trimmed</SelectItem>
                  <SelectItem value="shaved">Shaved</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-medium text-[#A94CA6]">Contact & Location</h2>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <PhoneInput
              international
              defaultCountry="US"
              value={phoneNumber}
              onChange={setPhoneNumber}
              className="flex h-10 w-1/2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Select>
                <SelectTrigger id="location">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="location1">Location 1</SelectItem>
                  <SelectItem value="location2">Location 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="area">Area</Label>
              <Select>
                <SelectTrigger id="area">
                  <SelectValue placeholder="Select area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="area1">Area 1</SelectItem>
                  <SelectItem value="area2">Area 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-medium text-[#A94CA6]">Attach Advertisement Photos (Maximum of 09)</h2>
        <div className="border-2 border-dashed rounded-lg p-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-full flex flex-wrap gap-4">
              {selectedImages.map((image, index) => (
                <div key={index} className="relative aspect-square w-24 h-24 overflow-hidden rounded-lg border">
                  <Image
                    src={image}
                    alt={`Preview ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 p-1 bg-red-500 rounded-full"
                  >
                    <X className="h-4 w-4 text-white" />
                  </button>
                </div>
              ))}
              {selectedImages.length === 0 ? (
                <div className="w-full flex justify-center">
                  <label className="cursor-pointer">
                    <span className="bg-[#A94CA6] text-white px-4 py-2 rounded-md hover:bg-[#8e3b8c] flex items-center gap-2">
                      <ImagePlus className="h-5 w-5" />
                      Choose photo
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              ) : selectedImages.length < 9 && (
                <label className="cursor-pointer w-24 h-24 flex items-center justify-center border rounded-lg">
                  <ImagePlus className="h-8 w-8 text-[#A94CA6]" />
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
            {selectedImages.length === 0 && (
              <p className="text-sm text-gray-500">You can upload up to 9 photos.</p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-medium text-[#A94CA6]">Verification Passport Photo</h2>
        <div className="border-2 border-dashed rounded-lg p-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-full flex flex-wrap gap-4">
              {selectedImages.map((image, index) => (
                <div key={index} className="relative aspect-square w-24 h-24 overflow-hidden rounded-lg border">
                  <Image
                    src={image}
                    alt={`Preview ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 p-1 bg-red-500 rounded-full"
                  >
                    <X className="h-4 w-4 text-white" />
                  </button>
                </div>
              ))}
              {selectedImages.length === 0 ? (
                <div className="w-full flex justify-center">
                  <label className="cursor-pointer">
                    <span className="bg-[#A94CA6] text-white px-4 py-2 rounded-md hover:bg-[#8e3b8c] flex items-center gap-2">
                      <ImagePlus className="h-5 w-5" />
                      Choose photo
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              ) : selectedImages.length < 9 && (
                <label className="cursor-pointer w-24 h-24 flex items-center justify-center border rounded-lg">
                  <ImagePlus className="h-8 w-8 text-[#A94CA6]" />
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
            {selectedImages.length === 0 && (
              <p className="text-sm text-gray-500">Upload Passport Photo</p>
            )}
          </div>
        </div>
      </div>

      <Button
        onClick={submitForm}
        className="w-full bg-[#A94CA6] text-white hover:bg-[#8e3b8c]"
      >
        Service offering →
      </Button>
    </form>
  )
}