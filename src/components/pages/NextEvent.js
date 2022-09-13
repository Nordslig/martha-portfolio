const NextEvent = (props) => {
  return (
    <article>
      <h4>{props.eventName}</h4>
      <p>{props.eventDesc}</p>
      <span>{props.date}</span>
    </article>
  );
};
export default NextEvent;
