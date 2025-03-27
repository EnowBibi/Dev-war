import React, { useState } from 'react';
import NavBar from './NavBar2';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Mobile menu icon

function Messages() {
  const screenLocation = useLocation();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alice', text: 'Hey, how are you?' },
    { id: 2, sender: 'Bob', text: 'Don’t forget our meeting tomorrow!' },
    { id: 3, sender: 'Charlie', text: 'Can you send me the report?' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, sender: 'You', text: newMessage },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="h-full min-h-screen w-full flex flex-col md:flex-row">
      {/* Mobile Navbar */}
      <div className="md:hidden bg-main-500 text-white fixed w-full top-0 z-50">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="text-xl font-bold">Messages</div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
            <FaBars className="text-2xl" />
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="bg-main-500 shadow-lg">
            <ul>
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
          </div>
        )}
      </div>

      {/* Navbar for larger screens */}
      <NavBar screen={screenLocation.pathname} />

      {/* Body */}
      <div className="flex-grow pt-20 md:pt-0 px-4">
        {/* Header */}
        <div className="flex justify-center my-6">
          <div className="bg-gray-200 py-2 px-6 rounded text-secondary-500 text-2xl md:text-3xl">
            Messages
          </div>
        </div>

        {/* Messages List */}
        <div className="flex flex-col my-8 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`p-3 rounded-lg max-w-xs ${
                  message.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                }`}
              >
                <strong>{message.sender}:</strong> {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input Area */}
        <div className="flex items-center border-t border-gray-300 py-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded p-2 outline-none focus:ring-2 focus:ring-blue-400"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            className="bg-blue-500 text-white rounded px-4 ml-2 hover:bg-blue-600 transition"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Messages;
