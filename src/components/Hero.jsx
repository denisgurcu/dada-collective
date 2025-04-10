import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src="/dadabg.webm"
        autoPlay
        loop
        muted
        playsInline
      />
      <h1 className="hero-tagline">A COLLABORATIVE DESIGN STUDIO <br></br>BUILT TO DISRUPT, DESIGNED TO FEEL.</h1>
    </section>
  );
};

export default Hero;
