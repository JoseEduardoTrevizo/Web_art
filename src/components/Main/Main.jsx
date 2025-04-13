import React, { useRef, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import Card from "./components/card/Card";
import api from "../../utils/api";

export default function Main({ cards, setCards }) {
  const [preloader, setPreolader] = useState(false);
  const inputRef = useRef();

  const handleSearch = (evt) => {
    const searchValue = inputRef.current.value;
    //mandar el dato search value a API
    setPreolader(true);
    api
      .getSearch(searchValue)
      .then((res) => {
        setCards(res);
        setPreolader(false);
        setResult(res);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <main className="content">
        <section className="search">
          <div className="search__container">
            <input
              className="search__input"
              placeholder="Buscar galeria, obra, autor, pintura..."
              ref={inputRef}
            ></input>
            <button className="search__button" onClick={handleSearch}>
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
