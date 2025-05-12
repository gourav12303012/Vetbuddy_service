import React from "react";

const services = [
  {
    title: "Expert Healthcare",
    description:
      "Our team of experienced veterinarians provides comprehensive medical care, from routine check-ups to specialized treatments. We ensure your pets receive the highest quality healthcare in a comfortable environment.",
  },
  {
    title: "Tailored Fun",
    description:
      "We offer customized play and exercise programs designed to keep your pets active and happy. From agility training to social playgroups, we create engaging activities that match your pet's personality and needs.",
  },
  {
    title: "Guided Adoption",
    description:
      "Our adoption specialists help you find the perfect pet match. We provide detailed profiles, meet-and-greet sessions, and post-adoption support to ensure successful, lasting relationships between pets and their new families.",
  },
  {
    title: "The Community",
    description:
      "Join our vibrant community of pet lovers. We host regular events, workshops, and support groups to help pet owners connect, share experiences, and learn from each other while building lasting friendships.",
  },
];

const ServicesSection = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-2">
        Our Comprehensive <span className="text-lime-500">Services</span>
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        Discover our range of specialized services designed to provide the best care and support for your pets. 
        From healthcare to community engagement, we're here to ensure your pets live happy, healthy lives.
      </p>
      <button className="mt-6 mb-10 px-6 py-2 bg-lime-300 hover:bg-lime-400 text-gray-800 font-semibold rounded-full transition">
        Learn More
      </button>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col gap-6">
          {services.slice(0, 2).map((service, index) => (
            <div
              key={index}
              className="border border-lime-300 rounded-2xl p-6 text-left"
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="relative mx-auto">
          <div className="bg-lime-100 w-[250px] h-[360px] rounded-[2rem] relative">
            <img
              src="/images/hero-girl.webp"
              alt="Girl with dog"
              className="absolute inset-0 object-cover w-full h-full rounded-[2rem]"
            />
            {/* <img
              src="/images/paw.png"
              alt="Paw Icon"
              className="absolute bottom-4 left-4 w-8 h-8"
            /> */}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {services.slice(2).map((service, index) => (
            <div
              key={index}
              className="border border-lime-300 rounded-2xl p-6 text-left"
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
