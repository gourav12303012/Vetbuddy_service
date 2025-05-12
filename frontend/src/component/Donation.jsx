import React, { useState } from 'react';
import Navbar from './Navbar';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Donation = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [message , setMessage] = useState()
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/user/donation", data, {
        headers: { "Content-Type": "application/json" },
      });
      
      if (res.data.success) {
        setShowSuccess(true);
        reset();
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      }
         if (res.data.success === true) {
          console.log(res.data);
          setMessage(res.data.message," ", res.data.fullname)
        }
                  reset()

    } catch (error) {
      console.error("Donation error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Support <span className="text-lime-500">VetBuddy</span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Your contribution helps us care for more pets in need. Every donation makes a difference in the lives of our furry friends.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donation Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Make a Donation</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    {...register("fullname", { required: "Full name is required" })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                    placeholder="Enter your full name"
                  />
                  {errors.fullname && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    {...register("phone", { 
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit phone number"
                      }
                    })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Donation Amount (₹)</label>
                  <input
                    type="number"
                    {...register("amount", { 
                      required: "Amount is required",
                      min: {
                        value: 100,
                        message: "Minimum donation amount is ₹100"
                      }
                    })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                    placeholder="Enter amount"
                  />
                  {errors.amount && (
                    <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                <textarea
                  {...register("message")}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                  placeholder="Share why you're donating (optional)"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 rounded-xl transition duration-200"
              >
                Donate Now
              </button>
              <h3>{message}</h3>
            </form>
          </div>

          {/* Payment Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Payment Options</h3>
              <p className="text-gray-600 mb-4">Choose your preferred payment method</p>
              
              <div className="bg-gray-100 p-4 rounded-xl flex justify-center mb-6">
                <img 
                  src="/images/upi-qr.png" 
                  alt="UPI QR Code" 
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">UPI Details</h4>
                <p className="text-gray-600">UPI ID: vetbuddy@upi</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Bank Details</h4>
                <p className="text-gray-600">Account Name: VetBuddy Foundation</p>
                <p className="text-gray-600">Account Number: XXXX XXXX XXXX</p>
                <p className="text-gray-600">IFSC Code: XXXX0000000</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                All donations are tax-deductible under section 80G of the Income Tax Act
              </p>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg">
            Thank you for your donation! We'll send you a confirmation email shortly.
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation; 