import React, { useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import CurrentContext from "../../contexts/CurrentContext";
import { useContext, Suspense, lazy } from "react";
const Card = lazy(() => import("./components/card/Card"));

export default function Main() {
  const [preloader, setPreolader] = useState(false);

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
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </>
          )}
        </section>
      </main>
    </>
  );
}
