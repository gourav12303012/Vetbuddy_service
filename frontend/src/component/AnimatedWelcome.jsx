import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AnimatedWelcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full p-0 object-cover opacity-30"
      >
        <source src="/videos/welcome-bg.mp4" type="video/mp4" />
      </video>

      {/* Animated Text */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
          Welcome to
        </h1>
        <h2 className="text-7xl md:text-9xl font-extrabold text-lime-500 animate-bounce">
          Vet Buddy
        </h2>
      </div>

      {/* Loading Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-16 h-16 border-4 border-lime-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default AnimatedWelcome; 