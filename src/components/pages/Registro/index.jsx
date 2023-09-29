const Registro = () => {
    return (
        
            <div>
             
              <div className="formulario-logo">
                <div className="box">
                  <span Style={"-i: 1"}><img src="/images/logo lanis 2.jpg" alt="" /></span>
                </div> 
              </div>                          
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                  <label htmlFor="validationCustom01" className="form-label"> Nombre</label>
                  <input type="text" className="form-control" id="validationCustom01" defaultValue required />
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationCustom02" className="form-label">Apellido</label>
                  <input type="text" className="form-control" id="validationCustom02" defaultValue required />
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationCustomUsername" className="form-label">Usuario</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationCustom03" className="form-label">Ciudad</label>
                  <input type="text" className="form-control" id="validationCustom03" required />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="validationCustom05" className="form-label">Zip</label>
                  <input type="text" className="form-control" id="validationCustom05" required />
                  <div className="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                    <label className="form-check-label" htmlFor="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
              </form>
            </div>
          )
        }
      
    
 
export default Registro;