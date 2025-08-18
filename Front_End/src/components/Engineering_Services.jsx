import React, { useState, useEffect } from "react";
import {
  Menu as MenuIcon,
  Engineering,
  Traffic,
  Construction,
  LocationCity,
  Water,
  Landscape,
  RecyclingOutlined,
  Business,
  Home,
  Phone,
  Email,
  KeyboardArrowUp,
  ExpandMore,
  Build,
  ElectricalServices,
  DirectionsCar,
  Lightbulb,
  RoadOutlined,
  AccountBalance,
  EmojiTransportation,
  WaterDrop,
  Delete,
  Nature,
} from "@mui/icons-material";

const EngineeringServices = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const services = [
    {
      title: "Municipal Workshop",
      description:
        "Mechanical and Electrical Engineering services for operational activities",
      icon: <Build className="text-2xl" />,
      color: "bg-blue-600",
      details: [
        "Vehicle and machinery maintenance",
        "Street lighting operations",
        "Steel fabrication work",
        "Equipment management",
      ],
    },
    {
      title: "Traffic Design & Road Safety",
      description: "Efficient management of road network and traffic safety",
      icon: <Traffic className="text-2xl" />,
      color: "bg-orange-500",
      details: [
        "Road network management",
        "Traffic safety implementation",
        "Pelican signals installation",
        "Bus priority lane operations",
      ],
    },
    {
      title: "Projects",
      description: "Construction and development project management",
      icon: <Construction className="text-2xl" />,
      color: "bg-green-500",
      details: [
        "Construction project supervision",
        "Structural design services",
        "Building construction",
        "Infrastructure development",
      ],
    },
    {
      title: "City Planning",
      description: "Urban development and planning services",
      icon: <LocationCity className="text-2xl" />,
      color: "bg-purple-500",
      details: [
        "Development permit processing",
        "Building plan approvals",
        "Land subdivision services",
        "Urban development planning",
      ],
    },
    {
      title: "Works",
      description: "Road maintenance and construction services",
      icon: <RoadOutlined className="text-2xl" />,
      color: "bg-brown-500",
      details: [
        "Road maintenance",
        "Asphalt production",
        "Precast concrete manufacturing",
        "Quality control testing",
      ],
    },
    {
      title: "Drainage & Water Supply",
      description: "Water infrastructure and sewerage management",
      icon: <Water className="text-2xl" />,
      color: "bg-blue-400",
      details: [
        "Sewerage system maintenance",
        "Water supply services",
        "Drainage connections",
        "Pump station operations",
      ],
    },
    {
      title: "Lands and Environmental Development",
      description: "Land management and environmental services",
      icon: <Landscape className="text-2xl" />,
      color: "bg-lime-500",
      details: [
        "Land development services",
        "Environmental assessments",
        "Green building initiatives",
        "Sustainable development",
      ],
    },
    {
      title: "Solid Waste Management",
      description: "Comprehensive waste collection and disposal services",
      icon: <RecyclingOutlined className="text-2xl" />,
      color: "bg-blue-gray-500",
      details: [
        "Waste collection (500 MT/day)",
        "Recycling programs",
        "Waste-to-energy conversion",
        "Public awareness campaigns",
      ],
    },
    {
      title: "Development",
      description: "Urban development and infrastructure growth",
      icon: <Business className="text-2xl" />,
      color: "bg-deep-orange-500",
      details: [
        "Urban planning initiatives",
        "Infrastructure development",
        "Community center construction",
        "Public facility improvements",
      ],
    },
  ];

  const navigationItems = [
    { name: "Home", icon: <Home />, href: "#home" },
    { name: "Municipal Workshop", icon: <Build />, href: "#workshop" },
    {
      name: "Traffic Design & Road Safety",
      icon: <Traffic />,
      href: "#traffic",
    },
    { name: "Projects", icon: <Construction />, href: "#projects" },
    { name: "City Planning", icon: <LocationCity />, href: "#planning" },
    { name: "Works", icon: <RoadOutlined />, href: "#works" },
    { name: "Drainage & Water Supply", icon: <Water />, href: "#drainage" },
    {
      name: "Lands and Environmental Development",
      icon: <Landscape />,
      href: "#lands",
    },
    {
      name: "Solid Waste Management",
      icon: <RecyclingOutlined />,
      href: "#waste",
    },
    { name: "Development", icon: <Business />, href: "#development" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    setAnimationClass("animate-fade-in");

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const ServiceCard = ({ service, index }) => (
    <div
      key={index}
      className={`w-full sm:w-1/2 md:w-1/3 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
      style={{ animation: `slideInUp 0.6s ease-out ${index * 0.1}s both` }}
    >
      <div
        className={`h-full rounded-2xl shadow-md overflow-hidden border-2 border-opacity-20 ${service.color.replace(
          "bg",
          "border"
        )} bg-gradient-to-br from-${service.color.replace(
          "bg",
          ""
        )}-50 to-${service.color.replace("bg", "")}-20`}
      >
        <div className="p-6 flex flex-col h-full text-center">
          <div className="mb-4">
            <div
              className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl ${service.color} animate-pulse`}
            >
              {service.icon}
            </div>
          </div>
          <h3
            className={`text-lg font-semibold mb-2 ${service.color.replace(
              "bg",
              "text"
            )}`}
          >
            {service.title}
          </h3>
          <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
          <div className="border-t border-gray-200 mb-4"></div>
          <div className="text-left">
            {service.details.map((detail, idx) => (
              <span
                key={idx}
                className={`inline-block m-1 px-2 py-1 text-xs rounded-full border ${service.color.replace(
                  "bg",
                  "border"
                )} ${service.color.replace(
                  "bg",
                  "text"
                )} hover:${service.color.replace(
                  "bg",
                  "bg"
                )} hover:bg-opacity-10`}
              >
                {detail}
              </span>
            ))}
          </div>
          <button
            className={`mt-4 px-6 py-2 rounded-full font-semibold text-white ${
              service.color
            } hover:${service.color.replace("500", "600")} transition-colors`}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <style jsx global>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fadeInDown 1s ease-out;
        }

        .hero-section {
          background: linear-gradient(
            135deg,
            #1976d2 0%,
            #42a5f5 50%,
            #ff6b35 100%
          );
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
            repeat;
        }
      `}</style>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-400 shadow-none sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <button
            className="text-white mr-4"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </button>
          <Engineering className="text-white mr-4" />
          <h1 className="text-white text-xl font-semibold flex-grow">
            Colombo Municipal Council - Engineering Services
          </h1>
          <button className="text-white flex items-center">
            <Phone className="mr-2" />
            011-2681198
          </button>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 mt-4">
        <div className="flex items-center text-sm">
          <a href="#" className="text-blue-600 hover:underline">
            Home
          </a>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">Engineering Services</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section py-16 text-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className={`${animationClass} text-center`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">
              Engineering Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-shadow-sm">
              Comprehensive engineering solutions for Colombo's urban
              infrastructure, serving over 555,000 residents with excellence and
              innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 rounded-full bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 hover:bg-opacity-30 text-white flex items-center transition-colors">
                <Engineering className="mr-2" />
                Explore Services
              </button>
              <button className="px-8 py-3 rounded-full border border-white border-opacity-50 hover:border-opacity-100 hover:bg-white hover:bg-opacity-10 text-white flex items-center transition-colors">
                <Phone className="mr-2" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="container mx-auto px-4 mt-[-1rem] mb-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 text-center rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold text-blue-600">9</h3>
            <p className="text-gray-600">Service Divisions</p>
          </div>
          <div className="bg-white p-6 text-center rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold text-orange-500">500MT</h3>
            <p className="text-gray-600">Daily Waste Collection</p>
          </div>
          <div className="bg-white p-6 text-center rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold text-green-500">15</h3>
            <p className="text-gray-600">Sewerage Pumping Stations</p>
          </div>
          <div className="bg-white p-6 text-center rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold text-blue-400">555K</h3>
            <p className="text-gray-600">Residents Served</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Services Overview */}
        <div className="mb-12">
          <h2 className="text-3xl text-center font-bold text-blue-800 mb-2">
            Our Engineering Divisions
          </h2>
          <p className="text-xl text-center text-gray-600 mb-10">
            Comprehensive infrastructure and municipal services for Colombo
          </p>

          <div className="flex flex-wrap -mx-4">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 mb-8 rounded-xl shadow-lg">
          <h3 className="text-3xl text-center font-bold text-blue-600 mb-6">
            Featured Initiatives
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-100 border-l-4 border-green-500 rounded-lg p-4 mb-4">
              <h4 className="text-lg font-semibold text-green-800">
                Waste-to-Energy Project
              </h4>
              <p className="text-green-700">
                First in Sri Lanka! Converting 500MT daily waste into 10MW clean
                energy at Kerawalapitiya.
              </p>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-500 rounded-lg p-4 mb-4">
              <h4 className="text-lg font-semibold text-blue-800">
                Smart Street Lighting
              </h4>
              <p className="text-blue-700">
                LED conversion and solar-powered street lamps for energy
                efficiency and sustainability.
              </p>
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-lg p-4 mb-4">
              <h4 className="text-lg font-semibold text-yellow-800">
                Bus Priority Lanes
              </h4>
              <p className="text-yellow-700">
                Implemented in collaboration with University of Moratuwa and RDA
                for improved traffic flow.
              </p>
            </div>

            <div className="bg-red-100 border-l-4 border-red-500 rounded-lg p-4 mb-4">
              <h4 className="text-lg font-semibold text-red-800">
                Accessibility Improvements
              </h4>
              <p className="text-red-700">
                Making Baudhdhaloka Mawatha wheelchair accessible - pilot
                project for inclusive infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-xl shadow-lg text-white">
          <h3 className="text-3xl text-center font-bold mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Phone className="mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">
                    Director Engineering Workshop
                  </h4>
                  <p>011-2696161 | Mobile: 071-8276553</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <Email className="mr-4" />
                <div>
                  <p>dirworkshop@colombo.mc.gov.lk</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <LocationCity className="mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">Address</h4>
                  <p>175, T.B.Jayah Mawatha, Colombo 10</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4" />
                <div>
                  <p>Fax: (11)2695718</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-72 bg-white shadow-xl transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <h3 className="text-xl font-semibold text-blue-600 mb-4 px-2">
            Navigation
          </h3>
          <div className="border-t border-gray-200 mb-4"></div>
          <ul>
            {navigationItems.map((item) => (
              <li key={item.name} className="mb-1">
                <a
                  href={item.href}
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                  onClick={() => setDrawerOpen(false)}
                >
                  <span className="text-blue-600 mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Backdrop for drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110 hover:bg-blue-700"
        >
          <KeyboardArrowUp />
        </button>
      )}
    </div>
  );
};

export default EngineeringServices;
