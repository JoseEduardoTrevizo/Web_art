import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container__header">
        <h1 className="title">Arte Digital</h1>
        <div className="nav__bar">
          <NavLink to="/home" className="nav__home">
            Home
          </NavLink>
          <NavLink to="/search" className="nav__search">
            Search
          </NavLink>
        </div>
      </div>
    </header>
  );
}
