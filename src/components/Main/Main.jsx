import React, { useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import Card from "./components/card/Card";

export default function Main({ cards }) {
  const [preloader, setPreolader] = useState(false);
  console.log(cards);
  function handleSubmit(evt) {
    setPreolader(true);
  }
  return (
    <>
      <main className="content">
        <section className="search">
          <div className="search__container">
            <input
              className="search__input"
              placeholder="Buscar galeria, obra, autor, pintura..."
            ></input>
            <button className="search__button" onClick={handleSubmit}>
              Buscar
            </button>
          </div>
        </section>
        <section className="elements">
          {preloader ? (
            <Preloader />
          ) : (
            <>
              {cards.map((card, index) => {
                return <Card card={card} key={index} />;
              })}
            </>
          )}
        </section>
      </main>
    </>
  );
}
