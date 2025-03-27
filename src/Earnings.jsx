import React, { useState } from 'react';
import NavBar from './NavBar2';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Make sure to import FaBars

function Earnings() {
  const screenLocation = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Add state for mobile menu

  return (
    <div className='h-full min-h-screen w-full flex flex-col md:flex-row'>
      {/* Mobile Navbar */}
      <div className='md:hidden bg-main-500 text-white fixed w-full top-0 z-50'>
        <div className='flex justify-between items-center px-4 py-3'>
          <div className='text-xl font-bold'>Earnings</div>
          <div className='cursor-pointer' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <FaBars className='text-2xl' />
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className='bg-main-500 shadow-lg'>
            <ul>
              <li className='px-4 py-2 border-b' onClick={() => navigate('/dashboard')}>Home</li>
              <li className='px-4 py-2 border-b' onClick={() => navigate('/earnings')}>Earnings</li>
              <li className='px-4 py-2 border-b' onClick={() => navigate('/messages')}>Messages</li>
              <li className='px-4 py-2 border-b' onClick={() => navigate('/reviews')}>Reviews</li>
              <li className='px-4 py-2 border-b' onClick={() => navigate('/settings')}>Settings</li>
              <li className='px-4 py-2 border-b'>Logout</li>
            </ul>
          </div>
        )}
      </div>

      {/* Navbar for larger screens */}
      <NavBar screen={screenLocation.pathname} />

      {/* Body */}
      <div className='flex-grow pt-20 md:pt-0'>
        {/* Header */}
        <div className='flex flex-col md:flex-row items-center mx-4 my-6 gap-5'>
          <div className='bg-gray-200 py-2 px-4 rounded flex-1 text-center'>
            <span className='text-secondary-500 text-2xl md:text-3xl'>Earnings Overview</span>
          </div>
        </div>

        {/* Earnings Statistics */}
        <div className='flex flex-wrap justify-center gap-4 md:gap-5 mx-4'>
          {/* Total Earnings */}
          <div className='bg-white shadow-lg rounded-lg w-full md:w-1/3 p-4 flex items-center gap-3'>
            <span className='text-secondary-500 text-lg font-bold'>Total Earnings</span>
            <p className='text-secondary-500 text-2xl'>$10,000</p>
          </div>

          {/* Monthly Earnings */}
          <div className='bg-white shadow-lg rounded-lg w-full md:w-1/3 p-4 flex items-center gap-3'>
            <span className='text-secondary-500 text-lg font-bold'>Monthly Earnings</span>
            <p className='text-secondary-500 text-2xl'>$2,500</p>
          </div>

          {/* Yearly Earnings */}
          <div className='bg-white shadow-lg rounded-lg w-full md:w-1/3 p-4 flex items-center gap-3'>
            <span className='text-secondary-500 text-lg font-bold'>Yearly Earnings</span>
            <p className='text-secondary-500 text-2xl'>$30,000</p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className='mx-4 my-8'>
          <h2 className='text-xl font-bold mb-4'>Recent Transactions</h2>
          {[...Array(5)].map((_, index) => (
            <div key={index} className='flex flex-row items-center justify-between bg-white shadow-lg rounded-lg p-4 mb-4'>
              <div className='flex flex-col'>
                <span className='text-lg font-bold'>Transaction #{index + 1}</span>
                <span className='text-gray-500'>Description of the transaction.</span>
              </div>
              <span className='text-main-500 font-bold'>${(index + 1) * 100}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Earnings;