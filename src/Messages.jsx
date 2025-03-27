import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Mobile menu icon
import NavBar from './NavBar2';
import dummy from './assets/dummy.png'; // Ensure correct path
import dots from './assets/dots-vertical-circle-outline.png'; // Ensure correct path

function Messages() {
  const screenLocation = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const investors = [
    { id: 1, name: 'Jace Kayode', desc: "I'm an investor looking for promising startups with high growth potential." },
    { id: 2, name: 'Sarah Johnson', desc: "I focus on tech startups that innovate in AI and automation." },
    { id: 3, name: 'Michael Chen', desc: "Looking to invest in green energy and sustainable businesses." },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Mobile Navbar */}
      <div className="md:hidden bg-main-500 text-white fixed w-full top-0 z-50">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="text-xl font-bold">Messages</div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
            <FaBars className="text-2xl" />
          </button>
        </div>
        {isMobileMenuOpen && (
          <motion.div
            className="bg-main-500 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col">
              {['dashboard', 'earnings', 'messages', 'reviews', 'settings'].map((item) => (
                <li
                  key={item}
                  className="px-4 py-2 border-b cursor-pointer hover:bg-main-400"
                  onClick={() => {
                    navigate(`/${item}`);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              ))}
              <li className="px-4 py-2 border-b cursor-pointer hover:bg-main-400">Logout</li>
            </ul>
          </motion.div>
        )}
      </div>

      {/* Navbar for larger screens */}
      <NavBar screen={screenLocation.pathname} />

      {/* Body */}
      <div className="m-4 w-full flex flex-col items-center">
        {investors.map((investor, index) => (
          <motion.div
            key={investor.id}
            className="flex flex-col sm:flex-row items-center mb-5 p-4 border rounded-lg shadow-lg bg-white w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={dummy} alt="Profile" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full" />
            <div className="mx-4 flex flex-col flex-grow">
              <span className="text-lg sm:text-xl font-bold mb-1">{investor.name}</span>
              <span className="text-gray-500 text-sm sm:text-base whitespace-normal">{investor.desc}</span>
            </div>
            <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2">
              <img src={dots} alt="More options" className="h-6 w-6 cursor-pointer" />
              <motion.span
                className="text-white bg-main-500 px-3 py-1 rounded cursor-pointer text-sm"
                whileHover={{ scale: 1.1 }}
              >
                Visit Profile
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
