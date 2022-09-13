import EventDesc from "../EventDesc";
import ImgDesc from "../ImgDesc";

const DisplayContent = (props) => {
  const arr = [60, 25, 38];
  const objArr = [
    { imgTitle: "BMW", size: "50x50", desc: "Obraz BMW z serii LEGENDS" },
    {
      imgTitle: "Audi",
      size: "70x50",
      desc: "Obraz Audi wykonany na zamówienie",
    },
    {
      imgTitle: "Volvo",
      size: `${arr[2]}cm x ${arr[0]}cm`,
      desc: "Obraz Volvo wykonany na zamówienie",
    },
  ];
  const arr2 = [4, 15, 63];
  const objArr2 = [
    {
      imgTitle: "Abstra1",
      size: "50x50",
      desc: "Obraz ABSTRA z serii EVERYDAY DAY",
    },
    {
      imgTitle: "Abstra2",
      size: "70x50",
      desc: "Obraz Audi wykonany na zamówienie",
    },
    {
      imgTitle: "Abstra3",
      size: `${arr2[2]}cm x ${arr2[2]}cm`,
      desc: "Obraz Volvo wykonany na zamówienie",
    },
  ];
  const objArr3 = [
    {
      eventName: "Car Fest",
      date: "5/4/2022",
      desc: "AUTA WYSTAWA",
    },
    {
      eventName: "Moto Show",
      date: "10/4/2021",
      desc: "AUTA WYSTAWA",
    },
    {
      eventName: "GALERIA",
      date: "20/7/2020",
      desc: "Galeria wystawa",
    },
    {
      eventName: "GALERIA",
      date: "20/7/2020",
      desc: "Galeria wystawa",
    },
  ];

  return (
    <section>
      {props.theme === "cars"
        ? objArr.map((obj) => {
            return (
              <ImgDesc
                imgTitle={obj.imgTitle}
                size={obj.size}
                desc={obj.desc}
              />
            );
          })
        : props.theme === "abstra"
        ? objArr2.map((obj) => {
            return (
              <ImgDesc
                imgTitle={obj.imgTitle}
                size={obj.size}
                desc={obj.desc}
              />
            );
          })
        : props.theme === "events"
        ? objArr3.map((obj) => {
            return (
              <EventDesc
                eventName={obj.eventName}
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
