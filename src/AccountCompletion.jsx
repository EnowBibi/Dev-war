import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import illustration1 from './assets/loginIllustration.png';
import logo from './assets/logo3.png';

function AccountCompletion() {
  const navigate = useNavigate();  // ✅ Initialize the navigate function

  return ( 
    <motion.div 
      className="flex flex-col md:flex-row min-h-screen"
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left Section - Account Type Selection */}
      <div className="flex justify-center items-center flex-1">
        <div className="flex flex-col space-y-6 items-center w-[90%] md:w-[50%] bg-white p-8 rounded-lg">
          
          <motion.img 
            src={logo} 
            className='w-[150px] h-[150px]' 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
          />

          <motion.span 
            className="text-main-500 font-bold text-2xl"
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4 }}
          >
            Getting Started
          </motion.span>

          {/* Buttons for Role Selection */}
          <div className='flex flex-col md:flex-row gap-[30px] w-full'>
            <motion.button  
              className="bg-main-500 w-full rounded text-white py-3 px-4 transition-all duration-300 ease-in-out hover:bg-green-400 hover:text-black font-semibold hover:shadow-lg hover:shadow-green-400/50 active:scale-95"
              onClick={() => navigate('/freelancer-completion')} // ✅ Navigate to Freelancer Completion
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Freelancer
            </motion.button>

            <motion.button  
              className="bg-white w-full rounded text-main-500 py-3 px-4 border border-main-500 transition-all duration-300 ease-in-out hover:bg-green-400 hover:text-black font-semibold hover:shadow-lg hover:shadow-green-400/50 active:scale-95"
              onClick={() => navigate('/employer-completion')} // ✅ Navigate to Employer Completion
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Employer
            </motion.button>
          </div>
        </div>
      </div>

      {/* Right Section with Illustration (Hidden on Mobile) */}
      <motion.div 
        className="hidden md:flex flex-1 flex-col bg-gradient-to-r from-main-500 via-orange-500 to-main-500 animate-gradient-x justify-center items-center text-center"
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="text-white font-bold text-[43px]">Connecting Talent, Delivering Results.</span>
        <motion.img 
          src={illustration1} 
          className="w-[500px] h-[500px]" 
          alt="Illustration"
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default AccountCompletion;
