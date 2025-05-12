import React from 'react';
import Navbar from './Navbar';

const GroomingTips = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pet <span className="text-lime-600">Grooming Tips</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential grooming information to keep your pet looking and feeling their best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basic Grooming Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-lime-500">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Basic Grooming</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Brushing</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Regular brushing frequency based on coat type</li>
                  <li>• Proper brushing techniques</li>
                  <li>• Choosing the right brush for your pet</li>
                  <li>• Benefits of regular brushing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Bathing</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• How often to bathe your pet</li>
                  <li>• Choosing the right shampoo</li>
                  <li>• Bathing techniques</li>
                  <li>• Drying methods</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Special Care Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Special Care</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Nail Care</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• How to trim nails safely</li>
                  <li>• Frequency of nail trimming</li>
                  <li>• Dealing with dark nails</li>
                  <li>• What to do if you cut too short</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Ear & Eye Care</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Cleaning ears properly</li>
                  <li>• Eye cleaning techniques</li>
                  <li>• Signs of infection</li>
                  <li>• When to seek veterinary help</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Breed-Specific Grooming */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Breed-Specific Grooming</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Long-Haired Breeds</h3>
              <p className="text-gray-600">Special care for breeds with long, flowing coats</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Short-Haired Breeds</h3>
              <p className="text-gray-600">Grooming tips for breeds with short coats</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Curly-Coated Breeds</h3>
              <p className="text-gray-600">Maintenance for breeds with curly or wiry coats</p>
            </div>
          </div>
        </div>

        {/* Professional Grooming */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Grooming Services</h2>
          <p className="text-gray-600 mb-6">Our professional groomers are here to help keep your pet looking their best</p>
          <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-medium transition duration-200">
            Book Grooming Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroomingTips; 