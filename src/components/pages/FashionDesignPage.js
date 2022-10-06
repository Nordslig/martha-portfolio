import FashionLine from "../FashionLine";
import classes from "./FashionDesignPage.module.css";

const FashionDesignPage = () => {
  return (
    <div className={classes.fashion}>
      <h2>Fashion Designer</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis
        imperdiet massa tincidunt. Massa vitae tortor condimentum lacinia quis
        vel eros donec ac. Venenatis urna cursus eget nunc scelerisque viverra
        mauris. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
      </p>
      <FashionLine title="Sarsa" />
      <FashionLine title="Fit Lovers" />
      <FashionLine title="Top Model" />
      <FashionLine title="Elle (Bułgarskie)" />
    </div>
  );
};
export default FashionDesignPage;
