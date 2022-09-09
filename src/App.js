import NavBar from "./navigation/NavBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Martha No 1</h1>
      </header>
      <nav>
        <NavBar />
      </nav>
      <main>{/* <CurrentPage /> */}</main>
      <footer>
        <a href="tel:+532917446">532 971 446</a>
      </footer>
    </div>
  );
}

export default App;
