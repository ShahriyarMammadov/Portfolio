"use client";
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
  faHackerrank,
} from "@fortawesome/free-solid-svg-icons";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer>
      <div id="footer" className="container">
        <div className="logo">
          <div>
            <Link href={"/"}>
              <FontAwesomeIcon icon={faAsterisk} />
              <h2>Shahriyar</h2>
            </Link>

            <div className="socialIcons">
              <a
                href="https://www.facebook.com/profile.php?id=100008752201523"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookOutlined />
              </a>
              <a
                href="https://www.instagram.com/sehriyar_1234/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramOutlined />
              </a>
              <a
                href="https://www.linkedin.com/in/shahriyarmammadov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOutlined />
              </a>
              <a
                href="https://twitter.com/2002Shehriyar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterOutlined />
              </a>
              <a
                href="https://github.com/ShahriyarMammadov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubOutlined />
              </a>
            </div>
          </div>
          <div className="quickLink">
            <h4>Quick Link</h4>
            <nav>
              <Link href={"/#service"}>Service</Link>
              <Link href={"#popularService"}>Projects</Link>
              <Link href={"/#resume"}>Resume</Link>
              <Link href={"/#about"}>About</Link>
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
              <span>Azerbaijan, Baku, Khazar District</span>
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
