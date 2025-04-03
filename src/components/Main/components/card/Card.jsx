import React from "react";
import { useContext } from "react";
import CurrentContext from "../../../../contexts/CurrentContext";
import renacimiento from "../../../../Images/Renacimiento.webp";

export default function Card({ card }) {
  console.log(card);
  {
    return (
      <div className="element">
        <div className="elements-card">
          <img
            src={card.primaryImage}
            alt={card.title}
            className="elements-card__element"
            id="image_card"
          />
        </div>
        <div className="elements-name">
          <h2 className="elements-name__title">{card.title}</h2>
        </div>
      </div>
    );
  }
}
