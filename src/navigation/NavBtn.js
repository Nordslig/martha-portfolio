import NavBtnPortf from "./NavBtnPortf";

const NavBtn = (props) => {
  const titleClick = (e) => {
    if (e.target.textContent === "Strona główna") {
      props.titleClicked("main");
    } else if (e.target.textContent === "O mnie") {
      props.titleClicked("about");
    } else if (e.target.textContent === "Wydarzenia") {
      props.titleClicked("events");
    } else if (e.target.textContent === "Krawiectwo") {
      props.titleClicked("sewing");
    } else {
      props.titleClicked("p-cars");
    }
  };
  const portfolioTitleClick = (portfolioTitle) => {
    props.titleClicked(portfolioTitle === "p-cars" ? "p-cars" : "p-abstra");
  };

  return props.title === "Portfolio" ? (
    <NavBtnPortf title={props.title} portfolioChoice={portfolioTitleClick} />
  ) : (
    <li onClick={titleClick}>{props.title}</li>
  );
};

export default NavBtn;
