import React from 'react';
import Hero from '../../components/Hero/Hero';
import WhoAreWe from '../../components/WhoAreWe/WhoAreWe';
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import OurWorks from '../../components/OurWorks/OurWorks'; 


import { useHeroVisibility } from '../../hooks/useHeroVisibility';
import { useHeroPulseColor } from '../../hooks/useHeroPulseColor'; 


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
        <OurWorks />

      </main>
    </div>
  );
};

export default Home;