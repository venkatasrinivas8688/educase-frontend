import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to PopX</h1>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <div className="flex flex-col gap-4">
          <Link
            to="/register"
            className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
          >
            <button>Create Account</button>
          </Link>
          <Link
            to="/login"
            className="bg-sky-400 text-white py-2 px-4 rounded-xl hover:bg-sky-500 transition"
          >
            <button>Already Registered? Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
