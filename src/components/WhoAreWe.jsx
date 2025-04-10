import React, { useEffect, useRef } from "react";
import gsap from "gsap-trial";
import SplitText from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import "./WhoAreWe.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const WhoAreWe = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(textRef.current, {
      type: "words"
    });

    gsap.from(split.words, {
      opacity: 0.1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 5,
        pin: true,
        markers: true // helpful while testing
      }
    });

    return () => split.revert();
  }, []);

  return (
    <div id="who-we-are_wrapper" ref={textRef}>
      <div id="who-we-are-_content">
        <div className="who-we-are_text" >
          We’re a collaborative design studio driven by instinct, not instruction.
          Born from contrast. Built with care and chaos.
          We design identities that make people feel something — not just notice.
          Our work is bold, emotional, and unapologetically human.
          We tell stories that bend. Concepts that breathe.
          Ideas that don’t ask for permission.
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;