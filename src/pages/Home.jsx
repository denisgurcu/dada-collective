import React from 'react';
import Hero from '../components/Hero';
import WhoAreWe from '../components/WhoAreWe';
// import FeaturedWork from '../components/FeaturedWork'; (future)

const Home = () => {
    return (
      <main className="home-page">
        <Hero />
        <WhoAreWe />
        {/* <FeaturedWork /> */}
      </main>
    );
  };
  
  export default Home;
  