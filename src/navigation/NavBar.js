import NavBtn from "./NavBtn";

const NavBar = (props) => {
  const tabNames = [
    "Strona główna",
    "O mnie",
    "Portfolio",
    "Wydarzenia",
    "Krawiectwo",
  ];

  const choosePageHandler = (title) => {
    props.onNavClick(title);
  };

  return (
    <nav>
      <ul>
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
