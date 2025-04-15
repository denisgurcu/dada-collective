import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import './Hero.css';

const Hero = () => {
  const lottieRef = useRef(null);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafariBrowser);
  }, []);

  useEffect(() => {
    if (isSafari && lottieRef.current) {
      lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/dadabg-lottie.json', 
      });
    }
  }, [isSafari]);

  return (
    <section className="hero">
      {isSafari ? (
        <div className="hero-lottie" ref={lottieRef}></div>
      ) : (
        <video
          className="hero-video"
          src="/dadabg.webm"
          autoPlay
          loop
          muted
          playsInline
        />
      )}
      <h1 className="hero-tagline">
        A COLLABORATIVE DESIGN STUDIO <br />
        BUILT TO DISRUPT, DESIGNED TO FEEL.
      </h1>
    </section>
  );
};

export default Hero;
