import "./App.css";
import { useState } from "react";
import Home from "./pages/Home/Home";
import LogIn from "./pages/Login/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Moon from "./images/icons/icons8-moon-50.png";
import Sun from "./images/icons/sun.png";
import ManageUsers from "./pages/Admin/user/user";
import ManageProducts from "./pages/Admin/product/product";
import Adminlayout from "./layout/AdminLayout/Adminlayout";
function App() {
  const [darkMode, setDarkMode] = useState(Moon);
  const [background, setBackground] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggleDarkMode = () => {
    if (background.color === "black") {
      setDarkMode(Sun);
      setBackground({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setDarkMode(Moon);
      setBackground({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  return (
    <>
      <div
        className={`app ${
          background.color === "black" ? "light-mode" : "dark-mode"
        }`}
        style={{
          color: background.color,
          backgroundColor: background.backgroundColor,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
              }
            >
              <Route index element={<Home />} />
              <Route path="products" element={<Product />} />
              <Route path="Cart" element={<Cart />} />
            </Route>
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="/admin" element={<Adminlayout />}>
              <Route index element={<ManageUsers />} />
              <Route path="/admin/products" element={<ManageProducts />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
