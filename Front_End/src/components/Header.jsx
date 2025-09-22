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
    { path: "#", label: "Log Out", icon: "🚪" },
  ];

  const websiteName = "Colombo Municipal Council";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-900 shadow-2xl py-2"
          : "bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 shadow-lg py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Website Name */}
          <div className="flex items-center space-x-3">
            <div className="bg-white rounded-full p-2 shadow-lg animate-bounce hover:animate-spin transition-all duration-300">
              <span className="text-2xl">🌿</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white font-bold text-lg md:text-xl lg:text-2xl font-serif">
                {websiteName.split("").map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block animate-rubberBand hover:animate-pulse"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationIterationCount: 1,
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </h1>
              <div className="text-emerald-200 text-xs md:text-sm font-mono animate-pulse hover:animate-bounce transition-all"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === item.path
                    ? "bg-white text-emerald-600 shadow-lg font-bold"
                    : "text-white hover:bg-emerald-700 hover:bg-opacity-50 border border-transparent hover:border-emerald-300"
                } ${
                  index === navItems.length - 1
                    ? "bg-amber-600 hover:bg-amber-700 border-amber-400"
                    : ""
                }`}
              >
                <span className="text-lg transition-transform hover:scale-125">
                  {item.icon}
                </span>
                <span className="font-semibold">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden bg-white bg-opacity-20 p-2 rounded-lg text-white hover:bg-opacity-30 transition-all transform hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-emerald-800 bg-opacity-95 rounded-lg p-4 animate-slideDown border border-emerald-400">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-102 ${
                    location.pathname === item.path
                      ? "bg-white text-emerald-600 shadow-lg font-bold"
                      : "text-white hover:bg-emerald-700 border border-transparent hover:border-emerald-300"
                  } ${
                    item.label === "Log Out"
                      ? "bg-amber-600 hover:bg-amber-700 border-amber-400"
                      : ""
                  }`}
                >
                  <span className="text-xl animate-pulse">{item.icon}</span>
                  <span className="font-semibold">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes rubberBand {
          0% {
            transform: scale3d(1, 1, 1);
          }
          30% {
            transform: scale3d(1.25, 0.75, 1);
          }
          40% {
            transform: scale3d(0.75, 1.25, 1);
          }
          50% {
            transform: scale3d(1.15, 0.85, 1);
          }
          65% {
            transform: scale3d(0.95, 1.05, 1);
          }
          75% {
            transform: scale3d(1.05, 0.95, 1);
          }
          100% {
            transform: scale3d(1, 1, 1);
          }
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gentlePulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        .animate-rubberBand {
          animation: rubberBand 0.8s ease-in-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </header>
  );
}

export default Header;
