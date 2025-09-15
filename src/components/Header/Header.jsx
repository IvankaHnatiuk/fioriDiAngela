import { useState } from 'react';
import './Header.css';
import Logo from '../../assets/images/Logo.jpg';

export default function Header() {
  const [isOpen, setIsOpen]= useState(false);
  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={Logo} alt="Fiori di Angela Logo" className="header-logo" />
      </div>
       <nav className={`header-nav ${isOpen ? "open" : ""}`}>
        <a href="#about"onClick={()=>setIsOpen(false)}>La mia storia</a>
        <a href="#product"onClick={()=>setIsOpen(false)}>Prodotto</a>
        <a href="#gallery"onClick={()=>setIsOpen(false)}>Galleria</a>
        <a href="#contact"onClick={()=>setIsOpen(false)}>Contatti</a>
      </nav>
       <button 
        className={`mobile-menu-button ${isOpen ? "open" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Apri/Chiudi menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
