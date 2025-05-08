import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Pages = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-lime-600">Pages</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover all the resources and information we have to offer for pet owners and animal lovers.
          </p>
        </div>

        {/* Main Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Adoption Pages */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Adoption</h2>
            <ul className="space-y-3">
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/adopt">Available Pets</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/adoption-process">Adoption Process</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/success-stories">Success Stories</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/adoption-faq">Adoption FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Services Pages */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Services</h2>
            <ul className="space-y-3">
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/veterinary-care">Veterinary Care</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/grooming">Grooming Services</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/training">Training Programs</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/boarding">Boarding Facilities</Link>
              </li>
            </ul>
          </div>

          {/* Support Pages */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Support</h2>
            <ul className="space-y-3">
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/donate">Donate</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/volunteer">Volunteer</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/sponsor">Sponsor a Pet</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/fundraising">Fundraising Events</Link>
              </li>
            </ul>
          </div>

          {/* Education Pages */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Education</h2>
            <ul className="space-y-3">
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/pet-care-guides">Pet Care Guides</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/training-tips">Training Tips</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/health-resources">Health Resources</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/webinars">Webinars & Workshops</Link>
              </li>
            </ul>
          </div>

          {/* Community Pages */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Community</h2>
            <ul className="space-y-3">
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/events">Events Calendar</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/community-forum">Community Forum</Link>
              </li>
            </ul>
          </div>

          {/* About Pages */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">About Us</h2>
            <ul className="space-y-3">
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/about">Our Story</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/team">Our Team</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="text-gray-700 hover:text-lime-500 transition-colors">
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Links</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/login"
              className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-medium transition duration-200"
            >
              Book Appointment
            </Link>
            <Link
              to="/emergency"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition duration-200"
            >
              Emergency Care
            </Link>
            <Link
              to="/resources"
              className="bg-white border-2 border-lime-500 text-lime-600 hover:bg-lime-50 px-6 py-3 rounded-full font-medium transition duration-200"
            >
              Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages; 