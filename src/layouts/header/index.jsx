"use client";
import React, { useEffect, useState } from "react";
import "./index.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { Button, Drawer, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClose = () => {
    setToggle(false);
  };

  const onCloseDrawerBottom = () => {
    setOpen(false);
  };

  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className={"container"}>
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
        {/* HAMBURGER MENU */}
        <div
          className={toggle ? "conta change" : "conta"}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        {/* HAMBURGER MENU */}

        <div
          className="hamburgerMenu"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <FontAwesomeIcon icon={faBarsStaggered} />
        </div>
      </div>

      {/* DRAWER LEFT */}
      <Drawer
        title="Shahriyar Mammadov"
        placement={"left"}
        width={350}
        onClose={onClose}
        open={toggle}
        style={{
          backgroundColor: "#131313",
        }}
        // extra={}
      >
        <Link
          href={"/about"}
          style={{
            color: "#C9F31D",
            fontWeight: "700",
            fontSize: "18px",
            display: "block",
          }}
        >
          About
        </Link>
        <Link
          href={"/resume"}
          style={{
            color: "#C9F31D",
            padding: "20px 0",
            fontWeight: "700",
            fontSize: "18px",
            display: "block",
          }}
        >
          Resume
        </Link>
        <Link
          href={"/services"}
          style={{
            color: "#C9F31D",
            fontWeight: "700",
            fontSize: "18px",
            display: "block",
          }}
        >
          Services
        </Link>
        <Link
          href={"/skills"}
          style={{
            color: "#C9F31D",
            padding: "20px 0",
            fontWeight: "700",
            fontSize: "18px",
            display: "block",
          }}
        >
          Skills
        </Link>
        <Link
          href={"/projects"}
          style={{
            color: "#C9F31D",
            fontWeight: "700",
            fontSize: "18px",
            display: "block",
          }}
        >
          Projects
        </Link>
        <Link
          href={"/blog"}
          style={{
            color: "#C9F31D",
            fontWeight: "700",
            fontSize: "18px",
            padding: "20px 0",
            display: "block",
          }}
        >
          Blog
        </Link>
        <Link
          href={"/contact"}
          style={{
            color: "#C9F31D",
            fontWeight: "700",
            fontSize: "18px",
            display: "block",
          }}
        >
          Contact
        </Link>
      </Drawer>

      {/* DRAWER BOTTOM */}
      <Drawer
        title="Get Appointment"
        placement={"bottom"}
        width={350}
        onClose={onCloseDrawerBottom}
        open={open}
        style={{
          backgroundColor: "#1f1f1f",
          color: "white",
        }}
        // extra={}
      >
        <Input
          placeholder="Name"
          style={{
            backgroundColor: "#1f1f1f",
            color: "rgba(255, 255, 255, 0.65)",
            fontWeight: "600",
          }}
        />
        <Input
          placeholder="Email Address"
          style={{
            backgroundColor: "#1f1f1f",
            color: "rgba(255, 255, 255, 0.65)",
            fontWeight: "600",
          }}
        />
        <TextArea
          // onChange={(e) => setValue(e.target.value)}
          placeholder="Message"
          style={{
            backgroundColor: "#1f1f1f",
            color: "rgba(255, 255, 255, 0.65)",
            fontWeight: "600",
          }}
          autoSize={{
            minRows: 3,
            maxRows: 5,
          }}
        />
        <Button type="dashed">Submit</Button>
      </Drawer>
    </header>
  );
};

export default Header;
