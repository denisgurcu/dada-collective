import React from 'react';
import Hero from '../components/Hero';
import WhoAreWe from '../components/WhoAreWe';
import WhatWeDo from '../components/WhatWeDo';
import HowItWorks from '../components/HowItWorks';


import { useHeroVisibility } from '../hooks/useHeroVisibility';
import { useHeroPulseColor } from '../hooks/useHeroPulseColor'; 


import './Home.css';

const Home = () => {
  const isHeroVisible = useHeroVisibility();
  useHeroPulseColor(isHeroVisible);

  return (
    <div className={`page-bg ${!isHeroVisible ? 'not-pulsing' : ''}`}>
      <main className="home-page">
        <Hero />
        <WhoAreWe />
        <WhatWeDo />
        <HowItWorks />
      </main>
    </div>
  );
};

export default Home;