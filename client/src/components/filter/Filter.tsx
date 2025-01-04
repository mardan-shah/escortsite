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
    currency: ['Euro', 'USD', 'GBP'],
    height: ['150', '160', '170', '180'],
    hairColor: ['Any', 'Blonde', 'Brunette', 'Red', 'Black'],
    eyeColor: ['Any', 'Blue', 'Green', 'Brown'],
    bustType: ['Any', 'Natural', 'Enhanced'],
    bustSize: ['Any', 'Small', 'Medium', 'Large'],
  };

  const serviceOptions = [
    { id: 'gfe', label: 'GFE (Girlfriend Experience)' },
    { id: 'pse', label: 'PSE' },
    { id: 'striptease', label: 'Striptease/Dance' },
    { id: 'overnight', label: 'Overnight Stays' },
    { id: 'rolePlay', label: 'Role Play', tooltip: 'Fantasy and role-playing services' },
    { id: 'fetish', label: 'Fetish/Kink', tooltip: 'Special fetish and kink services available' },
  ];

  const [filters, setFilters] = useState({
    age: '18-25',
    rate: '50',
    currency: 'Euro',
    heightFrom: '150',
    heightTo: '180',
    hairColor: 'Any',
    eyeColor: 'Any',
    bustType: 'Any',
    bustSize: 'Any',
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
  <DialogContent className="max-w-5xl max-h-[80%]">
    <DialogHeader>
      <DialogTitle className="text-xl font-semibold">Filters</DialogTitle>
    </DialogHeader>
    <form className="grid grid-cols-2 gap-8">
      {/* Filters Section */}
      <div>
        <h3 className="text-lg font-medium text-pink-600 mb-4">Filters</h3>
        <div className="grid gap-4 grid-cols-2">
          {Object.keys(filterOptions).map((key) => (
            <div key={key} className="space-y-2">
              <label className="text-sm font-medium">{key}</label>
              <Select defaultValue={filters[key as keyof typeof filters]}>
                <SelectTrigger>
                  <SelectValue placeholder={`Select ${key}`} />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions[key as keyof typeof filterOptions].map((option) => (
                    <SelectItem
                      key={option}
                      value={option}
                      onClick={() => handleFilterChange(key, option)}
                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h3 className="text-lg font-medium text-pink-600 mb-4">Services</h3>
        <div className="grid gap-4 grid-cols-2">
          {serviceOptions.map(({ id, label, tooltip }) => (
            <div key={id} className="flex items-center space-x-2">
              <Checkbox
                id={id}
                checked={services[id]}
                onCheckedChange={() => handleServiceChange(id)}
                className="text-secondarypink"
              />
              <label htmlFor={id} className="text-sm font-medium">
                {label}
              </label>
              {tooltip && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-gray-400" />
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

      {/* Submit Button */}
      <div className="col-span-2 flex justify-end mt-4">
        <button type="submit" className="btn btn-primary">
          Apply Filters
        </button>
      </div>
    </form>
  </DialogContent>
</Dialog>

  );
};

export default Filter;
