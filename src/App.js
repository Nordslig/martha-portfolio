import { useState } from "react";

import CurrentPage from "./components/CurrentPage";
import NavBar from "./components/navigation/NavBar";

import logo from "./img/logo.png";

import classes from "./App.module.css";

function App() {
  const [actualPage, setActualPage] = useState("main");

  const navClickHandler = (title) => {
    setActualPage(title);
  };

  return (
    <div style={{ minHeight: "150vh" }}>
      <header>
        <img src={logo} alt="logo" width="auto" height="auto" />
      </header>
      <NavBar onNavClick={navClickHandler} />
      <CurrentPage page={actualPage} />
      <footer className={classes["contact-footer"]}>
        <a href="https://www.instagram.com/marthano1/">Instagram</a>
        <a href="https://www.facebook.com/marthano1marthano1">Facebook</a>
        <p>&#169;Copyrights to Martha Matuszczyk-Romańska</p>
        <a href="tel:+532917446">Zadzwoń do mnie</a>
        <a href="mailto: martu.matuszczyk@gmail.com">Napisz do mnie</a>
      </footer>
    </div>
  );
}

export default App;
