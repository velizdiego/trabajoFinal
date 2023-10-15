import { Link } from "react-router-dom";

const CardsProducts = ({ product }) => {

    const imageUrl = `http://127.0.0.1:3003/images/${product.images}`
    return (
        <>
            <div className="product-container">
                <Link to={`/detail/${product._id}`}>
                    <div className="card-body">
                        <h5 className="card-detail-title">Nombre del Producto:{product.name}</h5>
                        <img src={imageUrl} className="card-img" alt="" />
                        <h6 className="product-detail">Precio:{product.price}</h6>
                        <p className="product-detail-description">Descripcion:{product.description}</p>
                        <p className="product-detail-title">{product.name}</p>
                        <p className="product-detail-price small">
                            <span>${product.price}</span>/<b>Descuento:{product.discount}%off</b>
                        </p>
                        <p className="product-detail-brand">Marca:{product.brand}</p>
                    </div>

                </Link>
            </div></>

    );
}
export default CardsProducts;







