import React, { useState } from "react";
import { Film, Mail, Lock, User, Phone, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SignIn() {
  const [activeTab, setActiveTab] = useState("signin");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = activeTab === "signin" ? "login" : "register";

    try {
      console.log("Form Data:", formData);

      const response = await fetch(
        `http://localhost:5092/api/Auth/${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            // For registration
            ...(activeTab === "signup" && {
              firstName: formData.firstName,
              lastName: formData.lastName,
              mobile: formData.mobile,
            }),
          }),
        }
      );

``
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Request failed");
      }

      const data = await response.json();

      if (activeTab === "signin") {
        localStorage.setItem("authToken", data.token);
        navigate("/");
      } else {
        alert("Registration successful! Please login.");
        setActiveTab("signin");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "Connection error");
    }
  };

  // Add logout function
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl flex rounded-2xl shadow-2xl overflow-hidden">
          {/* Left Side - Movie Poster/Image */}
          <div className="hidden lg:block w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80"
              alt="Cinema"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-12">
              <h2 className="text-white text-4xl font-bold mb-4">
                Movie Magic Awaits
              </h2>
              <p className="text-gray-200">
                Book your perfect movie experience with just a few clicks.
              </p>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className="w-full lg:w-1/2 bg-white p-8">
            <div className="flex items-center justify-center mb-8">
              <Film className="text-red-600 w-8 h-8 mr-2" />
              <h1 className="text-2xl font-bold text-gray-800">MovieHub</h1>
            </div>

            <div className="flex justify-center mb-8">
              <button
                onClick={() => setActiveTab("signin")}
                className={`px-8 py-2 font-semibold transition-all duration-200 border-b-2 ${
                  activeTab === "signin"
                    ? "text-red-600 border-red-600"
                    : "text-gray-400 border-transparent hover:text-gray-600"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTab("signup")}
                className={`px-8 py-2 font-semibold transition-all duration-200 border-b-2 ${
                  activeTab === "signup"
                    ? "text-red-600 border-red-600"
                    : "text-gray-400 border-transparent hover:text-gray-600"
                }`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {activeTab === "signup" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200"
                    />
                  </div>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200"
                    />
                  </div>
                </div>
              )}

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200"
                />
              </div>

              {activeTab === "signup" && (
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200"
                  />
                </div>
              )}

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200"
                />
              </div>

              {activeTab === "signup" && (
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 flex items-center justify-center group"
              >
                {activeTab === "signin" ? "Sign In" : "Create Account"}
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              {activeTab === "signin" && (
                <div className="text-center">
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Forgot your password?
                  </a>
                </div>
              )}
            </form>

            <div className="mt-8 text-center text-sm text-gray-500">
              {activeTab === "signin" ? (
                <p>
                  Don't have an account?{" "}
                  <button
                    onClick={() => setActiveTab("signup")}
                    className="text-red-600 font-medium hover:text-red-700"
                  >
                    Sign up now
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button
                    onClick={() => setActiveTab("signin")}
                    className="text-red-600 font-medium hover:text-red-700"
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
