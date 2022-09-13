import abstra from "../../img/abstraction.png";
import ImgDesc from "../ImgDesc";
import NextEvent from "./NextEvent";

const MainPage = () => {
  return (
    <div>
      <section>
        <h2>Strona główna</h2>
        <img src={abstra} width="200px" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magnam
          aperiam rerum? Porro, quisquam? Eaque, labor-iosam atque deleniti,
          nihil quasi earum ex recusandae eligendi, id voluptas vero distinctio
          consequuntur molestiae.
        </p>
      </section>
      <section>
        <h3>Mój ostatni obraz:</h3>
        <ImgDesc />
      </section>
      <section>
        <h3>Najszybciej spotkasz mnie:</h3>
        <NextEvent eventName={`CarFest Bielsko-Biała`} />
      </section>
    </div>
  );
};
export default MainPage;
