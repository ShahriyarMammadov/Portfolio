import React, { useRef, useState } from "react";
import "./index.scss";
import emailjs from "@emailjs/browser";
import messageGif from "../../images/message.gif";

const ContactComponent = () => {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(1);
    emailjs
      .sendForm(
        "service_mv8luv8",
        "template_dbol2me",
        form.current,
        "yBlJtI3RX3LO5fbXF"
      )
      .then(
        (result) => {
          setMessage(true);
          setTimeout(() => {
            setMessage(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contactForm">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" />
        <input type="email" name="user_email" placeholder="Email" />
        <textarea name="message" placeholder="Message . . . ." />
        <button type="submit" className="button-85" value="Send">
          {message === 1 ? (
            <img
              src={messageGif}
              alt="messageSend"
              className="sendingAnimated"
            />
          ) : message ? (
            "Thank You"
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactComponent;
