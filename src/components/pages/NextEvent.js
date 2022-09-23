import classes from "../EventDesc.module.css";

import event from "../../img/event.jpg";

const NextEvent = (props) => {
  return (
    <article className={classes.event}>
      <img src={event} width="270px" height="auto" alt="Event" />
      <div className={classes["event__title"]}>
        <h3>{props.eventName}</h3>
        <p>{props.date}</p>
      </div>
      <p>{props.eventDesc}</p>
    </article>
  );
};
export default NextEvent;
