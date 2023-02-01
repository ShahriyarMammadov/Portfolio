import React from "react";
import "./index.scss";
import { NavLink, Link } from "react-router-dom";
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

  return (
    <div className="header">
      <div id="header">
        <div className="logo">
          <Link to={"/"}>
            <h1>Shahriyar</h1>
          </Link>
        </div>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <a href="#section2">About</a>
          <a href={"#section3"}>Projects</a>
          <a href={"#contact"}>Contact</a>
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
              <NavLink to={"/"} className="home">
                Home <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
              <a href={"#section2"} className="home">
                About <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href={"#section3"}>
                Projects <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href={"#contact"}>
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
