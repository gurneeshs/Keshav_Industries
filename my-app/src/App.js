import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
const Routing = ()=>{

  return(
    <Routes>
      <Route exact path="/" element = {<Home />} />
      <Route exact path="/Products" element = {<Products />} />
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
