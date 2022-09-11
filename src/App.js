import { useState } from "react";

import CurrentPage from "./CurrentPage";
import NavBar from "./navigation/NavBar";

import logo from "./img/logo.png";

import "./App.css";

function App() {
  const [actualPage, setActualPage] = useState("main");

  const navClickHandler = (title) => {
    setActualPage(title);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" width="auto" height="auto" />
      </header>
      <NavBar onNavClick={navClickHandler} />
      <CurrentPage page={actualPage} />
      <footer>
        <a href="tel:+532917446">532 971 446</a>
        <a href="mailto: martu.matuszczyk@gmail.com">
          martu.matuszczyk@gmail.com
        </a>
        <a href="https://www.instagram.com/marthano1/">Instagram</a>
        <a href="https://www.facebook.com/marthano1marthano1">Facebook</a>
      </footer>
    </div>
  );
}

export default App;
