import React from 'react';
import Navbar from './Navbar';

const EmergencyCare = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Emergency <span className="text-red-600">Care</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Critical information for pet emergencies and urgent care situations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Emergency Signs */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-500">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Emergency Signs</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Critical Symptoms</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Difficulty breathing</li>
                  <li>• Severe bleeding or trauma</li>
                  <li>• Loss of consciousness</li>
                  <li>• Seizures</li>
                  <li>• Severe pain or distress</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Urgent Conditions</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Ingestion of toxic substances</li>
                  <li>• Heat stroke symptoms</li>
                  <li>• Severe vomiting/diarrhea</li>
                  <li>• Bloat or swollen abdomen</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Immediate Actions */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Immediate Actions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">First Aid Steps</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Stay calm and assess the situation</li>
                  <li>• Contact emergency vet services</li>
                  <li>• Apply basic first aid if safe</li>
                  <li>• Prepare for transport</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">What to Avoid</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Don't delay seeking help</li>
                  <li>• Avoid home remedies</li>
                  <li>• Don't force feed</li>
                  <li>• Don't give human medications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Services */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Emergency Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">24/7 Care</h3>
              <p className="text-gray-600">Round-the-clock emergency veterinary services</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Critical Care</h3>
              <p className="text-gray-600">Advanced life support and monitoring</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Emergency Surgery</h3>
              <p className="text-gray-600">Immediate surgical intervention when needed</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 text-center bg-red-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Emergency Contact</h2>
          <p className="text-xl font-bold text-red-600 mb-2">24/7 Emergency Hotline</p>
          <p className="text-3xl font-bold text-red-600 mb-6">(555) 123-4567</p>
          <p className="text-gray-600 mb-6">Our emergency team is available 24/7 for immediate assistance</p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium transition duration-200 text-lg">
            Call Emergency Line
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCare; 