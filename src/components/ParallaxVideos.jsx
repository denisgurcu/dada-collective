import React, { useEffect } from "react";
import { motion, useTransform, useSpring } from "framer-motion";
import "./ParallaxVideos.css";

const ParallaxVideos = ({ scrollProgress }) => {
  // Add smooth spring
  const springProgress = useSpring(scrollProgress, {
    stiffness: 12,   // lower = smoother
    damping: 15,  //How much "resistance" / slowing there is
    mass: 1.2,//How heavy the object feels
  });

  // Big, dramatic parallax values
  const video1Y = useTransform(springProgress, [0, 0.3], ["0px", "380px"]);
  const video2Y = useTransform(springProgress, [0, 0.3], ["0px", "-470px"]);

  // Optional: Debug progress
  useEffect(() => {
    return scrollProgress.on("change", (v) => {
      console.log(" scrollProgress (videos):", v.toFixed(3));
    });
  }, [scrollProgress]);

  return (
    <>
      <motion.video
        className="who-we-vid top-right"
        src="/videos/editorial1.webm"
        autoPlay
        muted
        loop
        playsInline
        style={{ y: video1Y }}
      />
      <motion.video
        className="who-we-vid bottom-left"
        src="/videos/editorial2.webm"
        autoPlay
        muted
        loop
        playsInline
        style={{ y: video2Y }}
      />
    </>
  );
};

export default ParallaxVideos;
