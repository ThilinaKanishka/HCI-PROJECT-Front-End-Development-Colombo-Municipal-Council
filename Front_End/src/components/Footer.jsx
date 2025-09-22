import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/Engineering_Services", label: "Engineering", icon: "⚙️" },
    { path: "/Social_Services", label: "Social Services", icon: "👥" },
    { path: "#contact", label: "Contact", icon: "📞" },
  ];

  const services = [
    "Waste Management",
    "Urban Planning",
    "Public Health",
    "Education",
    "Infrastructure",
    "Community Development",
  ];

  const contactInfo = [
    { icon: "📍", text: "Colombo Municipal Council, Colombo 07, Sri Lanka" },
    { icon: "📞", text: "+94 11 2 698 698" },
    { icon: "📧", text: "info@cmc.lk" },
    { icon: "🕒", text: "Mon - Fri: 8:30 AM - 4:30 PM" },
  ];

  const socialLinks = [
    { icon: "📘", label: "Facebook", url: "#" },
    { icon: "📷", label: "Instagram", url: "#" },
    { icon: "🐦", label: "Twitter", url: "#" },
    { icon: "📺", label: "YouTube", url: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-green-900 to-emerald-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white bg-opacity-20 rounded-full p-3 animate-pulse">
                <span className="text-2xl">🏛️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif bg-gradient-to-r from-emerald-200 to-green-100 bg-clip-text text-transparent">
                  Colombo Municipal Council
                </h3>
                <p className="text-emerald-200 text-sm font-mono mt-1">
                  import React from "react"
                </p>
              </div>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Serving the community with excellence since 1865. Committed to
              sustainable development and enhancing the quality of life for all
              citizens of Colombo.
            </p>
            <div className="flex space-x-3 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="bg-emerald-800 bg-opacity-50 p-2 rounded-full hover:bg-emerald-700 hover:scale-110 transform transition-all duration-300 animate-bounce"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center">
              <span className="text-emerald-300 mr-2">⚡</span>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="flex items-center space-x-2 text-emerald-100 hover:text-white hover:translate-x-2 transform transition-all duration-300 group"
                  >
                    <span className="text-sm group-hover:scale-125 transition-transform">
                      {link.icon}
                    </span>
                    <span className="text-sm">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center">
              <span className="text-emerald-300 mr-2">🛠️</span>
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="flex items-center text-emerald-100 hover:text-white cursor-pointer group">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span className="text-sm">{service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center">
              <span className="text-emerald-300 mr-2">📬</span>
              Contact Us
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span
                    className="text-emerald-300 mt-0.5 animate-pulse"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {contact.icon}
                  </span>
                  <span className="text-emerald-100 text-sm leading-tight">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Emergency Contact */}
            <div className="mt-6 p-3 bg-red-600 bg-opacity-20 rounded-lg border border-red-400 animate-pulse">
              <div className="flex items-center space-x-2">
                <span className="text-xl">🚨</span>
                <div>
                  <p className="text-sm font-bold">Emergency Hotline</p>
                  <p className="text-sm">119 / +94 11 2 699 699</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-emerald-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h4 className="text-lg font-bold flex items-center">
                <span className="text-emerald-300 mr-2">📰</span>
                Stay Updated
              </h4>
              <p className="text-emerald-200 text-sm">
                Subscribe to our newsletter
              </p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-emerald-800 bg-opacity-50 border border-emerald-600 text-white placeholder-emerald-300 focus:outline-none focus:border-emerald-400 flex-grow md:flex-grow-0"
              />
              <button className="bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-2 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-green-950 to-emerald-900 border-t border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-emerald-300 text-sm">
              © {currentYear} Colombo Municipal Council. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#privacy"
                className="text-emerald-300 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-emerald-300 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#sitemap"
                className="text-emerald-300 hover:text-white transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gradient-to-r from-emerald-500 to-green-500 p-3 rounded-full shadow-2xl hover:from-emerald-600 hover:to-green-600 transform hover:scale-110 transition-all duration-300 animate-bounce"
          aria-label="Back to top"
        >
          <span className="text-white text-xl">⬆️</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
