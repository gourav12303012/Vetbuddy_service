import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-lime-600">VetBuddy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to providing the best care and support for pets and their owners.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-lime-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To create a world where every pet receives the love, care, and attention they deserve.
              We strive to connect pet owners with the resources and support they need to provide
              the best possible life for their furry companions.
            </p>
          </div>
          <div className="bg-lime-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be the leading platform for pet care, adoption, and community support,
              making a positive impact on the lives of pets and their owners worldwide.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-lime-600 mb-3">Compassion</h3>
              <p className="text-gray-700">
                We treat every pet and owner with kindness, understanding, and respect.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-lime-600 mb-3">Excellence</h3>
              <p className="text-gray-700">
                We strive for the highest standards in pet care and service delivery.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-lime-600 mb-3">Community</h3>
              <p className="text-gray-700">
                We believe in the power of community to create positive change for pets.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-lime-100 flex items-center justify-center">
                <span className="text-4xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Dr. John Smith</h3>
              <p className="text-gray-600">Chief Veterinarian</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-lime-100 flex items-center justify-center">
                <span className="text-4xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Dr. Sarah Johnson</h3>
              <p className="text-gray-600">Animal Behaviorist</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-lime-100 flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Michael Brown</h3>
              <p className="text-gray-600">Operations Manager</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-lime-100 flex items-center justify-center">
                <span className="text-4xl">👩‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Emily Davis</h3>
              <p className="text-gray-600">Community Coordinator</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're looking to adopt, volunteer, or support our cause,
            there are many ways to get involved with VetBuddy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/adopt"
              className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-medium transition duration-200"
            >
              Adopt a Pet
            </Link>
            <Link
              to="/volunteer"
              className="bg-white border-2 border-lime-500 text-lime-600 hover:bg-lime-50 px-6 py-3 rounded-full font-medium transition duration-200"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 