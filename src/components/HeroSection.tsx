"use client";

import { Button } from "@/components/ui/button";
import { FadeIn, FadeInLeft, FadeInRight, ZoomIn } from "@/components/ui/ScrollAnimation";

export function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <FadeInLeft>
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Solutions that scale with your vision{" "}
                <span className="text-yellow-300">We build Smarter and Faster.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              We can help you reimagine your business through a digitalized future.
              </p>
              <Button
                onClick={scrollToServices}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View Services →
              </Button>
            </div>
          </FadeInLeft>

          {/* Right Content - Professional Image */}
          <FadeInRight>
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="/public/images/Banner.png"
                  alt="IT Professional"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating Card */}
              <ZoomIn delay={0.3}>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Professional Service</h3>
                      <p className="text-sm text-gray-600">Trusted Software Solutions</p>
                    </div>
                  </div>
                </div>
              </ZoomIn>
            </div>
          </FadeInRight>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150" />
      </div>
    </section>
  );
}
