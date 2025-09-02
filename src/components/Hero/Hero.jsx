import './Hero.css';
import heroImg from '../../assets/images/HeroImg.jpg';

export default function Hero({ title = "I FIORI GIGANTI ", subtitle = "TRASFORMANO EVENTI ESCLUSIVI IN SCENOGRAFIE INDIMENTICABILI" }) {

    return (
        <section className="hero-section">
            <img src={heroImg} alt="Hero background" className="hero-bg" />
            <div className="hero-content container">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-subtitle">{subtitle}</p>
                <a href="#contact" className="btn btn-primary">Contattaci</a>
            </div>
        </section>
    );
}
