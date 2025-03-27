import React from 'react'
import logo from './assets/logo-white.png'
import chartBar from "./assets/ChartBar.png"
import magnify from "./assets/magnify.png"
import chat from "./assets/ChatCircleDots.png"
import creditCard from "./assets/CreditCard.png"
import gear from "./assets/Gear.png"
import review from "./assets/rate_review.png"
import logoutIcon from "./assets/signOut.png" 
import { useNavigate } from 'react-router-dom'

function NavBar2({ screen }) {
    const navigate = useNavigate();
    console.log(screen);
    
    return (
        <div className=" hidden md:flex flex-col items-center px-5 py-10 bg-main-500 flex-grow max-w-3/12 min-h-screen w-full">

            {/* Logo */}
            <img src={logo} className='w-72 h-40 mb-8' />

            {/* Dashboard */}
            <div
                className={screen === '/dashboard' ? 
                    'flex flex-row px-6 py-3 items-center text-white bg-blue-400 w-full rounded-md mb-4 transition-transform transform hover:scale-105' :
                    'flex flex-row px-6 py-3 items-center text-white w-full cursor-pointer rounded-md mb-4 transition-transform transform hover:scale-105'
                }
                onClick={() => navigate('/dashboard')}
            >
                <img src={chartBar} className='w-6 h-6 mx-3' />
                <span>Dashboard</span>
            </div>

            {/* Earnings */}
            <div
                className={screen === '/earnings' ?
                    'flex flex-row px-6 py-3 items-center text-white bg-gray-400 w-full rounded-md mb-4 transition-transform transform hover:scale-105' :
                    'flex flex-row px-6 py-3 items-center text-white w-full cursor-pointer rounded-md mb-4 transition-transform transform hover:scale-105'
                }
                onClick={() => navigate('/earnings')}
            >
                <img src={creditCard} className='w-6 h-6 mx-3' />
                <span>Earnings</span>
            </div>

            {/* Messages */}
            <div
                className={screen === '/messages' ?
                    'flex flex-row px-6 py-3 items-center text-white bg-gray-400 w-full rounded-md mb-4 transition-transform transform hover:scale-105' :
                    'flex flex-row px-6 py-3 items-center text-white w-full cursor-pointer rounded-md mb-4 transition-transform transform hover:scale-105'
                }
                onClick={() => navigate('/messages')}
            >
                <img src={chat} className='w-6 h-6 mx-3' />
                <span>Messages</span>
            </div>

            {/* Reviews */}
            <div
                className={screen === '/reviews' ?
                    'flex flex-row px-6 py-3 items-center text-white bg-gray-400 w-full rounded-md mb-4 transition-transform transform hover:scale-105' :
                    'flex flex-row px-6 py-3 items-center text-white w-full cursor-pointer rounded-md mb-4 transition-transform transform hover:scale-105'
                }
                onClick={() => navigate('/reviews')}
            >
                <img src={review} className='w-6 h-6 mx-3' /> {/* Change history to review icon */}
                <span>Reviews</span>
            </div>

            {/* Settings */}
            <div
                className={screen === '/settings' ?
                    'flex flex-row px-6 py-3 items-center text-white bg-gray-400 w-full rounded-md mb-4 transition-transform transform hover:scale-105' :
                    'flex flex-row px-6 py-3 items-center text-white w-full cursor-pointer rounded-md mb-4 transition-transform transform hover:scale-105'
                }
                onClick={() => navigate('/settings')}
            >
                <img src={gear} className='w-6 h-6 mx-3' />
                <span>Settings</span>
            </div>

            {/* Sign Out */}
            <div 
                className='flex flex-row px-6 py-3 items-center text-white w-full cursor-pointer mt-auto mb-8 transition-transform transform hover:scale-105'
                onClick={() => navigate('/signout')}
            >
                <img src={logoutIcon} className='w-6 h-6 mx-3' />
                <span>Sign Out</span>
            </div>
        </div>
    );
}

export default NavBar2;
