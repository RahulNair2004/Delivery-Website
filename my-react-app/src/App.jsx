// src/App.jsx
import React, { useState } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"; // Import as default export
import { Cart } from "./pages/Cart/Cart";
import { PlaceOrder } from "./pages/PlaceHolder/PlaceOrder";
import Footer from "./Footer/Footer";
import LoginPopUp from "./components/LoginPage/LoginPopUp";

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopUp/>:<></>}
    <div className="App">
      <NavBar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
 </> 
 );
};

export default App;
