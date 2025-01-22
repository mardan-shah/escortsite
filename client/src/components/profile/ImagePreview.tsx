'use client'
/* eslint-disable */

import Image from "next/image";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImagePreviewProps {
  selectedIndex: number | null;
  images: string[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

interface GalleryGridProps {
  images: string[];
  onImageClick: (index: number) => void;
}

const ImagePreview = ({ selectedIndex, images, onClose, onNext, onPrev }: ImagePreviewProps) => {
  if (selectedIndex === null) return null;

  const handleImageClick = (index: number) => {
    // Assuming you want to update the selected index
    // You might want to pass this function as a prop if needed
    onImageClick(index);
  };

  const onImageClick = (index: number) => {
    // This is just a placeholder - you should either remove this or implement the logic
    console.log('Image clicked:', index);
  };

  return (
    <Dialog open={selectedIndex !== null} onOpenChange={() => onClose()}>
      <DialogHeader><DialogTitle>Image Preview</DialogTitle></DialogHeader>
      <DialogContent className="max-w-6xl p-0">
        <div className="relative h-[80vh] bg-black">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 z-50 px-3 py-1 bg-black/50 rounded-full text-white text-sm">
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Main image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={images[selectedIndex]}
              alt={`Preview ${selectedIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation buttons */}
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-black/50 flex items-center overflow-x-auto px-4 gap-2">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`relative h-16 w-16 flex-shrink-0 cursor-pointer transition-opacity 
                  ${selectedIndex === idx ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-100'}`}
                onClick={() => handleImageClick(idx)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const GalleryGrid = ({ images, onImageClick }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 h-[600px]">
      <div className="row-span-2 relative">
        <Image
          src={images[0]}
          alt="Main Gallery"
          fill
          className="object-cover rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => onImageClick(0)}
        />
      </div>

      {[1, 2, 3].map((index) => (
        <div key={index} className="relative">
          <Image
            src={images[index]}
            alt={`Gallery ${index + 1}`}
            fill
            className="object-cover rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => onImageClick(index)}
          />
        </div>
      ))}

      {images.length > 4 && (
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-600 font-medium">
                  +{images.length - 4} More
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
              {images.map((image, index) => (
                <div key={index} className="relative aspect-square">
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
                    onClick={() => onImageClick(index)}
                  />
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ImagePreview;