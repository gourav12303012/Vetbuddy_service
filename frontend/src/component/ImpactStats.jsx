import React, { useState, useEffect, useRef } from "react";

const ImpactStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when the section is 20% visible
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          setIsVisible(true);
        } else if (!entry.isIntersecting) {
          // Reset animation when scrolling back up
          setIsVisible(false);
        }
      },
      {
        threshold: [0.2, 0.5, 0.8], // Multiple thresholds for smoother detection
        rootMargin: "-50px 0px", // Start animation slightly before reaching the section
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-20 py-16 bg-white relative min-h-screen"
    >
      {/* Left Grid */}
      <div className="grid grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-0">
        {/* Dog Image */}
        <img
          src="/images/dog1.webp"
          alt="Dog"
          className={`w-36 md:w-40 h-36 md:h-40 rounded-2xl object-cover transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        />

        {/* Stat Box 1 */}
        <div className={`bg-lime-100 p-6 rounded-2xl flex flex-col justify-center items-center text-center transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}>
          <h3 className="text-3xl font-bold text-gray-800">95%</h3>
          <p className="text-gray-600 text-sm mt-2">Adoption Success Rate</p>
        </div>

        {/* Stat Box 2 */}
        <div className={`bg-lime-100 p-6 rounded-2xl flex flex-col justify-center items-center text-center transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <h3 className="text-3xl font-bold text-gray-800">98%</h3>
          <p className="text-gray-600 text-sm mt-2">
            Veterinary Care Satisfaction
          </p>
        </div>

        {/* Cat Image */}
        <img
          src="/images/cat1.jpg"
          alt="Cat"
          className={`w-36 md:w-40 h-36 md:h-40 rounded-2xl object-cover transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        />

        {/* Dog Image 2 */}
        <img
          src="/images/dog2.webp"
          alt="Dog 2"
          className={`w-36 md:w-40 h-36 md:h-40 rounded-2xl object-cover transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        />

        {/* Stat Box 3 */}
        <div className={`bg-lime-100 p-6 rounded-2xl flex flex-col justify-center items-center text-center transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
          <h3 className="text-3xl font-bold text-gray-800">500+</h3>
          <p className="text-gray-600 text-sm mt-2">Community Outreach</p>
        </div>
      </div>

      {/* Right Content */}
      <div className={`max-w-md text-center lg:text-left transition-all duration-700 delay-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}>
        <p className="text-sm text-gray-500 uppercase tracking-widest">
          Transforming Lives
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          <span className={`inline-block transition-all duration-700 delay-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          } text-lime-500`}>Our Impact</span>{" "}
          <span className={`inline-block transition-all duration-700 delay-900 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          } text-gray-800`}>by the Numbers</span>
        </h2>
        <p className={`text-gray-600 mt-4 transition-all duration-700 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Our numbers tell a powerful story of transformation and hope. Each percentage 
          represents countless lives changed through adoption, veterinary care, and 
          community outreach. Together, we're building a better future for pets and 
          their families, one success story at a time.
        </p>
        <button className={`mt-6 bg-lime-300 hover:bg-lime-400 text-gray-800 font-semibold px-6 py-3 rounded-full transition-all duration-700 delay-1100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Donate To Our Cause
        </button>
      </div>
    </section>
  );
};

export default ImpactStats;
