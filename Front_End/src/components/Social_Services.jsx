import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Social_Services() {
  const [activeTab, setActiveTab] = useState("about");

  const socialServices = [
    {
      icon: "👵",
      title: "Elderly Care Services",
      description: "Support and assistance for senior citizens",
      details:
        "Home care services, day care centers, financial assistance, and community programs for elderly citizens.",
      benefits: [
        "Monthly allowances",
        "Medical assistance",
        "Social activities",
        "Counseling",
      ],
      applyLink: "#elderly-care",
    },
    {
      icon: "👶",
      title: "Child Welfare Programs",
      description: "Protection and development of children",
      details:
        "Child protection services, educational support, nutrition programs, and foster care services.",
      benefits: [
        "Educational scholarships",
        "Nutrition support",
        "Child protection",
        "Family counseling",
      ],
      applyLink: "#child-welfare",
    },
    {
      icon: "🚸",
      title: "Disability Support",
      description: "Services for differently-abled individuals",
      details:
        "Mobility aids, vocational training, financial support, and accessibility improvements.",
      benefits: [
        "Financial aid",
        "Vocational training",
        "Medical support",
        "Accessibility services",
      ],
      applyLink: "#disability-support",
    },
  ];

  const quickActions = [
    {
      icon: "📋",
      title: "Apply for Assistance",
      description: "Apply for social welfare programs",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: "🏠",
      title: "Housing Support",
      description: "Low-income housing applications",
      color: "from-teal-500 to-cyan-600",
    },
    {
      icon: "🏥",
      title: "Health Services",
      description: "Medical and healthcare support",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: "🎓",
      title: "Education Aid",
      description: "Scholarships and educational support",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const upcomingEvents = [
    {
      date: "2024-01-18",
      title: "Community Health Camp",
      time: "9:00 AM - 4:00 PM",
      location: "Colombo Public Park",
      attendees: "150+ expected",
      icon: "🏥",
    },
    {
      date: "2024-01-22",
      title: "Elderly Social Gathering",
      time: "2:00 PM - 5:00 PM",
      location: "Community Center",
      attendees: "Senior citizens",
      icon: "👵",
    },
    {
      date: "2024-01-25",
      title: "Youth Career Guidance",
      time: "10:00 AM - 1:00 PM",
      location: "Vocational Training Center",
      attendees: "Ages 16-25",
      icon: "🎯",
    },
  ];

  const notices = [
    {
      type: "urgent",
      title: "New Scholarship Applications Open",
      date: "2024-01-15",
      icon: "🎓",
    },
    {
      type: "info",
      title: "Community Kitchen Renovation",
      date: "2024-01-12",
      icon: "🍲",
    },
    {
      type: "update",
      title: "Updated Welfare Application Process",
      date: "2024-01-10",
      icon: "📝",
    },
  ];

  const emergencyServices = [
    {
      icon: "🚨",
      title: "Emergency Number",
      number: "119",
      description: "24/7 Emergency Hotline",
    },
    {
      icon: "🚒",
      title: "Fire & Rescue",
      number: "011-2422222",
      description: "Fire emergency services",
    },
    {
      icon: "ℹ️",
      title: "Information Center",
      number: "011-2698698",
      description: "General information",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Community Support",
      number: "011-2698111",
      description: "Social services hotline",
    },
  ];

  const charityCommissioner = {
    name: "MRS. K.A.S. PERERA",
    position: "Charity Commissioner",
    phone: "011 2345678",
    email: "charitycom@colombo.mc.gov.lk",
    office: "011-2696355",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Social Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Supporting Communities, Empowering Lives in Colombo
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300"
              >
                ← Back to Home
              </Link>
              <button className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300">
                Download Services Guide
              </button>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Social Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {socialServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-emerald-200"
                >
                  <div className="p-6 text-center">
                    <div className="text-5xl mb-4 transform hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <p className="text-sm text-gray-700 mb-4">
                      {service.details}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-emerald-600 mb-2">
                        Benefits Include:
                      </h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {service.benefits.map((benefit, i) => (
                          <span
                            key={i}
                            className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300">
                      APPLY FOR SERVICE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section - Three Columns */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Quick Actions */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="text-emerald-500 mr-2">⚡</span>
                  Quick Actions
                </h2>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-r ${action.color} text-white rounded-xl p-4 transform hover:scale-105 transition-all duration-300 shadow-lg`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{action.icon}</div>
                        <div>
                          <h3 className="font-semibold">{action.title}</h3>
                          <p className="text-sm opacity-90">
                            {action.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charity Commissioner Contact */}
                <div className="mt-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl text-white p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="mr-2">👩‍💼</span>
                    Charity Commissioner
                  </h3>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-emerald-400 overflow-hidden border-2 border-white">
                      <img
                        src={charityCommissioner.image}
                        alt={charityCommissioner.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold">{charityCommissioner.name}</h4>
                    <p className="text-emerald-100 text-sm">
                      {charityCommissioner.position}
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span>📞</span>
                      <span>{charityCommissioner.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>📧</span>
                      <span className="text-xs">
                        {charityCommissioner.email}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>🏢</span>
                      <span>{charityCommissioner.office}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Column - Upcoming Events */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="text-emerald-500 mr-2">📅</span>
                  Upcoming Events
                </h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-4 border-l-4 border-emerald-500 transform hover:scale-102 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl text-emerald-500">
                          {event.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">
                            {event.title}
                          </h3>
                          <div className="text-sm text-gray-600 mt-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span>📅 {event.date}</span>
                              <span>⏰ {event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>📍 {event.location}</span>
                              <span>👥 {event.attendees}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="w-full mt-3 bg-emerald-100 hover:bg-emerald-200 text-emerald-600 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                        Register for Event
                      </button>
                    </div>
                  ))}
                </div>

                {/* Vision & Mission Tabs */}
                <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                  <div className="flex border-b border-gray-200 mb-4">
                    <button
                      onClick={() => setActiveTab("vision")}
                      className={`flex-1 py-2 font-semibold ${
                        activeTab === "vision"
                          ? "text-emerald-600 border-b-2 border-emerald-600"
                          : "text-gray-600"
                      }`}
                    >
                      Vision
                    </button>
                    <button
                      onClick={() => setActiveTab("mission")}
                      className={`flex-1 py-2 font-semibold ${
                        activeTab === "mission"
                          ? "text-emerald-600 border-b-2 border-emerald-600"
                          : "text-gray-600"
                      }`}
                    >
                      Mission
                    </button>
                    <button
                      onClick={() => setActiveTab("about")}
                      className={`flex-1 py-2 font-semibold ${
                        activeTab === "about"
                          ? "text-emerald-600 border-b-2 border-emerald-600"
                          : "text-gray-600"
                      }`}
                    >
                      About
                    </button>
                  </div>
                  <div className="animate-fadeIn">
                    {activeTab === "vision" && (
                      <div>
                        <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                        <p className="text-gray-700">
                          To create an inclusive, compassionate society where
                          every citizen of Colombo has access to opportunities,
                          support, and dignity regardless of their
                          circumstances.
                        </p>
                      </div>
                    )}
                    {activeTab === "mission" && (
                      <div>
                        <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                        <p className="text-gray-700">
                          To provide comprehensive social services that empower
                          individuals, strengthen families, and build resilient
                          communities through compassionate support and
                          sustainable programs.
                        </p>
                      </div>
                    )}
                    {activeTab === "about" && (
                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          About Social Services
                        </h3>
                        <p className="text-gray-700">
                          The Colombo Municipal Council Social Services
                          Department is committed to improving the quality of
                          life for all citizens through welfare programs,
                          community development, and support services tailored
                          to meet diverse needs.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - Notices */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="text-emerald-500 mr-2">📢</span>
                  Important Notices
                </h2>
                <div className="space-y-4">
                  {notices.map((notice, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-xl shadow-lg p-4 border-l-4 ${
                        notice.type === "urgent"
                          ? "border-red-500"
                          : notice.type === "info"
                          ? "border-blue-500"
                          : "border-emerald-500"
                      } transform hover:scale-102 transition-all duration-300`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{notice.icon}</div>
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {notice.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Posted: {notice.date}
                          </p>
                          {notice.type === "urgent" && (
                            <span className="inline-block bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold mt-1">
                              Urgent
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Emergency Services */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="text-red-500 mr-2">🚨</span>
                    Emergency Contacts
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {emergencyServices.map((service, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-3 text-center transform hover:scale-105 transition-all duration-300"
                      >
                        <div className="text-2xl mb-1">{service.icon}</div>
                        <div className="font-semibold text-gray-800 text-sm">
                          {service.title}
                        </div>
                        <div className="text-lg font-bold text-emerald-600">
                          {service.number}
                        </div>
                        <div className="text-xs text-gray-600">
                          {service.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Impact Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Community Impact 2024</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: "👵", number: "5,000+", label: "Elderly Served" },
                { icon: "👶", number: "2,500+", label: "Children Supported" },
                { icon: "🏠", number: "1,200+", label: "Families Helped" },
                { icon: "🎓", number: "800+", label: "Scholarships Awarded" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="animate-bounce"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-emerald-100">{stat.label}</div>
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

export default Social_Services;
