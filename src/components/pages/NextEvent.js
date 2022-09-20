import event from "../../img/event.jpg";

const NextEvent = (props) => {
  return (
    <article>
      <img src={event} width="100px" height={"auto"} />
      <h4>{props.eventName}</h4>
      <p>{props.eventDesc}</p>
      <span>{props.date}</span>
    </article>
  );
};
export default NextEvent;
