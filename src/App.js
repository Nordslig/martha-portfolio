import { Fragment, useState } from "react";

import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import CurrentPage from "./components/CurrentPage";
import NavBar from "./components/navigation/NavBar";

import classes from "./App.module.css";
import Button from "./components/UI/Button";

import logo from "./img/logo.jpg";

function App() {
  const [actualPage, setActualPage] = useState("main");
  const [showNavMobile, setShowNavMobile] = useState(false);

  const navClickHandler = (title) => {
    setActualPage(title);
  };

  const showNav = () => {
    setShowNavMobile((prevShowNavMobile) => !prevShowNavMobile);
  };

  const hideNav = () => {
    setShowNavMobile(false);
  };

  return (
    <Fragment>
      <header>
        <img src={logo} alt="logo" width="40%" height="auto" />
        <Button
          value={showNavMobile ? faX : faBars}
          type="button"
          onClick={showNav}
        />
        <NavBar navShown={showNavMobile} onNavClick={navClickHandler} />
      </header>
      <CurrentPage page={actualPage} hideNav={hideNav} />
      <footer className={classes.footer} onClick={hideNav}>
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
    </Fragment>
  );
}

export default App;
