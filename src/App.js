import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import './App.css';
import Home from './pages/index'; 
import Navbar from './components/navbar/Navbar';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} exact /> 
          <Route path="/signin" element={<SigninPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
