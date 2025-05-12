import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function Login() {
  const navigate = useNavigate()
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form data:", data);

    try {
      const res = await axios.post("http://localhost:5000/user/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res?.data?.message) {
        console.log("Response:", res.data);
        setMessage(res.data.message);
        const id = res.data.user._id
        console.log(id)
        setMessageType("success");
        navigate(`/dashboard/${id}`);
      } else {
        setMessage("Unexpected response from server.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        const errMsg =
          error.response.data?.message || "Invalid credentials or bad request.";
        setMessage(errMsg);
      } else if (error.request) {
        setMessage("No response from server.");
      } else {
        setMessage("An unexpected error occurred.");
      }

      setMessageType("error");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">
              Welcome <span className="text-lime-500">Back</span>
            </h2>
            <p className="text-gray-600 mt-2">Sign in to continue your journey with us</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Role
                </label>
                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Client"
                      {...register("role", { required: "Please select a role" })}
                      className="w-4 h-4 text-lime-500 border-gray-300 focus:ring-lime-500"
                    />
                    <span className="text-gray-700">Client</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Doctor"
                      {...register("role", { required: "Please select a role" })}
                      className="w-4 h-4 text-lime-500 border-gray-300 focus:ring-lime-500"
                    />
                    <span className="text-gray-700">Doctor</span>
                  </label>
                </div>
                {errors.role && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.role.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 rounded-xl transition duration-200"
              >
                Sign In
              </button>

              {message && (
                <p
                  className={`text-center text-sm mt-3 ${
                    messageType === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}

              <div className="text-center mt-4 space-y-3">
                <Link to="/forgot-password" className="text-lime-500 hover:text-lime-600 font-semibold block">
                  Forgot Password?
                </Link>
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-lime-500 hover:text-lime-600 font-semibold">
                    Register now
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
