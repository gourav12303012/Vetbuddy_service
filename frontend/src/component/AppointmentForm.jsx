import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm();

  const [message,setMessage] = useState()
  const onSubmit = async(data) => {
   try {
    const res = await axios.post("http://localhost:5000/user/form",data,{
      headers:{
        "Content-Type" : "application/json"
      }
    })
    if(res.data.message){
      setMessage(res.data.message)
    }
    reset()
   } catch (error) {
    console.log("server is not responding",error)
   }
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Share Your <span className="text-lime-600">Feedback</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help us improve our services by sharing your experience
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md border border-lime-200"
          >
            <div className="mb-3">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Service Rating *
              </label>
              <select
                {...register("rating", { required: "Please select a rating" })}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition bg-white"
              >
                <option value="">Select Rating...</option>
                <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                <option value="4">⭐⭐⭐⭐ Very Good</option>
                <option value="3">⭐⭐⭐ Good</option>
                <option value="2">⭐⭐ Fair</option>
                <option value="1">⭐ Poor</option>
              </select>
              {errors.rating && (
                <p className="text-sm text-red-500 mt-1">{errors.rating.message}</p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Service Type *</label>
              <select
                {...register("serviceType", { required: "Please select a service" })}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition bg-white"
              >
                <option value="">Select Service...</option>
                <option value="vet">Veterinary Consultation</option>
                <option value="adoption">Pet Adoption</option>
                <option value="grooming">Pet Grooming</option>
                <option value="other">Other</option>
              </select>
              {errors.serviceType && (
                <p className="text-sm text-red-500 mt-1">{errors.serviceType.message}</p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Feedback *</label>
              <textarea
                rows="3"
                placeholder="Please share your experience and suggestions..."
                {...register("feedback", { required: "Feedback is required" })}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
              />
              {errors.feedback && (
                <p className="text-sm text-red-500 mt-1">{errors.feedback.message}</p>
              )}
            </div>

            <div className="flex items-start mb-4">
              <input
                type="checkbox"
                {...register("accepted")}
                className="mr-2 mt-1 rounded focus:ring-lime-200 focus:ring-2"
              />
              <label className="text-sm text-gray-600">
                I accept the Website{" "}
                <a href="#" className="text-lime-600 hover:text-lime-700 underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2.5 rounded-xl transition duration-200"
            >
              Submit Feedback
            </button>
<h3 className="text-green-500">
{message}
</h3>

          </form>

          {/* Right Image */}
          <div className="hidden lg:block relative">
            <div className="bg-lime-100 rounded-[2rem] w-[350px] h-[450px] absolute top-0 right-0 -z-10"></div>
            <img
              src="/images/hero-girl.webp"
              alt="Feedback Illustration"
              className="rounded-[2rem] w-[350px] h-auto z-10 relative"
            />
            <div className="absolute top-8 left-8 bg-lime-500 p-2.5 rounded-full">
              <svg
                className="text-white w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
