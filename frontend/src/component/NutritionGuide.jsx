import React from 'react';
import Navbar from './Navbar';

const NutritionGuide = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pet <span className="text-lime-600">Nutrition Guide</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential nutrition information for keeping your pet healthy and thriving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basic Nutrition Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-lime-500">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Basic Nutrition</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Essential Nutrients</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Proteins for muscle development</li>
                  <li>• Fats for energy and coat health</li>
                  <li>• Carbohydrates for energy</li>
                  <li>• Vitamins and minerals</li>
                  <li>• Water - the most important nutrient</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Feeding Guidelines</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Follow package instructions</li>
                  <li>• Consider age and activity level</li>
                  <li>• Monitor weight regularly</li>
                  <li>• Adjust portions as needed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Special Dietary Needs Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Special Dietary Needs</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Life Stage Nutrition</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Puppy/Kitten food for growth</li>
                  <li>• Adult maintenance food</li>
                  <li>• Senior pet formulas</li>
                  <li>• Special needs diets</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Health Conditions</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Weight management</li>
                  <li>• Allergies and sensitivities</li>
                  <li>• Medical conditions</li>
                  <li>• Prescription diets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Food Safety & Tips */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Food Safety & Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Safe Foods</h3>
              <p className="text-gray-600">Learn which human foods are safe for pets and which to avoid</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Storage</h3>
              <p className="text-gray-600">Proper food storage methods to maintain freshness and prevent spoilage</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Treats</h3>
              <p className="text-gray-600">Guidelines for healthy treats and moderation</p>
            </div>
          </div>
        </div>

        {/* Consultation Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Personalized Advice?</h2>
          <p className="text-gray-600 mb-6">Consult with our veterinary nutritionists for a customized diet plan</p>
          <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-medium transition duration-200">
            Schedule Nutrition Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default NutritionGuide; 