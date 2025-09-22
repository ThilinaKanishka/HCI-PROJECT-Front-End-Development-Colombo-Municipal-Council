import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Engineering_Services() {
  const [activeService, setActiveService] = useState(null);

  const quickActions = [
    {
      icon: "💳",
      title: "PAY",
      description: "Pay bills & fees online",
      color: "from-green-500 to-emerald-600",
      link: "#pay",
    },
    {
      icon: "📝",
      title: "APPLY",
      description: "Apply for permits & licenses",
      color: "from-teal-500 to-cyan-600",
      link: "#apply",
    },
    {
      icon: "🚨",
      title: "REPORT",
      description: "Report issues & complaints",
      color: "from-amber-500 to-orange-600",
      link: "#report",
    },
    {
      icon: "📞",
      title: "CONTACT",
      description: "Contact engineering department",
      color: "from-lime-500 to-green-600",
      link: "#contact",
    },
  ];

  const engineeringServices = [
    {
      icon: "🏗️",
      title: "Building Plan Approval",
      description: "Get approval for construction projects and building plans",
      details:
        "Review and approval of architectural plans, structural designs, and construction permits for residential and commercial buildings.",
      steps: [
        "Submit Application",
        "Technical Review",
        "Site Inspection",
        "Approval",
      ],
      duration: "15-30 days",
      fee: "Based on project value",
    },
    {
      icon: "🛣️",
      title: "Road Development",
      description:
        "Road construction, maintenance and infrastructure development",
      details:
        "Planning, design, and execution of road projects including asphalt laying, drainage systems, and traffic management.",
      steps: ["Project Planning", "Design Phase", "Tendering", "Construction"],
      duration: "3-12 months",
      fee: "Varies by project",
    },
    {
      icon: "🚰",
      title: "Water Supply Systems",
      description: "Water distribution network management and maintenance",
      details:
        "Installation and maintenance of water supply systems, pipeline networks, and water quality monitoring.",
      steps: ["System Design", "Installation", "Testing", "Commissioning"],
      duration: "1-6 months",
      fee: "Project-based",
    },
    {
      icon: "💡",
      title: "Electrical Infrastructure",
      description: "Public lighting and electrical system maintenance",
      details:
        "Installation and maintenance of street lighting, electrical substations, and public utility electrical systems.",
      steps: ["Assessment", "Design", "Implementation", "Maintenance"],
      duration: "2-8 weeks",
      fee: "Standard rates apply",
    },
  ];

  const upcomingEvents = [
    {
      date: "2024-01-20",
      title: "Infrastructure Development Meeting",
      time: "10:00 AM",
      location: "Council Chamber",
      icon: "🏛️",
    },
    {
      date: "2024-01-25",
      title: "Road Safety Workshop",
      time: "2:00 PM",
      location: "Engineering Department",
      icon: "🛣️",
    },
    {
      date: "2024-02-01",
      title: "Sustainable Urban Planning Seminar",
      time: "9:00 AM",
      location: "Conference Hall A",
      icon: "🌱",
    },
  ];

  const departmentHead = {
    name: "ENG. A.D.S. ROHANA",
    position: "Deputy Municipal Commissioner (Engineering Services)",
    phone: "011 12345678",
    email: "depcomeng@colombo.mc.gov.lk",
    fax: "011-2696264",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
              Engineering Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Building Colombo's Future with Sustainable Green Infrastructure
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300"
              >
                ← Back to Home
              </Link>
              <button className="bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <a
                  key={index}
                  href={action.link}
                  className={`bg-gradient-to-r ${action.color} text-white rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group`}
                >
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {action.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                  <p className="text-emerald-100">{action.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-12 bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Engineering Services
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {engineeringServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-emerald-200"
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl bg-emerald-100 p-3 rounded-xl text-emerald-600">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {service.description}
                        </p>

                        {activeService === index && (
                          <div className="animate-fadeIn">
                            <p className="text-sm text-gray-700 mb-3">
                              {service.details}
                            </p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div>
                                <span className="font-semibold text-emerald-600">
                                  Process:
                                </span>
                                <ul className="list-disc list-inside mt-1">
                                  {service.steps.map((step, i) => (
                                    <li key={i} className="text-gray-600">
                                      {step}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <span className="font-semibold text-emerald-600">
                                  Duration:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  {service.duration}
                                </span>
                                <br />
                                <span className="font-semibold text-emerald-600">
                                  Fee:
                                </span>
                                <span className="text-gray-600">
                                  {" "}
                                  {service.fee}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        <button className="mt-4 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transform hover:scale-105 transition-all duration-300">
                          APPLY FOR SERVICE →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Layout - Events & Contact Side by Side */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Upcoming Events - Takes 2/3 space */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Upcoming Events
                </h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-102 transition-all duration-300 border-l-4 border-emerald-500"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl text-emerald-500">
                          {event.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {event.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
                            <span className="flex items-center gap-1">
                              <span>📅</span> {event.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <span>⏰</span> {event.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <span>📍</span> {event.location}
                            </span>
                          </div>
                        </div>
                        <button className="bg-emerald-100 hover:bg-emerald-200 text-emerald-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                          Register
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Head Contact - Takes 1/3 space */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl shadow-xl text-white p-6 sticky top-24">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="mr-2">👨‍💼</span>
                    Department Head
                  </h2>
                  <div className="text-center mb-4">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-emerald-500 overflow-hidden border-4 border-white shadow-lg">
                      <img
                        src={departmentHead.image}
                        alt={departmentHead.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{departmentHead.name}</h3>
                    <p className="text-emerald-100 text-sm">
                      {departmentHead.position}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 bg-white/10 p-2 rounded-lg">
                      <span className="text-xl">📍</span>
                      <span className="text-sm">{departmentHead.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/10 p-2 rounded-lg">
                      <span className="text-xl">📎</span>
                      <span className="text-sm break-all">
                        {departmentHead.email}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/10 p-2 rounded-lg">
                      <span className="text-xl">📒</span>
                      <span className="text-sm">{departmentHead.fax}</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-white text-emerald-600 py-3 rounded-lg font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Schedule Meeting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Grid */}
        <section className="py-12 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Sustainable Engineering Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🌉",
                  title: "Green Bridge Construction",
                  desc: "Eco-friendly bridge designs with sustainable materials",
                },
                {
                  icon: "🚲",
                  title: "Cycle Lane Development",
                  desc: "Dedicated bicycle lanes for sustainable transport",
                },
                {
                  icon: "🌊",
                  title: "Smart Drainage Systems",
                  desc: "Eco-friendly stormwater management solutions",
                },
                {
                  icon: "🌳",
                  title: "Urban Greening",
                  desc: "Parks, gardens, and urban forest development",
                },
                {
                  icon: "☀️",
                  title: "Solar Infrastructure",
                  desc: "Public solar energy projects and installations",
                },
                {
                  icon: "💧",
                  title: "Water Conservation",
                  desc: "Rainwater harvesting and water recycling systems",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white/90 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-emerald-100"
                >
                  <div className="text-3xl mb-3 text-emerald-500">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                  <button className="mt-3 text-emerald-500 hover:text-emerald-600 text-sm font-semibold transition-colors duration-300">
                    Learn more →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our engineering team today for professional consultation
              and sustainable solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transform hover:scale-105 transition-all duration-300">
                View Project Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
}

export default Engineering_Services;
