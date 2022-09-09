const NavBar = () => {
  const choosePageHandler = (e) => {
    // console.log(e);
    console.log(e.target.textContent);
  };

  return (
    <div>
      <ul>
        <li onClick={choosePageHandler}>Strona główna</li>
        <li onClick={choosePageHandler}>O mnie</li>
        <li onClick={choosePageHandler}>Portfolio</li>
        <li onClick={choosePageHandler}>Gdzie mnie znaleźć</li>
      </ul>
    </div>
  );
};

export default NavBar;
