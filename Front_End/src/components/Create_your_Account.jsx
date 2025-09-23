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
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Floating Shapes */}
          <div className="absolute left-10 top-1/4 w-32 h-32 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full opacity-20 animate-float-slow"></div>
          <div className="absolute right-20 top-1/3 w-24 h-24 bg-gradient-to-r from-green-300 to-teal-300 rounded-full opacity-25 animate-float-medium"></div>
          <div className="absolute left-1/4 bottom-1/4 w-28 h-28 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-20 animate-float-slow delay-1000"></div>
          <div className="absolute right-32 bottom-1/3 w-20 h-20 bg-gradient-to-r from-emerald-300 to-green-300 rounded-full opacity-25 animate-float-medium delay-500"></div>
          <div className="absolute left-1/3 top-1/2 w-16 h-16 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full opacity-20 animate-float-slow delay-1500"></div>
          <div className="absolute right-1/4 top-1/5 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-15 animate-float-medium delay-700"></div>

          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-30 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Animated Waves */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-200/20 to-transparent opacity-40 animate-wave"></div>

          {/* Floating Triangles */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-8 h-8 opacity-10 animate-float-slow"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  background: `conic-gradient(from 90deg at 50% 50%, #10b981, #059669, #047857, #065f46)`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Logo Section */}
        <div className="text-center mb-8 animate-fadeIn relative z-10">
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
        <div className="max-w-4xl w-full mx-auto animate-fadeIn relative z-10">
          <div className="flex flex-col lg:flex-row bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-4 border-white/20">
            {/* Left Side - Illustration/Info */}
            <div className="lg:w-2/5 bg-gradient-to-br from-emerald-600 via-green-500 to-teal-500 p-8 flex flex-col justify-center relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(30deg,#ffffff40_12%,transparent_12.5%,transparent_87%,#ffffff40_87.5%,#ffffff40),linear-gradient(150deg,#ffffff40_12%,transparent_12.5%,transparent_87%,#ffffff40_87.5%,#ffffff40),linear-gradient(30deg,#ffffff40_12%,transparent_12.5%,transparent_87%,#ffffff40_87.5%,#ffffff40),linear-gradient(150deg,#ffffff40_12%,transparent_12.5%,transparent_87%,#ffffff40_87.5%,#ffffff40),linear-gradient(60deg,#ffffff77_25%,transparent_25.5%,transparent_75%,#ffffff77_75%,#ffffff77),linear-gradient(60deg,#ffffff77_25%,transparent_25.5%,transparent_75%,#ffffff77_75%,#ffffff77)] bg-[size:80px_140px] [background-position:0_0,0_0,40px_70px,40px_70px,0_0,40px_70px]"></div>
              </div>

              <div className="text-center text-white relative z-10">
                <div className="mb-6 animate-bounce-slow">
                  <span className="text-6xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
                <p className="text-emerald-100 mb-6">
                  Access exclusive services and stay connected with Colombo
                  Municipal Council
                </p>

                {/* Features List */}
                <div className="space-y-3 text-left">
                  {[
                    "Quick Service Access",
                    "24/7 Support",
                    "Secure & Private",
                    "Real-time Updates",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center animate-slide-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-lg mr-3">✅</span>
                      <span className="text-emerald-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-tr-full"></div>
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
                Sign up with Google
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

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) translateX(-10px) rotate(240deg);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(5px);
          }
        }

        @keyframes wave {
          0% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.6;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slide-in-left {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out forwards;
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default Create_your_Account;
