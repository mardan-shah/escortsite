'use client'
/* eslint-disable */

import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import ProfileTable from "@/components/profile/ProfileTable";
import ImagePreview from "./ImagePreview";

interface ProfileCardProps {}

const ProfileCard: React.FC<ProfileCardProps> = () => {
  const [isUser, setIsUser] = useState<boolean>(true);
  const [showNumber, setShowNumber] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Generate fake data
  const name: string = faker.person.firstName();
  const location: string = faker.location.city();
  const description: string = faker.lorem.paragraph();
  const profileImage: string = faker.image.avatar();
  const number: string = faker.phone.number();
  const flag: string = faker.image.avatarGitHub();
  const galleryImages: string[] = Array.from({ length: 6 }, () =>
    faker.image.urlLoremFlickr({ category: "people" })
  );

  const handleImageClick = (index: number): void => {
    setSelectedImageIndex(index);
  };

  const closeModal = (): void => {
    setSelectedImageIndex(null);
  };

  const nextImage = (): void => {
    setSelectedImageIndex((prev) => 
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  };

  const prevImage = (): void => {
    setSelectedImageIndex((prev) => 
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );
  };

  return (
    <div className="w-full md:w-2/4 mx-auto bg-white shadow-md rounded-md overflow-hidden border">
      <div className="flex items-center justify-center p-4">
        <div className="w-1/4 flex justify-center">
          <Image
            src={profileImage}
            alt={name}
            width={80}
            height={80}
            className="h-20 w-20 rounded-full border-4 shadow-2xl object-cover"
          />
        </div>
        <div className="w-1/4 flex justify-start items-center">
          <div>
            <h2 className="text-xl font-bold">
              {name}
            </h2>
            <p className="text-sm text-gray-600">{location}</p>
            <p className="text-sm text-green-600 flex items-center space-x-1">
              <span>Independent</span> <span>⭐</span>
            </p>
          </div>
          <div className="ml-2">
            <div className="h-4 w-4 rounded-full bg-green-500"></div>
          </div>
        </div>

        <div className="w-1/2 flex justify-start px-4">
          <div className="flex flex-col space-x-2 justify-center gap-1 items-center w-full">
            <div className="w-full text-center flex justify-around items-center px-4">
              <Image 
                src={flag}
                alt="flag"
                width={30}
                height={15}
              />
              {isUser ? 
                <div>
                  {showNumber ? <span>{number}</span> : <span><Button onClick={() => setShowNumber(true)} className="bg-blue-500 text-white hover:bg-blue-600">Show number</Button></span>}
                </div>
                :
                <span>{number}</span>
              } 
            </div>
            <Button className="flex-1 w-full bg-green-500 text-white hover:bg-green-600">
              Start WhatsApp Chat
            </Button>
            <Button className="flex-1 w-full bg-blue-500 text-white hover:bg-blue-600">
              Start Chat
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 text-sm text-gray-700">
        <p>{description}</p>
      </div>

      <div className="flex justify-between space-x-2 p-4">
        <Button className="bg-yellow-500 w-1/4 text-white text-xs py-1 px-2 rounded">
          New
        </Button>
        <Button className="bg-blue-500 w-1/4 text-white text-xs py-1 px-2 rounded">
          VIP
        </Button>
        <Button className="bg-purple-500 w-1/4 text-white text-xs py-1 px-2 rounded">
          {location}
        </Button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 h-[60vh] px-4">
        {/* Main large image */}
        <div className="row-span-2 relative">
          <Image
            src={galleryImages[0]}
            alt="Main Gallery"
            fill
            className="object-cover rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => handleImageClick(0)}
          />
        </div>

        {/* Second image */}
        <div className="relative">
          <Image
            src={galleryImages[1]}
            alt="Gallery 2"
            fill
            className="object-cover rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => handleImageClick(1)}
          />
        </div>

        {/* Third image */}
        <div className="relative">
          <Image
            src={galleryImages[2]}
            alt="Gallery 3"
            fill
            className="object-cover rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => handleImageClick(2)}
          />
        </div>

        {/* Fourth image */}
        <div className="relative">
          <Image
            src={galleryImages[3]}
            alt="Gallery 4"
            fill
            className="object-cover rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => handleImageClick(3)}
          />
        </div>

        {/* More galleryImages dialog trigger */}
        {galleryImages.length > 4 && (
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">
                    +{galleryImages.length - 4} More
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
                {galleryImages.map((image, index) => (
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

      {selectedImageIndex !== null && (
        <Dialog open={true} onOpenChange={closeModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Image Preview</DialogTitle>
            </DialogHeader>
            <div className="relative flex justify-center items-center h-[50vh]">
              <Image
                src={galleryImages[selectedImageIndex]}
                alt="Selected Image"
                width={300}
                height={300}
                className="object-cover rounded w-[50vw] h-[50vh]"
              />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer" onClick={prevImage}>
                <span className="text-white bg-black p-2 rounded-full">&lt;</span>
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer" onClick={nextImage}>
                <span className="text-white bg-black p-2 rounded-full">&gt;</span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <ImagePreview
        selectedIndex={selectedImageIndex}
        images={galleryImages}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};

export default ProfileCard;