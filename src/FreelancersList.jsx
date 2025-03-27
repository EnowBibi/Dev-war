import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dummy from './assets/dummy.png';
import image2 from './assets/picture1.png';
import image3 from './assets/picture2.png';
import { motion } from 'framer-motion';

const freelancers = [
  { id: 1, name: 'John Doe', profession: 'Web Developer', rating: 4.8, projectImage: image2, profileImage: dummy },
  { id: 2, name: 'Jane Smith', profession: 'Graphic Designer', rating: 4.7, projectImage: image3, profileImage: dummy },
  { id: 3, name: 'Michael Lee', profession: 'Content Creator', rating: 4.9, projectImage: image2, profileImage: dummy },
  { id: 4, name: 'Sarah Johnson', profession: 'Social Media Manager', rating: 4.6, projectImage: image3, profileImage: dummy },
  { id: 5, name: 'Emily Brown', profession: 'SEO Specialist', rating: 4.5, projectImage: image2, profileImage: dummy },
  { id: 6, name: 'David Wilson', profession: 'App Developer', rating: 4.8, projectImage: image3, profileImage: dummy },
  { id: 7, name: 'Sophia Martinez', profession: 'Digital Marketer', rating: 4.7, projectImage: image2, profileImage: dummy },
  { id: 8, name: 'James Anderson', profession: 'UI/UX Designer', rating: 4.9, projectImage: image3, profileImage: dummy },
  { id: 9, name: 'Olivia White', profession: 'Copywriter', rating: 4.6, projectImage: image2, profileImage: dummy },
  { id: 10, name: 'Daniel Thomas', profession: 'Cybersecurity Expert', rating: 4.7, projectImage: image3, profileImage: dummy },
  { id: 11, name: 'Ava Roberts', profession: 'Data Analyst', rating: 4.8, projectImage: image2, profileImage: dummy },
  { id: 12, name: 'Benjamin Clark', profession: 'AI Engineer', rating: 4.9, projectImage: image3, profileImage: dummy },
  { id: 13, name: 'Mia Scott', profession: 'Blockchain Developer', rating: 4.5, projectImage: image2, profileImage: dummy },
  { id: 14, name: 'Ethan Adams', profession: '3D Animator', rating: 4.6, projectImage: image3, profileImage: dummy },
  { id: 15, name: 'Charlotte Lewis', profession: 'E-commerce Specialist', rating: 4.7, projectImage: image2, profileImage: dummy },
  { id: 16, name: 'Liam Walker', profession: 'Software Engineer', rating: 4.8, projectImage: image3, profileImage: dummy },
];

const FreelancersList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const filteredFreelancers = freelancers.filter(freelancer =>
    freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter ? freelancer.profession === filter : true)
  );

  return (
    <div className="w-[90%] mx-auto py-10">
      <h2 className="text-3xl font-bold text-main-500 text-center mb-6">Browse More Freelancers</h2>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-full sm:w-1/3"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-full sm:w-1/3"
        >
          <option value="">All Professions</option>
          {[...new Set(freelancers.map(f => f.profession))].map(prof => (
            <option key={prof} value={prof}>{prof}</option>
          ))}
        </select>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredFreelancers.map((freelancer) => (
          <motion.div
            key={freelancer.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate(`/freelancer/${freelancer.id}`)}
          >
            <img src={freelancer.projectImage} alt="Project" className="w-full h-40 object-cover" />
            <div className="p-4">
              <div className="flex items-center">
                <img src={freelancer.profileImage} alt="Profile" className="w-10 h-10 rounded-full border border-gray-300" />
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
    </div>
  );
};

export default FreelancersList;
