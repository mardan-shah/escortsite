'use client'
import { Dot, Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileCard from "@/components/cards/ProfileCard";
import { faker } from '@faker-js/faker';

import { useState,useEffect } from "react";
import { Profile } from "@/types/Cards";
import Image from "next/image";

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
    <div className="w-full md:w-3/4 mx-auto">
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

      <div className="w-full bg-gold text-white uppercase my-4 flex justify-evenly h-20">
        <div className="w-1/2 relative">
          <h1 className="w-full absolute bottom-0 p-5 inset-x-0 text-lg">get up to <span className="text-5xl">3x</span> more profile visits! </h1>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <Button className=" bg-white text-gold w-3/4 shadow-lg">Boost Advertisement</Button>
          <h1 className="text-md">Get top advertisement spots now</h1>
        </div>
      </div>

      <div className="w-full flex justify-between">
        <div className="w-[90%] flex gap-2">
          <Button className="bg-white text-secondarygray/50 w-1/2 hover:text-white ">+ Add Advertisement</Button>
          <Button className="bg-white text-secondarygray/50 w-1/2 hover:text-white ">- Delist Advertisement</Button>
        </div>
        <div className="w-[10%] flex justify-center">
          <Button className="bg-white text-secondarygray/50 w-1/2 hover:text-white "><Ellipsis /></Button>
        </div>
      </div>


      <div className=" container mx-auto w-full my-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {profiles.map((profile, i) => (
            <ProfileCard key={i} profile={profile} edit={true}/>
          ))}
        </div>
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
    </div>
  );
}
 
export default AgencyDashboard;