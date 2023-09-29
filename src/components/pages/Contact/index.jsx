import Form from "./Form";


const Contac = () => {
    return ( 
        
        <><div className="contacto-logo">
            <div className="box">
                <span Style={"-i: 1"}><img src="/images/stark fondo 5.jpg" alt="" /></span>
            </div>
        </div><section>
            <Form
              icon="contacto-formulario"
                
                />
                  <h3> Nuestras redes </h3><br />
                <div className="contacto-redes">
                
                    <i className="fa-brands fa-facebook" />
                    <a href="https://facebook.com">facebook</a><br />
                    <i className="fa-brands fa-instagram" />
                    <a href="https://instagram.com">instagram</a><br />
                    <i className="fa-brands fa-twitter" />
                    <a href="https://twitter.com">twitter</a><br />
                   
                </div>
            </section></>
    
      );
    }
    

        
 
export default Contac;