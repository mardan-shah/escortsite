'use client'
/* eslint-disable */

import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { Ellipsis } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogTrigger 
} from "@/components/ui/dialog";
import ProfileTable from "@/components/profile/ProfileTable";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import ImagePreview from "@/components/profile/ImagePreview";
import Stories from "@/components/profile/Stories";
import Boost from "@/components/boost/Boost";
import Link from "next/link";

const EscortProfile = () => {
  const [isUser, setIsUser] = useState(true);
  const [showNumber, setShowNumber] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLive, setIsLive] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const profileData = {
    name: faker.person.firstName(),
    location: faker.location.city(),
    description: faker.lorem.paragraph(),
    profileImage: faker.image.avatar(),
    number: faker.phone.number(),
    flag: faker.image.avatarGitHub(),
    galleryImages: Array.from({ length: 6 }, () =>
      faker.image.urlLoremFlickr({ category: "people" })
    )
  };

  const handleImageClick = (index: number) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);
  const nextImage = () => 
    setSelectedImageIndex((prev) => 
      prev !== null ? (prev + 1) % profileData.galleryImages.length : 0
    );
  
  const prevImage = () => 
    setSelectedImageIndex((prev) => 
      prev !== null ? (prev - 1 + profileData.galleryImages.length) % profileData.galleryImages.length : profileData.galleryImages.length - 1
    );

  const handleToggle = () => {
    if (isLive) {
      setIsDialogOpen(true);
    } else {
      setIsLive(true);
    }
  };
  
  const confirmOffline = () => {
    setIsLive(false);
    setIsDialogOpen(false);
  };
  
  const cancelOffline = () => {
    setIsDialogOpen(false);
  };

  interface ImageCarouselProps {
    selectedIndex: number | null;
    images: string[];
  }

  const ImageCarousel: React.FC<ImageCarouselProps> = ({ selectedIndex, images }) => {
    if (selectedIndex === null) return null;
    
    return (
      <Dialog open={selectedIndex !== null} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Image Preview</DialogTitle>
          </DialogHeader>
          <div className="relative flex justify-center items-center h-[60vh]">
            <Image
              src={images[selectedIndex]}
              alt="Selected Image"
              fill
              className="object-contain rounded"
            />
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-colors"
            >
              ←
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-colors"
            >
              →
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="top-0 z-50 w-full bg-green-300 py-3 flex justify-center items-center space-x-2">
        <Switch id="live" checked={isLive} onCheckedChange={handleToggle} />
        <Label htmlFor="live" className="text-green-700 text-lg">
          {isLive ? "Live" : "Offline"}
        </Label>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Going Offline?</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Are you sure you want your advertisement to go offline?
          </DialogDescription>
          <div className="w-full flex justify-center flex-col gap-2">
            <Button onClick={cancelOffline} className="bg-transparent border-2 border-primarypink text-primarygray hover:bg-primarypink hover:text-white">Cancel</Button>
            <Button onClick={confirmOffline} className="text-white bg-primarypink hover:bg-primarypink/90">
              Confirm
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="bg-white w-full rounded-lg shadow-md p-6 mb-8">
          <Link href='/pages/escort-profile/edit-profile'><div className="text-end text-primarypink underline px-4">Edit Profile</div></Link>
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="flex items-center justify-center md:w-1/2 gap-4">
              <Image
                src={profileData.profileImage}
                alt={profileData.name}
                width={100}
                height={100}
                className="h-36 w-36 rounded-full border-4 shadow-lg object-cover"
              />
              <div>
                <h2 className="text-xl font-bold">{profileData.name}</h2>
                <p className="text-sm text-gray-600">{profileData.location}</p>
                <p className="text-sm text-green-600 flex items-center space-x-1">
                  <span>Independent</span> <span>⭐</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col md:p-5 md:w-1/2 items-center gap-2 mt-4 md:mt-0">
              <div className="flex justify-around w-full">
                <Image
                  src={profileData.flag}
                  alt="flag"
                  width={30}
                  height={15}
                  className="rounded-lg"
                />
                {isUser ? (
                  <div>
                    {showNumber ? (
                      <span>{profileData.number}</span>
                    ) : (
                      <Button onClick={() => setShowNumber(true)} className="bg-blue-500 text-white hover:bg-blue-600">
                        Show Number
                      </Button>
                    )}
                  </div>
                ) : (
                  <span>{profileData.number}</span>
                )}
              </div>
              <Button className="w-full bg-green-500 text-white hover:bg-green-600">
                Start WhatsApp Chat
              </Button>
              <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
                Start Chat
              </Button>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-700">{profileData.description}</p>
        </section>

        <div className="w-full flex justify-around p-4 gap-2">
          <Link href='/pages/escort-profile/edit-profile?section=location' className="w-1/2">
            <Button className="text-white bg-primarypink hover:bg-primarypink/90 w-full">
              Change Location
            </Button>
          </Link>
          <Link href='/pages/escort-profile/edit-profile?section=contacts' className="w-1/2">
            <Button className="text-white bg-primarypink hover:bg-primarypink/90 w-full">
              Change Phone Number
            </Button>
          </Link>
        </div>
        
        <Stories />

        <Image
          src="/comingsoon.png"
          alt="Coming Soon"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />

        <Boost />

        <div className="w-full flex justify-between">
          <div className="w-[90%] flex gap-2">
            <Button className="bg-white text-secondarygray/50 w-1/2 hover:bg-primarypink hover:text-white">
              <Link href='/pages/escort-profile/edit-advertisement'>+ Edit Advertisement</Link>
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

        <div className="w-full py-5 px-10 bg-white my-20">
          <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 h-[600px]">
            <div className="row-span-2 relative">
              <Image
                src={profileData.galleryImages[0]}
                alt="Main Gallery"
                fill
                className="object-cover rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => handleImageClick(0)}
              />
            </div>

            <div className="relative">
              <Image
                src={profileData.galleryImages[1]}
                alt="Gallery 2"
                fill
                className="object-cover rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => handleImageClick(1)}
              />
            </div>

            <div className="relative">
              <Image
                src={profileData.galleryImages[2]}
                alt="Gallery 3"
                fill
                className="object-cover rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => handleImageClick(2)}
              />
            </div>

            <div className="relative">
              <Image
                src={profileData.galleryImages[3]}
                alt="Gallery 4"
                fill
                className="object-cover rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => handleImageClick(3)}
              />
            </div>

            {profileData.galleryImages.length > 4 && (
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-600 font-medium">
                        +{profileData.galleryImages.length - 4} More
                      </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Gallery Preview</DialogTitle>
                    <DialogDescription>View all images</DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto max-h-[60vh]">
                    {profileData.galleryImages.map((image, index) => (
                      <div key={index} className="relative aspect-square">
                        <Image
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          fill
                          className="object-cover rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
                          onClick={() => handleImageClick(index)}
                        />
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>

          <ProfileTable />
        </div>
      </main>

      {selectedImageIndex !== null && (
        <ImagePreview
          selectedIndex={selectedImageIndex}
          images={profileData.galleryImages}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
};

export default EscortProfile;