import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for confirmation modal

  const {
    register,
    handleSubmit,
    reset, // Reset function from useForm
    formState: { errors },
  } = useForm();

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const onSubmit = (data) => {
    if (!validateEmail(email)) {
      return;
    }

    const form = {
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/b0003ad2-1dee-437b-99c0-9f999f2bd9f6",
        form
      )
      .then((response) => {
        console.log(response);
        setIsSubmitted(true);
        setShowModal(true); // Show confirmation modal
        setTimeout(() => {
          setIsSubmitted(false);
          setShowModal(false); // Close confirmation modal after 3 seconds
          reset(); // Reset form fields
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        }, 3000);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex justify-center items-center"
    >
      <div className="flex flex-row">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 mr-14"
          src="https://www.instavyapar.com/assets/images/gifs/cont-anm.gif"
          alt="Contact GIF"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col text-gray-700 relative bg-opacity-25 bg-gray-200 backdrop-blur-lg shadow-lg w-96 rounded-xl bg-clip-border"
        >
          {isSubmitted ? (
            <div className="p-6 text-green-600 font-bold">
              Form submitted successfully!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-slate-200 p-6 rounded-xl"
            >
              <div className="flex flex-col gap-4 p-6">
                <div className="relative h-5 w-full min-w-[200px] mb-8">
                  <label className="font-bold mb-4">Name:</label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Name"
                    value={name || ""}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full mt-2 h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md ${
                      errors.name ? "border-red-500" : "border-blue-500"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </div>
                <div className="relative h-11 w-full min-w-[200px] mb-8">
                  <label className="font-bold">Email:</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    placeholder="Email"
                    value={email || ""}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full mt-2 h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md ${
                      errors.email ? "border-red-500" : "border-blue-500"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>
                <div className="relative h-11 w-full min-w-[200px] mb-8">
                  <label className="font-bold">Phone:</label>
                  <input
                    type="tel"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                    placeholder="Phone"
                    value={phone || ""}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full h-full mt-2 px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md ${
                      errors.phone ? "border-red-500" : "border-blue-500"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-red-500">{errors.phone.message}</span>
                  )}
                </div>
                <div className="relative h-24 w-full min-w-[200px] mb-8">
                  <label className="font-bold">Message:</label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    placeholder="Message"
                    value={message || ""}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full mt-2 h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md ${
                      errors.message ? "border-red-500" : "border-blue-500"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-red-500">
                      {errors.message.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6 pt-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 hover:bg-gradient-to-tr hover:from-gray-800 hover:to-gray-700 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                >
                  Submit
                </motion.button>
                <button
                  type="button"
                  className="block mt-4 w-full select-none rounded-lg bg-gray-200 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-800 shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 hover:bg-gray-300 active:opacity-[0.85]"
                  onClick={() => {
                    reset(); // Reset form fields
                    setName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                  }}
                >
                  Reset
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-xl font-bold mb-4">Thank you!</p>
            <p className="text-gray-700">
              Your form has been submitted successfully.
            </p>
            <button
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ContactForm;
