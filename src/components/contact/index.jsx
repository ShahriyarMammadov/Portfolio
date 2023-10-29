"use client";
import React, { useState } from "react";
import "./index.scss";
import styles from "../../app/page.module.scss";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { message } from "antd";

const ContactPage = () => {
  const { TextArea } = Input;
  const [messageText, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");

  var templateParams = {
    fullName: fullName,
    emailAddress: emailAddress,
    phoneNumber: phoneNumber,
    subject: subject,
    message: messageText,
  };

  const handleSendMessage = (e) => {
    try {
      e.preventDefault();
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
            message.success("Thank You 😘");
          },
          function (error) {
            console.log("FAILED...", error);
            message.error(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="contactPage">
      <div className={styles.container} id="container">
        <div
          className="left"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className={styles.sectionName}>
            <h5>Get In Touch</h5>
          </div>

          <h1>
            Let’s Talk For your <span>Next Projects</span>
          </h1>
          <p>
            Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
            inventore veritatis
          </p>

          <div className="checkAbout">
            <div className="check">
              <div className="icon">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="text">5+ Years Of Experience</div>
            </div>
            <div className="check">
              <div className="icon">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="text">Professional Web Developer</div>
            </div>
          </div>
        </div>

        <div className="rightInputs">
          <form action="">
            <div className="formDiv">
              <div data-aos="fade-right">
                <label htmlFor="fullName">Full Name</label>
                <Input
                  id="fullName"
                  size="large"
                  placeholder="Your Full Name"
                  prefix={<UserOutlined />}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                />
              </div>
              <div data-aos="fade-left">
                <label htmlFor="email">Email Address</label>
                <Input
                  id="email"
                  size="large"
                  placeholder="support@gmail.com"
                  prefix={<MailOutlined />}
                  onChange={(e) => {
                    setEmailAddress(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="formDiv">
              <div data-aos="fade-right">
                <label htmlFor="phoneNumber">Phone Number</label>
                <Input
                  id="phoneNumber"
                  size="large"
                  placeholder="Your Phone Number"
                  prefix={<PhoneOutlined />}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
              <div data-aos="fade-left">
                <label htmlFor="subject">Subject</label>
                <Input
                  id="subject"
                  size="large"
                  placeholder="Subject"
                  prefix={<PaperClipOutlined />}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="textArea" data-aos="flip-up">
              <label htmlFor="message">Message</label>
              <TextArea
                id="message"
                value={messageText}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write Message"
                allowClear
                showCount
                maxLength={100}
                autoSize={{
                  minRows: 3,
                  maxRows: 5,
                }}
              />
            </div>

            <button
              onClick={(e) => {
                handleSendMessage(e);
              }}
            >
              Send Us Message <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
