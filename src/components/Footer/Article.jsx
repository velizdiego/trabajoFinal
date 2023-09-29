const Article = (props) => {
    return (
        <><div className="feature col">
            <i className={props.icon} />
            <article className="footer-data">
                <h2>paga con targeta o efectivo</h2>
                <p>
                    tenes cuotas sin interes con tarjetas y descuentos en efectivo{" "}
                    <br />
                    sitio seguro para tus compras
                </p>
            </article>
            <a href="#" className="icon-link">
          Call to action
          <svg className="bi">
            <use xlinkHref="#chevron-right" />
          </svg>
        </a>
           
            </div></>
    );

}

export default Article;