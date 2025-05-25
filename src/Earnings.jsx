import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import NavBar from './NavBar2';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Earnings() {
  const screenLocation = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [user,setUser]=useState("");
 
  useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);
  const handleWithdraw = async () => {
    if (!withdrawAmount || !phoneNumber) {
      alert('Please enter both amount and phone number');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        'https://dev-war.vercel.app/api/payment/initiate', // Change to your actual API endpoint
        {
          amount: withdrawAmount,
          email:user.email,
          userId:user._id,
          externalId:"externalId", 
          redirectUrl:"redirectUrl", 
          message:"Just testing the api"
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true, // if using cookies/auth
        }
      );

      alert(response.data.message || `Withdrawal request for $${withdrawAmount} sent to ${phoneNumber}`);
      setWithdrawAmount('');
      setPhoneNumber('');
    } catch (error) {
      console.error('Withdraw failed:', error.response?.data?.message || error.message);
      alert('Failed to withdraw money. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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

        {/* Balance and Expected Earnings */}
        <div className='flex flex-wrap justify-center gap-4 md:gap-5 mx-4'>
          <div className='bg-white shadow-lg rounded-lg w-full md:w-1/3 p-4 flex items-center gap-3'>
            <span className='text-secondary-500 text-lg font-bold'>Current Balance</span>
            <p className='text-secondary-500 text-2xl'>$5,000</p>
          </div>
          <div className='bg-white shadow-lg rounded-lg w-full md:w-1/3 p-4 flex items-center gap-3'>
            <span className='text-secondary-500 text-lg font-bold'>Expected Earnings</span>
            <p className='text-secondary-500 text-2xl'>$8,000</p>
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

        {/* Withdraw Money Section */}
        <div className='mx-4 my-8 p-6 bg-white shadow-lg rounded-lg'>
          <h2 className='text-xl font-bold mb-4'>Withdraw Money</h2>
          <div className='flex flex-col gap-4'>
            <input
              type='number'
              className='p-2 border rounded-lg'
              placeholder='Enter amount'
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              disabled={loading}
            />
            <input
              type='text'
              className='p-2 border rounded-lg'
              placeholder='Enter phone number'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={loading}
            />
            <button
              className='bg-main-500 text-white py-2 rounded-lg'
              onClick={handleWithdraw}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Withdraw'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Earnings;
