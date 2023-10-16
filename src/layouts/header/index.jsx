import React from "react";
import "./index.scss";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link href={"/"}>
            <FontAwesomeIcon icon={faAsterisk} />
            <h2>Shahriyar</h2>
          </Link>
        </div>
        <nav>
          <div>
            <Link href={"/"}>Home</Link>
            <span></span>
          </div>
          <div>
            <Link href={"/about"}>About</Link>
            <span></span>
          </div>
          <div>
            <Link href={"/resume"}>Resume</Link>
            <span></span>
          </div>
          <div>
            <Link href={"/services"}>Services</Link>
            <span></span>
          </div>
          <div>
            <Link href={"/skills"}>Skills</Link>
            <span></span>
          </div>
          <div>
            <Link href={"/projects"}>Projects</Link>
            <span></span>
          </div>
          <div>
            <Link href={"/blog"}>Blog</Link>
            <span></span>
          </div>
          <div>
            <Link href={"/contact"}>Contact</Link>
            <span></span>
          </div>
        </nav>

        <div className="hamburgerMenu">
          <FontAwesomeIcon icon={faBarsStaggered} />
        </div>
      </div>
    </header>
  );
};

export default Header;
