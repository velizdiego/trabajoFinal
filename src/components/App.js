import { Switch, Route } from "react-router-dom";
import Header from "./Header/assets";
import Index from "./pages/Index";
import Main from "./pages/Main";
import Footer from "./Footer";
import Contac from "./pages/Contact";
import Registro from "./pages/Registro";
import Detail from "./pages/Detail";
import Result from "./pages/Result";
import "../assets/css/style.css";




function App() {
  return (
     
    <>
      <Header />
     
     <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/productos" component={Main}/>
        <Route path="/contacto" component={Contac}/>
        <Route path="/registro" component={Registro}/>
        <Route path="/detail/:id" component={Detail}/>
        <Route path="/result" component={Result}/>
       
        
        
     </Switch>
      
      
      <Footer />


    </>
   
  );
}


export default App;
