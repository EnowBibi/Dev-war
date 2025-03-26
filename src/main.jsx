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
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)


