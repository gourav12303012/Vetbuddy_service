import React from 'react';
import Navbar from './Navbar';

const CommonIllnesses = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Common <span className="text-lime-600">Illnesses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Information about common pet illnesses and their symptoms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Common Conditions */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-lime-500">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Conditions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Digestive Issues</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Vomiting and diarrhea</li>
                  <li>• Food allergies</li>
                  <li>• Parasites</li>
                  <li>• Dietary indiscretion</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Skin Problems</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Allergies</li>
                  <li>• Fleas and ticks</li>
                  <li>• Hot spots</li>
                  <li>• Skin infections</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Respiratory Issues */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Respiratory Issues</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Common Problems</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Kennel cough</li>
                  <li>• Upper respiratory infections</li>
                  <li>• Asthma</li>
                  <li>• Allergic reactions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Symptoms</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Coughing</li>
                  <li>• Sneezing</li>
                  <li>• Nasal discharge</li>
                  <li>• Difficulty breathing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Prevention & Treatment */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Prevention & Treatment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Prevention</h3>
              <p className="text-gray-600">Regular check-ups and preventive care</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Treatment</h3>
              <p className="text-gray-600">Common treatment options and medications</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Emergency Signs</h3>
              <p className="text-gray-600">When to seek immediate veterinary care</p>
            </div>
          </div>
        </div>

        {/* Consultation */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">If your pet is showing any concerning symptoms, contact us immediately</p>
          <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-medium transition duration-200">
            Schedule Veterinary Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonIllnesses; 