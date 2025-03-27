import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaUser, FaBuilding, FaPhone } from "react-icons/fa";
import logo from './assets/logo3.png';

function EmployerCompletion() {
  const navigate = useNavigate();

  const handleCompletion = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    navigate('/dashboard'); // Navigate to Dashboard or next step
  };

  return (
    <motion.div 
      className="flex flex-col items-center min-h-screen p-6"
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Form Container */}
      <motion.form 
        className="flex flex-col space-y-6 items-center w-full max-w-md bg-white p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        onSubmit={handleCompletion}
      >
        <motion.img 
          src={logo} 
          className='w-24 h-24' 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3 }}
          alt="Logo"
        />

        <motion.span 
          className="text-main-500 font-bold text-2xl"
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4 }}
        >
          Complete Your Profile
        </motion.span>

        {/* Name Input */}
        <div className="relative w-full">
          <label htmlFor="name" className="absolute left-10 top-3 text-gray-500 text-sm transition-all">Full Name</label>
          <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm">
            <FaUser className="w-6 h-6 absolute left-3 text-gray-500" />
            <input 
              type="text" 
              id="name" 
              placeholder=" " 
              className="w-full px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300" 
            />
          </div>
        </div>

        {/* Company Name Input */}
        <div className="relative w-full">
          <label htmlFor="company" className="absolute left-10 top-3 text-gray-500 text-sm transition-all">Company Name</label>
          <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm">
            <FaBuilding className="w-6 h-6 absolute left-3 text-gray-500" />
            <input 
              type="text" 
              id="company" 
              placeholder=" " 
              className="w-full px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300" 
            />
          </div>
        </div>

        {/* Phone Number Input */}
        <div className="relative w-full">
          <label htmlFor="phone" className="absolute left-10 top-3 text-gray-500 text-sm transition-all">Phone Number</label>
          <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm">
            <FaPhone className="w-6 h-6 absolute left-3 text-gray-500" />
            <input 
              type="tel" 
              id="phone" 
              placeholder=" " 
              className="w-full px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300" 
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button  
          className="bg-main-500 w-full rounded-full text-white py-3 px-4 transition-all hover:bg-green-400 hover:text-black font-semibold hover:shadow-lg active:scale-95"
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Complete Profile
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default EmployerCompletion;
