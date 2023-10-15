import Search from "./Search";
import Article from "./Article";

const Home = () => {
  return (
    <><div id="carouselE" className="carousel slide " data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselE"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="slide1" />
        <button
          type="button"
          data-bs-target="#carouselE"
          data-bs-slide-to={1}
          aria-current="true"
          aria-label="slide2" />
        <button
          type="button"
          data-bs-target="#carouselE"
          data-bs-slide-to={2}
          aria-current="true"
          aria-label="slide3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="images/fondo3a.jpg"
            className="d-block w-100"
            alt="" />
          <div className="carousel-caption">
            <h1>
              {" "}
              <strong>¡Bienvenidos a la tienda online " GAME of STORE" !. </strong>
            </h1>


          </div>
        </div>
        <div className="carousel-item ">
          <img
            src="images/8842-juego-de-tronos.jpg"
            className="d-block w-100"
            alt="" />
          <div className="carousel-caption">
            <h3>Aqui encotraras una amplia seleccion de articulos relacionados con la
              saga "games of thrones" .</h3>
          </div>
        </div>
        <div className="carousel-item ">
          <img
            src="images/fondo brillo1.jpg"
            className="d-block w-100"
            alt="" />
          <div className="carousel-caption">
            <h4>  Nuestra tienda ofrece una amplia gama de productos que transportaran
              al facinante mundo de westeros y mas alla, <br />
              dentro de nuestros catalgos prodras encontrar gran variadad de
              productos.</h4>


          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselE"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previus</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselE"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      <Search
        icon="text-rigth mb-4" />
      <Article
        icon="box" />

      <section>
        <h3> Nuestras redes </h3><br />
        <div className="contacto-redes">

          <i className="fa-brands fa-facebook" />
          <a href="https://facebook.com">facebook</a><br />
          <i className="fa-brands fa-instagram" />
          <a href="https://instagram.com">instagram</a><br />
          <i className="fa-brands fa-twitter" />
          <a href="https://twitter.com">twitter</a><br />

        </div>
      </section>
      <>



      </></>
  );
}





export default Home;