'use client';

import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-6 py-24 pt-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-xl text-center text-gray-400 mb-12">
          We’d love to hear from you.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-900/50 border border-gray-700/50 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-900/50 border border-gray-700/50 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="name@lunaris.com"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
            Your Message
          </label>
          <textarea
            id="message"
            rows={6}
            className="bg-gray-900/50 border border-gray-700/50 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Your message..."
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-lg px-8 py-3 transition-colors"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactPage;
