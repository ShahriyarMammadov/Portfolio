import React from "react";
import "./index.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faAngleRight,
  faEnvelope,
  faAsterisk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div id="footer" className="container">
        <div className="logo">
          <Link href={"/"}>
            <FontAwesomeIcon icon={faAsterisk} />
            <h2>Shahriyar</h2>
          </Link>
          <div className="quickLink">
            <h4>Quick Link</h4>
            <nav>
              <Link href={"/service"}>Service</Link>
              <Link href={"/projects"}>Projects</Link>
              <Link href={"/pricing"}>Pricing</Link>
              <Link href={"/fags"}>Fags</Link>
              <Link href={"/contact"}>Contact</Link>
            </nav>

            <div className="mailSignUp">
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" placeholder="Email Address" />
              <button>
                Sign Up <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>
        </div>

        <div className="address">
          <h4>Address</h4>
          <div className="navigate">
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>55 Main Street, 2nd block, New York City</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:shahriyarmammadov16@gmail.com">
                shahriyarmammadov16@gmail.com
              </a>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+994503134473">+994 (50) 313 4473</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
