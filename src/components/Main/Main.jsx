import React from "react";
import Card from "./components/card/Card";
import CurrentContext from "../../contexts/CurrentContext";
import { useContext } from "react";

export default function Main() {
  return (
    <>
      <main className="content">
        <section className="search">
          <div className="search__container">
            <input
              className="search__input"
              placeholder="Buscar galeria, obra, autor, pintura..."
            ></input>
            <button className="search__button">Buscar</button>
          </div>
        </section>
        <section className="elements">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  );
}
