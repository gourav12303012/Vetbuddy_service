import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white px-6 py-10 mt-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo + Contact */}
        <div>
          <h1 className="text-2xl font-bold text-lime-400">Vet Buddy</h1>
          <p className="text-sm mb-6">UNLEASHING JOY, ONE PAW AT A TIME</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-lime-400" />
              India
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-lime-400" />
              (+91) 8578876005
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-lime-400" />
              support@vetbuddy.com
            </li>
          </ul>
        </div>

        {/* Adopt */}
        <div>
          <h3 className="font-bold mb-2">Adopt</h3>
          <ul className="text-sm space-y-1">
            <li>Dogs & Puppies</li>
            <li>Cats & Kittens</li>
            <li>Adopt a Pet</li>
            <li>Volunteer</li>
            <li>Team</li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-bold mb-2">Navigation</h3>
          <ul className="text-sm space-y-1">
            <li>Job Positions</li>
            <li>Events</li>
            <li>About</li>
            <li>Contact</li>
            <li>Donation</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold mb-2">Resources</h3>
          <ul className="text-sm space-y-1">
            <li>Blog</li>
            <li>Changelog</li>
            <li>Licensing</li>
            <li>Style Guide</li>
            <li>Instructions</li>
          </ul>
        </div>

        {/* Social + Donate */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-bold mb-2">Follow Us</h3>
            <div className="flex gap-8 text-lime-400 text-lg">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-bold mb-2">Make a Monetary Donation</h3>
            <button className="bg-lime-400 text-green-900 font-semibold px-4 py-2 rounded-full hover:bg-lime-300 transition">
              Donate Today
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-green-700 mt-10 pt-6 text-xs text-center sm:text-left sm:flex justify-between text-white/70">
        <p>2025 © Vet Buddy. All Rights Reserved</p>
        <div className="flex justify-center sm:justify-end gap-4 mt-2 sm:mt-0">
          <span>Designed by Techiee Gaurav</span>
          <span>Powered by Techiee</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
