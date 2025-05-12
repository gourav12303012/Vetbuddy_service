import React from "react";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

// Sample Team Members Data
const teamMembers = [
  {
    name: "David Wilson",
    role: "Volunteer Coordinator",
    image: "/images/david-wilson.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Animal Caregiver",
    image: "/images/emily-johnson.jpg",
  },
  {
    name: "Mark Davis",
    role: "Veterinarian",
    image: "/images/mark-davis.jpg",
  },
];

// Card Component
const Card = ({ children, className }) => (
  <div
    className={`bg-white shadow-lg rounded-lg overflow-hidden relative ${className}`}
  >
    {children}
  </div>
);

// Card Content Component
const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

// Button Component
const Button = ({ children, className, variant }) => {
  const baseStyles =
    "px-6 py-2 rounded-full font-semibold transition duration-300 ease-in-out";
  const variantStyles =
    variant === "outline"
      ? "border-2 border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white"
      : "bg-lime-400 text-white hover:bg-lime-500";

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </button>
  );
};

export default function TeamSection() {
  return (
    <div className="py-16 px-4 md:px-20 bg-white text-center">
      <h4 className="uppercase tracking-wide text-gray-500 mb-2">
        Behind Vet Buddy
      </h4>
      <h2 className="text-4xl font-bold mb-4">
        Our Passionate <span className="text-lime-600">Team</span>
      </h2>
      <p className="max-w-xl mx-auto text-gray-600 mb-6">
        Meet the dedicated individuals who make Vet Buddy a special place for pets and their families. 
        Our team combines professional expertise with genuine love for animals, working tirelessly to 
        ensure every pet receives the care and attention they deserve.
      </p>
      <Button className="mb-12">About Our Team</Button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <img
              src={member.image}
              alt={member.name}
              className="object-cover w-full h-96"
            />
            <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
              <Plus className="w-4 h-4 text-lime-600" />
            </div>
            <CardContent className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 px-4 py-2 text-left">
              <h3 className="text-lg font-bold text-black">{member.name}</h3>
              <p className="text-xs uppercase text-gray-500 tracking-wide">
                {member.role}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <Button variant="outline" className="rounded-full p-2">
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <Button variant="outline" className="rounded-full p-2">
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
