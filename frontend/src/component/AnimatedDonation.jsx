import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AnimatedDonation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/donate');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/videos/donation-bg.mp4" type="video/mp4" />
      </video>

      {/* Animated Text */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
          Make a Difference
        </h1>
        <h2 className="text-6xl md:text-8xl font-extrabold text-lime-500 animate-bounce">
          Save Lives
        </h2>
        <p className="text-xl md:text-2xl text-white mt-6 animate-fade-in-delayed">
          Your donation helps us provide care for animals in need
        </p>
      </div>

      {/* Floating Hearts Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <div className="w-8 h-8 text-lime-500 animate-float-up">
          ❤️
        </div>
        <div className="w-8 h-8 text-lime-500 animate-float-up-delayed">
          ❤️
        </div>
        <div className="w-8 h-8 text-lime-500 animate-float-up">
          ❤️
        </div>
      </div>
    </div>
  );
};

export default AnimatedDonation; 