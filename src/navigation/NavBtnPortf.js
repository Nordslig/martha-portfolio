import { useState } from "react";

import car from "../img/car.png";
import abstra from "../img/abstraction.png";

const NavBtnPortf = (props) => {
  const [isHoverOn, setIsHoverOn] = useState(false);

  const hoverOnHandler = () => {
    setIsHoverOn(true);
  };
  const hoverOffHandler = () => {
    setIsHoverOn(false);
  };

  const portfolioClick = (e) => {
    e.target.classList.contains("cars-title")
      ? props.portfolioChoice("p-cars")
      : props.portfolioChoice("p-abstra");
  };

  return (
    <li onMouseEnter={hoverOnHandler} onMouseLeave={hoverOffHandler}>
      {props.title}
      {isHoverOn ? (
        <ul>
          <li onClick={portfolioClick} className="cars-title">
            <p className="cars-title">Auta</p>
            <img
              src={car}
              alt="samochód"
              width="10%"
              height="auto"
              className="cars-title"
            />
          </li>
          <li className="abstra-title" onClick={portfolioClick}>
            <p className="abstra-title">Abstrakcja</p>
            <img
              className="abstra-title"
              src={abstra}
              alt="abstrakcja"
              width="10%"
              height="auto"
            />
          </li>
        </ul>
      ) : (
        ""
      )}
    </li>
  );
};
export default NavBtnPortf;
