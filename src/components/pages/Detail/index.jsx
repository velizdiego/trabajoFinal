import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Detail = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();


    const getProduct = () => {
        fetch(`http://127.0.0.1:3003/products/detail/${id}`)
            .then(res => res.json())
            .then(product => {
                setProduct(product);
            })
            .catch(error => console.log(error))
    }
    useEffect(getProduct, [id]);
     console.log(`http://127.0.0.1:3003/images/${product.images}`);
    return (
        <div className="product-container">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className=" mb-3" Style="max-width: 10rem;">
                            <div className="card-body">
                                <h5 className="card-detail-title">Nombre del Producto:{product.name}</h5>
                                <img src={`http://127.0.0.1:3003/images/${product.images}`} alt="Producto" className="card-img" ></img>

                                <h6 className="product-detail">Precio:{product.price}</h6>
                                <p className="product-detail-description">Descripcion:{product.description}</p>
                                <p className="product-detail-title">{product.name}</p>
                                <p className="product-detail-price small">
                                    <span>${product.price}</span>/<b>Descuento:{product.discount}%off</b>
                                </p>
                                <p className="product-detail-brand">Marca:{product.brand}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>


            </div>


        



    );
}

export default Detail;