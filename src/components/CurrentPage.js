import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
// import PortfolioPageCars from "./pages/PortfolioPageCars.js";
// import PortfolioPageAbstra from "./pages/PortfolioPageAbstra";
import EventsPage from "./pages/EventsPage";
import PortfolioPage from "./pages/PortfolioPage";
import FashionDesignPage from "./pages/FashionDesignPage";

const CurrentPage = (props) => {
  return (
    <main onClick={props.hideNav}>
      {props.page === "main" ? (
        <MainPage />
      ) : props.page === "about" ? (
        <AboutPage />
      ) : props.page === "p-cars" ? (
        <PortfolioPage theme="cars" />
      ) : props.page === "p-abstra" ? (
        <PortfolioPage theme="abstra" />
      ) : props.page === "events" ? (
        <EventsPage />
      ) : props.page === "fashion" ? (
        <FashionDesignPage />
      ) : (
        ""
      )}
    </main>
  );
};

export default CurrentPage;
