import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaTools, FaPhone } from 'react-icons/fa';
import logo from './assets/logo3.png';

function FreelancerCompletion() {
  const [formData, setFormData] = useState({
    name: '',
    skills: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // Submit handler
const handleCompletion = async (e) => {
  e.preventDefault();
  setLoading(true);

  // Prepare skills array from comma-separated input (trim spaces)
  const updatedFields = {
    name: formData.name,
    phone: formData.phone,
    skills: formData.skills
      .split(',')
      .map((skill) => skill.trim())
      .filter((skill) => skill),
  };

  try {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const userId = storedUser?._id;
    console.log(userId);
    const response = await axios.put(
      `https://bolooplace-backend.onrender.com/api/users/profile/${userId}`,
      updatedFields,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    const updatedUser = response.data.user;
    console.log(updatedUser);

    // Save updated user to localStorage
    localStorage.setItem('user', JSON.stringify(updatedUser));

    navigate('/dashboard');
  } catch (error) {
    console.error('Update failed:', error.response?.data?.message || error.message);
    alert('Failed to update profile. Please try again.');
  } finally {
    setLoading(false);
  }
};


  return (
    <motion.div
      className="flex flex-col items-center min-h-screen p-6 bg-gray-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.form
        className="flex flex-col space-y-6 items-center w-full max-w-md bg-white p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleCompletion}
      >
        <motion.img
          src={logo}
          className="w-24 h-24"
          alt="Logo"
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
          Complete Your Profile
        </motion.span>

        {/* Name Input */}
        <div className="relative w-full">
          
          <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm">
            <FaUser className="w-6 h-6 absolute left-3 text-gray-500" />
            <input
              type="text"
              id="name"
              placeholder="Name "
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>
        </div>

        {/* Skills Input */}
        <div className="relative w-full">
          
          <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm">
            <FaTools className="w-6 h-6 absolute left-3 text-gray-500" />
            <input
              type="text"
              id="skills"
              placeholder="Skills "
              value={formData.skills}
              onChange={handleChange}
              required
              className="w-full px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>
        </div>

        {/* Phone Number Input */}
        <div className="relative w-full">
          
          <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm">
            <FaPhone className="w-6 h-6 absolute left-3 text-gray-500" />
            <input
              type="tel"
              id="phone"
              placeholder="Phone Number "
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="bg-main-500 w-full rounded-full text-white py-3 px-4 transition-all hover:bg-green-400 hover:text-black font-semibold hover:shadow-lg active:scale-95"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Complete Profile'}
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default FreelancerCompletion;
