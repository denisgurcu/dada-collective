import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Main Grid */}
      <div className="footer-grid">
        {/* Form Area */}
        <div className="footer-form">
          <h3 className="footer-heading">SHOUT INTO THE VOID</h3>
          <form>
            <input type="text" placeholder="Your name…" />
            <input type="email" placeholder="Your email…" />
            <textarea placeholder="Tell us something good…" rows="5"></textarea>
            <button type="submit">SEND IT</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3 className="footer-heading">FIND US IRL</h3>
          <div className="footer-icons">
            <span className="icon-circle"></span>
            <span className="icon-circle"></span>
            <span className="icon-circle"></span>
            <span className="icon-circle"></span>
          </div>
          <address>
            DADA Collective Studio<br />
            1111 Lorem St, Vancouver, BC, CANADA<br />
            Unit #111<br /><br />
            (604) 444–4444<br />
            <a href="mailto:info@dadacollective.com">info@dadacollective.com</a>
          </address>
          <div className="footer-links">
            <a href="#">Terms & Chaos</a><br />
            <a href="#">Privacy-ish</a>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="footer-tagline">
        LET’S MAKE SOMETHING WEIRD TOGETHER
      </div>
    </footer>
  );
};

export default Footer;
