import React from 'react';
import Navbar from './Navbar';

const PetMentalHealth = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pet <span className="text-lime-600">Mental Health</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding and supporting your pet's emotional well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Behavioral Health */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-lime-500">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Behavioral Health</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Common Issues</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Separation anxiety</li>
                  <li>• Aggression</li>
                  <li>• Fear and phobias</li>
                  <li>• Compulsive behaviors</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Signs of Stress</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Changes in appetite</li>
                  <li>• Excessive grooming</li>
                  <li>• Hiding or withdrawal</li>
                  <li>• Destructive behavior</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Enrichment & Stimulation */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Enrichment & Stimulation</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Mental Exercise</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Puzzle toys</li>
                  <li>• Training sessions</li>
                  <li>• Interactive games</li>
                  <li>• Scent work</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Environmental Enrichment</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Safe spaces</li>
                  <li>• Climbing structures</li>
                  <li>• Window perches</li>
                  <li>• Rotating toys</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Support & Resources */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Support & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Behavioral Training</h3>
              <p className="text-gray-600">Professional training and behavior modification</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Environmental Changes</h3>
              <p className="text-gray-600">Creating a stress-free environment</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Professional Help</h3>
              <p className="text-gray-600">When to consult a veterinary behaviorist</p>
            </div>
          </div>
        </div>

        {/* Consultation */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">Our behavioral specialists are here to help with your pet's mental health</p>
          <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-medium transition duration-200">
            Schedule Behavioral Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetMentalHealth; 