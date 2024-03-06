
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const ContactFormPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-opacity-25 bg-gray-200 backdrop-blur-lg shadow-lg rounded-md p-8 w-[60%] items-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold mb-4 items-center"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-5"
        >
          Please fill your information so we can get in touch with you.
        </motion.p>

        <ContactForm />
      </motion.div>
    </div>
  );
};

export default ContactFormPage;
