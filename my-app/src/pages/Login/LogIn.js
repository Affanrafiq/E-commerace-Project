import "./LogIn.css";
import Myimage from "../../images/icons/eyeIcon.png";
import Myimage2 from "../../images/icons/picture.jpg";
import { useState } from "react";
import { users } from "../../utils/data";
import { useNavigate } from "react-router-dom";
export default function LogIn() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const logedInUser = users.find(
      (users) =>
        users.email === loginData.email && users.password === loginData.password
    );
    if (logedInUser) {
      localStorage.setItem("logedInUser", JSON.stringify(logedInUser));
      navigate(logedInUser.role === "admin" ? "/admin" : "/products");
      setError(null);
    } else {
      setError("wrong email or passowrd");
    }
  };

  return (
    <>
      <div className="LogIn-wrapper">
        <img src={Myimage2} alt="image111111" id="bg-image" />
        <form>
          <h5>Sign In</h5>

          <div style={{ color: "red" }}>{error}</div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <input
              type={showPassword ? "password" : "text"}
              placeholder="Enter Password"
              maxLength={25}
              name="password"
              onChange={handleOnChange}
            />
            <img
              src={Myimage}
              alt="eyeIcon.png"
              onClick={handlePassword}
              className="EYE"
            />
          </div>
          <button className="button" type="button" onClick={handleLogin}>
            log in
          </button>
        </form>
      </div>
    </>
  );
}
