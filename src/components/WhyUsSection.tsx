"use client";

import { FadeIn, FadeInStagger, ZoomIn } from "@/components/ui/ScrollAnimation";
import Image from "next/image";

export function WhyUsSection() {
  const features = [
    {
      icon: "/icons/professional.svg",
      title: "Professional",
      description: "We're ready to assist you with various services. With our knowledge and experience, we're committed to providing the best support"
    },
    {
      icon: "/icons/affordable.svg",
      title: "Affordable and Quick Services",
      description: "We prioritize service ease and speed, ensuring customers receive efficient solutions at affordable costs."
    },
    {
      icon: "/icons/innovative.svg",
      title: "Innovative Solutions",
      description: "We always provide the latest products and services, maintained in optimal condition to be ready for use at any time."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best Software Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our commitment is to provide the best software development services with high professional standards, reliable speed, and continuous innovation.
            </p>
          </div>
        </FadeIn>

        {/* Features Grid */}
        <FadeInStagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FadeIn key={feature.title}>
                <div
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={40}
                        height={40}
                        className="w-10 h-10"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}
