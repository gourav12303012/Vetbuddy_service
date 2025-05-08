import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const TrainingBehavior = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Training & <span className="text-lime-600">Behavior</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guidance for training your pet and managing behavior
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Training Programs */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-lime-500">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Training Programs</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Basic Training</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>
                    <Link to="/resources/training/basic-commands" className="hover:text-lime-600">
                      • Basic Commands and Obedience
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/training/socialization" className="hover:text-lime-600">
                      • Socialization Training
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/training/behavior-problems" className="hover:text-lime-600">
                      • Problem Behavior Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/training/advanced-training" className="hover:text-lime-600">
                      • Advanced Training Techniques
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Training Methods</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Positive reinforcement</li>
                  <li>• Clicker training</li>
                  <li>• Target training</li>
                  <li>• Behavior modification</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Behavior Management */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Behavior Management</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Common Issues</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Excessive barking</li>
                  <li>• Leash pulling</li>
                  <li>• House training</li>
                  <li>• Aggression</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Solutions</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Behavior assessment</li>
                  <li>• Customized training plans</li>
                  <li>• Environmental management</li>
                  <li>• Ongoing support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Training Resources */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Training Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Group Classes</h3>
              <p className="text-gray-600">Structured training in a social environment</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Private Sessions</h3>
              <p className="text-gray-600">One-on-one training tailored to your needs</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Online Resources</h3>
              <p className="text-gray-600">Digital training guides and videos</p>
            </div>
          </div>
        </div>

        {/* Training Consultation */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get Started Today</h2>
          <p className="text-gray-600 mb-6">Schedule a consultation with our professional trainers</p>
          <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-medium transition duration-200">
            Book Training Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingBehavior; 