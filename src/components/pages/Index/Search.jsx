import { useRef } from "react";
import { useHistory } from "react-router-dom";

const Search = (props) => {
    //1. capturar el valor del elemento input(useRef)
    //2. Manejar el avento submit para obtener la info del input y enviarla a una nueva page
    //3. validar que loque este en le imput sea algo que sea buscar (mostrar mensaje de error)
    //4. utilizamos el hook useHistory para pader enviar la info a otra page (/results)
    //5. limpie la info del input una vez enviado a la otra page

    
    let keyword = useRef();
    let history = useHistory()
    const handleSubmint = (event) => {
        let word = keyword.current.value;
        event.preventDefault()
        if (word.length <= 3) {
            alert({
                text: "el minimo de caracteres es 3",
                icon: "error"

            });
        } else {
            keyword.current.value = "";
            history.push(`/result?word=${word}`)
        }
    }

    return (
        <>
            <div className="container mt-5" />
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h3 className={props.icon}>Buscar Producto</h3>
                    <form className="search-form" onSubmit={(e) => handleSubmint(e)}>
                        <div className="input-group mb-3">
                            <input type="text"
                                className="form-control"
                                id="producto"
                                name="producto"
                                ref={keyword}
                                placeholder="Nombre del producto"
                                required />

                            <div className="input-group-append">
                                <button className="btn btn-primary"
                                    type="submit">Buscar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
}

export default Search;