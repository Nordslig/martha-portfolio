import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
// import PortfolioPageCars from "./pages/PortfolioPageCars.js";
// import PortfolioPageAbstra from "./pages/PortfolioPageAbstra";
import EventsPage from "./pages/EventsPage";
import SewingPage from "./pages/SewingPage";
import PortfolioPage from "./pages/PortfolioPage";

const CurrentPage = (props) => {
  return (
    <main>
      {props.page === "main" ? <MainPage /> : ""}
      {props.page === "about" ? <AboutPage /> : ""}
      {props.page === "p-cars" ? <PortfolioPage theme="cars" /> : ""}
      {props.page === "p-abstra" ? <PortfolioPage theme="abstra" /> : ""}
      {props.page === "events" ? <EventsPage /> : ""}
      {props.page === "sewing" ? <SewingPage /> : ""}
    </main>
  );
};

export default CurrentPage;
