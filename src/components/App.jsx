import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import CurrentContext from "../contexts/CurrentContext";
import api from "../utils/api";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
