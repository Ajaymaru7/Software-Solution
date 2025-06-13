"use client";

import { FadeIn } from "@/components/ui/ScrollAnimation";

export function TechnologyPartners() {
  const partners = [
    {
      name: "Python",
      logo: "/public/images/Python-Logo.png",
    },
    {
      name: "Django",
      logo: "/images/django.png",
    },
    {
      name: "React",
      logo: "/images/React.png",
    },
    {
      name: "JavaScript",
      logo: "/images/JavaScript.png",
    },
    {
      name: "MongoDB",
      logo: "/images/MongoDB.png",
    },
    {
      name: "Firebase",
      logo: "/images/Firebase.png",
    },
    {
      name: ".Net Core",
      logo: "/images/NET_Core.png",
    },
  ];

  // Duplicate for infinite scroll effect
  const allPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Technology Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in full-stack development, cloud solutions, and AI-driven platforms.
            We use technologies like React, Node.js, Python, Django, and more to build scalable, intelligent software.
            </p>
          </div>
        </FadeIn>

        {/* Logo Carousel */}
        <FadeIn delay={0.3}>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12">
            {allPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        </FadeIn>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
