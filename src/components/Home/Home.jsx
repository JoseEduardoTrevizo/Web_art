import React from "react";
import David from "../../Images/David.jpg";
import Napoleon from "../../Images/Bonaparte.jpg";
import Cena from "../../Images/ultima_cena.jpg";
import Venus from "../../Images/Nacimiento_venus.jpg";
import Terraza from "../../Images/Terraza.webp";
import Meninas from "../../Images/meninas.jpg";

export default function Gallery() {
  return (
    <>
      <div className="home">
        <div className="gallery__container">
          <img src={David} className="image__david" />
          <img src={Napoleon} className="image__napoleon" />
          <img src={Cena} className="image__anunciacion" />
          <img src={Venus} className="image__venus" />
          <img src={Terraza} className="image__terraza" />
          <img src={Meninas} className="image__meninas" />
        </div>
        <div className="about__container">
          <h2 className="about__title">Sobre el rpoyecto</h2>
          <p className="about__text">
            Arte digital es una plataforma diseñada para dar visibilidad a
            galerías de arte e historia. Nuestro objetivo es potenciar el acceso
            al arte y fortalecer la comunidad artística, en colaboracion con el
            Museo Metropolitano de Arte que ofrece conjuntos de datos selectos
            con información sobre más de 470.000 obras de arte de su Colección
            para uso comercial de más de 5000 años de arte de todo el mundo para
            que todos puedan experimentarlo y disfrutarlo.
          </p>
          <p className="about__text">
            Desde su fundación en 1870, el Met siempre ha aspirado a ser más que
            un simple tesoro de objetos raros y hermosos. Cada día, el arte
            cobra vida en las galerías del Museo y a través de sus exposiciones
            y eventos, revelando nuevas ideas y conexiones inesperadas a través
            del tiempo y las culturas.
          </p>
        </div>
      </div>
    </>
  );
}
