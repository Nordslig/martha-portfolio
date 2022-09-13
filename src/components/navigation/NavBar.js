import NavBtn from "./NavBtn";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  const tabNames = [
    "Strona główna",
    "O mnie",
    "Portfolio",
    "Wydarzenia",
    "Fashion Design",
  ];

  const choosePageHandler = (title) => {
    props.onNavClick(title);
  };

  return (
    <nav>
      <ul className={classes["nav-bar"]}>
        <NavBtn title={tabNames[0]} titleClicked={choosePageHandler} />
        <NavBtn title={tabNames[1]} titleClicked={choosePageHandler} />
        <NavBtn title={tabNames[2]} titleClicked={choosePageHandler} />
        <NavBtn title={tabNames[3]} titleClicked={choosePageHandler} />
        <NavBtn title={tabNames[4]} titleClicked={choosePageHandler} />
      </ul>
    </nav>
  );
};

export default NavBar;
