import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AnimatedWelcome from "./AnimatedWelcome";
import AnimatedDonation from "./AnimatedDonation";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(false);
  const [showDonation, setShowDonation] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is on dashboard to determine authentication status
    const isOnDashboard = location.pathname.includes('/dashboard');
    setIsAuthenticated(isOnDashboard);
  }, [location.pathname]);

  const handleLoginClick = () => {
    setShowWelcome(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleDonateClick = () => {
    setShowDonation(true);
  };

  return (
    <>
      {showWelcome && <AnimatedWelcome />}
      {showDonation && <AnimatedDonation />}
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold text-lime-600 flex items-center gap-1">
          <Link to={"/"}>
            <span className="font-extrabold">Vet</span>
            <span className="text-gray-700">Buddy</span>
          </Link>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 text-gray-800 font-medium items-center">
          <li 
            className="group relative cursor-pointer hover:text-lime-500 transition-colors"
            onClick={() => navigate('/adopt')}
          >
            Adopt <ChevronDown className="inline w-4 h-4 ml-1" />
          </li>
          <li 
            className="group relative cursor-pointer hover:text-lime-500 transition-colors"
            onClick={() => navigate('/volunteer')}
          >
            Volunteer <ChevronDown className="inline w-4 h-4 ml-1" />
          </li>
          <li 
            className="group relative cursor-pointer hover:text-lime-500 transition-colors"
            onClick={() => navigate('/resources')}
          >
            Resources <ChevronDown className="inline w-4 h-4 ml-1" />
          </li>
          <li 
            className="group relative cursor-pointer hover:text-lime-500 transition-colors"
            onClick={() => navigate('/about')}
          >
            About <ChevronDown className="inline w-4 h-4 ml-1" />
          </li>
          <li 
            className="group relative cursor-pointer hover:text-lime-500 transition-colors"
            onClick={() => navigate('/pages')}
          >
            Pages <ChevronDown className="inline w-4 h-4 ml-1" />
          </li>
          <li className="cursor-pointer">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLoginClick}
                className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Login
              </button>
            )}
          </li>
        </ul>

        {/* Donate Button */}
        <button 
          onClick={handleDonateClick}
          className="bg-lime-300 hover:bg-lime-400 text-black px-5 py-2 rounded-full font-medium transition duration-200"
        >
          Donate Now
        </button>
      </nav>
    </>
  );
};

export default Navbar;
