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
const Routing = ()=>{

  return(
    <Routes>
      <Route exact path="/" element = {<Home />} />
      <Route exact path="/Products" element = {<Products />} />
      <Route exact path="/kmm" element = {<K_M_M/>}/>
      <Route exact path="/addProduct" element = {<AddProduct/>}/>
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
