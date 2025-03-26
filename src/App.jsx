import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from './assets/Group 5.png';
import Navbar from './NavBar';
import image2 from './assets/picture1.png';
import image3 from './assets/picture2.png';
import dummy from './assets/dummy.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Sample freelancer data
const freelancers = [
  {
    id: 1,
    name: 'John Doe',
    profession: 'Web Developer',
    rating: 4.8,
    projectImage: image2,
    profileImage: dummy,
  },
  {
    id: 2,
    name: 'Jane Smith',
    profession: 'Graphic Designer',
    rating: 4.7,
    projectImage: image3,
    profileImage: dummy,
  },
  {
    id: 3,
    name: 'Michael Lee',
    profession: 'Content Creator',
    rating: 4.9,
    projectImage: image2,
    profileImage: dummy,
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    profession: 'Social Media Manager',
    rating: 4.6,
    projectImage: image3,
    profileImage: dummy,
  },
];

function App() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-main-500 min-h-screen flex-grow flex flex-col px-10">
        <Navbar />
        <motion.div
          className="flex flex-col gap-16 w-[100%] p-10 px-[50px] py-5 pb-5 justify-center lg:justify-between lg:flex-row"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col py-3 max-w-120 text-center lg:text-left">
            <span className="text-2xl text-white py-6 lg:text-[46px]">
              Welcome to Bolooplace, The Standard for Freelance Excellence
            </span>
            <span className="text-[14px] text-white">
              Get an experienced freelancer to perform your professional tasks within a faster range of time
            </span>
            <motion.button
              onClick={() => navigate('/signup')}
              className="bg-amber-500 text-white px-6 py-2 my-4 rounded-lg hover:bg-amber-600 transition-all hidden md:block"
              whileHover={{ scale: 1.05 }}
            >
              Get Started
            </motion.button>
          </div>
          <motion.img
            src={image1}
            className="w-[300px] h-[220px] lg:w-125 lg:h-125"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </div>

      {/* Freelancers Section */}
      <div className="w-[90%] mx-auto py-10">
        <h2 className="text-3xl font-bold text-main-500 text-center mb-6">
          Pick from over 500+ Freelancers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {freelancers.map((freelancer) => (
            <motion.div
              key={freelancer.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={freelancer.projectImage} alt="Project" className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="flex items-center">
                  <img
                    src={freelancer.profileImage}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border border-gray-300"
                  />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">{freelancer.name}</h3>
                    <p className="text-sm text-gray-600">{freelancer.profession}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center">
                  <span className="text-yellow-500">⭐ {freelancer.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.button
          onClick={() => navigate('/signup')}
          className="bg-amber-500 text-white px-6 py-2 my-4 mx-auto block rounded-lg hover:bg-amber-600 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Find more freelancers
        </motion.button>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Bolooplace</h3>
            <p className="text-sm text-gray-400">The Standard for Freelance Excellence</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

export default App;
