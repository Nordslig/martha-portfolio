import { useState } from "react";
import classes from "./NavBtnPortf.module.css";

import car from "../../img/car.png";
import abstra from "../../img/abstraction.png";

const NavBtnPortf = (props) => {
  const [isHoverOn, setIsHoverOn] = useState(false);

  const hoverOnHandler = () => {
    setIsHoverOn(true);
  };
  const hoverOffHandler = () => {
    setIsHoverOn(false);
  };

  const portfolioClick = (e) => {
    props.hideNav(false);
    if (e.target.classList.contains("cars-title")) {
      props.portfolioChoice("p-cars");
    } else if (e.target.classList.contains("abstra-title")) {
      props.portfolioChoice("p-abstra");
    }
  };

  return (
    <li
      onMouseEnter={hoverOnHandler}
      onMouseLeave={hoverOffHandler}
      className={`${classes["btn-portf"]} ${props.className}`}
    >
      {props.title}
      {isHoverOn ? (
        <ul className={classes["btn-portf__choice-box"]}>
          <li
            className={`cars-title ${classes["btn-portf__choice"]}`}
            onClick={portfolioClick}
          >
            <p className="cars-title">Auta</p>
            <img
              src={car}
              alt="samochód"
              height="auto"
              width="100%"
              className={`cars-title ${classes["btn-portf__choice-img"]}`}
            />
          </li>
          <li
            className={`abstra-title ${classes["btn-portf__choice"]}`}
            onClick={portfolioClick}
          >
            <p className="abstra-title">Abstrakcja</p>
            <img
              className={`abstra-title ${classes["btn-portf__choice-img"]}`}
              src={abstra}
              alt="abstrakcja"
              width="100%"
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
