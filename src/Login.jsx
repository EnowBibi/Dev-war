import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import illustration1 from './assets/loginillustration2.png';
import logo from './assets/logo3.png';
import personIcon from './assets/person-icon.png';
import passwordEye from './assets/password-eye.png';
import passwordEyeSlash from './assets/password-eye.png';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();  // ✅ Initialize the navigate function

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    navigate('/dashboard'); // ✅ Navigate to Dashboard or the next screen
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row min-h-screen"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left Section - Login Form */}
      <div className="flex justify-center items-center flex-1">
        <motion.form
          className="flex flex-col space-y-6 items-center w-[90%] md:w-[50%] bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleLogin} // ✅ Attach function to form submission
        >
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
            Login to Your Account
          </motion.span>

          {/* Email Input */}
          <div className="relative w-full">
            <label htmlFor="email" className="absolute left-10 top-3 text-gray-500 text-sm transition-all">Email</label>
            <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all duration-300">
              <img
                src={personIcon}
                className="w-6 h-6 absolute left-3"
                alt="Email Icon"
              />
              <input
                type="email"
                id="email"
                placeholder=" "
                className="w-full px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative w-full">
            <label htmlFor="password" className="absolute left-10 top-3 text-gray-500 text-sm transition-all">Password</label>
            <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all duration-300">
              <img
                src={showPassword ? passwordEyeSlash : passwordEye}
                className="w-6 h-6 absolute left-3 cursor-pointer hover:scale-110 transition-all duration-200"
                alt="Toggle Password Visibility"
                onClick={() => setShowPassword(!showPassword)}
              />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder=" "
                className="w-full px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
              />
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input type="checkbox" id="rememberMe" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-all" />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900 transition-all">Remember me</label>
          </div>

          {/* Animated Login Button */}
          <motion.button
            className="bg-main-500 w-full rounded-[100px] text-white py-3 px-4 transition-all duration-300 ease-in-out hover:bg-green-400 hover:text-black font-semibold hover:shadow-lg hover:shadow-green-400/50 active:scale-95"
            type="submit" // ✅ Trigger navigation on form submit
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>

          {/* Divider for Social Login */}
          <div className="flex items-center w-full my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Link to Signup */}
          <span className='text-sm'>
            Don't have an account? 
            <span className='text-amber-500 underline cursor-pointer hover:text-amber-600 transition-all ml-2 font-bold' onClick={() => navigate('/signup')}>
              Sign Up
            </span>
          </span>
        </motion.form>
      </div>

      {/* Right Section with Illustration (Hidden on Mobile) */}
      <motion.div
        className="hidden md:flex flex-1 flex-col bg-gradient-to-r from-main-500 via-orange-500 to-main-500 animate-gradient-x justify-center items-center text-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="text-white font-bold text-[43px]">Sign in to your account</span>
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

export default Login;
