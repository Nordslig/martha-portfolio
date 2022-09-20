import React from "react";
import abstra from "../../img/abstraction.png";
import lambo from "../../img/lambo.jpg";
import ImgDesc from "../ImgDesc";
import NextEvent from "./NextEvent";

import classes from "./MainPage.module.css";

const MainPage = () => {
  return (
    <React.Fragment>
      <section>
        <h2>Ja jestem Marta i witam Cię na mojej stronie :D </h2>
        <img src={abstra} width="150px" height="200px" alt="Marta profilowe" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magnam
          aperiam rerum? Porro, quisquam? Eaque, labor-iosam atque deleniti,
          nihil quasi earum ex recusandae eligendi, id voluptas vero distinctio
          consequuntur molestiae.
        </p>
      </section>
      <section className={classes["last-img"]}>
        <h3>Mój ostatni obraz:</h3>
        <ImgDesc
          image={lambo}
          altText="Ferrari F40"
          imgTitle="Ferrari F40"
          size="60x80 cm, akryl na płótnie"
          desc="Ferrari F40 z kolekcji LEGENDS DUMMY TEXT DUMMY TEXT DUMMY TEXT"
          orientation="ver"
          date="4/6/2022"
        />
      </section>
      <section>
        <h3>Najszybciej spotkasz mnie:</h3>
        <NextEvent
          eventName={`CarFest Bielsko-Biała`}
          eventDesc="CAR FEST DUMMY TEXT CAR FEST DUMMY TEXT"
          date="20/12/2024"
        />
      </section>
    </React.Fragment>
  );
};
export default MainPage;
