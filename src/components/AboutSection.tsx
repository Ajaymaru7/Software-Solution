"use client";

import { Button } from "@/components/ui/button";
import { FadeIn, FadeInLeft, FadeInRight, ZoomIn } from "@/components/ui/ScrollAnimation";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image */}
          <FadeInLeft>
            <div className="relative">
              <div className="bg-gray-100 text-xs text-gray-500 px-3 py-1 rounded-full inline-block mb-4">
                ABOUT US
              </div>
              <img
                src="/images/project-image-2.jpeg"
                alt="Professional IT Consultant"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </FadeInLeft>

          {/* Right - Content */}
          <FadeInRight>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Software Solutions for All Your Needs!
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                 we are not just building software — we're crafting the digital future. As a next-generation technology partner, we specialize in delivering innovative, scalable, and intelligent solutions that power tomorrow’s enterprises.
              </p>

              <FadeIn delay={0.2}>
                <blockquote className="border-l-4 border-purple-500 pl-6 py-4 mb-6 bg-gray-50 rounded-r-lg">
                  <p className="text-gray-800 italic text-lg">
                    "We believe that technology can make a big impact, and we're ready to help you leverage it to its fullest potential."
                  </p>
                </blockquote>
              </FadeIn>

              <p className="text-gray-700 mb-8">
              build resilient and future-ready software. We are ready to support your success with professional and reliable services.
              </p>

              
            </div>
          </FadeInRight>
        </div>

        {/* Second About Section - Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <FadeInLeft>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trusted and Professional Software Solution for You!
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our vision is to become a trusted global innovator in technology, empowering businesses through smart, scalable, and future-ready digital solutions.
                </p>

                <FadeIn delay={0.2}>
                  <blockquote className="border-l-4 border-pink-500 pl-4 py-2 bg-pink-50 rounded-r-lg">
                    <p className="text-gray-800 italic">
                      "We aim to deliver cutting-edge software development services with a focus on quality, innovation, and customer success—transforming ideas into impactful technology.""
                    </p>
                  </blockquote>
                </FadeIn>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our mission is "To provide professional and reliable Software Development services, including service, maintenance, and website deployment, as well as providing a Hosting service. We are ready to support your success with professional and reliable services."
                </p>
              </div>
            </div>
          </FadeInLeft>

          {/* Right - Image */}
          <FadeInRight>
            <div className="relative">
              <img
                src="/images/img2.png"
                alt="Team Discussion"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />

              {/* Overlay Stats */}
              
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
}
