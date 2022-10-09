import classes from "./FashionLine.module.css";

const FashionLine = (props) => {
  return (
    <article>
      <h3 className={classes.title}>{props.title}</h3>
      <p className={classes.text}>{props.text}</p>
      <div className={classes.gallery}>
        {props.images.map((image) => (
          <img
            src={image.image}
            key={Math.random()}
            width="50%"
            height="auto"
            alt="DUMMY IMG"
          />
        ))}
      </div>
    </article>
  );
};

export default FashionLine;
