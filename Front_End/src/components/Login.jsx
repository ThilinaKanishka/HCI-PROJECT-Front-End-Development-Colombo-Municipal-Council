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
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex flex-col">
        {/* Navigation Bar */}

        {/* Main Login Content */}
        <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            {/* Login Card */}
            <div className="bg-white rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 py-6 px-8 text-center">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <div className="bg-white bg-opacity-20 p-2 rounded-full">
                    <span className="text-2xl text-white">🔐</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">Sign in</h2>
                </div>
                <p className="text-emerald-100">
                  Welcome back to Colombo Municipal Council
                </p>
              </div>

              {/* Card Body */}
              <div className="py-8 px-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="flex items-center text-sm font-medium text-gray-700"
                    >
                      <span className="mr-2">📧</span>
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
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.email
                            ? "border-red-300 focus:ring-red-500"
                            : "border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                        }`}
                      />
                      {!errors.email && formData.email && (
                        <div className="absolute right-3 top-3 text-green-500 animate-pulse">
                          ✓
                        </div>
                      )}
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm flex items-center animate-shake">
                        <span className="mr-1">⚠️</span>
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
                      <span className="mr-2">🔒</span>
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
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.password
                            ? "border-red-300 focus:ring-red-500"
                            : "border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                        }`}
                      />
                      {/* Password strength indicator */}
                      {formData.password && (
                        <div className="absolute right-3 top-3 flex space-x-1">
                          {[1, 2, 3, 4].map((dot) => (
                            <div
                              key={dot}
                              className={`w-1 h-1 rounded-full transition-all duration-300 ${
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
                        <span className="mr-1">⚠️</span>
                        {errors.password}
                      </p>
                    ) : (
                      <p className="text-gray-500 text-sm">
                        Minimum of 8 characters
                      </p>
                    )}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>

                    <Link
                      to="/forgot-password"
                      className="text-sm text-emerald-600 hover:text-emerald-500 font-medium transition-colors duration-300"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 ${
                      isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 focus:ring-emerald-500"
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mr-2"></div>
                        Signing in...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span className="mr-2">🚀</span>
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
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    {
                      icon: "📘",
                      name: "Facebook",
                      color: "bg-blue-500 hover:bg-blue-600",
                    },
                    {
                      icon: "📷",
                      name: "Instagram",
                      color: "bg-pink-500 hover:bg-pink-600",
                    },
                    {
                      icon: "👤",
                      name: "Google",
                      color: "bg-red-500 hover:bg-red-600",
                    },
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white ${social.color} transition-colors duration-300 transform hover:scale-105`}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </button>
                  ))}
                </div>

                {/* Sign Up Link */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                      to="/Create_your_Account"
                      className="font-medium text-emerald-600 hover:text-emerald-500 transition-colors duration-300 underline"
                    >
                      Sign up here
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center">
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
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </>
  );
}

export default Login;
