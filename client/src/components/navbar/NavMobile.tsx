'use client';

import { useState } from 'react';
import { Search, UserRoundPlus, UserRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { user, Language } from '@/types/Navigation';

interface NavMobileProps {
  user?: user | null;
  languages: Language[];
  handleLanguageChange: (languageCode: string) => void;
}

const NavMobile: React.FC<NavMobileProps> = ({ user, languages, handleLanguageChange }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const handleSelect = (lang: Language) => {
    setCurrentLanguage(lang);
    handleLanguageChange(lang.code);
  };

  return (
    <div className="bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          {isSearchVisible ? (
            <div className="relative">
              <Input
                type="text"
                placeholder="Search..."
                className="w-32 pr-8"
                onBlur={() => setIsSearchVisible(false)}
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchVisible(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2">
        {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <UserRound className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/pages/profile">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/pages/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => {/* Add logout logic here */}}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <UserRound className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/pages/signin">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/pages/signup">Create Account</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}


          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Image
                  src={currentLanguage.flag}
                  alt={currentLanguage.name}
                  width={24}
                  height={24}
                />
                <span className="hidden sm:inline-block">{currentLanguage.name}</span>
                <span className="sr-only">Select language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onSelect={() => handleSelect(lang)}>
                  <div className="flex items-center gap-2">
                    <Image
                      src={lang.flag}
                      alt={lang.name}
                      width={24}
                      height={24}
                    />
                    <span>{lang.name}</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          
        </div>
      </div>
    </div>
  );
};

export default NavMobile;

