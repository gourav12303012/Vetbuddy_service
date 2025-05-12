// src/views/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-6 py-12">
        <div className="text-center max-w-2xl">
          {/* 404 Illustration */}
          <div className="mb-8">
            <svg
              className="w-64 h-64 mx-auto text-lime-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 8V12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16H12.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Error Message */}
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            404
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            The page you're looking for might have been removed, had its name changed,
            or is temporarily unavailable. Let's get you back on track!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-8 py-3 rounded-xl transition duration-200"
            >
              Go Home
            </Link>
            <Link
              to="/resources"
              className="bg-white border-2 border-lime-500 text-lime-600 hover:bg-lime-50 font-semibold px-8 py-3 rounded-xl transition duration-200"
            >
              Explore Resources
            </Link>
          </div>

          {/* Additional Help Text */}
          <p className="text-gray-500 mt-8">
            Need help? Contact our support team at{' '}
            <a href="mailto:support@vetbuddy.com" className="text-lime-500 hover:text-lime-600">
              support@vetbuddy.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
