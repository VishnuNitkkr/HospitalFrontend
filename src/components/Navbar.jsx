import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    setShow(!show)
    await axios
      .get(
        "https://hospitalbackend-ykh8.onrender.com/api/v1/user/patient/logout",
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":'https://hospitalbackend-ykh8.onrender.com',
            "Access-Control-Allow-Methods":"GET,POST,PUT,DELETE"
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
        res.clearCookie("patientToken");
        navigateTo('/login')
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const gotoLogin = () => {
    setShow(!show)
    navigateTo("/login");
  };

  

  return (
    <nav>
      <div className="logo">
        {" "}
        <img src="/logo.png" alt="logo" className="logo-img" />
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to={"/"} onClick={() => setShow(!show)}>HOME</Link>
          <Link to={"/appointment"} onClick={() => setShow(!show)}>APPOINTMENTS</Link>
          <Link to={"/about"} onClick={() => setShow(!show)}>ABOUT US</Link>
        </div>
        <div>
        {isAuthenticated ? (
          <button className="logoutBtn btn" onClick={handleLogout}>
            LOGOUT
          </button>
        ) : (
          <button className="logoutBtn btn" onClick={gotoLogin}>
            LOGIN
          </button>
        )}
        <Link to="https://hospital-dashboard-taupe.vercel.app/" className="logoutBtn btn navLinks">Admin Dashboard</Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
