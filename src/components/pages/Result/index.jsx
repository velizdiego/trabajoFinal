import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Productslist from "../../Productslist";

const Result = () => {
    const [products,setProducts]=useState([]);
    //obtener informacion de la query
    // crear metodo para llamar  la appi
    // useEffect y useState para cargar el state de productos con la info de la api

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const word =query.get("word");
    //const imageUrl = (product) => `http://127.0.0.1:3003/images/${product.images}`
    const getProducts = () =>{
        fetch(`http://127.0.0.1:3003/products/buscar?name=${word}`)
        .then(res => res.json ())
        .then(data => setProducts(data) )
        .catch(error => console.log(error))
    }
    useEffect (getProducts, [word]);




    return ( 
        <>
       
        
       <div className="container mt-5">
        <div className="row">
          
            <div className="col-md-6">
               
                    
                    <Productslist
        title={`resultado de la busqueda de: ${word}`}
           products={products}
        />
                    
                </div>
            </div>

        </div>

    



</>
     );
}
 
export default Result;