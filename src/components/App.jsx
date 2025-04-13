import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import api from "../utils/api";
import CurrentContext from "../contexts/CurrentContext";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getObject()
      .then((res) => {
        setCards(res);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <CurrentContext.Provider value={{ cards }}>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/search"
            element={<Main cards={cards} setCards={setCards} />}
          />
        </Routes>
        <Footer />
      </CurrentContext.Provider>
    </>
  );
}

export default App;
