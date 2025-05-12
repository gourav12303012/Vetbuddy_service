import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Volunteer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } ,reset} = useForm();
  const [message,setMessage] =useState() 


  const onSubmit =async (data) => {
    console.log(data);
    try {
        const res = await axios.post("http://localhost:5000/user/Volunteer", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (res.data.success === true) {
          console.log(res.data);
          setMessage(res.data.message," ", res.data.fullname)
          reset()
        }
      } catch (error) {
        console.log("Server is not responding");
      }
  };



  return (



    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Become a <span className="text-lime-500">Volunteer</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our team of dedicated volunteers and make a difference in the lives of animals in need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Volunteer Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Volunteer?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-lime-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Make a direct impact on animal welfare</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-lime-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Gain valuable experience working with animals</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-lime-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Join a community of animal lovers</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-lime-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Flexible scheduling options</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Volunteer Opportunities</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-lime-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800">Animal Care</h3>
                  <p className="text-gray-600">Help with feeding, grooming, and basic care of our animals.</p>
                </div>
                <div className="border-l-4 border-lime-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800">Adoption Support</h3>
                  <p className="text-gray-600">Assist with adoption events and help potential adopters find their perfect match.</p>
                </div>
                <div className="border-l-4 border-lime-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800">Foster Care</h3>
                  <p className="text-gray-600">Provide temporary homes for animals in need of extra care.</p>
                </div>
                <div className="border-l-4 border-lime-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800">Event Coordination</h3>
                  <p className="text-gray-600">Help organize and run fundraising and awareness events.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {isFormSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-lime-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
                <p className="text-gray-600 mb-6">We've received your volunteer application. Our team will review it and get back to you soon.</p>
                <button
                  onClick={() => setIsFormSubmitted(false)}
                  className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <>
              <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    <div>
      <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
      <input
        type="text"
        id="fullname"
        {...register("fullname", { required: "Full name is required" })}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.fullname && (
        <p className="text-sm text-red-500 mt-1">{errors.fullname.message}</p>
      )}
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        id="email"
        {...register("email", { required: "Email is required" })}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.email && (
        <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
      )}
    </div>

    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
      <input
        type="text"
        id="phone"
        {...register("phone", { required: "Phone number is required" })}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.phone && (
        <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
      )}
    </div>

    <div>
      <label htmlFor="interest" className="block text-sm font-medium text-gray-700">Interest</label>
      <input
        type="text"
        id="interest"
        {...register("interest", { required: "Interest is required" })}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.interest && (
        <p className="text-sm text-red-500 mt-1">{errors.interest.message}</p>
      )}
    </div>

    <div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </div>
    <h3 className='text-red-600'>{message}</h3>
  </form>
</div>

              </> 
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer; 