

const Form = (props) => {
  


    return (
        <div className={props.icon}>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h1 className="text-center mb-4">Registro</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre:</label>
                                <input type="text"  id="nombre" name="nombre" required />
                            
                            </div><br />
                            <div className="mb-3">
                                <label htmlFor="apellido" className="form-label">Apellido</label>
                                <input type="text"  id="apellido" name="apellido" required />
                                
                            </div><br />
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" 
                                    id="email" name="email" required />
                                
                            </div><br />
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label"> Password</label>
                                <input type="password" id="password" name="password" required
                                   
                                />
                              
                            </div><br />
                            <div className="mb-3">
                                <label htmlFor="confirmarPassword" className="form-label">Confirmar Password</label>
                                <input type="password" id="password" name="password" required
                                 
                                />
                                
                            </div><br />
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="form-content">
            </div>
        </div>


    )
}

export default Form;
 