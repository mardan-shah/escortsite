'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CreditCard, DollarSign } from 'lucide-react'

export default function SubscriptionPayment() {
  const [selectedMethod, setSelectedMethod] = useState('visa')

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-primarypink mb-6">Subscription Payment</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Payment Form */}
        <Card className="shadow-lg border">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg text-gray-600">Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-2">
              {['visa', 'amex', 'paypal'].map(method => (
                <Button
                  key={method}
                  variant={selectedMethod === method ? 'default' : 'outline'}
                  className={`flex-1 h-20 flex-col items-center justify-center gap-2 ${
                    selectedMethod === method ? 'bg-primarypink text-white hover:bg-primarypink/90' : ''
                  }`}
                  onClick={() => setSelectedMethod(method)}
                >
                  {method === 'paypal' ? (
                    <DollarSign className="h-6 w-6" />
                  ) : (
                    <CreditCard className="h-6 w-6" />
                  )}
                  <span className="capitalize">{method}</span>
                </Button>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">Card Number</label>
                <Input placeholder="1234 1234 1234 1234" className="mt-1" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-500">Expiry</label>
                  <Input placeholder="MM/YY" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm text-gray-500">CVC</label>
                  <Input placeholder="CVC" className="mt-1" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-500">Country</label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Zip Code</label>
                  <Input placeholder="00000" className="mt-1" />
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              By providing your account information, you allow Horninghour to charge your account for payments in accordance with their terms.
            </p>
          </CardContent>
        </Card>

        {/* Subscription Summary */}
        <Card className="shadow-lg border">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-primarypink">Premium</CardTitle>
            <p className="text-lg font-medium text-gray-700">Yearly Plan</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subscription:</span>
                <span>00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Fees:</span>
                <span>00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discount:</span>
                <span>00</span>
              </div>
              <div className="flex justify-between font-medium text-lg pt-2 border-t">
                <span>Total:</span>
                <span>00</span>
              </div>
            </div>
            
           <Link href='/pages/profile'>
              <Button 
                className="w-full bg-primarypink text-white hover:bg-primarypink/90 mt-4"
              >
                Complete
              </Button>
           </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
