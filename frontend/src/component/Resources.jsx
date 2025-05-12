import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Resources = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Pet Resources
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pet Care Section */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Pet Care</h2>
            <ul className="space-y-3">
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/pet-care/basic-care">Basic Pet Care</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/pet-care/nutrition">Nutrition Guide</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/pet-care/grooming">Grooming Tips</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/pet-care/exercise">Exercise & Play</Link>
              </li>
            </ul>
          </div>

          {/* Health & Wellness Section */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Health & Wellness</h2>
            <ul className="space-y-3">
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/health/vaccinations">Vaccination Schedule</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/health/common-illnesses">Common Illnesses</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/health/emergency-care">Emergency Care</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/health/mental-health">Pet Mental Health</Link>
              </li>
            </ul>
          </div>

          {/* Training & Behavior Section */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Training & Behavior</h2>
            <ul className="space-y-3">
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/training/basic-commands">Basic Commands</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/training/behavior-problems">Behavior Problems</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/training/socialization">Socialization Tips</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/training/advanced-training">Advanced Training</Link>
              </li>
            </ul>
          </div>

          {/* Adoption & Rescue Section */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Adoption & Rescue</h2>
            <ul className="space-y-3">
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/adoption/process">Adoption Process</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/adoption/preparation">Home Preparation</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/adoption/first-days">First Days Guide</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/adoption/success-stories">Success Stories</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Financial Section */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Legal & Financial</h2>
            <ul className="space-y-3">
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/legal/pet-laws">Pet Laws</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/legal/insurance">Pet Insurance</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/legal/estate-planning">Estate Planning</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/legal/travel">Travel Regulations</Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Community</h2>
            <ul className="space-y-3">
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/community/events">Local Events</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/community/support-groups">Support Groups</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/community/volunteer">Volunteer Opportunities</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/resources/community/blog">Blog & Articles</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources; 