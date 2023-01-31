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
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/Projects"}>Projects</NavLink>
          <NavLink to={"/Contact"}>Contact</NavLink>
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
              <NavLink to={"/about"} className="home">
                About <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
              <NavLink to={"/Projects"}>
                Projects <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
              <NavLink to={"/Contact"}>
                Contact <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
};

export default Header;
