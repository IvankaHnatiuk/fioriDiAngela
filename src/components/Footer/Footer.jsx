import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import Logo from "../../assets/images/Logo.jpg"; 

function Footer() {
  return (
    <footer>
      <div className="footer-columns">
        {/* Logo */}
        <div className="footer-column footer-logo">
          <img src={Logo} alt="Fiori di Angela Logo" className="logo" />
          <p>Decorazioni floreali giganti per eventi, matrimoni e vetrine.</p>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contattami</h4>
          <p>Email: angela.scutelnic@live.it</p>
          <p>Tel: +39 320 030 4587</p>
          <p>Vicolo Monte delle Capre 5, Roma, Italia</p>
        </div>

        {/* Social */}
        <div className="footer-column">
          <h4>Seguimi</h4>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/ifioridiangela.roma"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/ifioridiangela.roma"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Fiori di Angela. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}

export default Footer;