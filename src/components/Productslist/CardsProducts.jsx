import { useRef } from "react";
import { Link } from "react-router-dom";


const CardsProducts = ({product, cart , setCart}) => {
    const button = useRef();
    const imageUrl = `http://127.0.0.1:3003/images/${product.images}`
                        
    const addToCart =() => {
        console.log(button.current._id);
        console.log("estamos agregando al carrito");
        const carNew = [
            ...cart,
            button.current.id
        ]
        setCart(carNew)
            
    }
    return (   
        
          <div className="col-12 col-sm-6 col-lg-3">
            < section className="product-box">
            
            <div className="card-body"/>
            <Link to={`/detail/${product._id}`}>
                <figure className="product-box_image">
                <img
                 src={imageUrl}
                 
                  className="product-image"
                   alt="IMAGEN DE PRODUCTO" /> 
                </figure>
                <article className="product-box-data">
                    <h2>{product.price}</h2>
                    <span>{product.discount}</span>
                    <p>{product.name}</p>
                    <i className="fas fa-truck"></i>
                </article>
                </Link>
                <button id={product.id} onClick={addToCart}>add to cart</button>
                </section>
                </div>
            
                
            
    );
}

            export default CardsProducts;
