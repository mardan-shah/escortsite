'use client';
import { Heart } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface Profile {
  name: string;
  rating: string;
  age: number;
  height: string;
  price: number;
  image: string;
}

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  const [liked, setLiked] = useState(false); // Track the like state

  const handleLikeClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setLiked((prevLiked) => !prevLiked); // Toggle like state
  

  };

  return (
    <Card className="overflow-hidden rounded-lg shadow-md">
      <CardContent className="p-0 relative">
        <Link href="#" className="group relative block">
          {/* Profile Image */}
          <Image
            src={profile.image}
            alt={profile.name}
            width={300}
            height={400}
            className="aspect-[3/4] object-cover rounded-lg"
          />
          
          {/* Top overlay for rating and like button */}
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-2">
            {/* Rating */}
            <div className="flex items-center rounded bg-black/60 px-2 py-1">
              <Heart className="mr-1 h-4 w-4 fill-current text-gold" />
              <span className="text-xs font-medium text-white">{profile.rating}</span>
            </div>
            
            {/* Like button */}
            <button
              className="rounded-full bg-black/60 p-2 text-white transition-colors hover:text-pink-500"
              onClick={handleLikeClick} // Handle click event to toggle like state
            >
              <Heart
                className={`h-5 w-5 ${liked ? 'fill-pink-500' : 'fill-none'}`} // Fill heart when liked
              />
            </button>
          </div>

          {/* Bottom overlay for profile details (name, age, height, price) */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900 via-gray-600 to-transparent p-3">
            <div className="mb-2">
              <span className="text-sm font-medium text-white">{profile.name}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-white/90">
              <span>{profile.height}</span>
              <span>{profile.age} y/o</span>
              <span className="font-semibold">£{profile.price}</span>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
