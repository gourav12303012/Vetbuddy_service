import React from 'react';
import Navbar from './Navbar';

const BasicPetCare = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Basic <span className="text-lime-600">Pet Care</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential information for keeping your pet healthy and happy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Daily Care Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-lime-500">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Daily Care</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Feeding</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Provide fresh water at all times</li>
                  <li>• Feed appropriate portions based on size and age</li>
                  <li>• Stick to a regular feeding schedule</li>
                  <li>• Choose high-quality pet food</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Exercise</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Daily walks for dogs</li>
                  <li>• Playtime and mental stimulation</li>
                  <li>• Regular exercise based on breed needs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Health & Hygiene Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Health & Hygiene</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Grooming</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Regular brushing</li>
                  <li>• Bathing as needed</li>
                  <li>• Nail trimming</li>
                  <li>• Dental care</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Veterinary Care</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Regular check-ups</li>
                  <li>• Vaccinations</li>
                  <li>• Parasite prevention</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Care Tips */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Additional Care Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Training</h3>
              <p className="text-gray-600">Basic obedience training and socialization are essential for a well-behaved pet</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Safety</h3>
              <p className="text-gray-600">Pet-proof your home and provide a safe environment</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Behavior</h3>
              <p className="text-gray-600">Understand and address common behavioral issues</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicPetCare; 