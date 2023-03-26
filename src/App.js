import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";

import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
import ScrollArrow from './containers/ScrollArrow';
import Cart from './containers/Cart';
import Login from './containers/Login';
import Register from './containers/Register';
import Homepage from './containers/HomePage';
function App() {
  return (
    <div className="App">
        <Header />
        <ScrollArrow />
        <Routes>
          <Route path='/product' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login/' element={<Login />} />
          <Route path='/register/' element={<Register />} />
          <Route path='/' element={<Homepage />} />
        </Routes>
     
    </div>
  );
}

export default App;
