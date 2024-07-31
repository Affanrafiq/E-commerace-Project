import React, { useEffect } from "react";
import "./Adminlayout.css";
import Cart from "../../images/icons/shopping-cart.png";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Adminlayout() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    let logedinUser = JSON.parse(localStorage.getItem("logedInUser"));
   if (logedinUser?.role !=="admin"){
    navigate("/login")
   }

  }, []);

  return (
    <div className="admin-wrapper">
      <div className="admin-head-wrapper">
        <div className="admin-first-buttons">
          <b id="admin-text"> AFFAN </b>
          <span> (admin) </span>
          <Link
            to={"/admin"}
            className={
              location.pathname === "/admin" ? "active-link" : "unactive-link"
            }
          >
            <b> USER </b>
          </Link>
          <Link
            to={"/admin/products"}
            className={
              location.pathname === "/admin/products"
                ? "active-link"
                : "unactive-link"
            }
          >
            {" "}
            <b> PRODUCT </b>{" "}
          </Link>
        </div>
        <div className="admin-last-buttons">
          <Link to={"/login"}>
            {" "}
            <b> LOGOUT </b>
          </Link>
          <img src={Cart} alt="cartimage" />
          <span>0</span>
        </div>
      </div>
      <section className="admin-section">
        <Outlet />
      </section>
    </div>
  );
}
