'use client';

import { Search, Mail, UserRoundPlus, UserRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '../ui/button';
import { user, Language } from '@/types/Navigation'; // Import shared interfaces

interface NavDesktopProps {
  user?: user | null; // User is optional or can be null
  languages: Language[]; // Array of languages
  handleLanguageChange: (languageCode: string) => void; // Function to change language
}

const NavDesktop: React.FC<NavDesktopProps> = ({ user, languages, handleLanguageChange }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSelect = (lang: Language) => {
    setCurrentLanguage(lang);
    handleLanguageChange(lang.code);
  };

  return (
    <div className="min-h-auto bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 lg:px-28">
        <div className="w-1/2 md:w-1/3">
          <Image src="/logo.svg" alt="Logo" width={50} height={50} />
        </div>

        <div className="flex items-center w-1/2 md:w-2/3 justify-end gap-3 md:gap-4 lg:gap-6">
          <div className="relative">
            <Button
              variant="ghost"
              size="default"
              className="flex items-center gap-2 hover:bg-gray-200"
              onClick={() => setIsSearchVisible(!isSearchVisible)}
            >
              <Search className="h-4 w-4 cursor-pointer" />
            </Button>
            {isSearchVisible && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg p-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </div>
          <Button variant="ghost" size="default" className="flex items-center gap-2 hover:bg-gray-200 ">
            <Link href="/contact" className="hidden md:flex items-center whitespace-nowrap">
              <span>Contact</span>
              <Mail className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          {user ? (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center gap-2">
                    <UserRound className="h-5 w-5" />
                    <span className="truncate max-w-[100px]">{user.name || 'My Profile'}</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[160px] bg-white rounded-md shadow-lg">
                    <ul className="p-2">
                      <li>
                        <Link href="/profile" className="block px-3 py-2 hover:bg-gray-200 rounded-md">
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link href="/settings" className="block px-3 py-2 hover:bg-gray-200 rounded-md">
                          Settings
                        </Link>
                      </li>
                      <li>
                        <button onClick={() => {/* Add logout logic here */}} className="w-full text-left px-3 py-2 hover:bg-gray-200 rounded-md">
                          Logout
                        </button>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ) : (
            <>
              <Button variant="ghost" size="default" className="flex items-center gap-2 hover:bg-gray-200">
                <Link href="/signup" className="hidden md:flex items-center whitespace-nowrap">
                  <span>Create Account</span>
                  <UserRoundPlus className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button variant="ghost" size="default" className="flex items-center gap-2 hover:bg-gray-200">
                <Link href="/signin" className="flex items-center whitespace-nowrap">
                  <span className="hidden md:inline">Login</span>
                  <UserRound className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </>
          )}

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-2 px-2 md:px-3">
                  <Image
                    src={currentLanguage.flag}
                    alt={currentLanguage.name}
                    width={24}
                    height={24}
                  />
                  <span className="hidden md:inline">{currentLanguage.name}</span>
                </NavigationMenuTrigger>

                <NavigationMenuContent className="min-w-[160px] md:min-w-[200px] bg-white rounded-md shadow-lg">
                  <ul className="p-2">
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          onClick={() => handleSelect(lang)}
                          className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-200 rounded-md"
                        >
                          <Image
                            src={lang.flag}
                            alt={lang.name}
                            width={24}
                            height={24}
                          />
                          <span>{lang.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;
