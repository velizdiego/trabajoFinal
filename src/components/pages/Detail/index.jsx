import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();


    const getProduct = () => {
        fetch(`http://127.0.0.1:3003/products/detail/${id}`)
            .then(res => res.json())
            .then (product =>{
                setProduct(product);
    })
    .catch(error => console.log(error))
}
    useEffect(getProduct,[id]);

    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
            <img src={`http://127.0.0.1:3003/images/${product.images}`}alt="Producto"className="product-detail-img" ></img>
            </div>
            <div className="col-md-6">
                <div className="product-container">
                    <h1 className="product-title">Nombre del Producto:{product.name}</h1>
                  
            
                    <h2 className="product-detail-price">{product.price}</h2>
                    <p className="product-detail-description">{product.description}</p>
                    <p className="product-detail-title">{product.name}</p>
                    <p className="product-detail-price small">
                      <span>${product.price}</span>/<b>{product.discount}%off</b>
                    </p>
                    
                    <p className="product-detail-brand">brand:{product.brand}</p>
                   
                    <button className="btn btn-primary add-to-cart">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Detail;