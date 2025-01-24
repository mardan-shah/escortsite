'use client'
import { Dot } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileCard from "@/components/cards/ProfileCard";
import { faker } from '@faker-js/faker';

import { useState,useEffect } from "react";
import { Profile } from "@/types/Cards";
import Image from "next/image";
import Table from '@/components/agency/Table'
import Boost from "@/components/boost/Boost";
import Link from "next/link";
import { Ellipsis } from "lucide-react";

interface Agency{
  name?:string;
}

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


const AgencyDashboard = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
      setTimeout(() => {
        setProfiles(generateProfiles(10));
      }, 2000);
    }, []);
  

  const agency:Agency = {
    name:'Wind Angels'
  }
  return (
    <div className="w-full md:w-3/4 mx-auto mt-10 mb-32">
      <h1 className="text-primarypink text-center text-4xl py-4">Agency Dashboard</h1>
      <div className="w-full bg-white flex justify-between items-center h-26 shadow-xl p-4 my-4">
      <div className="flex items-center">
        <h1 className="text-3xl">{agency.name}</h1>
        <Dot className="text-green-600 w-20 h-20 -ml-4"  />
      </div>
      <h3 className="text-sm text-red-600 underline">
        Edit name
      </h3>
      </div>
      <Button className="bg-primarypink hover:bg-primarypink/90 w-full rounded-none">
        Escort Management
      </Button>

      <Boost/>

      <div className="w-full flex justify-between">
          <div className="w-[90%] flex gap-2">
            <Button className="bg-white text-secondarygray/50 w-1/2 hover:bg-primarypink hover:text-white">
              <Link href='/pages/escort-profile/edit-advertisement'>+ Add Advertisement</Link>
            </Button>
            <Button className="bg-white text-red-500 w-1/2 hover:bg-primarypink hover:text-white">
              - Delist Advertisement
            </Button>
          </div>
          <div className="w-[10%] flex justify-center">
            <Button className="bg-white text-secondarygray/50 w-1/2 hover:bg-primarypink hover:text-white">
              <Ellipsis />
            </Button>
          </div>
        </div>

      <div className="flex justify-center flex-wrap gap-5 py-10">
        {profiles.map((profile, i) => (
          <ProfileCard key={i} profile={profile} edit={true}/>
        ))}
      </div>
      
      <div>
      <Image
          src="/comingsoon.png"
          alt="Coming Soon"
          width={1200}
          height={600} // Adjust the height to make the image horizontal
          className="w-full h-auto object-cover"
        />
      </div>
      <Table />
      
    </div>
  );
}
 
export default AgencyDashboard;