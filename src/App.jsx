import "./App.css";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { CartProvider } from "./MyContext";
import ProductDetail from "./components/Productlisting/ProductDetail";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./components/Categories/Categories";
import AllCategory from "./components/Categories/AllCategory";
import Table from "./components/Categories/Table";
import Chair from "./components/Categories/Chair";
import Sofa from "./components/Categories/Sofa";
import Lamps from "./components/Categories/Lamps";
import CartModal from "./UI/CartModal";
import { useState } from "react";

function App() {
  const [cartisShown,setCartisShown] = useState(false);

  function ShowCartHandler(){
    setCartisShown(true)
  }

  function HideCartHandler(){
    setCartisShown(false)
  }
  

  return (
    <Router>
      <CartProvider>
        {cartisShown && <CartModal onCloseClick={HideCartHandler}/>}
        <Navbar onClicked={ShowCartHandler}/>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="categories/product/:id" element={<Categories />}>
            <Route path="allcategory" element={<AllCategory />} />
            <Route path="chairs" element={<Chair />} />
            <Route path="table" element={<Table />} />
            <Route path="sofa" element={<Sofa />} />
            <Route path="lamps" element={<Lamps />} />
          </Route>
          <Route path="product/:id" element={<ProductDetail />} />

        </Routes>
        <Outlet />
    </CartProvider>
    </Router>  
    
  )
}

export default App
