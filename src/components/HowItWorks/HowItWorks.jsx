import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimation,
} from "framer-motion";
import leftHand from "../../assets/images/hand-left.png";
import rightHand from "../../assets/images/hand-right.png";
import "./HowItWorks.css";

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const [hasBounced, setHasBounced] = useState(false);

  // TEXT SPRINGS
  const leftTextX = useSpring(
    useTransform(scrollYProgress, [0.1, 0.3], ["-100%", "0%"]),
    { stiffness: 80, damping: 20 }
  );
  const leftOpacity = useSpring(
    useTransform(scrollYProgress, [0.1, 0.3], [0, 1]),
    { stiffness: 100, damping: 20 }
  );

  const rightTextX = useSpring(
    useTransform(scrollYProgress, [0.32, 0.5], ["100%", "0%"]),
    { stiffness: 80, damping: 20 }
  );
  const rightOpacity = useSpring(
    useTransform(scrollYProgress, [0.32, 0.5], [0, 1]),
    { stiffness: 100, damping: 20 }
  );

  // HAND POSITION (slide in)
  const handsOpacity = useSpring(
    useTransform(scrollYProgress, [0.48, 0.82], [0, 1]),
    { stiffness: 100, damping: 20 }
  );
  
  const handsY = useSpring(
    useTransform(scrollYProgress, [0.48, 0.82], ["50%", "0%"]),
    { stiffness: 100, damping: 20 }
  );
  
  const leftHandX = useSpring(
    useTransform(scrollYProgress, [0.48, 0.82], ["-100%", "0%"]),
    { stiffness: 80, damping: 20 }
  );
  
  const rightHandX = useSpring(
    useTransform(scrollYProgress, [0.48, 0.82], ["100%", "0%"]),
    { stiffness: 80, damping: 20 }
  );
  

  // Bounce logic – run ONCE
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (v > 0.75 && !hasBounced) {
        leftControls.start({
          y: ["0%", "-5%", "0%", "3%", "0%"],
          transition: { duration: 1.2, ease: "easeInOut" },
        });
        rightControls.start({
          y: ["0%", "5%", "0%", "-3%", "0%"],
          transition: { duration: 1.2, ease: "easeInOut" },
        });
        setHasBounced(true);
      }

      if (v < 0.4 && hasBounced) {
        setHasBounced(false); // Reset if user scrolls way back up
      }
    });
  }, [scrollYProgress, hasBounced, leftControls, rightControls]);

  return (
    <motion.section className="how-it-works_wrapper" ref={sectionRef}>
      <div className="how-it-works_sticky">
        <motion.h3
          className="how-it-works_title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          HOW IT WORKS
        </motion.h3>

        <div className="how-it-works_content">
          <motion.div
            className="how-it-works_text-block how-it-works_text-left"
            style={{ x: leftTextX, opacity: leftOpacity }}
          >
            Brands come to us for full-service execution — we curate the perfect team, shape the strategy, and deliver work that hits harder than expected.
          </motion.div>

          <motion.div
            className="how-it-works_text-block how-it-works_text-right"
            style={{ x: rightTextX, opacity: rightOpacity }}
          >
            You get the consistency and reliability of an agency, the originality of top-tier creatives, and the soul of a team that gives a damn.
          </motion.div>
        </div>

        <motion.div className="how-it-works_hands" style={{ opacity: handsOpacity }}>
          <motion.img
            src={leftHand}
            alt="Left Hand"
            className="hand-image"
            style={{ x: leftHandX, y: handsY }}
            animate={leftControls}
          />
          <motion.img
            src={rightHand}
            alt="Right Hand"
            className="hand-image"
            style={{ x: rightHandX, y: handsY }}
            animate={rightControls}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
