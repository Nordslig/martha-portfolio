import NavBtn from "./NavBtn";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  const navVisible = `${classes["nav-list"]} ${
    props.navShown ? `${classes.shown}` : `${classes.hide}`
  }`;

  return (
    <nav className={classes["nav-bar"]}>
      <ul className={navVisible}>
        <NavBtn
          title={"Strona główna"}
          titleClicked={props.onNavClick}
          hideNav={props.hideNav}
        />
        <NavBtn
          title={"O mnie"}
          titleClicked={props.onNavClick}
          hideNav={props.hideNav}
        />
        <NavBtn
          title={"Portfolio"}
          titleClicked={props.onNavClick}
          hideNav={props.hideNav}
        />
        <NavBtn
          title={"Wydarzenia"}
          titleClicked={props.onNavClick}
          hideNav={props.hideNav}
        />
        <NavBtn
          title={"Fashion Design"}
          titleClicked={props.onNavClick}
          hideNav={props.hideNav}
        />
      </ul>
    </nav>
  );
};

export default NavBar;
