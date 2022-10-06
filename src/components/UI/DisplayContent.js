import allImg from "../AllImages";
import EventDesc from "../EventDesc";
import ImgDesc from "../ImgDesc";

import classes from "./DisplayContent.module.css";

const DisplayContent = (props) => {
  const arr = [60, 25, 38];
  const objArr = [
    {
      image: allImg[0],
      imgTitle: "BMW",
      size: "50cm x 50cm",
      desc: "Obraz BMW z serii LEGENDS",
      date: "20/4/2021",
    },
    {
      image: allImg[1],
      imgTitle: "Audi",
      size: "70cm x 50cm",
      desc: "Obraz Audi wykonany na zamówienie",
      date: "20/4/2021",
    },
    {
      image: allImg[2],
      imgTitle: "Volvo",
      size: `${arr[2]}cm x ${arr[0]}cm`,
      desc: "Obraz Volvo wykonany na zamówienie",
      date: "20/4/2021",
    },
    {
      image: allImg[3],
      imgTitle: "Volvo",
      size: `${arr[2]}cm x ${arr[0]}cm`,
      desc: "Obraz Volvo wykonany na zamówienie",
      date: "20/4/2021",
    },
    {
      image: allImg[3],
      imgTitle: "Volvo",
      size: `${arr[2]}cm x ${arr[0]}cm`,
      desc: "Obraz Volvo wykonany na zamówienie",
      date: "20/4/2021",
    },
  ];
  const arr2 = [4, 15, 63];
  const objArr2 = [
    {
      image: allImg[0],
      imgTitle: "Abstra1",
      size: "50cm x 50cm",
      desc: "Obraz ABSTRA z serii EVERYDAY DAY",
      date: "20/4/2021",
    },
    {
      image: allImg[1],
      imgTitle: "Abstra2",
      size: "70cm x 50cm",
      desc: "Obraz Audi wykonany na zamówienie",
      date: "20/4/2021",
    },
    {
      image: allImg[2],
      imgTitle: "Abstra3",
      size: `${arr2[2]}cm x ${arr2[2]}cm`,
      desc: "Obraz Volvo wykonany na zamówienie",
      date: "20/4/2021",
    },
  ];
  const objArr3 = [
    {
      image: allImg[0],
      eventName: "Car Fest",
      date: "5/4/2022",
      desc: "AUTA WYSTAWA",
    },
    {
      image: allImg[1],
      eventName: "Moto Show",
      date: "10/4/2021",
      desc: "AUTA WYSTAWA",
    },
    {
      image: allImg[2],
      eventName: "GALERIA",
      date: "20/7/2020",
      desc: "Galeria wystawa",
    },
    {
      image: allImg[1],
      eventName: "GALERIA",
      date: "20/7/2020",
      desc: "Galeria wystawa",
    },
  ];

  return (
    <section className={classes.portfolio}>
      {props.theme === "cars"
        ? objArr.map((obj) => {
            return (
              <ImgDesc
                image={obj.image}
                imgTitle={obj.imgTitle}
                size={obj.size}
                desc={obj.desc}
                date={obj.date}
              />
            );
          })
        : props.theme === "abstra"
        ? objArr2.map((obj) => {
            return (
              <ImgDesc
                image={obj.image}
                imgTitle={obj.imgTitle}
                size={obj.size}
                desc={obj.desc}
                date={obj.date}
              />
            );
          })
        : props.theme === "events"
        ? objArr3.map((obj) => {
            return (
              <EventDesc
                eventName={obj.eventName}
                image={obj.image}
                date={obj.date}
                desc={obj.desc}
              />
            );
          })
        : ""}
    </section>
  );
};
export default DisplayContent;
