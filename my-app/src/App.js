import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import K_M_M from "./Components/Products/Kash_Spices/kash_magic_masala_50g";
import AddProduct from "./Components/AddProduct/addProduct";
import Cancellation_Policy from "./Components/Policy/Cancellation_Policy";
import Privacy_Policy from "./Components/Policy/Privacy_Policy";
import Returns_Refunds_and_Replacement_Policy from "./Components/Policy/Returns_Refunds_and_Replacement_Policy";
import Terms_and_Conditions from "./Components/Policy/Terms_and_Conditions";
const Routing = ()=>{

  return(
    <Routes>
      <Route exact path="/" element = {<Home />} />
      <Route exact path="/Products" element = {<Products />} />
      <Route exact path="/kmm" element = {<K_M_M/>}/>
      <Route exact path="/addProduct" element = {<AddProduct/>}/>
      <Route exact path="/terms" element = {<Terms_and_Conditions/>}/>
      <Route exact path="/returns" element = {<Returns_Refunds_and_Replacement_Policy/>}/>
      <Route exact path="/privacy" element = {<Privacy_Policy/>}/>
      <Route exact path="/cancellation" element = {<Cancellation_Policy/>}/>

    </Routes>
  )
}


function App() {
  return ( //ho gya sahi
    <BrowserRouter>
      <Routing />      
    </BrowserRouter>  );
}

export default App;
