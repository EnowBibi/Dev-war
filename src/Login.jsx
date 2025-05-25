import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import illustration1 from './assets/loginillustration2.png';
import { motion } from 'framer-motion';
import logo from './assets/logo3.png';
import personIcon from './assets/person-icon.png';
import passwordEye from './assets/password-eye.png';
import passwordEyeSlash from './assets/password-eye.png';
import facebook from './assets/Facebook.png';
import google from './assets/Google.png';
import apple from './assets/apple-icon.png';
import axios from 'axios';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  const maxAttempts = 5;

  // Enforce HTTPS warning
  
  const sanitizeInput = (input) => {
    return input.replace(/[<>{}]/g, '');
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');

    if (attempts >= maxAttempts) {
      setError('Too many failed attempts. Please try again later.');
      return;
    }

    // Sanitize inputs
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPassword = sanitizeInput(password);

    // Validations
    if (!sanitizedEmail || !sanitizedPassword) {
      setError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      setError('Invalid email format.');
      return;
    }

    if (sanitizedPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

   

    setLoading(true);

    try {
      const response = await axios.post('https://bolooplace-backend.onrender.com/api/auth/login',{
            email,
          password
        }, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true 
        });
        const userData = response.data.data;
        console.log("User info from backend:", userData);

        // Optionally save to localStorage or context
        localStorage.setItem('user', JSON.stringify(userData));
        

      navigate('/dashboard');
    } catch (err) {
      console.log(err);
      setAttempts(prev => prev + 1);
      if (err.response) {
        setError('Invalid credentials. Please try again.');
      } else {
        setError('Network error. Please try again.');
      }
    } finally {
      setLoading(false);
    }
    
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
            className='w-[348.01px] h-[184px]'
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
            <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all duration-300">
              <img
                src={personIcon}
                className="w-[24px] h-[24px] absolute left-2"
                alt="Email Icon"
              />
              <input
                type="email"
                id="email"
                autoComplete="off"
                placeholder="email"
                className="w-full px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative w-full">
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
                autoComplete="off"
                placeholder="password"
                className="w-full px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Error Message */}
          {error && <span className="text-red-500 text-sm">{error}</span>}

          {/* Forgot Password */}
          <span
            className="text-amber-500 underline cursor-pointer hover:text-amber-600 transition-all text-sm font-bold self-end"
            onClick={() => navigate('/forgot-password')}
          >
            Forgot Password?
          </span>

          {/* Submit Button */}
          <motion.button
            className="bg-main-500 w-full rounded-[100px] text-white py-3 px-4 transition-all duration-300 ease-in-out hover:bg-green-400 hover:text-black font-semibold hover:shadow-lg hover:shadow-green-400/50 active:scale-95"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </motion.button>

          {/* Divider */}
          <div className="flex items-center w-full my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Logins */}
          <div className="flex justify-center gap-4 space-x-4 mt-4">
            {[facebook, google, apple].map((icon, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={icon} alt="Social Icon" className="w-6 h-6" />
              </motion.div>
            ))}
          </div>

          {/* Signup Link */}
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

      {/* Right Side Illustration */}
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
