import CardsProducts from "./CardsProducts";

function Productslist({ products, setCart }) {
    return (
        <> <div className="container">
            <div className="row">
                <div className="col">
                    <div className=" mb-3" Style="max-width: 40rem;">

                        {products.map((product) => (
                            <CardsProducts
                                key={product._id}
                                product={product}
                                setCart={setCart} />
                        ))}

                        <div />
                    </div>
                </div>
            </div>
        </div>

        </>

    );
}
export default Productslist;