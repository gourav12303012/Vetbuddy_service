import React from "react";
import { PawPrint } from "lucide-react";

const services = [
  {
    title: "Compassionate Veterinary Care",
    description:
      "Our experienced veterinarians provide comprehensive medical care, from routine check-ups to specialized treatments, ensuring your pet's health and well-being at every stage of life.",
  },
  {
    title: "Tailored Enrichment Programs",
    description:
      "We design personalized activities and training programs that stimulate your pet's mind and body, promoting their physical health and emotional well-being through engaging exercises and social interactions.",
  },
  {
    title: "Personalized Adoption Support",
    description:
      "Our dedicated team guides you through every step of the adoption process, offering expert advice and ongoing support to ensure a perfect match between pets and their new families.",
  },
];

const ComprehensiveCare = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-20 bg-white">
      {/* Left Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <img
          src="/images/woman-dog.webp"
          alt="woman hugging dog"
          className="rounded-[4rem] max-w-sm md:max-w-md"
        />
        {/* Decorative green squares */}
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-lime-100 rounded-xl" />
        <div className="absolute bottom-6 right-6 w-16 h-16 bg-lime-100 rounded-xl flex items-center justify-center">
          <PawPrint className="text-lime-600 w-6 h-6" />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 text-left">
        <p className="uppercase text-gray-500 tracking-wider text-sm mb-2">
          Comprehensive Care
        </p>
        <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
          <span className="text-lime-600">Tailored</span> for Every Furry Friend
        </h2>
        <p className="text-gray-600 mb-8">
          At Vet Buddy, we understand that every pet is unique. Our comprehensive care approach combines 
          expert veterinary services, personalized enrichment programs, and dedicated adoption support to 
          ensure your pet receives the attention and care they deserve throughout their journey with us.
        </p>

        {/* Services List */}
        <div className="space-y-6 mb-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-lime-100 p-2 rounded-lg">
                <PawPrint className="text-lime-500 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-4 px-6 py-2 bg-lime-400 hover:bg-lime-500 text-white rounded-full font-medium transition">
          Adopt a Pet
        </button>
      </div>
    </section>
  );
};

export default ComprehensiveCare;
