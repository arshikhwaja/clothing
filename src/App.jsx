import React from "react";
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}
export default App;