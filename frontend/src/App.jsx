import React from 'react';
import "./app.css";
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import PromInfo from './components/PromInfo/PromInfo';

const App = () => {
  return (
    <div>
      <PromInfo number={"35"} text={"Final Stock Items"} destination={"/"} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      # fixed routes
    </div>
  )
}

export default App
