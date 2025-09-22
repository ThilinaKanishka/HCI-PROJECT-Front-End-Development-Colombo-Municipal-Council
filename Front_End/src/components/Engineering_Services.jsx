import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Engineering_Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 p-4 md:p-8">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {<Header />}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-2 mt-6">
            Engineering Services
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Providing professional engineering solutions for urban development
          </p>
        </div>

        {/* Quick Actions Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            {
              title: "PAY",
              icon: "💳",
              color: "bg-blue-500 hover:bg-blue-600",
            },
            {
              title: "APPLY",
              icon: "📝",
              color: "bg-green-500 hover:bg-green-600",
            },
            {
              title: "REPORT",
              icon: "📊",
              color: "bg-orange-500 hover:bg-orange-600",
            },
            {
              title: "CONTACT",
              icon: "📞",
              color: "bg-purple-500 hover:bg-purple-600",
            },
          ].map((action, index) => (
            <div key={index} className="flex flex-col items-center">
              <button
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full text-white text-2xl flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 ${action.color}`}
              >
                {action.icon}
              </button>
              <span className="mt-2 text-sm md:text-base font-medium text-gray-700">
                {action.title}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Upcoming Events */}
          <div
            className={`lg:w-1/3 bg-white rounded-xl shadow-lg p-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-100">
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {[
                {
                  date: "15 Oct 2024",
                  title: "Infrastructure Development Workshop",
                  time: "9:00 AM - 12:00 PM",
                },
                {
                  date: "22 Oct 2024",
                  title: "Public Consultation: Road Expansion",
                  time: "2:00 PM - 4:00 PM",
                },
                {
                  date: "05 Nov 2024",
                  title: "Engineering Innovation Conference",
                  time: "10:00 AM - 3:00 PM",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition-colors duration-300"
                >
                  <div className="text-sm font-semibold text-blue-700">
                    {event.date}
                  </div>
                  <div className="font-medium text-gray-800 mt-1">
                    {event.title}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{event.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Services and Contact */}
          <div className="lg:w-2/3 space-y-8">
            {/* Services Section */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {[
                "Road Construction & Maintenance",
                "Building Plan Approvals",
                "Water Supply Projects",
                "Drainage System Management",
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {service}
                  </h3>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center">
                    APPLY FOR SERVICE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div
              className={`bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl shadow-lg p-6 text-white transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">
                Deputy Municipal Commissioner (Engineering services)
              </h2>
              <h3 className="text-xl font-semibold mb-6">ENG. A.D.S. ROHANA</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span>011 12345678</span>
                </div>

                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span>depcomeng@colombo.mc.gov.lk</span>
                </div>

                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span>011-2696264</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Engineering_Services;
