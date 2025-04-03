import React from "react";
import placeholder from "../../../../Images/placeholder.jpg";

export default function Card({ card }) {
  console.log(card);
  {
    return (
      <div className="element">
        <div className="elements-card">
          <img
            src={card.primaryImage || { placeholder }}
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
