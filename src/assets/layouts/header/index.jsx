import React from "react";
import "./index.scss";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const location = useLocation();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Shahriyar Mammadov",
        text: "Shahriyar's Portfolio",
        url: "https://dazzling-fenglisu-d9353d.netlify.app/",
      });
    } else {
      alert("your browser don't support");
    }
  };

  return (
    <div className="header">
      <div id="header">
        <div className="logo">
          <Link to={"/"} onClick={scrollTop}>
            <h1>Shahriyar</h1>
          </Link>
        </div>
        <nav>
          <i
            className="fa-solid fa-share-from-square"
            onClick={handleShare}
          ></i>
          <Link to={"/"} onClick={scrollTop}>
            Home
          </Link>
          <a
            href={`/#section2`}
            className={location.hash === "#section2" ? "active" : ""}
          >
            About
          </a>
          <a
            href={"/#section3"}
            className={location.hash === "#section3" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href={"/#contact"}
            className={location.hash === "#contact" ? "active" : ""}
          >
            Contact
          </a>
        </nav>
        <i className="fa-solid fa-bars" onClick={onOpen}></i>
      </div>
      <>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="4px">
              Shahriyar Mammadov
            </DrawerHeader>
            <DrawerBody>
              <NavLink to={"/"} className="home" onClick={onClose}>
                Home <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
              <a href={"#section2"} className="home" onClick={onClose}>
                About <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href={"#section3"} onClick={onClose}>
                Projects <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href={"#contact"} onClick={onClose}>
                Contact <i className="fa-solid fa-arrow-right"></i>
              </a>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
};

export default Header;
