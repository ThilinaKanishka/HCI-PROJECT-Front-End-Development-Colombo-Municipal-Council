import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stats, setStats] = useState([0, 0, 0, 0]);
  const targetStats = [1865, 2500000, 37, 150];

  useEffect(() => {
    // Hero slider animation
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    // Stats counter animation
    const statInterval = setInterval(() => {
      setStats((prev) =>
        prev.map((val, index) => {
          if (val < targetStats[index]) {
            return val + Math.ceil(targetStats[index] / 50);
          }
          return val;
        })
      );
    }, 50);

    return () => {
      clearInterval(slideInterval);
      clearInterval(statInterval);
    };
  }, []);

  const heroSlides = [
    {
      image:
        "https://www.shutterstock.com/image-photo/colombo-municipal-council-sri-lanka-600nw-2355828527.jpg",
      title: "Serving Colombo Since 1865",
      subtitle: "Building a Sustainable Future Together",
      icon: "🏛️",
    },
    {
      image:
        "https://srilankamirror.com/wp-content/uploads/2025/06/Vraie-Cally-Balthazaar.jpg",
      title: "Urban Development & Planning",
      subtitle: "Transforming Colombo into a Smart City",
      icon: "🌆",
    },
    {
      image:
        "https://srilankamirror.com/wp-content/uploads/2025/05/AKD_1200x675px_19_05_25-1000x600.jpg",
      title: "Community Welfare Services",
      subtitle: "Empowering Citizens, Enriching Lives",
      icon: "👥",
    },
  ];

  const services = [
    {
      icon: "🚰",
      title: "Water Supply",
      description: "Clean drinking water distribution and management",
      link: "/Engineering_Services",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🚮",
      title: "Waste Management",
      description: "Efficient garbage collection and recycling programs",
      link: "/Engineering_Services",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "🏥",
      title: "Public Health",
      description: "Healthcare services and sanitation programs",
      link: "/Social_Services",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: "📚",
      title: "Education",
      description: "Schools and educational development programs",
      link: "/Social_Services",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: "🛣️",
      title: "Road Maintenance",
      description: "Infrastructure development and road networks",
      link: "/Engineering_Services",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: "🌳",
      title: "Parks & Recreation",
      description: "Public parks and community recreation facilities",
      link: "/Social_Services",
      color: "from-teal-500 to-green-500",
    },
  ];

  const announcements = [
    {
      icon: "📢",
      title: "New Waste Collection Schedule",
      date: "2024-01-15",
      urgent: true,
    },
    {
      icon: "🚧",
      title: "Road Maintenance - Galle Road",
      date: "2024-01-10",
      urgent: false,
    },
    {
      icon: "💧",
      title: "Water Supply Interruption Notice",
      date: "2024-01-08",
      urgent: true,
    },
    {
      icon: "🏛️",
      title: "Public Meeting - Budget 2024",
      date: "2024-01-05",
      urgent: false,
    },
  ];

  const quickLinks = [
    {
      icon: "📋",
      title: "Apply for License",
      url: "#",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: "💰",
      title: "Pay Taxes Online",
      url: "#",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: "📄",
      title: "Download Forms",
      url: "#",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: "🏠",
      title: "Property Assessment",
      url: "#",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: "🚗",
      title: "Parking Permits",
      url: "#",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: "📊",
      title: "Annual Report",
      url: "#",
      color: "bg-teal-100 text-teal-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="relative h-full flex items-center justify-center text-center text-white">
              <div className="max-w-4xl mx-auto px-4 transform transition-transform duration-1000">
                <span className="text-6xl mb-4 inline-block animate-bounce">
                  {slide.icon}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-fadeIn delay-200">
                  {slide.subtitle}
                </p>
                <div className="flex gap-4 justify-center">
                  <Link
                    to="/Engineering_Services"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
                  >
                    Our Services
                  </Link>
                  <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: "📅",
              label: "Years Serving",
              value: stats[0],
              suffix: "+",
            },
            {
              icon: "👨‍👩‍👧‍👦",
              label: "Population Served",
              value: stats[1],
              suffix: "+",
            },
            { icon: "🏘️", label: "Wards", value: stats[2], suffix: "" },
            {
              icon: "⭐",
              label: "Projects Completed",
              value: stats[3],
              suffix: "+",
            },
          ].map((stat, index) => (
            <div key={index} className="text-center animate-countUp">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold mb-1">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-emerald-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive municipal services for the people of Colombo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <div className="p-6">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-4 text-emerald-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Latest Announcements
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with important notices from the council
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 ${
                  announcement.urgent
                    ? "border-l-4 border-red-500"
                    : "border-l-4 border-emerald-500"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">{announcement.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Posted on {announcement.date}
                    </p>
                    {announcement.urgent && (
                      <span className="inline-block bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold mt-2">
                        Urgent
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Quick Links
            </h2>
            <p className="text-lg text-gray-600">
              Access our popular services quickly
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`${link.color} rounded-lg p-4 text-center transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="text-3xl mb-2">{link.icon}</div>
                <div className="text-sm font-semibold">{link.title}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4 animate-pulse">🚨</div>
          <h2 className="text-4xl font-bold mb-4">Emergency Services</h2>
          <p className="text-xl mb-8">
            24/7 emergency hotline for immediate assistance
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold">119</div>
              <div>General Emergency</div>
            </div>
            <div>
              <div className="text-2xl font-bold">+94 11 2 699 699</div>
              <div>Municipal Emergency</div>
            </div>
            <div>
              <div className="text-2xl font-bold">+94 11 2 698 698</div>
              <div>Council Office</div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes countUp {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-countUp {
          animation: countUp 0.5s ease-out;
        }

        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
      <Footer />
    </div>
  );
}

export default Home;
