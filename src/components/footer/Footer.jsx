import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-media-text">
          Follow Us on Social Media
        </div>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
            <i className="bi bi-instagram" style={{ color: "red" }}></i>
          </div>
          <div className="footer-social-media-icon">
            <i className="bi bi-facebook" style={{ color: "#2980b9" }}></i>
          </div>
          <div className="footer-social-media-icon">
            <i className="bi bi-youtube" style={{ color: "red" }}></i>
          </div>
          <div className="footer-social-media-icon">
            <i className="bi bi-twitter" style={{ color: "skyblue" }}></i>
          </div>
          <div
            className="footer-social-media-icon"
            style={{ color: "darkblue" }}
          >
            <i className="bi bi-telegram"></i>
          </div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Uueful Links</h3>
          <ul className="footer-links">
            <Link to ="/" className="footer-link">Home</Link>
            <Link to= "/author" className="footer-link">Author</Link>
            <Link to = "/about" className="footer-link">About</Link>
            <Link to = "/contact" className="footer-link">Contact Us</Link>
            <Link to ="/register" className="footer-link">Register</Link>
          </ul>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact Information</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <i className="bi bi-geo-alt-fill">Cairo - Egypt</i>
            </div>
            <div className="footer-address-item">
              <i className="bi bi-telephone-fill">+2 - 010- 650 - 19 -583</i>
            </div>
            <div className="footer-address-item">
              <i className="bi bi-envelope-fill">info@gmail.com</i>
            </div>
          </div>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">About Us</h3>
          <p className="footer-discription">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
            tempora! Beatae repellat, maxime blanditiis reiciendis quidem
            dolorum? Dignissimos assumenda cum suscipit porro corrupti? Enim
            laudantium nesciunt, distinctio neque quae necessitatibus. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Possimus minima
            totam quia explicabo aliquam! Voluptates laborum exercitationem,
            numquam in, iste officiis et aperiam reiciendis ducimus ab, eligendi
            ipsam odit non!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
