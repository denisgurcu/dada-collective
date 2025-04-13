import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./WhoAreWe.css";

const text =
  "We’re a collaborative design studio driven by instinct, not instruction. Born from contrast. Built with care and chaos. We design identities that make people feel something — not just notice.";

const WhoAreWe = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const words = text.split(" ");

  return (
    <div className="who-are-we_wrapper">
      <section className="who-are-we_scroll-container" ref={sectionRef}>
        <div className="who-are-we_sticky-inner">
          <div className="who-are-we_split-text">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = Math.min((i + 5) / words.length, 1); // clamp to 1
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

              return (
                <motion.span key={i} style={{ opacity }} className="split-text">
                  {word}
                </motion.span>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoAreWe;