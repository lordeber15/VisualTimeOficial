import style from "./Galeria.module.css";
import Cards from "../Cards/Cards";

function Galeria() {
  return (
    <section className={style.container}>
      <Cards />;
    </section>
  );
}

export default Galeria;
