import React from 'react';
import Navbar from './Navbar';

const ExercisePlay = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercise & <span className="text-lime-600">Play</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keep your pet active, healthy, and happy with proper exercise and playtime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Exercise Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-lime-500">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Exercise Guidelines</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Daily Exercise</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Recommended duration based on breed and age</li>
                  <li>• Types of exercise for different pets</li>
                  <li>• Signs of proper exercise</li>
                  <li>• Weather considerations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Exercise Safety</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Proper warm-up and cool-down</li>
                  <li>• Hydration during exercise</li>
                  <li>• Recognizing fatigue</li>
                  <li>• Exercise restrictions for certain conditions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Play Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Play Activities</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Interactive Play</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Fetch and retrieval games</li>
                  <li>• Tug-of-war safety</li>
                  <li>• Hide and seek</li>
                  <li>• Puzzle toys and games</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Solo Play</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Safe chew toys</li>
                  <li>• Interactive feeders</li>
                  <li>• Climbing structures</li>
                  <li>• Scratching posts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Breed-Specific Activities */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Breed-Specific Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">High-Energy Breeds</h3>
              <p className="text-gray-600">Activities for breeds that need lots of exercise</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Moderate-Energy Breeds</h3>
              <p className="text-gray-600">Balanced exercise routines</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Low-Energy Breeds</h3>
              <p className="text-gray-600">Gentle exercise and play options</p>
            </div>
          </div>
        </div>

        {/* Training & Socialization */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Training & Socialization</h2>
          <p className="text-gray-600 mb-6">Learn how to incorporate training into playtime and exercise</p>
          <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-medium transition duration-200">
            Book Training Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExercisePlay; 