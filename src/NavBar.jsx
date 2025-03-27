import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo-white.png';
import magnify2 from "./assets/MagnifyingGlass.png";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle menu for mobile
  const navigate = useNavigate();

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-main-500">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-32 md:w-[200px] h-auto" />
      </div>

      {/* Desktop & Tablet view: Search Bar */}
      <div className="hidden md:flex border border-amber-50 rounded-md shadow items-center w-1/3">
        <form onSubmit={handleSearchSubmit} className="flex w-full">
          <div className="relative flex items-center w-full">
            <img src={magnify2} className="w-6 h-6 absolute left-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full px-10 py-2 bg-amber-50 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-300 pl-10"
            />
          </div>
          <button
            type="submit"
            className="bg-main-500 px-4 py-2 rounded-r-md text-white hover:bg-main-600 transition-all"
          >
            Search
          </button>
        </form>
      </div>

      {/* Language Select */}
      <div className="relative hidden md:block">
        <select className="border border-gray-300 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </div>

      {/* Login Button */}
      <button
        onClick={() => navigate('/login')}
        className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-all hidden md:block"
      >
        Login
      </button>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 space-y-4">
          <form onSubmit={handleSearchSubmit} className="w-3/4 flex">
            <div className="relative flex items-center w-full">
              <img src={magnify2} className="w-6 h-6 absolute left-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="w-full px-10 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-300 pl-10"
              />
            </div>
            <button
              type="submit"
              className="bg-main-500 px-4 py-2 rounded-r-md text-white hover:bg-main-600 transition-all"
            >
              Search
            </button>
          </form>
          <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 w-3/4">
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
          <button
            onClick={() => navigate('/login')}
            className="bg-main-500 text-white px-6 py-2 rounded-lg hover:bg-main-600 transition-all"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
export default Navbar;