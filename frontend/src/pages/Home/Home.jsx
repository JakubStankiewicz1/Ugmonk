import React from 'react';
import "./home.css";
import HomeHero from '../../components/HomeHero/HomeHero';
import TheAnalogSystem from '../../components/TheAnalogSystem/TheAnalogSystem';

const Home = () => {
  return (
    <div className="home">
      <HomeHero />
      <TheAnalogSystem />
    </div>
  )
}

export default Home