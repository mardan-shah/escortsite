'use client';

import { faker } from '@faker-js/faker';
import { useState, useEffect } from "react";
import ProfileCard from "@/components/cards/ProfileCard";
import Pagination from "@/components/cards/PaginationCards";
import { Profile } from '@/types/Cards';

// Function to generate dummy profiles
const generateProfiles = (count: number): Profile[] => {
  return Array.from({ length: count }, () => {
    const age = faker.number.int({ min: 20, max: 60 });
    const price = faker.number.int({ min: 100, max: 300 });
    const rating = (Math.random() * (5 - 4) + 4).toFixed(1);
    const heightInInches = faker.number.int({ min: 60, max: 78 }); // Height in inches
    const feet = Math.floor(heightInInches / 12);
    const inches = heightInInches % 12;

    return {
      name: faker.person.fullName(),
      rating,
      age,
      height: `${feet}'${inches}"`, // Format height properly
      price,
      image: faker.image.avatar(),
      label1: faker.lorem.word(),
      label2: faker.lorem.word(),
      label3: faker.lorem.word(),
      label4: faker.lorem.word(),
    };
  });
};

const Cards = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    setTimeout(() => {
      setProfiles(generateProfiles(100));
    }, 2000);
  }, []);

  const totalPages = Math.ceil(profiles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProfiles = profiles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className=" mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full lg:w-4/5">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {currentProfiles.map((profile, i) => (
            <ProfileCard key={i} profile={profile} edit={false}/>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
};

export default Cards;
