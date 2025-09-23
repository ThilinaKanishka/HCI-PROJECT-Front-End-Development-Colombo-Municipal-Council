import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
  };

  const validateForm = () => {
    const newErrors = {};

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
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    // Handle login logic here
    console.log("Login successful", formData);
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

        {/* Wide Login Container - Matching Create Account Design */}
        <div className="max-w-4xl w-full mx-auto animate-fadeIn">
          <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
            {/* Left Side - Illustration/Info */}
            <div className="lg:w-2/5 bg-gradient-to-br from-emerald-600 via-green-500 to-teal-500 p-8 flex flex-col justify-center relative">
              <div className="text-center text-white">
                <div className="mb-6">
                  <span className="text-6xl">🔐</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Welcome Back!</h3>
                <p className="text-emerald-100 mb-6">
                  Access your Colombo Municipal Council account and continue
                  managing your services
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
                  Sign in to Your Account
                </h2>
                <p className="text-gray-600">
                  Welcome back to Colombo Municipal Council Services
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    {/* Password strength indicator */}
                    {formData.password && (
                      <div className="absolute right-4 top-4 flex space-x-1">
                        {[1, 2, 3, 4].map((dot) => (
                          <div
                            key={dot}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              formData.password.length >= dot * 2
                                ? "bg-green-500"
                                : "bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
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

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-emerald-50 p-3 rounded-lg">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>

                  <Link
                    to="/forgot-password"
                    className="text-sm text-emerald-600 hover:text-emerald-500 font-medium transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">🔓</span>
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
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
                      Signing in...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <span className="mr-3 text-xl">🚀</span>
                      Log in
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

              {/* Sign Up Link */}
              <div className="mt-8 text-center border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/Create_your_Account"
                    className="font-medium text-emerald-600 hover:text-emerald-500 transition-colors duration-300 underline text-lg"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">
              By signing in, you agree to our{" "}
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

          {/* Emergency Contact */}
          <div className="mt-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-4 text-white text-center transform hover:scale-102 transition-all duration-300 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-2xl">🚨</span>
              <span className="font-semibold">Emergency Contact</span>
            </div>
            <p className="text-lg font-bold">119 / 011-2698698</p>
            <p className="text-amber-100 text-sm">
              24/7 Municipal Emergency Services
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

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
}

export default Login;
