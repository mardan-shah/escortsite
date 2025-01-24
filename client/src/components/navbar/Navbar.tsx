'use client';
/* eslint-disable */

import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile'; 
import { User, Language } from '@/types/Navigation'; 

const generateMockUser = (): User => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  profilePic: faker.image.avatar(),
  totaltokens:faker.number.int()%100,
});

const generateMockLanguages = (): Language[] => [
  { 
    code: 'en',
    name: 'English',
    flag: faker.image.url({ width: 24, height: 24 })
  },
  { 
    code: 'fr',
    name: 'French',
    flag: faker.image.url({ width: 24, height: 24 })
  },
  { 
    code: 'es',
    name: 'Spanish',
    flag: faker.image.url({ width: 24, height: 24 })
  },
  { 
    code: 'de',
    name: 'German',
    flag: faker.image.url({ width: 24, height: 24 })
  }
];

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [user, setUser] = useState<User>(generateMockUser());
  //this will make navbar to user 
  //const user =false
  const [language, setLanguage] = useState('en');
  const [languages] = useState<Language[]>(generateMockLanguages());

  const handleLanguageChange = (code: string) => {
    setLanguage(code);
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

  if (!isMounted) {
    return <div className="h-16" />;
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