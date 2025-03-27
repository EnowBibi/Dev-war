import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import illustration1 from './assets/loginillustration2.png';
import { motion } from 'framer-motion';
import logo from './assets/logo3.png';
import personIcon from './assets/person-icon.png';
import passwordEye from './assets/password-eye.png';
import passwordEyeSlash from './assets/password-eye.png';
import facebook from './assets/Facebook.png'
import google from './assets/Google.png'
import apple from './assets/apple-icon.png'


function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Implement your sign-in logic here
    console.log('Signing in with:', email, password);
    // After successful sign-in, navigate to the desired page
    navigate('/dashboard'); // Example: Navigate to dashboard
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row min-h-screen"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      
      {/* Left Section - Signin Form */}
      <div className="flex justify-center items-center flex-1">
        <motion.form
          className="flex flex-col space-y-6 items-center w-[90%] md:w-[50%] bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSignIn}
        >
          <motion.img
            src={logo}
            className='w-[348.0149841308594px] h-[184px]'
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
          Welcome Back!
          </motion.span>

          {/* Email Input */}
          <div className="relative w-full">
            <label htmlFor="email" className="absolute left-10 top-3 text-gray-500 text-sm transition-all">Email</label>
            <div className="relative flex items-center border  border-gray-300 rounded-md shadow-sm focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all duration-300">
              <img
                src={personIcon}
                className="w-[24px] h-[24px] absolute left-2"
                alt="Email Icon"
              />
              <input
                type="email"
                id="email"
                placeholder=" "
                className="w-full px-15 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative w-full">
            <label htmlFor="password" className="absolute left-10 top-3 text-gray-500 text-sm transition-all">Password</label>
            <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all duration-300">
              <img
                src={showPassword ? passwordEyeSlash : passwordEye}
                className="w-[24px] h-[24px] absolute left-3 cursor-pointer hover:scale-110 transition-all duration-200"
                alt="Toggle Password Visibility"
                onClick={() => setShowPassword(!showPassword)}
              />
              <input
                type={showPassword ? "text" : "password"}  
                id="password"
                placeholder=" "
                className="w-full px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
                    {/* Forgot Password Link */}
          <span
            className="text-amber-500 underline cursor-pointer hover:text-amber-600 transition-all text-sm font-bold self-end"
            onClick={() => navigate('/forgot-password')}
          >
            Forgot Password?
          </span>

          {/* Animated Submit Button */}
          <motion.button
            className="bg-main-500 w-full borde rounded-[100px] text-white py-3 px-4 transition-all duration-300 ease-in-out hover:bg-green-400 hover:text-black font-semibold hover:shadow-lg hover:shadow-green-400/50 active:scale-95"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In 
          </motion.button>

          {/* Divider for Social Login (Optional) */}
          <div className="flex items-center w-full my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>
      
          <div className="flex justify-center gap-4 space-x-4 mt-4">
           {/* facebook */}
                  <motion.div
                    className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img src={facebook} alt="Google" className="w-6 h-6" />
                  </motion.div>
                      {/* Google */}
                  <motion.div
                    className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img src={google} alt="Google" className="w-6 h-6" />
                  </motion.div>
                      {/* apple */}
                  <motion.div
                    className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img src={apple} alt="Google" className="w-6 h-6" />
                  </motion.div>

          </div>

          <span className='text-sm'>
            Don't have an account?
            <span
              className='text-amber-500 underline cursor-pointer hover:text-amber-600 transition-all ml-2 font-bold'
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </span>
          </span>
        </motion.form>
      </div>

      {/* Right Section with Illustration (Hidden on Mobile) */}
      <motion.div
       className="hidden md:flex flex-1 flex-col justify-center items-center text-center"
       style={{ backgroundColor: "#1F5D6659" }}
       
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="text-[#295258] font-bold text-[43px]">Connecting Talent, Delivering Results.</span>
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

export default SignIn;