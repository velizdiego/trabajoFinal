import { Link } from "react-router-dom";

const Header = () => {

  
    return (
        
            <><header className="main-header" />
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand"><span className="tex-primary">GAME OF </span>STORE</Link>
          <button className="navbar-toogler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarS" aria-controls="navbarS" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toogler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarS">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" />
          
                  <li class="nav-item">
                    <Link to="/" class="nav-link">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/productos" class="nav-link">Productos</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/contacto" class="nav-link">Contacto</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/registro" class="nav-link">Registro</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/detail" class="nav-link">Detalle</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/result" class="nav-link">Resultado</Link>
                  </li>
                </div>

              </div>
            
          
        
    
      </nav></>
      
      

            );
            }
            export default Header;
           


