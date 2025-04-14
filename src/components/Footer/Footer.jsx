import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import screamImg from "../../assets/images/scream.png";
import Button from "../Button/Button";
import "./Footer.css";

const Footer = () => {
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // Subtle floating effect on scroll
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["0px", "-30px"]), {
    stiffness: 60,
    damping: 15,
  });

  return (
    <footer className="footer-section" ref={footerRef}>
      <div className="footer-image">
        <motion.img
          src={screamImg}
          alt="Scream"
          className="footer-scream-image"
          style={{ y }}
        />
      </div>

      {/* Right side: Form (top) + Contact Info (bottom) */}
      <div className="footer-content">
        {/* Form */}
        <div className="footer-form">
          <h3 className="footer-heading">SHOUT INTO THE VOID</h3>
          <form>
            <input type="text" placeholder="Your name…" />
            <input type="email" placeholder="Your email…" />
            <textarea placeholder="Tell us something good…" rows="5"></textarea>
            <Button type="submit" label="SEND IT" className="footer-send-button" />
          </form>
        </div>

        {/* IRL Info */}
        <div className="footer-contact">
          <h3 className="footer-heading">FIND US IRL</h3>
          <address>
            DADA Collective Studio<br />
            555 Seymour St., Vancouver, BC, CANADA<br />
            Unit #3<br />
            <div className="footer-contact-line">
              <span>(604) 123–4567</span>
              <span className="divider">|</span>
              <a href="mailto:info@dadacollective.com">info@dadacollective.com</a>
            </div>
          </address>

          <div className="footer-meta-links">
            <a href="#">Fine Print</a>
            <span className="divider">|</span>
            <a href="#">We Respect Your Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
