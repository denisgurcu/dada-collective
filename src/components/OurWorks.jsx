import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

import { projects } from '../data/projects';
import './OurWorks.css';

const OurWorks = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
      });
      
      const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
      });

    return (
<section className="our-works__wrapper" ref={sectionRef}>
  {/* Sticky Title */}
  <motion.div
    className="our-works__title-banner"
  >
    <h3 className="our-works__title-text">SEE OUR BEST WORK</h3>
  </motion.div>

  {/* Card stack */}
  <div className="our-works__cards">
    {projects.map((project, i) => (
      <div key={i} className="our-works__card-container">
        <motion.div
          className="our-works__card"
          style={{
            backgroundColor: project.color,
            top: `calc(3vh + ${i * 25}px)`,
            scale: useTransform(smoothScroll, [(i + 1) * 0.15, 1], [1, 0.94]),
          }}
        >
          <h3>{project.title}</h3>
          <div className="our-works__card-body">
            <p>{project.description}</p>
            <div
              className="our-works__card-image"
              style={{ backgroundImage: `url(${project.src})` }}
            />
          </div>
        </motion.div>
        <div style={{ height: '200vh' }} />

      </div>
    ))}
  </div>
</section>

    );
};

export default OurWorks;
