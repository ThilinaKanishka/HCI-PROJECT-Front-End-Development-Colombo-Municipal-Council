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
      color: "from-blue-500 to-cyan-600",
      link: "#apply",
    },
    {
      icon: "🚨",
      title: "REPORT",
      description: "Report issues & complaints",
      color: "from-orange-500 to-red-600",
      link: "#report",
    },
    {
      icon: "📞",
      title: "CONTACT",
      description: "Contact engineering department",
      color: "from-purple-500 to-indigo-600",
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
      title: "Water Management Seminar",
      time: "9:00 AM",
      location: "Conference Hall A",
      icon: "💧",
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
              Engineering Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Building Colombo's Future with Sustainable Infrastructure
              Solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
              >
                ← Back to Home
              </Link>
              <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300">
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
                  <p className="text-blue-100">{action.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Engineering Services
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {engineeringServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100"
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl bg-blue-100 p-3 rounded-xl">
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
                                <span className="font-semibold">Process:</span>
                                <ul className="list-disc list-inside">
                                  {service.steps.map((step, i) => (
                                    <li key={i}>{step}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <span className="font-semibold">Duration:</span>{" "}
                                {service.duration}
                                <br />
                                <span className="font-semibold">Fee:</span>{" "}
                                {service.fee}
                              </div>
                            </div>
                          </div>
                        )}

                        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transform hover:scale-105 transition-all duration-300">
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
                      className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-102 transition-all duration-300 border-l-4 border-blue-500"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{event.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {event.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
                            <span>📅 {event.date}</span>
                            <span>⏰ {event.time}</span>
                            <span>📍 {event.location}</span>
                          </div>
                        </div>
                        <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                          Register
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Head Contact - Takes 1/3 space */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl text-white p-6 sticky top-24">
                  <h2 className="text-2xl font-bold mb-4">Department Head</h2>
                  <div className="text-center mb-4">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-blue-500 overflow-hidden border-4 border-white">
                      <img
                        src={departmentHead.image}
                        alt={departmentHead.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{departmentHead.name}</h3>
                    <p className="text-blue-100 text-sm">
                      {departmentHead.position}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">📍</span>
                      <span className="text-sm">{departmentHead.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">📎</span>
                      <span className="text-sm break-all">
                        {departmentHead.email}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">📒</span>
                      <span className="text-sm">{departmentHead.fax}</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
                    Schedule Meeting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Additional Engineering Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🌉",
                  title: "Bridge Construction",
                  desc: "Design and construction of bridges and flyovers",
                },
                {
                  icon: "🚇",
                  title: "Public Transport",
                  desc: "Bus stands, railway facilities, and transport hubs",
                },
                {
                  icon: "🌊",
                  title: "Drainage Systems",
                  desc: "Stormwater drainage and flood management systems",
                },
                {
                  icon: "🏭",
                  title: "Industrial Zones",
                  desc: "Development and maintenance of industrial areas",
                },
                {
                  icon: "🌳",
                  title: "Parks & Landscaping",
                  desc: "Public parks, gardens, and urban landscaping",
                },
                {
                  icon: "⚡",
                  title: "Renewable Energy",
                  desc: "Solar and renewable energy projects",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              ))}
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
