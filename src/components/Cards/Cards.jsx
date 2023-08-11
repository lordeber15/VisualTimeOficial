import style from "./Cards.module.css";

function Cards() {
  return (
    <div className={style.container}>
      <strong className={style.service}>Servicios</strong>
      <div className={style.containerCards}>
        <div className={style.card} alt="imagem">
          <div className={style.cardText}>
            <strong className={style.titleCard}>Fotografia Pre-Natal</strong>
            <p className={style.description}>
              Has de tus momentos mas especiales
            </p>
          </div>
        </div>

        <div className={style.card1} alt="imagem">
          <div className={style.cardText}>
            <strong className={style.titleCard}>Fotografias Navideñas</strong>
            <p className={style.description}>
              Rememora las Fechas mas especiales de Año
            </p>
          </div>
        </div>
        <div className={style.card2} alt="imagem">
          <div className={style.cardText}>
            <strong className={style.titleCard}>
              Fotografias de Cumpleaños
            </strong>
            <p className={style.description}>
              En tu dia Especial estamos contigo
            </p>
          </div>
        </div>
        <div className={style.card3} alt="imagem">
          <div className={style.cardText}>
            <strong className={style.titleCard}>Fotografia Matrimonial</strong>
            <p className={style.description}>
              Por que cada momento es especial y nosotros lo sabemos
            </p>
          </div>
        </div>
        <div className={style.card4} alt="imagem">
          <div className={style.cardText}>
            <strong className={style.titleCard}>Fotografia Retrato</strong>
            <p className={style.description}>
              Tu eres la mejor version de ti mismo
            </p>
          </div>
        </div>
        <div className={style.card5} alt="imagem">
          <div className={style.cardText}>
            <strong className={style.titleCard}>
              Videografia y Transmisiones en vivo
            </strong>
            <p className={style.description}>
              Has de tus momentos mas especiales
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
