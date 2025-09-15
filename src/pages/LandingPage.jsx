import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import TextBlock from '../components/TextBlock/TextBlock';
import ImageBlock from '../components/ImageBlock/ImageBlock';
import ImageTextBlock from '../components/ImageTextBlock/ImageTextBlock';
import ContactForm from'../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Gallery/Gallery';

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero title="Titolo Principale" />
        <TextBlock id="about"  />
        <ImageBlock />
        <ImageTextBlock/>
        <Gallery />
        <ContactForm id="contact" />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;