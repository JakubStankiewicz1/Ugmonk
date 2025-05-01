import React from 'react';
import "./home.css";
import HomeHero from '../../components/HomeHero/HomeHero';
import TheAnalogSystem from '../../components/TheAnalogSystem/TheAnalogSystem';
import HomeHeroTwo from '../../components/HomeHeroTwo/HomeHeroTwo';
import TheGatherCollection from '../../components/TheGatherCollection/TheGatherCollection';

const Home = () => {
  return (
    <div className="home">
      <HomeHero />
      <TheAnalogSystem />
      <HomeHeroTwo />
      <TheGatherCollection />
    </div>
  )
}

export default Home