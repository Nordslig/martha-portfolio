const ImgDesc = (props) => {
  return (
    <article>
      <img src={props.image} alt={props.altText} />
      <section>
        <h3>{props.imgTitle}</h3>
        <span>{props.size}</span>
        <p>{props.desc}</p>
      </section>
    </article>
  );
};
export default ImgDesc;
