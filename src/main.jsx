import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import SignUp from './SignUp.jsx'
import AccountCompletion from './AccountCompletion.jsx';
import EmployerCompletion from './EmployerCompletion.jsx';
import FreelanceCompletion from './FreelanceCompletion.jsx';
import Login from './Login.jsx';
import FreelancerDetail from './FreelancerDetailScreen.jsx';
import FreelancersList from './FreelancersList.jsx';
import Dashboard from './Dashboard.jsx';
import Earnings from './Earnings.jsx';
import Messages from './Messages';
import ForgotPassword from './ForgotPassword.jsx';
import OTP from './OTP.jsx';
import SecureAccount from './SecureAccount.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/account-completion" element={<AccountCompletion/>} />
        <Route path="/employer-completion" element={<EmployerCompletion/>} />
        <Route path="/freelancer-completion" element={<FreelanceCompletion/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/freelancer/:id" element={<FreelancerDetail />} />
        <Route path="/freelancers" element={<FreelancersList />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/earnings" element={<Earnings/>} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/otp-verification" element={<OTP/>} />
        <Route path="/secure-account" element={<SecureAccount/>} />
      
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)


