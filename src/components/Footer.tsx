"use client";

import { Mail, Phone, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ajay Maru
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional Software solution provider in Ahmedabad. We're ready to assist your Projects Idea needs with reliable and efficient solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-purple-400" />
                <a
                  href="mailto:nurdin_nh@itsupportbekasi.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <p>maruajay603@gmail.com</p>
                  <p>prathamjani0607@gmail.com</p>
                  <p>patelhemil.23.mca@iict.indusuni.ac.in</p>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-green-400" />
                <a
                  href="https://wa.me/+917990141049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 7990141049
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/ajay_maru_07/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={18} />
                <span>Instagram</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <Youtube size={18} />
                <span>Youtube (Coming Soon)</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Support</h5>
              <div className="space-y-2">
                <a
                  href="prathamjani0607@gmail.com"
                  className="block text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Mail
                </a>
                <a
                  href="https://wa.me/+917990141049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025{" "}
              <a
                href="https://ajaymaru.vercel.app/"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
               Software Solution
              </a>
              . All Rights Reserved.
            </p>

            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Professional Software Solutions for Your Business
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
