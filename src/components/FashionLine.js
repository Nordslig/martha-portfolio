import classes from "./FashionLine.module.css";

const FashionLine = (props) => {
  return (
    <article>
      <h3 className={classes.title}>{props.title}</h3>
      {/* <img /> */}
    </article>
  );
};

export default FashionLine;
