import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "10 Heartwarming Adoption Stories That Will Melt Your Heart",
    category: "Cats & Kittens",
    image: "/images/adoption-stories.jpg",
    author: "Emily Johnson",
    date: "January 17, 2024",
    avatar: "/images/emily-johnson.jpg",
  },
  {
    title: "How to Help Shelter Animals Without Adopting: 5 Simple Ways",
    category: "Volunteering",
    image: "/images/help-shelter-animals.jpg",
    author: "David Wilson",
    date: "October 18, 2023",
    avatar: "/images/david-wilson.jpg",
  },
  {
    title: "Meet Our Pets of the Month: Adorable Animals Ready for Adoption",
    category: "Pet Care Tips",
    image: "/images/pets-of-the-month.jpg",
    author: "Emily Johnson",
    date: "December 5, 2023",
    avatar: "/images/emily-johnson.jpg",
  },
  {
    title: "The Importance of Spaying and Neutering: A Guide for Pet Owners",
    category: "Pet Adoption",
    image: "/images/spay-neuter-guide.jpg",
    author: "David Wilson",
    date: "November 22, 2023",
    avatar: "/images/david-wilson.jpg",
  },
];

export default function BlogSection() {
  return (
    <div className="py-16 px-4 md:px-20 bg-white text-center">
      <h4 className="uppercase tracking-wide text-gray-500 mb-2">
        Vet Buddy Resources
      </h4>
      <h2 className="text-4xl font-bold mb-4">
        <span className="text-lime-600">Explore</span> Our Blog for Tails of Joy
      </h2>
      <p className="max-w-xl mx-auto text-gray-600 mb-6">
        Dive into our collection of heartwarming stories, expert pet care advice, and adoption success stories. 
        Our blog is your go-to resource for everything from pet health tips to inspiring adoption journeys, 
        helping you create the best life for your furry companions.
      </p>
      <Button className="bg-lime-400 hover:bg-lime-500 text-white mb-12">
        Read Our Blog Posts
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="border border-lime-200 rounded-3xl overflow-hidden flex flex-col md:flex-row gap-4 items-start p-4"
          >
            <div className="w-full md:w-1/3">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
            <div className="w-full md:w-2/3 text-left">
              <span className="inline-block bg-lime-100 text-lime-600 uppercase text-xs font-semibold px-2 py-1 rounded-full mb-2">
                {post.category}
              </span>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-black">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <Image
                  src={post.avatar}
                  alt={post.author}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="text-sm">
                  <span className="font-semibold text-lime-600 block">
                    {post.author}
                  </span>
                  <span className="text-gray-500 text-xs">{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
