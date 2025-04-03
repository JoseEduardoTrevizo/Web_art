import React from "react";
import { useContext } from "react";
import renacimiento from "../../../../Images/Renacimiento.webp";

export default function Card() {
  return (
    <div className="element">
      <div className="elements-card">
        <img
          src={renacimiento}
          alt="renacimiento"
          className="elements-card__element"
          id="image_card"
        />
      </div>
      <div className="elements-name">
        <h2 className="elements-name__title">
          Titulo sdjlasjdlasjdllskajddfsfsd gdfgdsfsdfsdfsdfsdfds
        </h2>
      </div>
    </div>
  );
}
