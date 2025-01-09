'use client';

import { Heart,Euro,Circle } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import { Profile } from '@/types/Cards';

interface ProfileCardProps {
  profile: Profile;
  edit:boolean;
}

const ProfileCard = ({ profile, edit }: ProfileCardProps) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setLiked((prevLiked) => !prevLiked);
  };

  const handleEdit = (event: React.MouseEvent) => {
    event.preventDefault();
    setLiked((prevLiked) => !prevLiked);
  };

  return (
      <Card className=' w-48   shadow-md relative'>
        <CardContent className='p-0 px-2 pt-2'>
        <Image
          src={profile.image}
           alt={profile.name}
           width={300}
           height={400}
           className="aspect-[3/4] object-cover"
         />
         <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
         {/* Rating */}
         <div className="flex items-center gap-1 rounded bg-white/50 px-2 py-1">
            <span className="text-xs font-medium text-primarygray">{profile.rating}</span>
            <Heart className="mr-1 h-4 w-4 fill-current text-primarypink" />
          </div>
          {edit? (
            <>
              <button
                className="rounded-full bg-primarygray/60 p-[5px] text-white transition-colors hover:text-pink-200 hover:bg-black/60 -mt-1"
                onClick={handleEdit}
              >
                <Circle
                  className={`h-5 w-5 ${liked ? 'fill-primarypink' : 'fill-none'}`}
                />
              </button>
            </>
          ):
            <>
              <button
                className="rounded-full bg-primarygray/60 p-[5px] text-white transition-colors hover:text-pink-200 hover:bg-black/60 -mt-1"
                onClick={handleLikeClick}
              >
                <Heart
                  className={`h-5 w-5 ${liked ? 'fill-pink-600' : 'fill-none'}`}
                />
              </button>
            </>
          }
          
          
        </div>
        {profile.label1 ?(
          <>
            <div className="absolute left-0 bottom-10  flex flex-col gap-1">
              <span className="bg-[#05D4FE] rounded-r-md text-white text-xs font-bold px-2 py-1">{profile.label1}</span>
            </div>
            {profile.label2 && (
              <div className="absolute left-0 bottom-20  flex flex-col gap-1">
                <span className="bg-[#E5B300] rounded-r-md text-white text-xs font-bold px-2 py-1">{profile.label2}</span>
              </div>
            )}
          </>
        ):
          <>
            {profile.label2 && (
              <div className="absolute left-0 bottom-10  flex flex-col gap-1">
                <span className="bg-[#E5B300] rounded-r-md text-white text-xs font-bold px-2 py-1">{profile.label2}</span>
              </div>
            )}
          </>
        }         
        {profile.label3? (
          <>            
            <div className="absolute right-0 bottom-10  flex flex-col gap-1">
              <span className="bg-[#D30CAC] rounded-l-md text-white text-xs font-bold px-2 py-1">{profile.label3}</span>
            </div>
            {profile.label4 && (
            <div className="absolute right-0 bottom-20  flex flex-col gap-1">
              <span className="bg-[#36CB35] rounded-l-md text-white text-xs font-bold px-2 py-1">{profile.label4}</span>
            </div>
            )}
          </>

        ):<>
            {profile.label4 && (
            <div className="absolute right-0 bottom-10  flex flex-col gap-1">
              <span className="bg-[#36CB35] rounded-l-md text-white text-xs font-bold px-2 py-1">{profile.label4}</span>
            </div>
            )}
          </>
        }        
        

        </CardContent>
        <CardFooter className='  bg-white p-0 h-6 rounded-lg'>
        <div className="w-full px-3">
          
          <div className="flex items-center justify-between text-[15px] text-gray-700/90 font-semibold">
            <span className='flex items-center gap-1'><Euro width={18} height={18}/>{profile.price}</span>
            <span className='flex gap-1'><Image src='/Cards/age.svg' width={18} height={18} alt='img'/>{profile.age} y/o</span>
            <span className="flex gap1 items-center"><Image src='/Cards/scale.svg' width={18} height={18} alt='img'/>{profile.height}</span>
         </div>
        </div>
        </CardFooter>
      </Card>
  );
};

export default ProfileCard;
