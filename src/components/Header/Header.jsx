import './Header.css';
import Logo from '../../assets/images/Logo.jpg';

export default function Header() {
  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={Logo} alt="Fiori di Angela Logo" className="header-logo" />
      </div>
      <nav className="header-nav">
        <a href="#about">La mia storia</a>
        <a href="#product">Prodotto</a>
        <a href="#galleria">Galleria</a>
        <a href="#contact">Contatti</a>
      </nav>
      <button className="mobile-menu-button">Menu</button>
    </header>
  );
}
