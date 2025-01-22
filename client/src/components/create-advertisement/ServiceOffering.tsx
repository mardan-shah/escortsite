'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X, Plus, Info } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Review from './Review'

interface TimeSlot {
  from: string;
  to: string;
}

interface Rate {
  amount: string;
  price: string;
}

interface Locations {
  [key: string]: string[];
}

interface ServiceFormProps {
  setActiveComponent: (value: number) => void;
}

export default function ServiceForm({ setActiveComponent }: ServiceFormProps) {
  const [selectedDays, setSelectedDays] = useState<{ [key: string]: boolean }>({})
  const [selectedLocationType, setSelectedLocationType] = useState<string>("")
  const [timeSlots, setTimeSlots] = useState<{ [key: string]: TimeSlot[] }>({})
  const [showReview, setShowReview] = useState<boolean>(false)

  const [rates, setRates] = useState<Rate[]>([{ amount: '', price: '' }])
  const [locations, setLocations] = useState<Locations>({
    'United Kingdom': [''],
    'Belgium': [''],
    'Netherlands': ['']
  })

  const addTimeSlot = (day: string) => {
    setTimeSlots(prev => ({
      ...prev,
      [day]: [...(prev[day] || []), { from: '09:00', to: '17:00' }]
    }))
  }

  const removeTimeSlot = (day: string, index: number) => {
    if (timeSlots[day]?.length > 1) {
      setTimeSlots(prev => ({
        ...prev,
        [day]: prev[day].filter((_, i) => i !== index)
      }))
    }
  }

  const addRate = () => {
    setRates(prev => [...prev, { amount: '', price: '' }])
  }

  const removeRate = (index: number) => {
    if (rates.length > 1) {
      setRates(prev => prev.filter((_, i) => i !== index))
    }
  }

  const addLocation = (country: string) => {
    setLocations(prev => ({
      ...prev,
      [country]: [...(prev[country] || []), '']
    }))
  }

  const removeLocation = (country: string, index: number) => {
    if (locations[country].length > 1) {
      setLocations(prev => ({
        ...prev,
        [country]: prev[country].filter((_, i) => i !== index)
      }))
    }
  }

  const submitForm = () => {
    setActiveComponent(3)
  }

  const reviewUser = () => {
    setShowReview(true)
  }

  return (
    <>
      {showReview ? (
        <Review show={setShowReview} next={setActiveComponent} />
      ) : (
        <div className="w-full max-w-2xl mx-auto">
          <div className="p-6 space-y-8">
            {/* Service Offering */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-primarypink">Service Offering</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="gfe" />
                    <Label htmlFor="gfe">GFE (Girlfriend Experience)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="striptease" />
                    <Label htmlFor="striptease">Striptease/Dance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="overnight" />
                    <Label htmlFor="overnight">Overnight Stays</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="roleplay" />
                    <Label htmlFor="roleplay">Role Play</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-primarypink" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Additional information about role play services</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="pse" />
                    <Label htmlFor="pse">PSE (Premium Experience)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="companionship" />
                    <Label htmlFor="companionship">Companionship</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="massage" />
                    <Label htmlFor="massage">Massage</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="bdsm" />
                    <Label htmlFor="bdsm">BDSM</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-primarypink" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Additional information about BDSM services</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Preferences */}
            <div className="space-y-2">
              <Label htmlFor="preferences">Additional Preferences and Customization</Label>
              <Textarea 
                id="preferences" 
                placeholder="Please add any specific details, kinks, or custom needs you may have."
                className="min-h-[100px]"
              />
            </div>

            {/* Availability */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-primarypink">Availability</h3>
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                <div key={day} className="flex items-start space-x-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id={day.toLowerCase()} 
                      checked={selectedDays[day.toLowerCase()]}
                      onCheckedChange={(checked) => {
                        setSelectedDays(prev => ({...prev, [day.toLowerCase()]: checked === true}))
                        if (checked && !timeSlots[day.toLowerCase()]) {
                          setTimeSlots(prev => ({...prev, [day.toLowerCase()]: [{ from: '09:00', to: '17:00' }] }))
                        }
                      }}
                    />
                    <Label htmlFor={day.toLowerCase()}>{day}</Label>
                  </div>
                  {selectedDays[day.toLowerCase()] ? (
                    <div className="flex-1 space-y-2">
                      {timeSlots[day.toLowerCase()]?.map((slot, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Input
                            type="time"
                            value={slot.from}
                            onChange={(e) => {
                              const newSlots = [...(timeSlots[day.toLowerCase()] || [])]
                              newSlots[index] = { ...newSlots[index], from: e.target.value }
                              setTimeSlots(prev => ({...prev, [day.toLowerCase()]: newSlots}))
                            }}
                            className="w-32"
                          />
                          <span>to</span>
                          <Input
                            type="time"
                            value={slot.to}
                            onChange={(e) => {
                              const newSlots = [...(timeSlots[day.toLowerCase()] || [])]
                              newSlots[index] = { ...newSlots[index], to: e.target.value }
                              setTimeSlots(prev => ({...prev, [day.toLowerCase()]: newSlots}))
                            }}
                            className="w-32"
                          />
                          {timeSlots[day.toLowerCase()]?.length > 1 && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeTimeSlot(day.toLowerCase(), index)}
                            >
                              <X className="h-4 w-4 text-red-500" />
                            </Button>
                          )}
                          {index === (timeSlots[day.toLowerCase()]?.length || 0) - 1 && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => addTimeSlot(day.toLowerCase())}
                              className="bg-primarypink hover:bg-primarypink/90"
                            >
                              <Plus className="h-4 w-4 text-white" />
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Unavailable</p>
                  )}
                </div>
              ))}
            </div>

            {/* Rates */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-primarypink">Rates</h3>
              {['outcall', 'incall'].map((locationType) => (
                <div key={locationType} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id={locationType}
                      checked={selectedLocationType === locationType}
                      onCheckedChange={(checked) => setSelectedLocationType(checked ? locationType : '')}
                    />
                    <Label htmlFor={locationType}>{locationType.charAt(0).toUpperCase() + locationType.slice(1)}</Label>
                  </div>
                  {selectedLocationType === locationType ? (
                    <div className="space-y-2 ml-6">
                      {rates.map((rate, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Input
                            type="number"
                            placeholder="Duration"
                            value={rate.amount}
                            onChange={(e) => {
                              const newRates = [...rates]
                              newRates[index] = { ...newRates[index], amount: e.target.value }
                              setRates(newRates)
                            }}
                            className="w-24"
                          />
                          <span>hours</span>
                          <Input
                            type="number"
                            placeholder="Price €"
                            value={rate.price}
                            onChange={(e) => {
                              const newRates = [...rates]
                              newRates[index] = { ...newRates[index], price: e.target.value }
                              setRates(newRates)
                            }}
                            className="w-24"
                          />
                          {rates.length > 1 && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeRate(index)}
                            >
                              <X className="h-4 w-4 text-red-500" />
                            </Button>
                          )}
                          {index === rates.length - 1 && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={addRate}
                              className="bg-primarypink hover:bg-primarypink/90"
                            >
                              <Plus className="h-4 w-4 text-white" />
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground ml-6">Unavailable</p>
                  )}
                </div>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-primarypink">Payment method accepted</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="visa" />
                  <Label htmlFor="visa">Visa</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="amex" />
                  <Label htmlFor="amex">American Express</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cash-usd" />
                  <Label htmlFor="cash-usd">Cash (US Dollar)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cash-eur" />
                  <Label htmlFor="cash-eur">Cash (Euro)</Label>
                </div>
              </div>
            </div>

            {/* Location Blocker */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-primarypink">Location Blocker</h3>
              {Object.entries(locations).map(([country, cities]) => (
                <div key={country} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={country.toLowerCase()} />
                    <Label htmlFor={country.toLowerCase()}>{country}</Label>
                  </div>
                  <div className="ml-6 space-y-2">
                    {cities.map((city, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Input
                          placeholder="Region / District"
                          value={city}
                          onChange={(e) => {
                            const newLocations = { ...locations }
                            newLocations[country][index] = e.target.value
                            setLocations(newLocations)
                          }}
                        />
                        {cities.length > 1 && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeLocation(country, index)}
                          >
                            <X className="h-4 w-4 text-red-500" />
                          </Button>
                          )}
                          </div>
                        ))}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => addLocation(country)}
                          className="bg-primarypink hover:bg-primarypink/90"
                        >
                          <Plus className="h-4 w-4 text-white" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
    
                <div className="space-y-4">
                  <Button 
                    onClick={reviewUser}
                    className="w-full border-2 border-primarypink text-primarypink bg-transparent hover:bg-primarypink hover:text-white"
                  >
                    Preview Advertisement
                  </Button>
                  <Button
                    onClick={submitForm}
                    className="w-full border-2 border-primarypink bg-primarypink text-white hover:bg-transparent hover:text-primarypink"
                  >
                    Subscription Payment
                  </Button>
                </div>
              </div>
            </div>
          )}
        </>
      )
    }