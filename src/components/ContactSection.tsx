"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight, ZoomIn } from "@/components/ui/ScrollAnimation";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);

    // Create WhatsApp message
    const message = `Hello, I'm ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    const whatsappURL = `https://wa.me/+917990141049?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contact us to discuss your Project needs, and we'll help find the most suitable solution for your business!
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeInLeft>
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Send Message
                </h3>

                <form 
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleSubmit} 
                className="space-y-6">
                  
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    placeholder="Describe your Project needs..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-bg text-white py-4 text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </Button>
                <input type="hidden" name="access_key" value="3609bd4b-e73a-405a-b832-b463c576764e"></input>
              </form>
            </CardContent>
          </Card>
          </FadeInLeft>

          {/* Contact Info & Map */}
          <FadeInRight>
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a
                    href="mailto:nurdin_nh@itsupportbekasi.com"
                    className="text-purple-600 hover:text-purple-700"
                  >
                    maruajay603@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <a
                    href="https://wa.me/+917990141049?text=Hello,%20I'm%20interested%20in%20ordering%20the%20services%20you%20provide."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700"
                  >
                    +91 7990141049
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Ahmedabad, Gujarat</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <ZoomIn delay={0.3}>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9024424301727!2d72.4937683!3d23.0411062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b43099b75c5%3A0x69dc723377b62b7c!2sSindhu%20Bhavan%20Marg%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709912345678!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IT Support Bekasi Location"
                  className="w-full h-full"
                />
              </div>
            </ZoomIn>
          </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
}
