'use client';

import { useState } from 'react';
import { Info } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface FilterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Filter = ({ open, onOpenChange }: FilterModalProps) => {
  const filterOptions = {
    age: ['18-25', '26-35', '36+'],
    rate: ['50', '100', '200'],
    height: ['150', '160', '170', '180'],
    weight: ['40', '50', '60', '70', '80'],
    hairColor: ['Any', 'Blonde', 'Brunette', 'Red', 'Black'],
    eyeColor: ['Any', 'Blue', 'Green', 'Brown'],
    bustType: ['Any', 'Natural', 'Enhanced'],
    bustSize: ['Any', 'Small', 'Medium', 'Large'],
    currency: ['USD', 'EUR', 'GBP', 'AUD'],
    publicHair: ['Any', 'Trimmed', 'Shaved', 'Natural'],
  };

  const serviceOptions = [
    { id: 'gfe', label: 'GFE (Girlfriend Experience)' },
    { id: 'pse', label: 'PSE' },
    { id: 'striptease', label: 'Striptease/Dance' },
    { id: 'overnight', label: 'Overnight Stays' },
    { id: 'rolePlay', label: 'Role Play', tooltip: 'Fantasy and role-playing services' },
    { id: 'fetish', label: 'Fetish/Kink', tooltip: 'Special fetish and kink services available' },
    { id: 'any1', label: 'any', tooltip: 'Special fetish and kink services available' },
    { id: 'any2', label: 'any', tooltip: 'Special fetish and kink services available' },
    
    ];

  const [filters, setFilters] = useState({
    age: '18-25',
    rate: '50',
    heightFrom: '150',
    heightTo: '180',
    weightFrom: '40',
    weightTo: '80',
    hairColor: 'Any',
    eyeColor: 'Any',
    bustType: 'Any',
    bustSize: 'Any',
    currency: 'USD',
    publicHair: 'Any',
  });

  const [services, setServices] = useState(
    Object.fromEntries(serviceOptions.map((service) => [service.id, false]))
  );

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleServiceChange = (key: string) => {
    setServices({ ...services, [key]: !services[key] });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[80%] overflow-auto">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Filters Section (Left Half) */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-pink-600">Filters</h3>
              <div className="grid grid-cols-1 gap-4">
                {/* Age & Gender */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h1 className="text-md m-1 font-medium text-gray-700">Age</h1>
                    <Select defaultValue={filters.age}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Age" />
                      </SelectTrigger>
                      <SelectContent>
                        {filterOptions.age.map((option) => (
                          <SelectItem
                            key={option}
                            value={option}
                            onClick={() => handleFilterChange('age', option)}
                          >
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <h1 className="text-md m-1 font-medium text-gray-700">Gender</h1>
                    <Select defaultValue="Any">
                      <SelectTrigger>
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Any">Any</SelectItem>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Rate & Currency */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  <div>
                    <h1 className="text-md m-1 font-medium text-gray-700">Rate</h1>
                    <Select defaultValue={filters.rate}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Rate" />
                      </SelectTrigger>
                      <SelectContent>
                        {filterOptions.rate.map((option) => (
                          <SelectItem
                            key={option}
                            value={option}
                            onClick={() => handleFilterChange('rate', option)}
                          >
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <h1 className="text-md m-1 font-medium text-gray-700">Currency</h1>
                    <Select defaultValue={filters.currency}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Currency" />
                      </SelectTrigger>
                      <SelectContent>
                        {filterOptions.currency.map((currency) => (
                          <SelectItem
                            key={currency}
                            value={currency}
                            onClick={() => handleFilterChange('currency', currency)}
                          >
                            {currency}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                

                {/* Height, Weight, Hair Color, Eye Color */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h1 className="text-md m-1 font-medium text-gray-700">Height</h1>
                    <div className="flex space-x-2">
                      <Select defaultValue={filters.heightFrom}>
                        <SelectTrigger>
                          <SelectValue placeholder="From Height" />
                        </SelectTrigger>
                        <SelectContent>
                          {filterOptions.height.map((option) => (
                            <SelectItem
                              key={option}
                              value={option}
                              onClick={() => handleFilterChange('heightFrom', option)}
                            >
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <span>to</span>
                      <Select defaultValue={filters.heightTo}>
                        <SelectTrigger>
                          <SelectValue placeholder="To Height" />
                        </SelectTrigger>
                        <SelectContent>
                          {filterOptions.height.map((option) => (
                            <SelectItem
                              key={option}
                              value={option}
                              onClick={() => handleFilterChange('heightTo', option)}
                            >
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <h1 className="text-md m-1 font-medium text-gray-700">Weight</h1>
                    <div className="flex space-x-2">
                      <Select defaultValue={filters.weightFrom}>
                        <SelectTrigger>
                          <SelectValue placeholder="From Weight" />
                        </SelectTrigger>
                        <SelectContent>
                          {filterOptions.weight.map((option) => (
                            <SelectItem
                              key={option}
                              value={option}
                              onClick={() => handleFilterChange('weightFrom', option)}
                            >
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <span>to</span>
                      <Select defaultValue={filters.weightTo}>
                        <SelectTrigger>
                          <SelectValue placeholder="To Weight" />
                        </SelectTrigger>
                        <SelectContent>
                          {filterOptions.weight.map((option) => (
                            <SelectItem
                              key={option}
                              value={option}
                              onClick={() => handleFilterChange('weightTo', option)}
                            >
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <h1 className="text-md m-1 font-medium text-gray-700">Hair Colour</h1>
                    <Select defaultValue={filters.hairColor}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Hair Color" />
                      </SelectTrigger>
                      <SelectContent>
                        {filterOptions.hairColor.map((option) => (
                          <SelectItem
                            key={option}
                            value={option}
                            onClick={() => handleFilterChange('hairColor', option)}
                          >
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <h1 className="text-md m-1 font-medium text-gray-700">Eye Colour</h1>
                    <Select defaultValue={filters.eyeColor}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Eye Color" />
                      </SelectTrigger>
                      <SelectContent>
                        {filterOptions.eyeColor.map((option) => (
                          <SelectItem
                            key={option}
                            value={option}
                            onClick={() => handleFilterChange('eyeColor', option)}
                          >
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Public Hair */}
                <div className='w-1/2'>
                  <h1 className="text-md m-1 font-medium text-gray-700">Public Hair</h1>
                  <Select defaultValue={filters.publicHair}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Public Hair" />
                    </SelectTrigger>
                    <SelectContent>
                      {filterOptions.publicHair.map((option) => (
                        <SelectItem
                          key={option}
                          value={option}
                          onClick={() => handleFilterChange('publicHair', option)}
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            
            {/* Services Section (Right Half) */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-pink-600">Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceOptions.map(({ id, label, tooltip }) => (
                  <div className="flex items-center space-x-2" key={id}>
                    <Checkbox
                      checked={services[id]}
                      onCheckedChange={() => handleServiceChange(id)}
                    />
                    <span className="text-md m-1">{label}</span>
                    {tooltip && (
                      <TooltipProvider delayDuration={300}>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info size={20} className="text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Filter;
