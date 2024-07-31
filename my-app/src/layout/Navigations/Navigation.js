import "./Navigation.css";
import { Link } from "react-router-dom";
import Cart from "../../images/icons/shopping-cart.png";

export default function Navigation(props) {
  const user = JSON.parse(localStorage.getItem("logedInUser"));
  const handleLogout = () => {
    localStorage.removeItem("logedInUser");
  };
  return (
    <>
      <div className="Deal">SuperDeal ! Free Shipping on Order over $50!</div>
      <div className="Navigation-wrapper">
        <span className="header">
          <b>
            <i>AR.STORE</i>
          </b>
        </span>
        <div className="buttons">
          <Link to={"/"} className="button1">
            <b>HOME </b>
          </Link>
          <Link to="products" className="button1">
            <b> PRODUCTS </b>
          </Link>
          <Link to={"/login"} className="button1" onClick={handleLogout}>
            {user ? <b>LOGOUT</b> : <b>LOGIN</b>}
          </Link>

          <Link to="Cart" className="Link-cart-image-wrapper">
            <img src={Cart} alt="cartimage" id="Link-cart-image" />
            <span>0</span>
          </Link>

          <button className="moon-sun" onClick={props.toggleDarkMode}>
            <img
              src={props.darkMode}
              alt="Handle Dark Mode"
              id="moon-sunimage"
            />
          </button>
        </div>
      </div>
    </>
  );
}
