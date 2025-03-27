import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import dummy from './assets/dummy.png';
import image2 from './assets/picture1.png';
import image3 from './assets/picture2.png';


// Sample freelancers data matching FreelancersList
const freelancers = [
    {
      id: 1,
      name: 'John Doe',
      profession: 'Web Developer',
      rating: 4.8,
      projectImage: image2,
      profileImage: dummy,
      description: 'Experienced Web Developer specializing in React, Node.js, and modern web technologies.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      profession: 'Graphic Designer',
      rating: 4.7,
      projectImage: image3,
      profileImage: dummy,
      description: 'Creative Graphic Designer with a strong background in branding, UI/UX, and digital illustration.',
    },
    {
      id: 3,
      name: 'Michael Lee',
      profession: 'Content Creator',
      rating: 4.9,
      projectImage: image2,
      profileImage: dummy,
      description: 'Passionate Content Creator specializing in video production, blogging, and social media marketing.',
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      profession: 'Social Media Manager',
      rating: 4.6,
      projectImage: image3,
      profileImage: dummy,
      description: 'Expert Social Media Manager with experience in growing engagement and online presence.',
    },
    {
      id: 5,
      name: 'Emily Brown',
      profession: 'SEO Specialist',
      rating: 4.5,
      projectImage: image2,
      profileImage: dummy,
      description: 'SEO Specialist with expertise in keyword research, backlinking, and search engine algorithms.',
    },
    {
      id: 6,
      name: 'David Wilson',
      profession: 'App Developer',
      rating: 4.8,
      projectImage: image3,
      profileImage: dummy,
      description: 'App Developer proficient in building Android and iOS applications with Flutter and React Native.',
    },
    {
      id: 7,
      name: 'Sophia Martinez',
      profession: 'Digital Marketer',
      rating: 4.7,
      projectImage: image2,
      profileImage: dummy,
      description: 'Digital Marketer skilled in PPC, email marketing, and social media advertising.',
    },
    {
      id: 8,
      name: 'James Anderson',
      profession: 'UI/UX Designer',
      rating: 4.9,
      projectImage: image3,
      profileImage: dummy,
      description: 'UI/UX Designer passionate about crafting user-friendly interfaces and seamless experiences.',
    },
    {
      id: 9,
      name: 'Olivia White',
      profession: 'Copywriter',
      rating: 4.6,
      projectImage: image2,
      profileImage: dummy,
      description: 'Copywriter with expertise in content strategy, blog writing, and persuasive storytelling.',
    },
    {
      id: 10,
      name: 'Daniel Thomas',
      profession: 'Cybersecurity Expert',
      rating: 4.7,
      projectImage: image3,
      profileImage: dummy,
      description: 'Cybersecurity Expert specializing in ethical hacking, penetration testing, and network security.',
    },
    {
      id: 11,
      name: 'Ava Roberts',
      profession: 'Data Analyst',
      rating: 4.8,
      projectImage: image2,
      profileImage: dummy,
      description: 'Data Analyst experienced in data visualization, statistical modeling, and business intelligence.',
    },
    {
      id: 12,
      name: 'Benjamin Clark',
      profession: 'AI Engineer',
      rating: 4.9,
      projectImage: image3,
      profileImage: dummy,
      description: 'AI Engineer focused on machine learning models, deep learning, and AI-driven applications.',
    },
    {
      id: 13,
      name: 'Mia Scott',
      profession: 'Blockchain Developer',
      rating: 4.5,
      projectImage: image2,
      profileImage: dummy,
      description: 'Blockchain Developer specializing in smart contracts, DeFi, and decentralized applications.',
    },
    {
      id: 14,
      name: 'Ethan Adams',
      profession: '3D Animator',
      rating: 4.6,
      projectImage: image3,
      profileImage: dummy,
      description: '3D Animator skilled in motion graphics, visual effects, and character modeling.',
    },
    {
      id: 15,
      name: 'Charlotte Lewis',
      profession: 'E-commerce Specialist',
      rating: 4.7,
      projectImage: image2,
      profileImage: dummy,
      description: 'E-commerce Specialist with expertise in online store optimization and conversion strategies.',
    },
    {
      id: 16,
      name: 'Liam Walker',
      profession: 'Software Engineer',
      rating: 4.8,
      projectImage: image3,
      profileImage: dummy,
      description: 'Software Engineer experienced in building scalable applications and cloud-based solutions.',
    },
  ];
  
function FreelancerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const freelancer = freelancers.find((f) => f.id === parseInt(id));

  if (!freelancer) {
    return <div className="text-center py-10 text-red-500">Freelancer not found</div>;
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center bg-gray-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <button
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
        <div className="flex flex-col items-center text-center">
          <img
            src={freelancer.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border border-gray-300"
          />
          <h2 className="text-2xl font-semibold mt-3">{freelancer.name}</h2>
          <p className="text-gray-600">{freelancer.profession}</p>
          <span className="text-yellow-500 mt-2">⭐ {freelancer.rating}</span>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">About</h3>
          <p className="text-gray-700 mt-2">{freelancer.description}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Portfolio</h3>
          <img
            src={freelancer.projectImage}
            alt="Project"
            className="w-full h-48 object-cover rounded-lg mt-2"
          />
        </div>
        <button
          className="mt-6 bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-all"
          onClick={() => alert(`Contacting ${freelancer.name}`)}
        >
          Contact Freelancer
        </button>
      </div>
    </motion.div>
  );
}

export default FreelancerDetail;
