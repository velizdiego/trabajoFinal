const Articlec = (props) => {
  return (
    <div className="feature col">
      <i className={props.icon} />
      <article className="footer-data">
        <h2>Sitio 100% seguro </h2>
        <p>
          si no llego lo que esperabas, podes pedir devolucion , con respuesta inmediata
        </p>
      </article>
      <a href="/" className="icon-link">
        Call to action
        <svg className="bi">
          <use xlinkHref="#chevron-right" />
        </svg>
      </a>
    </div>
  );

}

export default Articlec;