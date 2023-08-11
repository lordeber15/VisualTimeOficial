import style from "./inicio.module.css";
import portada from "../../assets/DSC00620.jpg";
import logo from "../../assets/VisualTime_Original.png";

function Inicio() {
  return (
    <section className={style.container}>
      <img className={style.logo} src={logo} alt="Logo" />
      <img className={style.portada} src={portada} alt="Logo" />
      <h1 className={style.titulo}>
        Hacemos de tus momentos especiales
        <br />
        <strong className={style.frase}>inolvidables</strong>
      </h1>
    </section>
  );
}

export default Inicio;
