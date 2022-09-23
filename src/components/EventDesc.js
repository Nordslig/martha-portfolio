const EventDesc = (props) => {
  return (
    <article>
      <h3>{props.eventName}</h3>
      <p>{props.eventDesc}</p>
      <span>{props.date}</span>
    </article>
  );
};
export default EventDesc;
