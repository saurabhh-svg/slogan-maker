import React from "react";
import logo from "../../assets/images/logo.svg";
import "./header.css";
import Button from "../common/button/Button";
const Header = () => {
  return (
    <div className="header">
      <nav className="nav-container container">
        <div className="nav-align">
          <span className="logo-main">
            <img src={logo} alt="dukaan-logo" className="logo-img" />
          </span>
          <span className="logo-main">
            <p>Dukaan</p>
          </span>
        </div>
        <div className="nav-align gap-1">
          <p>Signin</p>
          <Button text={"Dukaan for PC"} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
