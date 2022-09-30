import { Fragment } from "react";
import DisplayContent from "../UI/DisplayContent";
import classes from "./PortfolioPage.module.css";

const PortfolioPage = (props) => {
  return (
    <Fragment>
      {props.theme === "cars" ? (
        <Fragment>
          <section>
            <h2 className={classes.title}>Portfolio - motoryzacja</h2>
            <p className={classes["about-theme"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              magnam aperiam rerum? Porro, quisquam? Eaque, labor-iosam atque
              deleniti, nihil quasi earum ex recusandae eligendi, id voluptas
              vero distinctio consequuntur molestiae.
            </p>
          </section>
          <DisplayContent theme="cars" />
        </Fragment>
      ) : (
        <Fragment>
          <section>
            <h2 className={classes.title}>Portfolio - Abstrakcje</h2>
            <p className={classes["about-theme"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              magnam aperiam rerum? Porro, quisquam? Eaque, labor-iosam atque
              deleniti, nihil quasi earum ex recusandae eligendi, id voluptas
              vero distinctio consequuntur molestiae.
            </p>
          </section>
          <DisplayContent theme="abstra" />
        </Fragment>
      )}
    </Fragment>
  );
};
export default PortfolioPage;
