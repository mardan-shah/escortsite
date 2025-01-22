'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useState } from 'react';
import { Check } from 'lucide-react';

// Separate the main content into its own component
const EditProfileContent = () => {
  const searchParams = useSearchParams();
  const defaultSection = searchParams.get('section') || 'personal';

  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [whatsapp, setWhatsapp] = useState<string | undefined>();
  const [telegram, setTelegram] = useState<string | undefined>();

  const isValidPhoneNumber = (number: string | undefined): boolean => 
    number !== undefined && number.length >= 10;

  return (
    <div className="w-full flex flex-col gap-5 max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-primarypink">Edit profile</h1>
      
      <div className="space-y-4 flex flex-col gap-5">
        <Accordion className='flex flex-col gap-4' type="single" defaultValue={defaultSection} collapsible>
          <AccordionItem value="personal" className="border rounded-lg bg-primarypink/10">
            <AccordionTrigger className="px-4 text-primarypink hover:no-underline">
              Personal Information
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-1 space-y-2">
              <label className="text-sm text-gray-600">Name/Pseudonym</label>
              <Input 
                placeholder="Any" 
                className="border-primarypink focus-visible:ring-primarypink"
              />
              <p className="text-xs text-gray-500">This name will be visible to your clients</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="contacts" className="border rounded-lg bg-primarypink/10">
            <AccordionTrigger className="px-4 text-primarypink hover:no-underline">
              Contacts
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 space-y-4">
              <div className="space-y-2 w-1/2">
                <label className="text-sm text-gray-600">Phone Number</label>
                <div className="relative">
                  <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="US"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    className="flex border p-1 w-full rounded-md border-primarypink focus-within:ring-2 focus-within:ring-primarypink focus-within:border-primarypink"
                  />
                  {isValidPhoneNumber(phoneNumber) && (
                    <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />
                  )}
                </div>
              </div>
              <div className='flex w-full gap-1'>
                <div className="space-y-2 w-1/2">
                  <label className="text-sm text-gray-600">WhatsApp</label>
                  <div className="">
                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry="US"
                      value={whatsapp}
                      onChange={setWhatsapp}
                      className="flex border p-1 w-full rounded-md border-primarypink focus-within:ring-2 focus-within:ring-primarypink focus-within:border-primarypink"
                    />
                  </div>
                </div>
                <div className="space-y-2 w-1/2">
                  <label className="text-sm text-gray-600">Telegram</label>
                  <div className="">
                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry="US"
                      value={telegram}
                      onChange={setTelegram}
                      className="flex border p-1 w-full rounded-md border-primarypink focus-within:ring-2 focus-within:ring-primarypink focus-within:border-primarypink"
                    />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="location" className="border rounded-lg bg-primarypink/10">
            <AccordionTrigger className="px-4 text-primarypink hover:no-underline">
              Location
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Country</label>
                <Select>
                  <SelectTrigger className="border-primarypink focus:ring-primarypink">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-600">City</label>
                <Select>
                  <SelectTrigger className="border-primarypink focus:ring-primarypink">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ny">New York</SelectItem>
                    <SelectItem value="la">Los Angeles</SelectItem>
                    <SelectItem value="ch">Chicago</SelectItem>
                    <SelectItem value="ho">Houston</SelectItem>
                    <SelectItem value="ph">Philadelphia</SelectItem>
                    <SelectItem value="ph">Phoenix</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Button 
          className="w-full bg-primarypink hover:bg-primarypink text-white"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

// Main component wrapper with Suspense
export default function EditProfile() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <EditProfileContent />
    </Suspense>
  );
}