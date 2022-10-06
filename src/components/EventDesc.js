import { Fragment } from "react";
import classes from "./EventDesc.module.css";

const EventDesc = (props) => {
  return (
    <Fragment>
      <article className={classes.event}>
        <h3>{props.eventName}</h3>
        <img src={props.image} width="80%" height="auto" alt="dummy" />
        <p>{props.desc}</p>
        <span>{props.date}</span>
      </article>
      <div className="line"></div>
    </Fragment>
  );
};
export default EventDesc;
