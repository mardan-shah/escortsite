'use client';

import { Search, Mail, UserRoundPlus, UserRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { user, Language } from '@/types/Navigation';

interface NavDesktopProps {
  user?: user | null;
  languages: Language[];
  handleLanguageChange: (languageCode: string) => void;
}

const NavDesktop: React.FC<NavDesktopProps> = ({ user, languages, handleLanguageChange }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSelect = (langCode: string) => {
    const selectedLang = languages.find(lang => lang.code === langCode);
    if (selectedLang) {
      setCurrentLanguage(selectedLang);
      handleLanguageChange(langCode);
    }
  };

  useEffect(() => {
    if (isSearchVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchVisible]);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchBlur = () => {
    setIsSearchVisible(false);
  };

  return (
    <div className="min-h-auto bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 lg:px-28">
        <div className="w-1/2 md:w-1/3">
          <Link href='/'><Image src="/logo.svg" alt="Logo" width={50} height={50} /></Link>
        </div>

        <div className="flex items-center w-1/2 md:w-2/3 justify-end gap-3 md:gap-4 lg:gap-6">
          <div className="relative">
            {isSearchVisible ? (
              <div className="relative">
                <Input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className="w-64 pr-10"
                  onBlur={handleSearchBlur}
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            ) : (
              <Button
                variant="ghost"
                size="default"
                className="flex items-center gap-2 hover:bg-gray-200"
                onClick={handleSearchClick}
              >
                <Search className="h-4 w-4 cursor-pointer" />
              </Button>
            )}
          </div>
          
          <Button variant="ghost" size="default" className="flex items-center gap-2 hover:bg-gray-200">
            <Link href="/pages/contact" className="hidden md:flex items-center whitespace-nowrap">
              <span>Contact</span>
              <Mail className="h-4 w-4 ml-2" />
            </Link>
          </Button>

          {user ? (
            <Select onValueChange={(value) => {
              if (value === 'logout') {
                // Add logout logic here
              } else if (value === 'profile') {
                window.location.href = '/profile';
              } else if (value === 'settings') {
                window.location.href = '/settings';
              }
            }}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center gap-2">
                  <UserRound className="h-5 w-5" />
                  <span className="truncate">{user.name || 'My Profile'}</span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="profile"><Link href='/pages/profile'>My Profile</Link></SelectItem>
                  <SelectItem value="settings"><Link href='/pages/settings'></Link>Settings</SelectItem>
                  <SelectItem value="logout">Logout</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : (
            <>
              <Button variant="ghost" size="default" className="flex items-center gap-2 hover:bg-gray-200">
                <Link href="/pages/signup" className="hidden md:flex items-center whitespace-nowrap">
                  <span>Create Account</span>
                  <UserRoundPlus className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button variant="ghost" size="default" className="flex items-center gap-2 hover:bg-gray-200">
                <Link href="/pages/signin" className="flex items-center whitespace-nowrap">
                  <span className="hidden md:inline">Login</span>
                  <UserRound className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </>
          )}

          <Select onValueChange={handleSelect} defaultValue={currentLanguage.code}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center gap-2">
                <Image
                  src={currentLanguage.flag}
                  alt={currentLanguage.name}
                  width={24}
                  height={24}
                />
                <span className="hidden md:inline">{currentLanguage.name}</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <div className="flex items-center gap-2">
                      <Image
                        src={lang.flag}
                        alt={lang.name}
                        width={24}
                        height={24}
                      />
                      <span>{lang.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;