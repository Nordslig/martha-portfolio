import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type}
      onClick={props.onClick}
      name={props.name}
    >
      <FontAwesomeIcon icon={props.value} />
    </button>
  );
};

export default Button;
