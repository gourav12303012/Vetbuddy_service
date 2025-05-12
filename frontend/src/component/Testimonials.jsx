import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-20 py-20 gap-10 bg-white relative">
      {/* Left Side */}
      <div className="lg:w-1/2 space-y-6">
        <p className="uppercase tracking-widest text-sm text-gray-500">
          Read more from our
        </p>
        <h2 className="text-4xl font-bold text-gray-800">
          Happy <span className="text-lime-500">Testimonials</span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Discover the heartwarming stories from families who have found their perfect companions 
          through Vet Buddy. These testimonials reflect the joy and love that our pets bring 
          into people's lives, and the lasting impact of our adoption and care services.
        </p>

        {/* Testimonial Card */}
        <div className="border border-lime-300 rounded-xl p-6 space-y-4 max-w-lg bg-white shadow-md">
          <p className="text-gray-700 leading-relaxed">
            Our experience with Vet Buddy has been nothing short of
            extraordinary. We adopted Luna, a playful Labrador mix, and she has
            filled our home with boundless joy. The team's dedication to the
            well-being of the animals is truly heartwarming. We couldn't be
            happier with our furry addition, all thanks to Vet Buddy.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/testimonial-person.png"
              alt="testimonial"
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="font-semibold text-gray-800">The Thompson Family</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 mt-4">
          <button className="w-10 h-10 rounded-full border border-lime-300 flex items-center justify-center text-lime-500 hover:bg-lime-100 transition">
            <ChevronLeft size={20} />
          </button>
          <button className="w-10 h-10 rounded-full border border-lime-300 flex items-center justify-center text-lime-500 hover:bg-lime-100 transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Right Side - Images */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative">
        {["dog1.webp", "cat1.jpg", "dog2.webp", "cat2.webp"].map((img, i) => (
          <div key={i} className="rounded-2xl overflow-hidden">
            <img
              src={`/images/${img}`}
              alt={`pet-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Decorative gradient squares (optional) */}
        <div className="absolute top-0 left-10 w-10 h-10 bg-lime-100 rounded-md -z-10" />
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-lime-100 rounded-xl -z-10" />
      </div>
    </section>
  );
};

export default Testimonials;
