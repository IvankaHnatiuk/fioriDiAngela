import React from "react";
import './ImageTextBlock.css';
import ImageAngela from '../../assets/images/Image2.jpg'

const ImageTextBlock = () => {
    return (
        <section id="product" className="image-text-block container">
            <div className="image-container">
                <img src={ImageAngela}
                    alt="Fiori giganti scenografici bianchi" />
            </div>
            <div className="text-container">
                <h2>Il cuore di I fiori di Angela</h2>
                <p>
                I fiori giganti sono sculture leggere, eleganti e sorprendenti, pensate per trasformare qualsiasi spazio in un esperienza unica.
                 Bianchi, colorati, luminosi o effimeri, si adattano a ogni contesto: eventi esclusivi, matrimoni, feste private, shooting fotografici, cosi come desing d'interni,
                 vetrine o giardini, portando sempre un tocco di magia e raffinatezza. <br />
                 Realizzati con materiali versatili, facili da pulire e manutenere. Fiori giganti possono essere personalizzati in dimensione, colore e luce, diventando veri protagonisti della scenografia.
                 Leggeri ma scenografici, evocano eleganza, arte e magia, trasformando ogni ambiente in un luogo dove la bellezza prende forma.
                 Non decorazioni, ma esperienze che restano nel cuore. 
                </p>
            </div>
        </section>
    );
}

export default ImageTextBlock;