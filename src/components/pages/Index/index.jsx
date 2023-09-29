import Search from "./Search";
import Article from "./Article";
import { Link } from "react-router-dom";

const Index = () => {
  return (

    <><><div id="carouselE" className="carousel slide " data-bs-ride="carousel" /><div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselE" data-bs-slide-to={0} className="active" aria-current="true" aria-label="slide1" />
      <button type="button" data-bs-target="#carouselE" data-bs-slide-to={1} aria-current="true" aria-label="slide2" />
      <button type="button" data-bs-target="#carouselE" data-bs-slide-to={2} aria-current="true" aria-label="slide3" />
    </div><><div className="carousel-inner">
      
      <div className="carousel-item active">
        <img src="images/fondo3a.jpg" className="d-block w-100" alt="" />
        <div className="carousel-caption">
          <h5> <strong>¡Bienvenidos a la tienda online " GAME of STORE" !. </strong></h5>
          <p>Aqui encotraras una amplia seleccion de articulos relacionados con la saga "games of thrones" .
            <br />
            Nuestra tienda ofrece una amplia gama de productos que transportaran al facinante mundo de
            westeros y mas alla, <br />
            dentro de nuestros catalgos prodras encontrar gran variadad de productos.
          </p>
          <Link to="#" className="btn btn-primary mt-3">Info</Link>
        </div>
      </div>
      <div className="carousel-item ">
        <img src="images/8842-juego-de-tronos.jpg" className="d-block w-100" alt="" />
        <div className="carousel-caption">
          <h5>home</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, expedita ipsum ea consequuntur
            dolorum hic possimus dolores harum vitae soluta veritatis, tempore, eligendi consectetur
            repellendus! Rerum ipsam non deleniti laboriosam?
          </p>
          <Link to="#" className="btn btn-primary mt-3">Info</Link>
        </div>
      </div>
      <div className="carousel-item ">
        <img src="images/fondo brillo1.jpg" className="d-block w-100" alt="" />
        <div className="carousel-caption">
          <h5>home</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, expedita ipsum ea consequuntur
            dolorum hic possimus dolores harum vitae soluta veritatis, tempore, eligendi consectetur
            repellendus! Rerum ipsam non deleniti laboriosam?
          </p>
          <Link to="#" className="btn btn-primary mt-3">Info</Link>
        </div>
      </div>
      {/*carousel boton flecha next y previus*/}
    </div><button className="carousel-control-prev" type="button" data-bs-target="#carouselE" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previus</span>
        </button><button className="carousel-control-next" type="button" data-bs-target="#carouselE" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
        <Search
          icon="text-rigth mb-4" /></></><>
        <Article
          icon="box" />

        <section className="about section-padding" />
      </></>

  );
}





export default Index;