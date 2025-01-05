'use client';

import { useEffect, useState } from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile'; 
import { user, Language } from '@/types/Navigation'; 

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [user, setUser] = useState<user | null>(null); 
  const [language, setLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flag: 'https://unsplash.it/100/100?image=10' },
    { code: 'fr', name: 'French', flag: 'https://unsplash.it/100/100?image=20' },
    { code: 'es', name: 'Spanish', flag: 'https://unsplash.it/100/100?image=30' },
    { code: 'de', name: 'German', flag: 'https://unsplash.it/100/100?image=40' },
  ];

  const handleLanguageChange = (code: string) => {
    setLanguage(code);
    // Add language update logic (e.g., i18n library integration)
  };

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    setIsMounted(true);
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  // Return null or a loading state until the component is mounted
  if (!isMounted) {
    return null; 
  }

  return (
    <nav>
      {isMobile ? (
        <NavMobile 
          user={user}
          languages={languages}
          handleLanguageChange={handleLanguageChange}
        />
      ) : (
        <NavDesktop
          user={user}
          languages={languages}
          handleLanguageChange={handleLanguageChange}
        />
      )}
    </nav>
  );
};

export default Navbar;
