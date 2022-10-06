import NavBtnPortf from "./NavBtnPortf";
import classes from "./NavBtn.module.css";

import { Fragment } from "react";

const NavBtn = (props) => {
  const titleClick = (e) => {
    props.hideNav(false);
    if (e.target.textContent === "Strona główna") {
      props.titleClicked("main");
    } else if (e.target.textContent === "O mnie") {
      props.titleClicked("about");
    } else if (e.target.textContent === "Wydarzenia") {
      props.titleClicked("events");
    } else if (e.target.textContent === "Fashion Design") {
      props.titleClicked("fashion");
    }
  };
  const portfolioTitleClick = (portfolioTitle) => {
    props.titleClicked(portfolioTitle === "p-cars" ? "p-cars" : "p-abstra");
  };

  return (
    <Fragment>
      {props.title === "Portfolio" ? (
        <NavBtnPortf
          title={props.title}
          portfolioChoice={portfolioTitleClick}
          className={classes["nav-btn"]}
          hideNav={props.hideNav}
        />
      ) : (
        <li className={classes["nav-btn"]} onClick={titleClick}>
          {props.title}
        </li>
      )}
    </Fragment>
  );
};

export default NavBtn;
