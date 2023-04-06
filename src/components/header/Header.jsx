import logo from "../../assets/images/logo.svg";
import "./header.css";
import { Button } from "../common/button/Button";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav-container container">
        <div className="nav-align logo-main">
          <img src={logo} alt="dukaan-logo" className="logo-img" />
          <p className="logo-text">dukaan &reg;</p>
        </div>
        <div className="nav-align gap-1">
          <p>Sign In</p>
          <button className="btn-fixed">Dukaan for PC</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
