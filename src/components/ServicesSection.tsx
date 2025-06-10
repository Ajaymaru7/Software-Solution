"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInStagger } from "@/components/ui/ScrollAnimation";

export function ServicesSection() {
  const services = [
    {
      title: "💻 Custom Software Development",
      description: "Tailored software built to meet your unique business needs — from internal tools to full-scale platforms.",
      image: "/images/custome_soft.png",
      features: [
        "Scalable Architecture Design",
        "System performance optimization",
        "API & System Integration",
        "Agile Development Process",
        "Performance Optimization",
        "Maintenance & Support"
      ]
    },
    {
      title: "🌐 Web Application Development",
      description: "Modern, responsive, and secure web apps using the latest frameworks like React, Node.js, and Django.",
      image: "/images/webapp.jpg",
      features: [
        "Responsive Web Interfaces",
        "Modern Front-End Frameworks",
        "Secure Web Architecture",
        "SEO-Friendly Structure",
        "Real-Time Functionality",
        "Cloud-Based Deployment"
      ]
    },
    {
      title: "E-commerce Development",
      description: "Custom e-commerce platforms, plugins, and integrations that enhance customer experience and boost sales.",
      image: "/images/Ecom.png",
      features: [
        "Custom Storefront Design",
        "Secure Payment Integration",
        "Product & Inventory Management",
        "Mobile-Optimized Experience",
        "Shopping Cart Functionality",
        "Multi-Vendor Capabilities"
      ]
    },
    {
      title: "UI/UX Design",
      description: "User-first design strategies that drive engagement, built using tools like Figma, Adobe XD, and Sketch.",
      image: "/images/UIUX.jpg",
      features: [
        "Responsive website development",
        "Wireframes & Prototypes",
        "Interactive User Flows",
        "Figma & XD Expertise",
        "Visual Identity Systems",
        "Design System Creation"
      ]
    },
  ];

  const handleLearnMore = (service: typeof services[0]) => {
    const message = `Hello, I'm interested in learning more about your ${service.title} service.\n\nDescription: ${service.description}\n\nKey Features:\n${service.features.map(feature => `- ${feature}`).join('\n')}`;
    const whatsappURL = `https://wa.me/+917990141049?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            we offer end-to-end software development solutions designed to accelerate your digital growth. From MVPs to enterprise systems, we deliver technology that scales with your vision.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <FadeInStagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <FadeIn key={service.title}>
                <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      onClick={() => handleLearnMore(service)}
                      className="w-full gradient-bg text-white hover:opacity-90 transition-opacity rounded-full font-semibold"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}
