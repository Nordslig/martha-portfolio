import { Fragment } from "react";
import classes from "../EventDesc.module.css";

import DisplayContent from "../UI/DisplayContent";

const EventsPage = () => {
  return (
    <Fragment>
      <section className={classes["event__intro"]}>
        <h2>Wydarzenia</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magnam
          aperiam rerum? Porro, quisquam? Eaque, labor-iosam atque deleniti,
          nihil quasi earum ex recusandae eligendi, id voluptas vero distinctio
          consequuntur molestiae.
        </p>
      </section>
      <DisplayContent theme="events" />
    </Fragment>
  );
};
export default EventsPage;
