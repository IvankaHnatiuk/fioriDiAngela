import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import TextBlock from './components/TextBlock/TextBlock';
import ImageBlock from './components/ImageBlock/ImageBlock';
import ImageTextBlock from './components/ImageTextBlock/ImageTextBlock';
import Galleria from './components/Galleria/Galleria'
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <TextBlock />
      <ImageBlock />
      <ImageTextBlock />
      <Galleria />
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App