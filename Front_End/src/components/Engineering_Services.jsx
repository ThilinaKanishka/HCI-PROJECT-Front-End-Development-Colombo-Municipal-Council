import React from "react";

function Engineering_Services() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Engineering Services
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          We provide a wide range of professional engineering services to
          support your projects with innovative and reliable solutions.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Design & Planning
            </h2>
            <p className="text-gray-600">
              Expert solutions for structural, civil, and mechanical design.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Project Management
            </h2>
            <p className="text-gray-600">
              Efficient management to ensure timely and cost-effective delivery.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Maintenance
            </h2>
            <p className="text-gray-600">
              Reliable support to maintain and improve system performance.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Consulting
            </h2>
            <p className="text-gray-600">
              Professional guidance tailored to your unique project needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Engineering_Services;
