import React from "react"
import Navbar from "./Navbar"
import { useForm } from "react-hook-form"

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log("Contact Form Submitted:", data)
    reset()
  }

  return (
    <div>
      <Navbar />

      {/* Contact Section */}
     <div className="flex items-center justify-center min-h-screen bg-gray-800 px-4 pt-24">
  <div className="w-full max-w-lg bg-gray-900 shadow-2xl rounded-2xl p-8">
    <h2 className="text-2xl font-bold text-center mb-6 text-white">
      Contact Us
    </h2>


          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-pink-400"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-sm text-red-500">Name is required</span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-pink-400"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">Email is required</span>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-pink-400"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <span className="text-sm text-red-500">
                  Message is required
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
