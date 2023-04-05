import "./footer.css";
import logo from "../../assets/images/logo.svg";
import { Divider } from "../common/divider/Divider";
import flag from "../../assets/images/flag.svg";

const Footer = () => {
  return (
    <footer className="mt-80">
      <div className="container">
        <main className="footer-main">
          <div className="logo-main">
            <img src={logo} alt="dukaan-logo" className="logo-img" />
            <p>dukaan</p>
            <p>&reg;</p>
          </div>
          <div className="footer-section">
            <p>Contact</p>
            <p>FAQ's</p>
          </div>
          <div className="footer-section">
            <p>Tutorials</p>
            <p>Blogs</p>
          </div>
          <div className="footer-section">
            <p>Privacy</p>
            <p>Banned items</p>
          </div>
          <div className="footer-section">
            <p>About</p>
            <p>
              Jobs<span className="badge-count">3</span>
            </p>
          </div>
          <div className="footer-section">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Linkedin</p>
          </div>
        </main>
        <Divider />
        <div className="footer-end">
          <p className="end-item">Dukaan 2020, All rights reserved</p>
          <p className="end-item">
            Made in <img src={flag} alt="india-icon" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
