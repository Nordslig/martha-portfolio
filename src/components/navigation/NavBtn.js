import NavBtnPortf from "./NavBtnPortf";
import classes from "./NavBtn.module.css";

const NavBtn = (props) => {
  const titleClick = (e) => {
    if (e.target.textContent === "Strona główna") {
      props.titleClicked("main");
    } else if (e.target.textContent === "O mnie") {
      props.titleClicked("about");
    } else if (e.target.textContent === "Wydarzenia") {
      props.titleClicked("events");
    } else if (e.target.textContent === "Fashion Design") {
      props.titleClicked("sewing");
    }
  };
  const portfolioTitleClick = (portfolioTitle) => {
    props.titleClicked(portfolioTitle === "p-cars" ? "p-cars" : "p-abstra");
  };

  return props.title === "Portfolio" ? (
    <NavBtnPortf
      title={props.title}
      portfolioChoice={portfolioTitleClick}
      className={classes["nav-btn"]}
    />
  ) : (
    <li className={classes["nav-btn"]} onClick={titleClick}>
      {props.title}
    </li>
  );
};

export default NavBtn;
