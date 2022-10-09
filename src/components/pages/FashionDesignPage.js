import FashionLine from "../FashionLine";

import duck from "../../img/duck.jpg";
import duck2 from "../../img/duck2.jpg";

import classes from "./FashionDesignPage.module.css";

const FashionDesignPage = () => {
  const ducks = [
    { image: duck },
    { image: duck2 },
    { image: duck2 },
    { image: duck },
  ];

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
      <FashionLine
        title="Sarsa"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo."
        images={ducks}
      />
      <FashionLine
        title="Fit Lovers"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo."
        images={ducks}
      />
      <FashionLine
        title="Top Model"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo."
        images={ducks}
      />
      <FashionLine
        title="Elle (Bułgarskie)"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo."
        images={ducks}
      />
    </div>
  );
};
export default FashionDesignPage;
