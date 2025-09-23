import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Create_your_Account() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [receiveNews, setReceiveNews] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Calculate password strength
    if (name === "password") {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    setPasswordStrength(strength);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^07\d{8}$/.test(formData.mobile)) {
      newErrors.mobile =
        "Please enter a valid Sri Lankan mobile number (07XXXXXXXX)";
    }

    if (!formData.email) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Not a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Minimum of 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    // Handle registration logic here
    console.log("Account created successfully", formData);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 25) return "bg-red-500";
    if (passwordStrength < 50) return "bg-orange-500";
    if (passwordStrength < 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 25) return "Very Weak";
    if (passwordStrength < 50) return "Weak";
    if (passwordStrength < 75) return "Good";
    return "Strong";
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Side Decoration Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-10 top-1/4 w-32 h-32 bg-emerald-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute right-20 top-1/3 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-float delay-1000"></div>
          <div className="absolute left-1/4 bottom-1/4 w-28 h-28 bg-teal-200 rounded-full opacity-20 animate-float delay-500"></div>
          <div className="absolute right-32 bottom-1/3 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-float delay-1500"></div>
        </div>

        {/* Logo Section */}
        <div className="text-center mb-8 animate-fadeIn">
          <Link to="/" className="inline-block group">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-3 rounded-xl transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white text-3xl">🏛️</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              Colombo Municipal Council
            </h1>
            <p className="text-emerald-600 text-sm font-mono mt-1">
              import React from "react"
            </p>
          </Link>
        </div>

        {/* Wide Registration Container */}
        <div className="max-w-4xl w-full mx-auto animate-fadeIn">
          <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
            {/* Left Side - Illustration/Info */}
            <div className="lg:w-2/5 bg-gradient-to-br from-emerald-600 via-green-500 to-teal-500 p-8 flex flex-col justify-center relative">
              <div className="text-center text-white">
                <div className="mb-6">
                  <span className="text-6xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
                <p className="text-emerald-100 mb-6">
                  Access exclusive services and stay connected with Colombo
                  Municipal Council
                </p>

                {/* Features List */}
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <span className="text-lg mr-3">✅</span>
                    <span className="text-emerald-100">
                      Quick Service Access
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg mr-3">✅</span>
                    <span className="text-emerald-100">24/7 Support</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg mr-3">✅</span>
                    <span className="text-emerald-100">Secure & Private</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg mr-3">✅</span>
                    <span className="text-emerald-100">Real-time Updates</span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white bg-opacity-10 rounded-tr-full"></div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-3/5 p-8">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                  Create your Account
                </h2>
                <p className="text-gray-600">
                  Join Colombo Municipal Council Services
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="flex items-center text-sm font-medium text-gray-700"
                    >
                      <span className="mr-2 text-lg">👤</span>
                      Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-lg ${
                          errors.name
                            ? "border-red-300 focus:ring-red-500"
                            : "border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                        }`}
                      />
                      {!errors.name && formData.name && (
                        <div className="absolute right-4 top-4 text-green-500 text-xl animate-pulse">
                          ✓
                        </div>
                      )}
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-sm flex items-center animate-shake">
                        <span className="mr-2 text-lg">⚠️</span>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Mobile Number Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="mobile"
                      className="flex items-center text-sm font-medium text-gray-700"
                    >
                      <span className="mr-2 text-lg">📱</span>
                      Mobile Number
                    </label>
                    <div className="relative">
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="07XXXXXXXXX"
                        className={`w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-lg ${
                          errors.mobile
                            ? "border-red-300 focus:ring-red-500"
                            : "border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                        }`}
                      />
                      {!errors.mobile && formData.mobile && (
                        <div className="absolute right-4 top-4 text-green-500 text-xl animate-pulse">
                          ✓
                        </div>
                      )}
                    </div>
                    {errors.mobile && (
                      <p className="text-red-500 text-sm flex items-center animate-shake">
                        <span className="mr-2 text-lg">⚠️</span>
                        {errors.mobile}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="flex items-center text-sm font-medium text-gray-700"
                  >
                    <span className="mr-2 text-lg">📧</span>
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="mail@example.com"
                      className={`w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-lg ${
                        errors.email
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                      }`}
                    />
                    {!errors.email && formData.email && (
                      <div className="absolute right-4 top-4 text-green-500 text-xl animate-pulse">
                        ✓
                      </div>
                    )}
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm flex items-center animate-shake">
                      <span className="mr-2 text-lg">⚠️</span>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="flex items-center text-sm font-medium text-gray-700"
                  >
                    <span className="mr-2 text-lg">🔒</span>
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className={`w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-lg ${
                        errors.password
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                      }`}
                    />
                  </div>

                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-600">
                          Password strength:
                        </span>
                        <span
                          className={`text-xs font-semibold ${getPasswordStrengthColor().replace(
                            "bg-",
                            "text-"
                          )}`}
                        >
                          {getPasswordStrengthText()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${getPasswordStrengthColor()}`}
                          style={{ width: `${passwordStrength}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {errors.password ? (
                    <p className="text-red-500 text-sm flex items-center animate-shake">
                      <span className="mr-2 text-lg">⚠️</span>
                      {errors.password}
                    </p>
                  ) : (
                    <p className="text-gray-500 text-sm flex items-center">
                      <span className="mr-2">ℹ️</span>
                      Minimum of 8 characters
                    </p>
                  )}
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-center bg-emerald-50 p-4 rounded-lg">
                  <input
                    id="receive-news"
                    name="receive-news"
                    type="checkbox"
                    checked={receiveNews}
                    onChange={(e) => setReceiveNews(e.target.checked)}
                    className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="receive-news"
                    className="ml-3 block text-sm text-gray-700 flex items-center"
                  >
                    <span className="mr-2">📰</span>
                    Receive news, updates and deals
                  </label>
                </div>

                {/* Create Account Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 focus:ring-emerald-500"
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 border-t-2 border-white border-solid rounded-full animate-spin mr-3"></div>
                      Creating Account...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <span className="mr-3 text-xl">✨</span>
                      Create Account
                    </div>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="mt-6 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>

              {/* Google Sign In */}
              <button className="w-full mt-6 flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                <span className="mr-3 text-xl">🔍</span>
                Sign in with Google
              </button>

              {/* Login Link */}
              <div className="mt-8 text-center border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/Login"
                    className="font-medium text-emerald-600 hover:text-emerald-500 transition-colors duration-300 underline text-lg"
                  >
                    Log in here
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">
              By creating an account, you agree to our{" "}
              <Link
                to="/terms"
                className="text-emerald-600 hover:text-emerald-500"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="text-emerald-600 hover:text-emerald-500"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />

      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }

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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default Create_your_Account;
