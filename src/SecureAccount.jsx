import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import illustration1 from './assets/forgot.png';
import { motion } from 'framer-motion';
import logo from './assets/logo3.png';

function SecureAccount() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (newPassword === confirmPassword && newPassword !== '') {
      navigate('/dashboard'); // Redirect to SuccessPage if passwords match
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row min-h-screen"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left Section - Secure Account Form */}
      <div className="flex justify-center items-center flex-1">
        <motion.form
          className="flex flex-col space-y-6 items-center w-[90%] md:w-[50%] bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <motion.img
            src={logo}
            className='w-[348px] h-[184px]'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          />

          {/* Secure Account Heading */}
          <motion.h1
            className="text-main-500 font-bold text-3xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Secure Your Account
          </motion.h1>

          {/* Description Text */}
          <p className="text-center text-gray-600 px-6">
            Enter a new password for your account below. Make sure it’s secure and easy to remember.
          </p>

          {/* New Password Input */}
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          {/* Confirm Password Input */}
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* Reset Password Button */}
          <motion.button
            className="bg-main-500 w-full rounded-[100px] text-white py-3 px-4 transition-all duration-300 ease-in-out hover:bg-green-400 hover:text-black font-semibold hover:shadow-lg hover:shadow-green-400/50 active:scale-95"
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleResetPassword}
          >
            Reset Password
          </motion.button>
        </motion.form>
      </div>

      {/* Right Section with Illustration (Untouched) */}
      <motion.div
        className="hidden md:flex flex-1 flex-col justify-center items-center text-center"
        style={{ backgroundColor: "#1F5D6659" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="text-[#295258] font-bold text-[43px]">Forgot Password</span>
        <motion.img
          src={illustration1}
          className="w-[642px] h-[456px]"
          alt="Illustration"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default SecureAccount;