import React, { Component, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Icon components (you can replace these with actual icon imports)
const HomeIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const EngineeringIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const SocialIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const LogoutIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    {
      name: "Home",
      href: "/",
      icon: HomeIcon,
      current: location.pathname === "/",
    },
    {
      name: "Engineering Services",
      href: "/Engineering_Services",
      icon: EngineeringIcon,
      current: location.pathname === "/Engineering_Services",
    },
    {
      name: "Social Services",
      href: "/Social_Services",
      icon: SocialIcon,
      current: location.pathname === "/Social_Services",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 shadow-2xl sticky top-0 z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center mr-3 transform hover:rotate-180 transition-transform duration-500">
                <span className="text-blue-600 font-bold text-xl">S</span>
              </div>
              <span className="text-white text-2xl font-bold tracking-tight">
                Service<span className="text-yellow-300">Hub</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group relative px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  item.current
                    ? "bg-white text-blue-600 shadow-lg"
                    : "text-white hover:bg-white/20 hover:text-yellow-200"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <item.icon />
                  <span className="font-medium">{item.name}</span>
                </div>

                {/* Animated underline */}
                <div
                  className={`absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full ${
                    item.current ? "w-full" : ""
                  }`}
                ></div>
              </Link>
            ))}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="ml-4 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-red-500/25"
            >
              <LogoutIcon />
              <span>Log Out</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-200 transform hover:scale-110 transition-transform duration-200"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-blue-700/90 backdrop-blur-sm">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-all duration-200 transform hover:translate-x-2 ${
                item.current
                  ? "bg-white text-blue-600 shadow-lg"
                  : "text-white hover:bg-white/20 hover:text-yellow-200"
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon />
                <span className="font-medium">{item.name}</span>
              </div>
            </Link>
          ))}

          {/* Mobile Logout Button */}
          <button
            onClick={() => {
              handleLogout();
              setIsMenuOpen(false);
            }}
            className="w-full text-left px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200 flex items-center space-x-3"
          >
            <LogoutIcon />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      {/* Animated Background Element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-yellow-300/20 rounded-full animate-bounce"></div>
      </div>
    </nav>
  );
};

export default Header;
