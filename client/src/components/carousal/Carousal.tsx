'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';




export function Carousel() {
  const carouselSlides = [
    { image: "https://unsplash.it/1200/600?image=20", title: "Alexandra", subtitle: "Hello everyone!" },
    { image: "https://unsplash.it/1200/600?image=15", title: "Summer Collection", subtitle: "Check out our new profiles" },
    { image: "https://unsplash.it/1200/600?image=12", title: "VIP Experience", subtitle: "Exclusive offers for members" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  return (
    <section className="relative h-[60vh] sm:h-[50vh] lg:h-[70vh] w-full overflow-hidden">
      {carouselSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-12 left-4 sm:bottom-16 sm:left-6 lg:bottom-24 lg:left-48 text-white">
            <h1 className="text-lg sm:text-xl lg:text-4xl font-bold">{slide.title}</h1>
            <p className="text-xs sm:text-sm lg:text-lg opacity-90">{slide.subtitle}</p>
          </div>
        </div>
      ))}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 sm:left-4 lg:left-6 text-white transition-colors hover:bg-black/75"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 sm:right-4 lg:right-6 text-white transition-colors hover:bg-black/75"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
      </button>
    </section>
  );
}
