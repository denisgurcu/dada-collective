import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./WhoAreWe.css";
import ParallaxVideos from "../ParallaxVideos/ParallaxVideos";
import Button from "../Button/Button";

// import MaskedTitle from './MaskedTitle'; 

const text = `
Dada Collective is a design studio that breaks the mold.
Where contrast fuels every bold connection.
With care and chaos, we shape what’s real.
Designing identities you don’t just see, but feel.
`;

const WhoAreWe = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Split into sentences, then into words
  const sentences = text
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean); // Remove empty lines

  const [revealButton, setRevealButton] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setRevealButton(v > 0.85); // shows after 85%, hides below
    });
  }, [scrollYProgress]);

  return (
    <div className="who-are-we_wrapper">
      <section className="who-are-we_scroll-container" ref={sectionRef}>
        <div className="who-are-we_sticky-inner">

          {/* <MaskedTitle text="Who We Are" /> */}

          <div className="who-are-we_split-text">
            {sentences.map((sentence, sIndex) => {
              const sentenceWords = sentence.split(" ");
              return (
                <div key={sIndex} className="sentence-line">
                  {sentenceWords.map((word, wIndex) => {
                    const i = sIndex * 10 + wIndex; // basic staggering index
                    const start = i / (sentences.length * 10);
                    const end = Math.min((i + 5) / (sentences.length * 10), 1);
                    const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

                    return (
                      <motion.span key={wIndex} style={{ opacity }} className="split-text">
                        {word}
                      </motion.span>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <div className="about-us-mask-wrapper">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: revealButton ? "0%" : "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Button label="About Us" />
            </motion.div>
          </div>



          <ParallaxVideos scrollProgress={scrollYProgress} />
        </div>



      </section>
    </div>
  );
};

export default WhoAreWe;
