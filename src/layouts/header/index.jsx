"use client";
import React, { useEffect, useState } from "react";
import "./index.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { Button, Drawer, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import emailjs from "@emailjs/browser";
import {
  faChevronRight,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmail] = useState("");
  const [endMessage, setEndMessage] = useState(false);

  const [loading, setLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

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

  var templateParams = {
    fullName: fullName,
    emailAddress: emailAddress,
    message: messageText,
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    try {
      if (
        fullName.length < 2 ||
        messageText.length < 4 ||
        emailAddress.length < 10
      ) {
        messageApi.open({
          type: "error",
          content: "Please Fill in The Boxes Completely",
        });
      } else {
        setLoading(true);

        emailjs
          .send(
            "service_8545699",
            "template_dbol2me",
            templateParams,
            "yBlJtI3RX3LO5fbXF"
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              message.success(
                "Thank you, I will get back to you as soon as possible 😘"
              );
              setLoading(false);
              setEndMessage(true);
            },
            function (error) {
              console.log("FAILED...", error);
              message.error(error);
              setLoading(false);
            }
          );
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className={"container"}>
        {contextHolder}
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
            <Link href={"/#aboutMe"}>About</Link>
            <span></span>
          </div>
          <div>
            <Link href={"/#resume"}>Resume</Link>
            <span></span>
          </div>
          <div>
            <Link href={"/#popularService"}>Services</Link>
            <span></span>
          </div>
          <div>
            <Link href={"/#skills"}>Skills</Link>
            <span></span>
          </div>
          <div>
            <Link href={"/#latestWorks"}>Projects</Link>
            <span></span>
          </div>
          <div>
            <Link href={"/#latestBlogAndNewsPage"}>Blog</Link>
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
      >
        <Link
          href={"/#about"}
          onClick={onClose}
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
          href={"/#resume"}
          onClick={onClose}
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
          href={"/#popularService"}
          onClick={onClose}
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
          href={"/#skills"}
          onClick={onClose}
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
          href={"/#latestWorks"}
          onClick={onClose}
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
          href={"/#latestBlogAndNewsPage"}
          onClick={onClose}
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
          onClick={onClose}
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
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
        <Input
          placeholder="Email Address"
          style={{
            backgroundColor: "#1f1f1f",
            color: "rgba(255, 255, 255, 0.65)",
            fontWeight: "600",
          }}
          onChange={(e) => {
            setEmail(e.target.value);
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
          onChange={(e) => {
            setMessageText(e.target.value);
          }}
        />
        <Button
          type="dashed"
          onClick={(e) => {
            handleSendMessage(e);
          }}
          disabled={endMessage || loading}
          style={{ color: "white" }}
        >
          {loading ? (
            <>
              Sending... <FontAwesomeIcon icon={faPaperPlane} />
            </>
          ) : endMessage ? (
            "Thank You 😘"
          ) : (
            <>
              Send <FontAwesomeIcon icon={faChevronRight} />
            </>
          )}
        </Button>
      </Drawer>
    </header>
  );
};

export default Header;
