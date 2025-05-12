import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedDonation from "./AnimatedDonation";

const Hero = () => {
  const navigate = useNavigate();
  const [showDonation, setShowDonation] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content immediately
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleDonateClick = () => {
    setShowDonation(true);
  };

  const handleAdoptClick = () => {
    navigate('/adopt');
  };

  return (
    <>
      {showDonation && <AnimatedDonation />}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-white">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className={`text-4xl md:text-5xl font-bold leading-tight text-gray-800 transition-all duration-500 transform ${
            showContent 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <span className={`inline-block transition-all duration-500 delay-100 ${
              showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            } text-lime-500`}>Unleashing</span>{" "}
            <span className={`inline-block transition-all duration-500 delay-200 ${
              showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>Joy,</span>{" "}
            <span className={`inline-block transition-all duration-500 delay-300 ${
              showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>One</span>{" "}
            <br />
            <span className={`inline-block transition-all duration-500 delay-400 ${
              showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>Paw at a Time</span>
          </h1>
          <p className={`text-gray-600 mt-4 transition-all duration-500 delay-500 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Welcome to our pet adoption platform where we connect loving families with pets in need. 
            Every adoption creates a forever home and a new beginning. Join us in making a difference 
            in the lives of these wonderful animals.
          </p>
          <div className={`mt-6 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 transition-all duration-500 delay-600 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button 
              onClick={handleAdoptClick}
              className="bg-lime-300 hover:bg-lime-400 text-gray-900 font-semibold px-6 py-3 rounded-full transition"
            >
              Adopt a Pet
            </button>
            <button 
              onClick={handleDonateClick}
              className="border-2 border-lime-500 text-lime-600 font-semibold px-6 py-3 rounded-full hover:bg-lime-50 transition"
            >
              Donate
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className={`relative mt-10 md:mt-0 transition-all duration-500 delay-700 ${
          showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}>
          <img
            src="/images/hero-main.webp"
            alt="Hero"
            className="w-[340px] md:w-[420px] rounded-full mx-auto"
          />
          {/* Floating circles */}
          <img
            src="/images/pet1.webp"
            alt="Pet 1"
            className="absolute top-0 left-2 w-16 h-16 border-4 border-lime-200 rounded-full"
          />
          <img
            src="/images/pet2.webp"
            alt="Pet 2"
            className="absolute bottom-4 left-0 w-16 h-16 border-4 border-lime-200 rounded-full"
          />
          <img
            src="/images/pet3.webp"
            alt="Pet 3"
            className="absolute top-4 right-6 w-16 h-16 border-4 border-lime-200 rounded-full"
          />
          <img
            src="/images/pet4.webp"
            alt="Pet 4"
            className="absolute bottom-2 right-8 w-16 h-16 border-4 border-lime-200 rounded-full"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
