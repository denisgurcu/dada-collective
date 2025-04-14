import React from "react";
import "./Footer.css";
import screamImg from '../assets/scream.png';
import Button from "../components/Button";

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Scream image on the left */}
      <div className="footer-image">
        <img src={screamImg} alt="Scream" />
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
