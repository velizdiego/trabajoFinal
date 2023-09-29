const Form = (props) => {
    return ( 
        <div className={props.icon}>
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <h1 className="text-center mb-4">Formulario de Contacto</h1>
                                <form action="/enviar-mensaje" method="POST">
                                    <div className="mb-3">
                                        <label htmlFor="nombre" className="form-label">Nombre:</label>
                                        <input type="text" className="form-control" id="nombre" name="nombre" required />
                                    </div><br />
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                                        <input type="email" className="form-control" id="email" name="email" required />
                                    </div><br />
                                    <div className="mb-3">
                                        <label htmlFor="mensaje" className="form-label">Mensaje:</label>
                                        <textarea className="form-control" id="mensaje" name="mensaje" rows={4} required defaultValue={""} />
                                    </div><br />
                                    <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="form-content">
                    </div>
                </div>
              
     );
}
 
export default Form;