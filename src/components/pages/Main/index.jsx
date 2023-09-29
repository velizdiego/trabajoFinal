
import Productslist from "../../Productslist";
import { useEffect, useState } from "react";


 

const Main = () => {
  const [products,setProducts] = useState([]);
  const [offers,setOffers] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts= () => {
    fetch ("http://127.0.0.1:3003/products/list")
    .then (res => res.json())
    .then (products =>{
      setProducts(products);
      const offers =products.filter(product => product.discount > 15);
      setOffers(offers);
    })
  }
    useEffect(getProducts,[]);
    
    useEffect(() => {
      console.log("el componente se actualizo");
    }, [products])


  return (
    
    <><>



      {/* main */}
      <div className="section3">
        <div className="container">
          <div className="row">
            <div className="productos-logo">
              <div className="box">
                <span Style={"-i: 2"}><img src="/images/logo targe 2.jpg" alt="" /></span>
              </div>
            </div>
            <h2> Productos</h2>
            <p> <strong>¡aca podras ver nuestro catalgo!</strong></p>
            <p> <em> "hacemos envios a todo el pais" </em> </p>
          </div>


        </div>
      </div>

    </><><Productslist 
           title="" 
           cart={cart}
           setCart={setCart}
           products={products}
           offers={offers}
            /><div>
    </div></></>
          
         
    


  );
}

export default Main;