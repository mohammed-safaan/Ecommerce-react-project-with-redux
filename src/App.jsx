import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About";
import Page404 from "./components/Page404";
import MainNav from "./components/MainNav";
import { Navigate, Route, Routes } from "react-router-dom";
import CartPage from "./components/Cart/CartPage";

function App() {

  return (
    <div className="App">
      <MainNav/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/cartpage" element={<CartPage/>} />
        <Route path="*" element={<Page404/>} />
      </Routes>
    </div>
  );
}

export default App;
