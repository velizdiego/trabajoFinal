import CardsProducts from "./CardsProducts";



function Productslist({ title, products,cart, setCart }) {
    return (
        <> <div className="container products-wrapper">
            <div className="row">
            <div className="card-body">
                <div className="col-12">
                <h5 className="card-title">{title}={cart}</h5>
                </div>
            
                   

                    {products.map((product) => (
                        <CardsProducts 
                        key={product._id} 
                        product={product}
                        setCart={setCart}
                         />
                    ))}
                     </div>
           </div>
           </div>
           
          </>
    );
}
export default Productslist;