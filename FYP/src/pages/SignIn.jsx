import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SignIn() {
    const [activeTab, setActiveTab] = useState("signin");

    return (
        <>
            <Header />
            <div className="max-w-md mx-auto mt-8 bg-gray-200 rounded-lg p-8 mb-8">
                {/* Tabs */}
                <div className="flex justify-between">
                    <button
                        onClick={() => setActiveTab("signin")}
                        className={`w-1/2 py-2 font-bold ${activeTab === "signin" ? "bg-red-600 text-white" : "bg-gray-300 text-gray-600"} rounded-t-lg`}
                    >
                        SIGN IN
                    </button>
                    <button
                        onClick={() => setActiveTab("signup")}
                        className={`w-1/2 py-2 font-bold ${activeTab === "signup" ? "bg-red-600 text-white" : "bg-gray-300 text-gray-600"} rounded-t-lg`}
                    >
                        SIGN UP
                    </button>
                </div>

                {/* Sign In Form */}
                {activeTab === "signin" && (
                    <div className="bg-gray-100 p-6 rounded-b-lg space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-red-600"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-red-600"
                        />
                        <button className="w-full py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-200">
                            SIGN IN
                        </button>

                        <div className="text-center text-red-600 text-sm">
                            <a href="#" className="hover:underline">Forgot Password?</a>
                        </div>

                        <div className="text-center text-gray-600 mt-4">
                            OR Login With
                        </div>

                        {/* Social Login Buttons */}
                        <div className="flex justify-center space-x-4 mt-4">
                            <button className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200">
                                <span className="font-bold">G</span> {/* For Google Logo */}
                                <span>Gmail</span>
                            </button>
                            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                                <span className="font-bold">f</span> {/* For Facebook Logo */}
                                <span>Facebook</span>
                            </button>
                        </div>
                    </div>
                )}

                {/* Sign Up Form */}
                {activeTab === "signup" && (
                    <div className="bg-gray-100 p-6 rounded-b-lg space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name*"
                                className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-red-600"
                            />
                            <input
                                type="text"
                                placeholder="Last Name*"
                                className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-red-600"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="email"
                                placeholder="Email*"
                                className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-red-600"
                            />
                            <input
                                type="text"
                                placeholder="Mobile*"
                                className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-red-600"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="password"
                                placeholder="Password (min 4 characters)"
                                className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-red-600"
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password*"
                                className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-red-600"
                            />
                        </div>
                        <button className="w-full py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-200">
                            Sign Up
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default SignIn;
