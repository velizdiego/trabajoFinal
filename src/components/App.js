import { Switch, Route } from "react-router-dom";
import Header from "./Header/assets";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Footer from "./Footer";
import Create from "./pages/Create";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import Result from "./pages/Result";
import "../assets/css/style.css";

function App() {
  return (

    <>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/main" component={Main} />
        <Route path="/create" component={Create} />
        <Route path="/register" component={Register} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/result" component={Result} />
      </Switch>

      <Footer />

    </>
  );
}

export default App;


    
      
      
      


    
   
  




