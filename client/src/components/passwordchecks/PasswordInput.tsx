'use client'
/* eslint-disable */

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"

type PasswordStrength = 'weak' | 'medium' | 'strong' | 'very strong'

interface PasswordValidation {
  strength: PasswordStrength
  color: string
}

interface PasswordInputProps {
  value: string
  onChange: (value: string) => void
  showRequirements?: boolean
  id?: string
  label?: string
  required?: boolean
  placeholder?: string
  className?: string
}

const PasswordInput = ({
  value,
  onChange,
  showRequirements = true,
  id = 'password',
  label = 'Password',
  required = false,
  placeholder = '',
  className = '',
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const checkPasswordStrength = (password: string): PasswordValidation => {
    let score = 0
    
    if (password.length >= 8) score += 2
    if (password.length >= 12) score += 1
    if (/[a-z]/.test(password)) score += 1
    if (/[A-Z]/.test(password)) score += 1

    if (password === '') {
      return { strength: 'weak', color: 'text-gray-500' }
    } else if (score < 3) {
      return { strength: 'weak', color: 'text-red-500' }
    } else if (score < 4) {
      return { strength: 'medium', color: 'text-yellow-500' }
    } else if (score < 5) {
      return { strength: 'strong', color: 'text-green-500' }
    } else {
      return { strength: 'very strong', color: 'text-emerald-500' }
    }
  }

  const passwordValidation = checkPasswordStrength(value)

  const strengthIndicatorWidth = () => {
    switch (passwordValidation.strength) {
      case 'weak': return 'w-1/4'
      case 'medium': return 'w-2/4'
      case 'strong': return 'w-3/4'
      case 'very strong': return 'w-full'
      default: return 'w-0'
    }
  }

  return (
    <div className={className}>
      <div className="flex justify-between items-center">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <span className={`text-xs ${passwordValidation.color}`}>
          Password strength: {passwordValidation.strength}
        </span>
      </div>
      
      <div className="relative mt-1">
        <Input
          id={id}
          type={showPassword ? 'text' : 'password'}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="pr-10"
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4 text-gray-500" />
          ) : (
            <Eye className="h-4 w-4 text-gray-500" />
          )}
        </Button>
      </div>

      {/* Strength indicator bar 
      <div className="h-1 w-full bg-gray-200 rounded-full mt-2">
        <div
          className={`h-full rounded-full transition-all duration-300 ${strengthIndicatorWidth()} ${passwordValidation.color.replace('text-', 'bg-')}`}
        />
      </div>*/}

      {showRequirements && isFocused && (
        <div className="mt-2 text-xs text-gray-500">
          <p>Password must contain:</p>
          <ul className="list-disc ml-4 mt-1 space-y-1">
            <li>At least 8 characters</li>
            <li>At least one uppercase letter</li>
            <li>At least one lowercase letter</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default PasswordInput