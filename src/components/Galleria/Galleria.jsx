import React, { useRef, useState, useEffect } from "react";
import "./Galleria.css";

import foto1 from "../../assets/images/foto1.jpg";
import foto2 from "../../assets/images/foto2.jpg";
import foto3 from "../../assets/images/foto3.jpg";
import foto4 from "../../assets/images/foto4.jpg";
import foto5 from "../../assets/images/foto5.jpg";
import foto6 from "../../assets/images/foto6.jpg";
import foto7 from "../../assets/images/foto7.jpg";
import foto8 from "../../assets/images/foto8.jpg";
import foto9 from "../../assets/images/foto9.jpg";
import foto10 from "../../assets/images/foto10.jpg";

export default function Galleria() {
  const immagini = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10];
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="galleria" className="galeria-wrapper">
      {showLeft && <button className="scroll-btn left" onClick={() => scroll("left")}>&lt;</button>}
      {showRight && <button className="scroll-btn right" onClick={() => scroll("right")}>&gt;</button>}
      <div className="galeria-container" ref={scrollRef}>
        <div className="galeria-scroll">
          {immagini.map((img, index) => (
            <div className="galeria-item" key={index}>
              <img src={img} alt={`Foto ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}