import style from "./Clientes.module.css";

function Clientes() {
  return (
    <section className={style.container}>
      <div className={style.containerDetalles}>
        <div className={style.cardDetalles}>
          <strong className={style.titledetalle}>Fotográfias</strong>
          <p className={style.detallumeros}>+3M</p>
          <p className={style.detalles}>
            En nuestros 3 años como Fotografos hicimos mas de 3 Millones de
            Fotografias
          </p>
        </div>
        <div className={style.cardDetalles}>
          <strong className={style.titledetalle}>Sesiones Fotográficas</strong>
          <p className={style.detallumeros}>207</p>
          <p className={style.detalles}>
            Realizamos mas de 207 sesiones para nuestros clientes
          </p>
        </div>
        <div className={style.cardDetalles}>
          <strong className={style.titledetalle}>Clientes Satisfechos</strong>
          <p className={style.detallumeros}>150</p>
          <p className={style.detalles}>
            Hicimos felices a todos nuestros Clientes que confiaron en nosotros
            para sus proyectos
          </p>
        </div>
      </div>
    </section>
  );
}

export default Clientes;
