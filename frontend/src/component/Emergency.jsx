import React from 'react';
import Navbar from './Navbar';

const Emergency = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Emergency <span className="text-red-600">Care</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here for your pet's emergency needs 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Emergency Contact Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-500">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Emergency Contact</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">24/7 Emergency Hotline</h3>
                <p className="text-2xl font-bold text-red-600">(555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Address</h3>
                <p className="text-gray-600">123 Emergency Lane, Pet City, PC 12345</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Email</h3>
                <p className="text-gray-600">emergency@vetclinic.com</p>
              </div>
            </div>
          </div>

          {/* Emergency Information Card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What to Do in an Emergency</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-700">Stay calm and assess the situation</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-700">Call our emergency hotline immediately</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-700">Follow the instructions given by our staff</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-700">Bring your pet's medical records if possible</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency Services */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Emergency Services We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Critical Care</h3>
              <p className="text-gray-600">Immediate medical attention for life-threatening conditions</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Surgery</h3>
              <p className="text-gray-600">Emergency surgical procedures when needed</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Intensive Care</h3>
              <p className="text-gray-600">24/7 monitoring and specialized care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency; 