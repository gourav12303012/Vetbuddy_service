import React from "react";

export default function SavePetsSection() {
  return (
    <div className="px-6 py-16 bg-white flex flex-col items-center">
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center bg-lime-50 border border-lime-400 rounded-2xl p-8 max-w-6xl w-full gap-8">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img
            src="/images/hero-girl.webp"
            alt="Woman holding a dog"
            className="w-[250px] rounded-xl"
          />
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Help us save the lives of over <br />
            5,000 cats & dogs every year.
          </h2>
          <p className="text-gray-600 mb-6">
            Join our mission to provide loving homes for abandoned and stray animals. 
            Your support helps us provide medical care, shelter, and rehabilitation 
            for animals in need. Together, we can make a difference in their lives 
            and create a better future for our furry friends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-6 rounded-full">
              Adopt a Pet
            </button>
            <button className="border-2 border-lime-500 text-lime-600 hover:bg-lime-100 font-semibold py-2 px-6 rounded-full">
              Donate
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
