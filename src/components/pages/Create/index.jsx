

const Create = () => {
  
    
    return (
    
      
      <div className="section3">
       <div className="formulario-logo">

        <div className="box">
          <span Style="--i:1;"><img src="../images/logo lanis 2.jpg" alt="" /></span>
        </div>
      </div><div className="container mt-5">

         <form id="#create-product">
            <h3>crear Producto</h3>
            <div className="mb-3">
              <label for="nombre" className="form-label">Nombre del Producto</label>
              <input type="text" className="form-control" id="nombre" name="nombre" required />
            </div><div className="mb-3">
              <label for="price" className="form-label">Price</label>
              <input type="number" className="form-control" id="price" name="price" required />
            </div><div className="mb-3">
              <label for="descripcion" className="form-label">Descripcion del Producto</label>
              <textarea className="form-control" id="description" name="descripcion" required></textarea>
            </div><div className="mb-3">
              <label for="discount" className="form-label">Discount</label>
              <input type="text" className="form-control" id="discount" name="discount" required />
            </div><div className="mb-3">
            </div><div className="mb-3">
              <label for="brand" className="form-label">brand</label>
              <input type="text" className="form-control" id="brand" name="brand" required />
            </div>
            

            <button type="submit" className="btn btn-primary">Guardar Producto</button>
          </form>

         

        </div>
        </div>
                       
    
    

      
          
          );
        }
        
      
      
      
      
    
 
export default Create;