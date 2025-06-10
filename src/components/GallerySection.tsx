"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn, FadeInStagger, ZoomIn } from "@/components/ui/ScrollAnimation";

export function GallerySection() {
  const galleryImages = [
    {
      src: "https://ext.same-assets.com/1180144363/2101467516.jpeg",
      alt: "IT Service Work 1"
    },
    {
      src: "https://ext.same-assets.com/1180144363/4221307689.jpeg",
      alt: "IT Service Work 2"
    },
    {
      src: "https://ext.same-assets.com/1180144363/2871389301.jpeg",
      alt: "IT Service Work 3"
    },
    {
      src: "https://ext.same-assets.com/1180144363/3078366275.jpeg",
      alt: "IT Service Work 4"
    },
    {
      src: "https://ext.same-assets.com/1180144363/66205037.jpeg",
      alt: "IT Service Work 5"
    },
    {
      src: "https://ext.same-assets.com/1180144363/2350388741.jpeg",
      alt: "IT Service Work 6"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Lihat hasil kerja dan proyek-proyek yang telah kami selesaikan
            </p>
          </div>
        </FadeIn>

        {/* Main Gallery Carousel */}
        <ZoomIn>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 overflow-hidden rounded-2xl">
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="w-full h-full object-cover transition-all duration-500"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
              >
                <ChevronLeft size={24} className="text-gray-800" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
              >
                <ChevronRight size={24} className="text-gray-800" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        </ZoomIn>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-purple-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Grid */}
        <FadeInStagger>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {galleryImages.map((image, index) => (
              <FadeIn key={image.src}>
                <button
                  onClick={() => goToSlide(index)}
                  className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? "ring-4 ring-purple-500 scale-105"
                      : "hover:scale-105"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      index === currentIndex
                        ? "bg-purple-500/20"
                        : "bg-black/0 hover:bg-black/20"
                    }`}
                  />
                </button>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}
