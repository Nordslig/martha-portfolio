import NavBtn from "./NavBtn";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  // const navVisible = {classes['nav-list']}
  const navVisible = `${classes["nav-list"]} ${
    props.navShown ? `${classes.shown}` : `${classes.hide}`
  }`;

  return (
    <nav className={classes["nav-bar"]}>
      <ul className={navVisible}>
        <NavBtn title={"Strona główna"} titleClicked={props.onNavClick} />
        <NavBtn title={"O mnie"} titleClicked={props.onNavClick} />
        <NavBtn title={"Portfolio"} titleClicked={props.onNavClick} />
        <NavBtn title={"Wydarzenia"} titleClicked={props.onNavClick} />
        <NavBtn title={"Fashion Design"} titleClicked={props.onNavClick} />
      </ul>
    </nav>
  );
};

export default NavBar;
