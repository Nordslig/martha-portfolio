import classes from "./AboutPage.module.css";
import bout1 from "../../img/bout1.jpg";

const AboutPage = () => {
  return (
    <div className={classes.about}>
      <section className={classes["about__short-description"]}>
        <h3>O mnie</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src={bout1} width="50%" height="auto" alt="DUMMY PIC" />
        <div className="line" />
      </section>
      <section className={classes["about__painting"]}>
        <h3>Ja i malarstwo</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src={bout1} width="50%" height="auto" alt="DUMMY PIC" />
      </section>
      <div className="line" />
      <section className={classes["about__me"]}>
        <h3>Jak się tu znalazłam</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src={bout1} width="50%" height="auto" alt="DUMMY PIC" />
      </section>
      <div className="line" />
    </div>
  );
};
export default AboutPage;
