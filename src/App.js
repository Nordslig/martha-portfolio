import React, { useState } from "react";

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
    <React.Fragment>
      <header>
        <img src={logo} alt="logo" width="auto" height="auto" />
      </header>
      <NavBar onNavClick={navClickHandler} />
      <CurrentPage page={actualPage} />
      <footer className={classes.footer}>
        <div className={classes["footer__contact"]}>
          <a href="https://www.instagram.com/marthano1/">Instagram</a>
          <a href="https://www.facebook.com/marthano1marthano1">Facebook</a>
        </div>
        <div className={classes["footer__contact"]}>
          <a href="tel:+532917446">Telefon</a>
          <a href="mailto: martu.matuszczyk@gmail.com">E-mail</a>
        </div>
        <p>&#169;Copyrights Martha Matuszczyk-Romańska</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
