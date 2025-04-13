// components/MaskedTitle.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './MaskedTitle.css';

const MaskedTitle = ({ text, offset = ['start 0.9', 'start 0.3'] }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset,
  });

  const revealY = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);

  return (
    <h2 ref={container} className="masked-title">
      <span className="mask">
        <motion.span className="title-text" style={{ y: revealY }}>
          {text}
        </motion.span>
      </span>
    </h2>
  );
};

export default MaskedTitle;
