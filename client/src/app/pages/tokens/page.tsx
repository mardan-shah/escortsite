'use client'

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from 'next/image' // Import the Image component
import { useState } from 'react'

interface TokenOption {
  amount: number
  price: number
  isBestValue?: boolean
  src: string
}

const BoosterTokenPage = ()=> {
  const [selectedToken, setSelectedToken] = useState<TokenOption | null>(null)

  const tokenOptions: TokenOption[] = [
    { amount: 1, price: 15, src:'/tokens/TokenIcon.svg' },
    { amount: 30, price: 250, isBestValue: true, src:'/tokens/thirtytokens.svg' },
    { amount: 7, price: 95, src:'/tokens/seventokens.svg' },
  ]

  const handleTokenSelect = (token: TokenOption) => {
    setSelectedToken(token)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">Booster token</h1>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-gold">1 Booster token = 24 hours advertisement boost</h2>
            <p className="text-gray-600 mt-2">
              Your booster tokens can be used to boost your advertisement for 24 hours. When the booster token is activated, your advertisement will be the first one out of all the advertisements for your location. Every 30 minutes your advertisements will be placed at the top again. When the booster token is consumed, your advertisement will be marked with "Get on top of the day".
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {tokenOptions.map((token, index) => (
            <Card 
              key={index} 
              className={`relative cursor-pointer transition-all ${
                selectedToken?.amount === token.amount ? 'ring-2 ring-red-600' : ''
              } ${token.isBestValue ? 'border-primarypink' : ''}`}
              onClick={() => handleTokenSelect(token)}
            >
              {token.isBestValue && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primarypink text-white px-4 py-1 rounded-full text-sm">
                    Best Value
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center h-32">
                  <Image 
                    src={token.src} 
                    width={400} 
                    height={400} 
                    alt="Token Icon" 
                    className={`${token.amount === 30 ? 'w-42 h-42' : 'w-42 h-42'}`} 
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4 text-gold">{token.amount} Token{token.amount > 1 ? 's' : ''}</h3>
              </CardHeader>
              <CardFooter>
                <Button className="w-full bg-primarypink hover:bg-primarypink/90">{token.price}€</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Payment Form */}
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold">Payment method</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  className="flex-1 bg-primarypink text-white hover:bg-primarypink/90"
                >
                  VISA
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 bg-primarypink text-white hover:bg-primarypink/90"
                >
                  American Express
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 bg-primarypink text-white hover:bg-primarypink/90"
                >
                  PayPal
                </Button>
              </div>
              <div className="space-y-4">
                <Input placeholder="Card number" />
                <div className="grid grid-cols-3 gap-4">
                  <Input placeholder="MM" />
                  <Input placeholder="YY" />
                  <Input placeholder="CVC" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold">
                {selectedToken ? `${selectedToken.amount} Booster token${selectedToken.amount > 1 ? 's' : ''}` : 'Select a token package'}
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Tokens:</span>
                <span>{selectedToken?.amount || 0}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>{selectedToken ? `${selectedToken.price}€` : '0€'}</span>
              </div>
              <Button 
                className="w-full bg-primarypink hover:bg-primarypink/90"
                disabled={!selectedToken}
              >
                Pay now
              </Button>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-gray-500">
          Tokens can only be bought when a subscription is active
        </p>
      </div>
    </div>
  )
}

export default BoosterTokenPage;
