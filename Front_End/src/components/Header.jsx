import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    {
      path: "/Engineering_Services",
      label: "Engineering Services",
      icon: "⚙️",
    },
    { path: "/Social_Services", label: "Social Services", icon: "👥" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-gradient-to-r from-blue-600 via-green-500 to-teal-600 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Website Name */}
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
              <span className="text-2xl">🏛️</span>
            </div>
            <div>
              <h1 className="text-sm font-semibold text-white bg-black/20 px-2 py-1 rounded">
                Colombo Municipal Council
              </h1>
              <div className="text-xs font-mono font-bold bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                import React from "react"
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  isActive(item.path)
                    ? "bg-white/20 text-white backdrop-blur-sm shadow-lg"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}

            {/* Log Out Button */}
            <button className="flex items-center space-x-2 ml-4 px-4 py-2 bg-red-500/20 text-white rounded-full hover:bg-red-600/30 transition-all duration-300 transform hover:scale-105 border border-red-400/30">
              <span className="text-lg">🚪</span>
              <span className="font-medium">Log Out</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg bg-white/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-white/20 text-white"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
            <button className="flex items-center space-x-3 w-full px-4 py-3 bg-red-500/20 text-white rounded-lg hover:bg-red-600/30 transition-all duration-300 border border-red-400/30">
              <span className="text-xl">🚪</span>
              <span className="font-medium">Log Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute -top-8 -right-8 w-12 h-12 bg-green-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-6 left-1/4 w-6 h-6 bg-blue-400 rounded-full opacity-25 animate-ping"></div>
      </div>
    </header>
  );
}

export default Header;
