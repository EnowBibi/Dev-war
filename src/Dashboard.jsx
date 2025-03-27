import React, { useState } from 'react';
import magnify2 from "./assets/MagnifyingGlass.png";
import bell from "./assets/Bell.png";
import dummy from "./assets/dummy.png";
import NavBar from './NavBar2';
import { FaProjectDiagram, FaClock, FaTasks, FaCheckCircle, FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const screenLocation = useLocation();

  return (
    <div className='h-full min-h-screen w-full flex flex-col md:flex-row'>
      {/* Mobile Navbar */}
      <div className='md:hidden bg-main-500 text-white fixed w-full top-0 z-50'>
        <div className='flex justify-between items-center px-4 py-3'>
          <div className='text-xl font-bold'>Dashboard</div>
          <div className='cursor-pointer' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <FaBars className='text-2xl' />
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className='bg-white shadow-lg'>
            <ul>
              <li className='px-4 py-2 border-b'>Home</li>
              <li className='px-4 py-2 border-b'>Projects</li>
              <li className='px-4 py-2 border-b'>Messages</li>
              <li className='px-4 py-2 border-b'>Profile</li>
            </ul>
          </div>
        )}
      </div>

      {/* Navbar for larger screens */}
      <NavBar screen={screenLocation.pathname}/>

      {/* Body */}
      <div className='flex-grow pt-20 md:pt-0'>
        {/* Header */}
        <div className='flex flex-col md:flex-row items-center mx-4 my-6 gap-5'>
          <div className='bg-gray-200 py-2 px-4 rounded flex-1 text-center'>
            <span className='text-secondary-500 text-2xl md:text-3xl'>Welcome! Tambe</span>
          </div>

          {/* Notification and User */}
          <div className='flex items-center gap-4'>
            <div className='bg-gray-200 p-2 rounded-full'>
              <img src={bell} className='w-8 h-8' />
            </div>
            <img src={dummy} className='w-12 h-12 rounded-full' />
          </div>
        </div>

        {/* Statistics Cards */}
        <div className='flex flex-wrap justify-center gap-4 md:gap-5 mx-4'>
          {/* Active Projects */}
          <div className='bg-white shadow-lg rounded-lg w-full md:w-1/3 p-4 flex items-center gap-3'>
            <FaProjectDiagram className='w-8 h-8 text-main-500' />
            <div>
              <span className='text-secondary-500 text-lg font-bold'>Active Projects</span>
              <p className='text-secondary-500'>+10</p>
            </div>
          </div>

          {/* Pending Approvals */}
          <div className='bg-white shadow-lg rounded-lg w-full md:w-1/3 p-4 flex items-center gap-3'>
            <FaClock className='w-8 h-8 text-main-500' />
            <div>
              <span className='text-secondary-500 text-lg font-bold'>Pending Approvals</span>
              <p className='text-secondary-500'>+5</p>
            </div>
          </div>

          {/* Completed Projects */}
          <div className='bg-white shadow-lg rounded-lg w-full md:w-1/3 p-4 flex items-center gap-3'>
            <FaCheckCircle className='w-8 h-8 text-main-500' />
            <div>
              <span className='text-secondary-500 text-lg font-bold'>Completed Projects</span>
              <p className='text-secondary-500'>+20</p>
            </div>
          </div>

          {/* Tasks */}
          <div className='bg-white shadow-lg rounded-lg w-full md:w-1/3 p-4 flex items-center gap-3'>
            <FaTasks className='w-8 h-8 text-main-500' />
            <div>
              <span className='text-secondary-500 text-lg font-bold'>Pending Tasks</span>
              <p className='text-secondary-500'>+8</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className='flex flex-col md:flex-row items-center mx-4 my-8'>
          <div className='flex flex-1 items-center border border-gray-200 rounded p-2 w-full md:w-1/3'>
            <img src={magnify2} className='w-6 h-6 mx-3' />
            <input placeholder='Search' className='flex-1 outline-none bg-transparent text-secondary-500' />
          </div>
        </div>

        {/* Client Projects */}
        <div className='mx-4'>
          {[...Array(4)].map((_, index) => (
            <div key={index} className='flex flex-row items-center gap-4 mb-5'>
              <img src={dummy} className='w-12 h-12 rounded-full' />
              <div className='flex flex-col mr-auto'>
                <span className='text-xl font-bold'>Project Name</span>
                <span className='text-gray-500'>Brief description of the project or client.</span>
              </div>
              <div className='flex flex-col items-end gap-2'>
                <span className='text-white bg-main-500 px-2 py-1 rounded'>View Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
