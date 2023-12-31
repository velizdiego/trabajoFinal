import { Link } from "react-router-dom";

const Articleb = (props) => {
  return (
    <div className="feature col">
      <i className={props.icon} />
      <article className="footer-data">
        <h2>Envios gratis apartir de 9999</h2>
        <p>
          registrandose optenes miles de veneficios <br />
          envios a todo el pais
        </p>
      </article>
      <Link to="#" className="icon-link">
        Call to action
        <svg className="bi">
          <use xlinkHref="#chevron-right" />
        </svg>
      </Link>
    </div>
  );

}

export default Articleb;