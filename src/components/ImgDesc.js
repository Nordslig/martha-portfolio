import classes from "./ImgDesc.module.css";

const ImgDesc = (props) => {
  return (
    <article className={classes.painting}>
      <img
        src={props.image}
        alt={props.altText}
        width={props.orientation === "ver" ? "100px" : "500px"}
        height={props.orientation === "ver" ? "150px" : "300px"}
      />
      <section className={classes["img-description"]}>
        <div className={classes["img-description__title"]}>
          <h3>{props.imgTitle}</h3>
          <p>{props.date}</p>
        </div>
        <span>{props.size}</span>
        <p>{props.desc}</p>
      </section>
      <div className="line"></div>
    </article>
  );
};
export default ImgDesc;
