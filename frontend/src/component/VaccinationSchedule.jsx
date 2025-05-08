import React from 'react';
import Navbar from './Navbar';

const VaccinationSchedule = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vaccination <span className="text-lime-600">Schedule</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential vaccination information to protect your pet's health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Core Vaccinations */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-lime-500">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Core Vaccinations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Puppy/Kitten Schedule</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• 6-8 weeks: First round</li>
                  <li>• 10-12 weeks: Second round</li>
                  <li>• 14-16 weeks: Third round</li>
                  <li>• 1 year: Booster shots</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Adult Schedule</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Annual boosters</li>
                  <li>• Rabies vaccination</li>
                  <li>• Regular health check-ups</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Non-Core Vaccinations */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Non-Core Vaccinations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Lifestyle-Based</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Bordetella (kennel cough)</li>
                  <li>• Leptospirosis</li>
                  <li>• Lyme disease</li>
                  <li>• Canine influenza</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Region-Specific</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Based on local disease prevalence</li>
                  <li>• Travel requirements</li>
                  <li>• Boarding requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Vaccination Information */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Pre-Vaccination</h3>
              <p className="text-gray-600">What to expect before vaccination</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Post-Vaccination</h3>
              <p className="text-gray-600">Care and monitoring after vaccination</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Side Effects</h3>
              <p className="text-gray-600">Common reactions and when to seek help</p>
            </div>
          </div>
        </div>

        {/* Schedule Appointment */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Schedule Vaccination</h2>
          <p className="text-gray-600 mb-6">Book an appointment for your pet's vaccinations</p>
          <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-medium transition duration-200">
            Book Vaccination Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default VaccinationSchedule; 